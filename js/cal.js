$(document).ready(function () {
    $('#dtVerticalScrollExample').DataTable({
    "scrollY": "240px",
    "scrollCollapse": true,
    "paging":   false,
    "ordering": false,
    "info":     false,
    "searching":false,
    "columnDefs": [
        { "width": "30%", "targets": 0 },
        { "width": "30%", "targets": 0 },
        { "width": "20%", "targets": 0 },
        { "width": "15%", "targets": 0 },
        { "width": "5%", "targets": 0 },

      ]

    });
    $('.dataTables_length').addClass('bs-select');
    });


var tr_template = $("#tr-template")[0]
var cal_table = $(".cal-table")[0]
var tbody = cal_table.tBodies[0]
var total_emission_label = $("#total-emission")[0]
var total_emission = 0

function table_add_line(category, name, num){
    var new_line = tr_template.cloneNode(true);
    var e = Math.floor(emissions[name] * num)
    if(!Number.isInteger(e)){
        alert("Please check your input!")
        return
    }
    line_id = "cal-table-"+tbody.childElementCount
    new_line.setAttribute("id", line_id)
    new_line.getElementsByClassName("remove-btn")[0].setAttribute("onclick", 'removeLine("'+line_id+'")')
    new_line.getElementsByClassName("category")[0].innerText = category
    new_line.getElementsByClassName("name")[0].innerText = name
    new_line.getElementsByClassName("num")[0].innerText = num
    new_line.getElementsByClassName("c")[0].innerText = e
    new_line.removeAttribute("hidden");
    tbody.appendChild(new_line);

    total_emission += e
    total_emission_label.innerText = "Total emission: "+ total_emission + 'g CO2'
}


function addTableLine(){
    var category = $(".calc-select")[0].selectedOptions[0].value
    var name = $(".calc-select")[1].selectedOptions[0].innerText
    var num = parseInt($(".calc-num")[1].value)
    if(Number.isInteger(num))
        table_add_line(category, name, num)
    else{
        alert("Please check your input!")
    }
}


function removeLine(line_id){
    line = document.getElementById(line_id)
    sub_e = line.getElementsByClassName("c")[0].innerText
    sub_e = parseInt(sub_e)
    total_emission -=  sub_e
    total_emission_label.innerText = "Total emission: "+ total_emission + 'g CO2'
    line.parentNode.removeChild(line)

}

