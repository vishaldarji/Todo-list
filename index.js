var a= document.getElementsByClassName("btn")[0]
var div1= document.getElementsByClassName("cardcontainer")[0]
// var b = "<div class=card>mydiv</div>"


a.addEventListener("click",clicked)

function clicked() {
    
    var div2 = document.createElement ("div");
    var Num=document.getElementById("name").value
var mail=document.getElementById("email").value

if (!Num || !mail) {
    alert("Invalid. Both name and email are required.");
} else if (/\d/.test(Num)) {
    alert("Invalid. Name field should not contain numbers.");
} 
    else{
    
    div2.className="newcard";
    div1.appendChild(div2);

    // div2.innerHTML="Vishal"


// div2.innerHTML+=Num
// div2.innerHTML+=mail

var nameElement = document.createElement("p");
    nameElement.innerHTML = Num;
    nameElement.className="ntext"

    var line=document.createElement("hr")
    line.className="hrr"
    
    var emailElement = document.createElement("p");
    emailElement.innerHTML = mail;

    emailElement.className="etext"

    div2.appendChild(nameElement);
    div2.appendChild(line);
    div2.appendChild(emailElement);

    

    var icon=document.createElement("button")
    icon.addEventListener("click",()=>deletebox(div2))
icon.className="del"
div2.appendChild(icon)
icon.innerHTML="<i class='fa fa-trash' aria-hidden='true'></i>"
    
}
}
  
function deletebox(div2)  {
    div2.style.display="none"
    
}
