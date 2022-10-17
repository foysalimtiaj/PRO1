const bars=document.getElementById("bars").addEventListener("click", addtry)
function addtry() {
    const x=document.getElementById("menu");
    if (x.className==="menu") {
        x.className+=" try";

    }
    else{
        x.className="menu";

    }
}