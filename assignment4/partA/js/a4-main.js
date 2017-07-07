var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

var filterDogs = function(){
  var target= {
    filter:"filterType",
    value:"dog",
  }
  loadTableWithFilters(target)
}
var filterCats = function(){
  var target= {
    filter:"filterType",
    value:"cat",
  }
  loadTableWithFilters(target)
}
var filterBirds = function(){
  var target= {
    filter:"filterType",
    value:"bird",
  }
  loadTableWithFilters(target)
}
var filter_zero_1 = function(){
  var target= {
    filter:"filterAge",
    filterAgeMin: 0,
    filterAgeMax: 1,
  }
  loadTableWithFilters(target)
}
var filter_1_3 = function(){
  var target= {
    filter:"filterAge",
    filterAgeMin: 1,
    filterAgeMax: 3,
  }
  loadTableWithFilters(target)
}
var filter_4_plus = function(){
  var target= {
    filter:"filterAge",
    filterAgeMin: 4,
    filterAgeMax: Number.MAX_VALUE,
  }
  loadTableWithFilters(target)
}
var filterAllPets = function(){
  var target= {
    filter: filterType,
    filterAgeMin: filterAgeMin,
    filterAgeMax: filterAgeMax,
  }
  loadTableWithFilters(target)
}
function loadTableWithFilters(target){
    var petArray = [];

    var petsContainer = document.querySelector("#main-table-body");

    if(target.filter =="" || !target.filter){
        petArray = petData;
        petsContainer.innerHTML = "";
    }else{
      if(target.filter == "filterType"){
        petData.map((pet)=>{
          if(target.value == pet.type){
            petArray.push(pet);
          }
          // if(filterAgeMin <= pet.age && pet.age <= filterAgeMax){
          //   petArray.push(pet);
          // }
        })
      }
      else if(target.filter == "filterAge"){
        petData.map((pet)=>{
          if(target.filterAgeMin <= pet.age && pet.age <= target.filterAgeMax){
            petArray.push(pet);
          }
        })
      }
      petsContainer.innerHTML = "";
    }

    petArray.map((pet,index)=>{

          var petRow = document.createElement('tr');


          var petColumn1 = document.createElement('td');
          var petPic = document.createElement('img');
          petPic.setAttribute("src",pet.image.src);
          petPic.setAttribute("alt",pet.name);
          petPic.setAttribute("width",120);
          petPic.setAttribute("height",160);
          petColumn1.appendChild(petPic);

          var petColumn2 = document.createElement('td');
          var petNameContainer = document.createElement('h4');
          var petName = document.createTextNode(pet.name);
          petNameContainer.appendChild(petName);

          var petDetailContainer = document.createElement('p');
          petDetailContainer.innerHTML = pet.description;

          var petAge = document.createElement('span');
          petAge.innerHTML = "Age: "+pet.age+" years old.";
          petColumn2.appendChild(petNameContainer);
          petColumn2.appendChild(petDetailContainer);
          petColumn2.appendChild(petAge);

          petRow.appendChild(petColumn1);
          petRow.appendChild(petColumn2);

          petsContainer.appendChild(petRow);
    })

}




window.onload = loadTableWithFilters;
