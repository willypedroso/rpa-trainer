let initialTime;
let finalTime;
let totalTime;
let getInitialTime = true

document.getElementsByTagName("input")[0].addEventListener("change", () => {
    if(getInitialTime){
        initialTime = new Date();
        getInitialTime = false;
    }
})

if(window.innerWidth < 1040){
    document.body.innerHTML = "<h1>You need a bigger screen to use this RPA Trainer.</h1>";
    document.body.style.padding = "60px";
}