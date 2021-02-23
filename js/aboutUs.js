var steps = $(".circle");
var stepIndex = 0;

setStep(stepIndex);

function setStep(stepIndex) {
    $(steps).removeClass("step-success");
    for (var i = 0; i <= stepIndex; i++) {
        var step = steps[i];
        if (i < stepIndex) {
            $(step).addClass("step-success");
        }
    }
}


function clearSteps() {
    stepIndex = -1;
    setStep(stepIndex);
}


function addStep(addnum) {
    if (!addnum) { addnum = 1 }
    stepIndex += addnum;
    if(stepIndex == 6)
        stepIndex = 0
    setStep(stepIndex);
    changeBackground()
}

pics = [ "url('pic/cc0banner1.jpg')","url('pic/aboutUs/banner.jpg')","url('pic/cc0banner2.jpg')","url('pic/cc0banner3.jpg')"]

function changeBackground(){
    target = document.getElementById("bg")
    target.style['background-image']= pics[stepIndex % 4]
}



setInterval(addStep, 5000)
