
target = $("#target")[0]
titles = ["aaa","bbb", "ccc"]
titleIndex = 0


function changeTitle(){
    target.innerHTML = titles[titleIndex]
    target.setAttribute("class", "test1")
    target.style.color = 'pink'
    titleIndex = titleIndex+1
}





