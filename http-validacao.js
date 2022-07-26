function geraArrrayDeURLs(arrayLinks){
  return arrayLinks.map(objetoLink => Object.values(objetoLink).join());  
}

function validaURLs(arrayLinks){
  return geraArrrayDeURLs(arrayLinks);
}

module.exports = validaURLs;