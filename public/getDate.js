var date = new Date();
let month = date.getMonth() + 1;
for (var i = 1; i < 5; i++){
    
document.getElementById("date"+i).innerHTML = "As of " + month + "/" + date.getDate() + "/" + date.getFullYear();
}