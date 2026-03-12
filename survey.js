
const API = "https://script.google.com/macros/s/AKfycbxawnSi3C7AfxqTkSD47loxlK_8MlS3ZQbpNf1DNg36zA9c6UD8Jn4OQo-njbcSpxlHvA/exec";

document.getElementById("surveyForm").addEventListener("submit", function(e){

e.preventDefault();

const data = {
Timestamp:new Date().toISOString(),
Role:document.getElementById("Role").value,
Pledge:document.getElementById("Pledge").value,
Age:document.getElementById("Age").value,
ChildAge:document.getElementById("ChildAge").value,
GradeTaught:document.getElementById("GradeTaught").value,
FavoriteApp:document.getElementById("FavoriteApp").value,
DailyTime:document.getElementById("DailyTime").value,
ReactionToStopping:document.getElementById("ReactionToStopping").value,
PhantomVibration:document.getElementById("PhantomVibration").value,
PhysicalSymptoms:document.getElementById("PhysicalSymptoms").value,
BoredomSlider:document.getElementById("BoredomSlider").value,
FamilyArguments:document.getElementById("FamilyArguments").value,
ParentRoleModel:document.getElementById("ParentRoleModel").value,
AddictionSlider:document.getElementById("AddictionSlider").value,
Challenges:document.getElementById("Challenges").value,
AttentionSpan:document.getElementById("AttentionSpan").value,
SocialBreaks:document.getElementById("SocialBreaks").value,
EmotionalRegulation:document.getElementById("EmotionalRegulation").value,
DistractionSlider:document.getElementById("DistractionSlider").value,
Solutions:document.getElementById("Solutions").value
};

fetch(API,{
method:"POST",
body:JSON.stringify(data)
})
.then(res=>res.json())
.then(res=>{
alert("Thank you! Your research response has been recorded.");
})
.catch(err=>{
console.log(err);
alert("Submission failed.");
});

});
