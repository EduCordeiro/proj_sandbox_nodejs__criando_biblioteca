//const fetch = require("node-fetch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
  throw new Error(erro.message);
}

async function checaStatus(arrayURLs){
  // Promises assync await
  try{
    const arrayStatuss = await Promise
                              .all(arrayURLs
                              .map(async url => {
                                    const res = await fetch(url);
                                    return res.status;
    }));

    return arrayStatuss;
  }catch(erro){
    manejaErros(erro);
  }

}

function geraArrrayDeURLs(arrayLinks){
  return arrayLinks.map(objetoLink => Object
                                      .values(objetoLink)
                                      .join());  
}

async function validaURLs(arrayLinks){
  const links = geraArrrayDeURLs(arrayLinks);
  const statuslink = await checaStatus(links);
  console.log(arrayLinks, statuslink)

  //spread operator
  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status : statuslink[indice]
  }));

  return resultados;

}

module.exports = validaURLs;