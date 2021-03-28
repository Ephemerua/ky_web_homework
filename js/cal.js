$(document).ready(function () {
    $('#dtVerticalScrollExample').DataTable({
    "scrollY": "200px",
    "scrollCollapse": true,
    "paging":   false,
    "ordering": false,
    "info":     false,
    "searching":false,

    });
    $('.dataTables_length').addClass('bs-select');
    });


var tr_template = $("#tr-template")[0]
var cal_table = $(".cal-table")[0]
var tbody = cal_table.tBodies[0]

cdic = {
    "vegetable":{"apple":30, "banana":40},
    "fruit":{"watermelon":50},
}

function table_add_line(category, name, num){
    var new_line = tr_template.cloneNode(true);
    new_line.getElementsByClassName("category")[0].innerText = category
    new_line.getElementsByClassName("name")[0].innerText = name
    new_line.getElementsByClassName("num")[0].innerText = num
    new_line.getElementsByClassName("c")[0].innerText = cdic[category][name]* num
    new_line.removeAttribute("hidden");
    tbody.appendChild(new_line);
}


function addTableLine(){
    var category = $(".calc-select")[0].selectedOptions[0].value
    var name = $(".calc-select")[1].selectedOptions[0].value
    var num = parseInt($(".calc-num")[0].value)
    table_add_line(category, name, num)
}

