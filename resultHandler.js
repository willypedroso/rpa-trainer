const resultDiv = document.getElementById("result");

const openResults = (corrects) => {
    finalTime = new Date();
    totalTime = (finalTime-initialTime)/1000;
    form.display = "none";
    h3.display = "none";
    h5.display = "none";
    button1.style.display = "none";
    button2.display = "none";
    downloadBtn.display = "none"
    resultDiv.style.display = "flex";
    resultDiv.innerHTML = `<h1>You have completed all the forms</h1><h2>Correct fields ${corrects}/${30*4}</h2><h3>Task finished in ${totalTime} seconds.</h3><button onclick="restartForm()">Restart</button>`;
    resultsOn = true;
}

function restartForm(){
    window.location.reload(true);
}