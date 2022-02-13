var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = loadTableWithFilters;

function loadTableWithFilters() {
    document.getElementById("main-table-body").innerHTML = "";
    for (var i = 0; i < petData.length; i++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        var img = document.createElement("img");
        var span = document.createElement("span");
        var header = document.createElement("h4");
        var p = document.createElement("p");
        document.getElementById("main-table-body")
        if((filterType == "" || filterType == petData[i].type) && petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax){
            img.setAttribute("src", petData[i].image.src);
            img.setAttribute("alt", petData[i].image.alt);
            img.setAttribute("height", petData[i].image.height);
            img.setAttribute("width", petData[i].image.width);
            td.appendChild(img);
            tr.appendChild(td);
            var name = document.createTextNode(petData[i].name);
            header.appendChild(name);
            td2.appendChild(header);
            p.innerHTML = petData[i].description.toString();
            td2.appendChild(p);
            var age = document.createTextNode("Age: " + petData[i].age + " years old.");
            span.appendChild(age);
            td2.appendChild(span);
            tr.appendChild(td2);
            document.getElementById("main-table-body").appendChild(tr);
        }
    }
};

function filterDog() {
  filterType = "dog";
  loadTableWithFilters();
};

function filterCat() {
  filterType = "cat";
  loadTableWithFilters();
};

function filterBird() {
  filterType = "bird";
  loadTableWithFilters();
};

function filter_zero_1() {
  filterAgeMin = 0;
  filterAgeMax = 1;
  loadTableWithFilters();
};

function filter_1_3() {
  filterAgeMin = 1;
  filterAgeMax = 3;
  loadTableWithFilters();
};

function filter_4_plus() {
  filterAgeMin = 4;
  filterAgeMax = Number.MAX_VALUE;
  loadTableWithFilters();
};

function filterAllPets() {

  filterType = "";
  filterAgeMin = 0;
  filterAgeMax = Number.MAX_VALUE;
  loadTableWithFilters();
}
