const ready = document.querySelector(".ready_students");
console.log(ready);
const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");
console.log(wrapper)

let countries = ["Abduxoliqov Behruzbek 9-blue", "Aliyev Shahzodbek 9-blue", "Anvarov Ahmadjon 9-blue",
"Husanov Orifxon 9-blue","Ibrohimov Azizbek 9-blue","Ismoilova Omina 9-blue","Mo'ydinova Nozila 9-blue",
"Jo'raboyev Saidbek 9-blue","Rahimjonov Behruz 9-blue","Toxirov Mirzog'olib 9-blue","Umaraliyeva Sarvinoz 9-blue"];

function addCountry(selectedCountry) {
options.innerHTML = "";
countries.forEach(country => {
 let isSelected = country == selectedCountry ? "selected" : "";
 let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
 options.insertAdjacentHTML("beforeend", li);
});
} 
addCountry();

var students = []

function updateName(selectedLi) {
searchInp.value = "";
addCountry(selectedLi.innerText);
wrapper.classList.remove("active");
selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
let arr = [];
let searchWord = searchInp.value.toLowerCase();
arr = countries.filter(data => {
 return data.toLowerCase().startsWith(searchWord);
}).map(data => {
 let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
 return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
}).join("");
options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Kechirasiz, bunday o'quvchi topilmadi...</p>`;
});


selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
$('.button-77').click(function(){
    if(selectBtn.firstElementChild.innerText !== "O'quvchini tanlang..."){
      function validateRadios() {
        var radios = document.getElementsByName("select")
        for(var i = 0; i<radios.length; i++){
          if(radios[i].checked){
            var radio_checked = radios[i];
            console.log(radio_checked.value);
            
    students.push(selectBtn.firstElementChild.innerText +": "+ radio_checked.value);
    localStorage.setItem("students", students)
    countries.splice(countries.indexOf(selectBtn.firstElementChild.innerText), 1);
    selectBtn.firstElementChild.innerText = "O'quvchini tanlang...";
    addCountry();
          }
        }
    }
    
    validateRadios();
    console.log(countries);
    console.log(students);
    $('.alert').addClass("show");
    $('.alert').removeClass("hide");
    $('.alert').addClass("showAlert");
    setTimeout(function(){
      $('.alert').removeClass("show");
      $('.alert').addClass("hide");
    },2000);
  }});
  $('.close-btn').click(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
  });