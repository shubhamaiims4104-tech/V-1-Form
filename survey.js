
const API =
"https://script.google.com/macros/s/AKfycbxawnSi3C7AfxqTkSD47loxlK_8MlS3ZQbpNf1DNg36zA9c6UD8Jn4OQo-njbcSpxlHvA/exec";

document
.getElementById("surveyForm")
.addEventListener("submit", function(e){

e.preventDefault();

const data = {
name: document.getElementById("name").value,
screenTime: document.getElementById("screenTime").value,
anger: document.getElementById("anger").value,
sleep: document.getElementById("sleep").value
};

fetch(API,{
method:"POST",
body:JSON.stringify(data)
})
.then(res=>res.json())
.then(data=>{
alert("Thank you for participating!");
})
.catch(err=>{
console.log(err);
});

});
