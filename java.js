function barsLogo() {
    let x= document.getElementById("menuu");
    if (x.className==="menu") {
        x.className+=" try";
        
    }
    else{
        x.className="menu";
    }
}

let darkBtn=document.getElementById("darkBtn");
let lightBtn=document.getElementById("lightBtn");
let navBar=document.getElementById("navBar");
let navLogoi=document.getElementById("navLogo").children[1];
let navLogoimg=document.getElementById("navLogo").children[0];
let menu=document.getElementById("menuu").children[0].children[0].children[0];
let menu1=document.getElementById("menuu").children[0].children[1].children[0];
let menu2=document.getElementById("menuu").children[0].children[2].children[0];
let menu3=document.getElementById("menuu").children[0].children[3].children[0];
let body=document.body;
let hi=document.getElementById("item1").children[0];
let software=document.getElementById("item1").children[1];
darkBtn.addEventListener("click", dark)

lightBtn.addEventListener("click",light)





function dark() {
    
        darkBtn.style.display="none"; 
    
  if (darkBtn.style.display==="none") {
     lightBtn.style.display="block"; 
  }
  navBar.style.backgroundColor="black";
  navLogoi.style.color="white";
  navLogoimg.src="img/icon/user-with-sunglasses-and-goatee-beard-light-32px.png" ;
  menu.style.color="white";
  menu1.style.color="white";
  menu2.style.color="white";
  menu3.style.color="white";
  body.style.backgroundImage="linear-gradient(to top left, white,black)";
  body.style.backgroundRepeat="none";
  hi.style.color="white";
  software.style.color="white";
  
 }




function light() {
    
    lightBtn.style.display="none"; 
if (lightBtn.style.display==="none") {
 darkBtn.style.display="block"; 
}
navBar.style.backgroundColor="orange";
  navLogoi.style.color="black";
  navLogoimg.src="img/icon/user-with-sunglasses-32px.png";
  
  body.style.backgroundImage="linear-gradient(to top left, white,white)";
  hi.style.color="purple";
  software.style.color="purple";

}
