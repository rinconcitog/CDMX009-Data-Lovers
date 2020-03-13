


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
