insertcards//llamar la data con fetch
let rinckandmorty;


fetch('data/rickandmorty/rickandmorty.json')
.then(answer =>answer.json())
.then(answer =>{
  rinckandmorty = answer;
  imageRickandMorty(rinckandmorty);
} )


function imageRickandMorty (data){
  for (let i = 0; i < data.results.length ;i++) {
    document.getElementById("insertcards").innerHTML += `
    <div id="card">
              <div class="card-image" style="background-image: url(https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${data.results[i].id}.jpeg);">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                <h3> ${data.results[i].name}</h3>
                <p>Status: ${data.results[i].status}</p>
                <p>Specie: ${data.results[i].species}</p>
                <p>Gender: ${data.results[i].gender}</p>
                </p>
                </div>
              </div>
    </div>`
}
}
document.getElementById('link_todos').addEventListener('click', () => {
  document.getElementById('home').style.display = 'none';
  document.getElementById('todos').style.display = 'block';
});


//filtrar por genero


document.getElementById("genero_selector").addEventListener("change",() =>{
    document.getElementById("insertcards").innerHTML = " "

     let generos =document.getElementById("genero_selector").value
      for (let i = 0; i <window.rnmgo.filterData(rinckandmorty.results, generos).length ; i++){

       document.getElementById("insertcards").innerHTML += `
       <div id="card">
                 <div class="card-image" style="background-image: url(https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/${window.rnmgo.filterData(rinckandmorty.results, generos)[i].id}.jpeg);">
                 </div>
                 <div class="card-stacked">
                   <div class="card-content">
                   <h3> ${window.rnmgo.filterData(rinckandmorty.results, generos)[i].name}</h3>
                   <p>Status: ${window.rnmgo.filterData(rinckandmorty.results, generos)[i].status}</p>
                   <p>Specie: ${window.rnmgo.filterData(rinckandmorty.results, generos)[i].species}</p>
                   <p>Gender: ${window.rnmgo.filterData(rinckandmorty.results, generos)[i].gender}</p>
                   </p>
                   </div>
                 </div>
       </div>

     `;

   }
   });
