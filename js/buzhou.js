var steps = $(".step");
var stepIndex = 0;

// 菜单相关
var proteins = $(".protein-container");
var protein_imgs = $(".protein-img");
var protein_descs = $(".protein");
var descs = [
    ["Beans", "Corn", "Farfalle", "otato", "Pasta","Peas","Rice"],
    ["Egg", "Cheese", "Chicken", "Fish", "Salmon","Shrimp","Tofu"],
    ["Broccoli", "Cabbage", "Carrot", "Cucumber", "Kale","Lettuce","Mushroom","Oinon","Pepper","Red Cabbage","Radish","Tomato"],
    ["Avocado", "Blueberry", "Coconut", "Kiwi", "Lemon","Mango"],
    ["Acorn", "Honey", "Mayonnaise", "Olive", "Peanut","Pepper","Pesto","Pickles","Vinaigrette"],
]

// 先加个id
for(var i = 0; i < 5; i++){
    var now = proteins[i]
    now.setAttribute("id", `protein_${i}`);//添加id
}



setStep(stepIndex);
$(".step-icon").click(function () {
    var me = this;
    stepIndex = $(me).parents(".step").index();
    setStep(stepIndex);
});


function setStep(stepIndex) {
    $(steps).removeClass("step-success");
    for (var i = 0; i <= stepIndex; i++) {
        var step = steps[i];
        if (i < stepIndex) {
            $(step).addClass("step-success");
        }
    }
    resetAnimate();
    setInterval(updateMenu, 500);
}


function clearSteps() {
    stepIndex = -1;
    setStep(stepIndex);
}


function addStep(addnum) {
    if (!addnum) { addnum = 1 }
    stepIndex += addnum;
    setStep(stepIndex);
}

function decStep(){
    if(stepIndex)
        stepIndex -= 1;
    setStep(stepIndex);
}

function resetAnimate(){
    for(var i = 0; i < 5; i++){
        proteins[i].setAttribute("class", "protein-container")
    }
}

function updateMenu(){
    var idx = stepIndex;
    for(var i = 0; i < 5; i++){
        //加动效
        proteins[i].setAttribute("class", "protein-container animate__animated animate__fadeIn")
        //改图片
        protein_imgs[i].setAttribute("src", "pic/diy/"+(idx+1)+"_"+(i+1)+".svg")
        //改描述
        protein_descs[i].innerHTML = descs[idx][i] 
    }
}