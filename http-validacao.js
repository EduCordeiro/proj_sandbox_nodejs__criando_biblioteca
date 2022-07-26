//const fetch = require("node-fetch");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checaStatus(arrayURLs){
  // Promises assync await
  const arrayStatuss = await Promise.all(arrayURLs.map(async url => {
    const res = await fetch(url);
    return res.status;
  }));

  return arrayStatuss;

}

function geraArrrayDeURLs(arrayLinks){
  return arrayLinks.map(objetoLink => Object.values(objetoLink).join());  
}

async function validaURLs(arrayLinks){
  const links = geraArrrayDeURLs(arrayLinks);
  const statuslink = await checaStatus(links);

return statuslink;

}

module.exports = validaURLs;