const formCountDisplay = document.getElementById("count");
let formCount = 1;
let data = [];

function submit(){
    for(i of document.getElementsByTagName("input")){
        data.push(i.value);
        i.value = "";
        randomizeIds();
    }
    formCount++;
    formCount <= 30 ? formCountDisplay.textContent = `${formCount}/30`: checkResult();
}

function randNum(){
    return Math.random().toFixed(13).toString().replace(".","").replace("0","");
}

function randomizeIds(){
    for(i of document.getElementsByTagName("input")){
        let randId = randNum();
        let randClass = randNum();
        i.id = randId;
        i.class = randClass;
    }
}

function checkResult(){
    let corrects = 0
    for(let i = 0; i<data.length; i++){
        if(data[i] == baseData[i]) corrects++;
    }
    openResults(corrects)
}