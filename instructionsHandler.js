const instructions = document.getElementById("instructions").style;
const form = document.getElementsByTagName("form")[0].style;
const h3 = document.getElementsByTagName("h3")[1].style;
const h5 = document.getElementsByTagName("h5")[0].style;
const button1 = document.getElementsByTagName("button")[0];
const button2 = document.getElementsByTagName("button")[1].style;
const downloadBtn = document.getElementById("download").style;
let instructionOn = false;
function openInstructions(){
    if(!instructionOn){
        form.display = "none";
        h3.display = "none";
        h5.display = "none";
        button1.textContent = "Back to main";
        button2.display = "none";
        downloadBtn.display = "none"
        instructions.display = "flex";
        instructionOn = true;
    } else {
        form.display = "flex";
        h3.display = "block";
        h5.display = "block";
        button1.textContent = "Instructions";
        button2.display = "block";
        downloadBtn.display = "block"
        instructions.display = "none";
        instructionOn = false;
    }
}