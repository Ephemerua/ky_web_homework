//通过滚动事件设置header的背景色
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) { // use any value lower than the navbar height, [20] is an example

            $('.main-header').css({ // reducing the vertical padding from 25px to 10px
                'background':'rgb(255,255,255,0.8)',
            });

        } else {

            $('.main-header').css({ // reset the vertical padding to its initial value [25px]
                'background':'transparent',
            });

        }
    });

});


function showSidebar() {
    sidebar = document.getElementById("sidebar")
    sidebar.removeAttribute("hidden")
    sidebar.setAttribute("class","animate__animated animate__fadeInRight")
}

function hideSidebar() {
    sidebar = document.getElementById("sidebar")
    sidebar.setAttribute("class","animate__animated animate__fadeOutRight")
    // sidebar.setAttribute("hidden", "true")
    hideSignup()
}

function showSignup(){
    form = document.getElementById("login-form")
    form.setAttribute("hidden", "true")

    form = document.getElementById("signup-form")
    form.removeAttribute("hidden")
}

function hideSignup(){
    form = document.getElementById("signup-form")
    form.setAttribute("hidden", "true")

    form = document.getElementById("login-form")
    form.removeAttribute("hidden")
}