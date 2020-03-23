
//filtrar por generos

window.rnmgo = {
  filterData(data, condition)  {
    let tiposDeGenero;
    if (typeof condition === "string")
    {
      tiposDeGenero = data.filter(generos =>{
        return generos.gender.indexOf(condition) !== -1;
       })

    }
  return tiposDeGenero;
}
};

//filtrar por Especie

window.rnmgo2 = {
  filterData(data, condition)  {
    let tiposDeEspecie;
    if (typeof condition === "string")
    {
      tiposDeEspecie = data.filter(especie =>{
        return especie.species.indexOf(condition) !== -1;
       })

    }
  return tiposDeEspecie;
}
};

//filtrar por Estado

window.rnmgo3 = {
  filterData(data, condition)  {
    let tiposDeEstado;
    if (typeof condition === "string")
    {
      tiposDeEstado = data.filter(estado =>{
        return estado.status.indexOf(condition) !== -1;
       })

    }
  return tiposDeEstado;
}
};
