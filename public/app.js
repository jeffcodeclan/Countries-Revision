var countries = JSON.parse( localStorage.getItem( 'countries' ) ) || [];
console.log(countries);

window.onload = function() {
 var url = "https://restcountries.eu/rest/v1";
 var request = new XMLHttpRequest();

 // console.log(request);
 request.open("GET", url);
 request.onload = function() {
   if(request.status === 200){
     console.log("got the data");
     var jsonString = request.responseText;
     var countries = JSON.parse(jsonString);
     populateSelect(countries);
     bindEvents(countries);
   }
 };

 request.send(null);



};

 function bindEvents(countries){
   var selectBox = document.getElementById('country-select');
   selectBox.onchange = function(event){

     var countryInfo = document.getElementById('country-info');
     var li1 = document.createElement('li');
     var li2 = document.createElement('li');
     var li3 = document.createElement('li');
     li1.innerText = "Country Name: " + countries[event.target.value].name;
     li2.innerText = "Capital City: " + countries[event.target.value].capital;
     li3.innerText = "Population: " + countries[event.target.value].population + " people";
     countryInfo.appendChild(li1);
     countryInfo.appendChild(li2);
     countryInfo.appendChild(li3);

   };
 }


 function populateSelect(countries){
   var selectBox = document.getElementById('country-select');

   for (var i = 0; i < countries.length; i++) {
     var countryOption = document.createElement('option');
    countryOption.text = countries[i].name;
    countryOption.value = i;
    selectBox.appendChild(countryOption);
   }
 }
