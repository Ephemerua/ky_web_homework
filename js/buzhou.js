var steps = $(".step");
var stepIndex = 0;
var inStepIndex = 0;

// 菜单相关
var proteins = $(".protein-container");
var protein_imgs = $(".protein-img");
var protein_descs = $(".protein");
var protein_btns = $(".protein-btn");
var descs = [
    ["Beans", "Corn", "Farfalle", "Potato", "Pasta", "Peas", "Rice"],
    ["Egg", "Cheese", "Chicken", "Basa", "Salmon", "Shrimp", "Tofu"],
    ["Broccoli", "Cabbage", "Carrot", "Cucumber", "Kale", "Lettuce", "Mushroom", "Oinon", "Pepper", "RedCabbage", "Radish", "Tomato"],
    ["Avocado", "Blueberry", "Coconut", "Kiwi", "Lemon", "Mango"],
    ["Acorn", "Honey", "Mayonnaise", "Olive", "Peanut", "Pepper", "Pesto", "Pickles", "Vinaigrette"],
]
var protein_title = $("#hhh")[0];
var title = ["Grains and Pulses","Protein","Vegtables","Fruit","Sauces&Flavor"]

// 先加个id
for (var i = 0; i < 5; i++) {
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
    for (var i = 0; i <= stepIndex+1; i++) {
        var step = steps[i];
        if (i <= stepIndex) {
            $(step).addClass("step-success");
        }
    }
    inStepIndex = 0
    resetAnimate();
    setTimeout(updateMenu, 100);
}


function clearSteps() {
    stepIndex = -1;
    setStep(stepIndex);
}

//因为只有5个步骤，所以继续加step没有意义，修改了一下，对应的step圈圈也减少了一个
function addStep(addnum) {
    if (!addnum) { addnum = 1 }
    if (stepIndex < 4) {
        stepIndex += addnum;
        setStep(stepIndex);
    }
    jumpdetail()
}

function jumpdetail() {
    if (stepIndex == 4) {
        end_btn = $("#jumptode")[0]
        end_btn.setAttribute( "onclick", "location='detail.html'")
        end_btn.innerHTML = "Complete"
    }
}


function decStep() {
    if (stepIndex) {
        stepIndex -= 1;
        setStep(stepIndex);
    }
}

function resetAnimate() {
    for (var i = 0; i < 5; i++) {
        proteins[i].setAttribute("class", "protein-container")
    }
}

function updateMenu() {
    var startIndex = inStepIndex
    var idx = stepIndex;
    var stepItemNum = descs[idx].length
    var rightBtn = $("#rightBtn")[0]
    var leftBtn = $("#leftBtn")[0]

    protein_title.innerHTML = title[idx]

    //处理按钮
    if (startIndex + 5 >= stepItemNum) {
        //没有更多item了，隐藏右滑按钮
        rightBtn.style.visibility = "hidden"
    } else {
        rightBtn.style.visibility = ""
    }
    if (startIndex > 0) {
        //显示左滑的按钮
        leftBtn.style.visibility = ""
    } else {
        //隐藏
        leftBtn.style.visibility = "hidden"
    }

    for (var i = startIndex; i < startIndex + 5; i++) {
        // pIndex用来操作protein列表
        pIndex = i - startIndex
        if (i >= stepItemNum) {
            //如果这一步已经没有更多的选项了
            proteins[pIndex].style.visibility = "hidden"
            continue;
        } else {
            //显示
            proteins[pIndex].style.visibility = ""
        }
        //加动效
        proteins[pIndex].setAttribute("class", "protein-container animate__animated animate__swing")
        //改图片
        protein_imgs[pIndex].setAttribute("src", "pic/diy/" + (idx + 1) + "_" + (i + 1) + ".svg")
        //改描述
        protein_descs[pIndex].innerHTML = descs[idx][i]
        //改加号按钮的点击事件
        protein_btns[pIndex].setAttribute("onclick", "add_item("+stepIndex+","+i+",1)")

    }
}


function menuRight() {
    inStepIndex += 5
    resetAnimate();
    setTimeout(updateMenu, 100);
}

function menuLeft() {
    inStepIndex -= 5
    if(inStepIndex < 0)
        inStepIndex = 0
    resetAnimate();
    setTimeout(updateMenu, 100);
}