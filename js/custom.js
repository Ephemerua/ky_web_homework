function formReset(foodJson) {

    foodentry = document.getElementById("food-select").value;
    weightentry = document.getElementById("food_weight").value;
    
      if (foodentry != "" && weightentry != "" && weightentry != 0 ) { /*Runs only on successfull food entry*/
        // document.getElementById("category-select").reset();
        // document.getElementById("food-select").reset();
        document.getElementById("serving_number").value = 1;
        document.getElementById("food_weight").value = null;
        var typedropDown = document.getElementById("category-select");
            typedropDown.selectedIndex = 0;
        var fooddropDown = document.getElementById("food-select");
            fooddropDown.selectedIndex = 0;
    
        var data = foodJson;
    
        document.getElementById("serving_desc").innerHTML = "" /*Resets the serving description*/
    
        jQuery(document).ready(function($) { /*Resents the "Long" food type list*/
    
          let dropdown = $('#food-select');
          dropdown.empty();
          dropdown.append('<option selected="true" value="" disabled>Choose Food Type</option>');
          dropdown.prop('selectedIndex', 0);
    
          $.each(data, function (key, entry) {
    
            dropdown.append($('<option></option>').attr('value', entry.food_id).attr('data-category', entry.food_category).text(entry.food));
    
          });
    
        });
    
      }
    
    
    
    }
    
    
    
    function updateWeight(foodJson) {
    
        var data = foodJson;
        var selectedFoodId = document.getElementById("food-select").value;
    
        var numberServings = document.getElementById("serving_number").value;
    
        jQuery(document).ready(function($) {
    
          $.each(data, function (key, entry) {
    
            selectedFood = $("#food-select option:selected").text();
    
            if (data[key].food == selectedFood) {
    
              // document.getElementById("serving_weight").innerHTML = entry.serving * numberServings;
              document.getElementById("food_weight").value = entry.serving_weight * numberServings;
    
            }
    
          });
    
        });
    
    }
    
    
    
    function addFoodRow() {
    
      // Used to determine whether an entry has been made 
      foodentry = document.getElementById("food-select").value;
      weightentry = document.getElementById("food_weight").value;
    
      var selectobject = document.getElementById('food-select');
      var selectedFood = selectobject.options[selectobject.selectedIndex].text;
    
      if (foodentry != "" && weightentry != "" && weightentry > 0) {
    
        // Inserts and labels each of the cells in entries table 
        var entriesTable = document.getElementById("entries");
        var row = entriesTable.insertRow(-1); // creates row
        var td = document.createElement('td');   // creates cell 
        td = row.insertCell(0);
    
        // jQuery(document).ready(function($) { // This is not working 
        //   selectedFood = $("#food-select option:selected").text();
        // })
        
        //console.log(selectedFood)
    
        var textnode = document.createTextNode(selectedFood);
        td.appendChild(textnode);
    
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = row.insertCell(1); // creates cell 
    
            selectedWeight = document.getElementById("food_weight").value;
            var textnode = document.createTextNode(selectedWeight);
            td.appendChild(textnode);
    
        var td = document.createElement('td');          // TABLE DEFINITION.
        td = row.insertCell(2);
    
            var button = document.createElement('input');
    
            // set the attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'x');
            button.setAttribute('id', 'removeRowButton')
            // button.innerHtml = "HELLO THERE".bold();
    
    
            // button.innerHtml = '<i class="fas fa-times"></i>';
    
            // add button's "onclick" event.
            button.setAttribute('onclick', 'removeRow(this)');
    
            
    
            // td.appendChild('<i class="fa fa-trash-o" aria-hidden="true"></i>');
    
            td.appendChild(button);
    
    
      } else {
    
        alert("Please make sure you have enterred both a food type and weight");
      }
    }
    
    
    function removeRow(oButton) {
    
        var empTab = document.getElementById('entries');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
    
    }
    
    
    function showUserForm() {
    
    var numEntries = document.getElementById("entries").rows.length;
        if ( numEntries > 1) { 
    
          var y = document.getElementById("userInfoForm");
          y.style.display = "grid";
    
    
          
            // var x = document.getElementById("userInfoForm");
            // var y = document.getElementById("showResults");
            // x.style.display = "grid";
            // y.style.display = "grid";
    
            // var x = document.getElementById("entryTypeInput");
            
            // var z = document.getElementById("countryInput");
            // x.style.visibility = 'visible';
            // x.style.display = "block";
    
    
            // jQuery(document).ready(function($) {
              
    
            //     // var y = document.getElementById("userInfoNextQ");
            //     // y.style.display = "block";
    
            //     // $([document.documentElement, document.body]).animate({
            //     //     scrollTop: $("#calcBottom").offset().top -$(window).height() +300
            //     // }, 800, "easeOutQuint");
    
    
                
            // });
        showFirstQ();
    
        }else{
    
            alert("Please enter your daily food before pressing calculate");
        }
    
    
    }
    
    function showFirstQ(){
      jQuery(document).ready(function($) {
                
                $("#userInfoIntro").slideDown(500);
                $("#entryTypeInput").slideDown(500);
                $("#userInfoNextQ").slideDown(500);
                $("#userInfoSkip").slideDown(500);
    
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#calcBottom").offset().top -$(window).height() +300
                }, 800, "easeOutQuint");
    
      });
    
        document.getElementById("userInfoNextQ").onclick = showSecondQ;
    }
    
    function showSecondQ(){
      jQuery(document).ready(function($) {
    
                $("#countryInput").slideDown("slow");
    
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#calcBottom").offset().top -$(window).height() +300
                }, 800, "easeOutQuint");
    
            });
    
      // var x = document.getElementById("countryInput");
      //   x.style.display = "block";
        document.getElementById("userInfoNextQ").onclick = showThirdQ;
    
    }
    
    function showThirdQ(){
        jQuery(document).ready(function($) {
                
                $("#ageInput").slideDown("slow");
    
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#calcBottom").offset().top -$(window).height() +300
                }, 800, "easeOutQuint");
    
        });
    
      // var x = document.getElementById("ageInput");
        // x.style.display = "block";
        document.getElementById("userInfoNextQ").onclick = showFourthQ;
    
    }
    
    function showFourthQ(){
      jQuery(document).ready(function($) {
                
                $("#genderInput").slideDown("slow");
    
                $([document.documentElement, document.body]).animate({
                    scrollTop: $("#calcBottom").offset().top -$(window).height() +300
                }, 800, "easeOutQuint");
    
      });
    
      var x = document.getElementById("userInfoSkip");
      var y = document.getElementById("userInfoNextQ");
      var z = document.getElementById("showResults");
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "grid";
        document.getElementById("userInfoNextQ").onclick = null;
    
    }
    
    function skipForm(){
    
    jQuery(document).ready(function($) {
                
          $("#showResults").slideDown("slow");
          var z = document.getElementById("showResults");
          z.style.display = "grid";                                       
    
          // $([document.documentElement, document.body]).animate({
          //     scrollTop: $("#calcBottom").offset().top -$(window).height() +300
          // }, 800, "easeOutQuint");
    
      });
    
    }
    
    function showResultsPage() {
    
      var x = document.getElementById("resultsSection");
      x.style.display = "block";
    
    
      jQuery(document).ready(function($) {
    
          $([document.documentElement, document.body]).animate({
              scrollTop: $("#resultsSection").offset().top -100
          }, 800, "easeOutQuint");
    
      });
    
    }
    
    
    
    
    // function calcTotalEmissions() {
    
    //   var resultsTable = document.getElementById("results");
    //   window.emissionsTotal = parseFloat(0);
    //   window.dailytarget = 4160;
    
    
    //   for (i = 1; i < resultsTable.rows.length; i++) {
    
    //     var currentRow = document.getElementById("results").rows[i].cells;
    //     emissionsTotal = emissionsTotal + parseFloat(currentRow[2].innerHTML);
    
    //   }
    
    //   // var emissionsTotalRounded = emissionsTotal.toFixed(0);
    //   // document.getElementById("emissions_total").innerHTML = emissionsTotalRounded + "  gCO" + "2".sub() + "e" ;
    
    //   // var emissionsTotalPercent = ((emissionsTotal/dailytarget)*100).toFixed(1);
    //   document.getElementById("emissions_percent").innerHTML = emissionsTotalPercent + "%" ;
    
    //   // return emissionsTotal;
    
    // }
    
    
    
    
    
    function cascadingDropdown(foodJson) {
    
    
      var data = foodJson;
      var selectedType = document.getElementById("category-select").value;
    
    
      if (selectedType == "Drinks"){ /*Changes the label for the weight entry box if a drink is selected*/
        document.getElementById("weightInputLabel").innerHTML = "Volume(ml)";
      }else{
        document.getElementById("weightInputLabel").innerHTML = "Weight(g)";
      }
      
    
      jQuery(document).ready(function($) {
    
        let dropdown = $('#food-select');
        dropdown.empty();
        dropdown.append('<option selected="true" value="" disabled>Choose Food Type</option>');
        dropdown.prop('selectedIndex', 0);
    
        $.each(data, function (key, entry) {
    
          if (data[key].food_category == selectedType) {
    
            dropdown.append($('<option></option>').attr('value', entry.food_id).attr('data-category', entry.food_category).text(entry.food));
    
          }
    
        });
    
      });
    
    }
    
    
    
    
    
    function showServingInfo(foodJson){
    
    
      var data = foodJson;
      var selectedFoodId = document.getElementById("food-select").value;
    
    
      var selectobject = document.getElementById('food-select');
      var selected = selectobject.options[selectobject.selectedIndex];
      var selectedCategory = selected.getAttribute('data-category');
      // console.log("selectedCategory=   " + selectedCategory);
    
      if (selectedCategory == "Drinks"){ /*Changes the label for the weight entry box if a drink is selected*/
        document.getElementById("weightInputLabel").innerHTML = "Volume(ml)";
      }else{
        document.getElementById("weightInputLabel").innerHTML = "Weight(g)";
      }
    
    
      jQuery(document).ready(function($) {
    
        $.each(data, function (key, entry) {
    
            if (data[key].food_id == selectedFoodId) { /*Finds the correct food in the Json*/
    
              if ( entry.serving_weight != 0){ /*Prevents a serving weight of 0 being auto enterred*/
                document.getElementById("food_weight").value = entry.serving_weight;
              }else{
                document.getElementById("food_weight").value = "";
              }
    
              if ( entry.serving_desc != ""){ /*Enters the stored or basic serving description*/
              document.getElementById("serving_desc").innerHTML = "Typical Serving Description:   " + entry.serving_desc.bold();
              }else{
              document.getElementById("serving_desc").innerHTML = "Typical Serving Description:   "  +  "Use the packaging as a guide".bold();
              }
    
    
            }
    
        });
    
      });
    
    }
    
    
    
    // $.each(data, function (key, entry) {
    
    //   $("#show_emissions").click(function() {
    //       $('html, body').animate({
    //           scrollTop: $("#resultsTotals").offset().top 
    //       }, 20);
    //       console.log("Button Pressed!")
    //   });
    
    // });
    
    
    // Function to reveal the feedback form when the text field is clicked
    document.addEventListener('DOMContentLoaded', function() { 
      jQuery(function($){
        $('.clicktoshow').click(function(){
          $('.showclick').show();
          $('.clicktoshow').hide();
          return false;
        });
    
      });
    }); 
    
    
    
    
    
    function testEnv() {
    
      var env = "prod";
    
      if (env == "dev"){
        document.getElementById("ajaxTestText").innerHTML = "Dev version"; 
      }else{
        document.getElementById("ajaxTestText").innerHTML = "production version wot"; 
      }
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function sortTableByID() {
    
      var table, rows, switching, i, x, y, shouldSwitch;
    
      table = document.getElementById("entries");
    
      switching = true;
    
      /*Make a loop that will continue until
    
      no switching has been done:*/
    
      while (switching) {
    
        //start by saying: no switching is done:
    
        switching = false;
    
        rows = table.rows;
    
        /*Loop through all table rows (except the
    
        first, which contains table headers):*/
    
        for (i = 1; i < (rows.length - 1); i++) {
    
          //start by saying there should be no switching:
    
          shouldSwitch = false;
    
          /*Get the two elements you want to compare,
    
          one from current row and one from the next:*/
    
          x = rows[i].getElementsByTagName("TD")[0];
    
          y = rows[i + 1].getElementsByTagName("TD")[0];
    
          //check if the two rows should switch place:
    
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
    
            //if so, mark as a switch and break the loop:
    
            shouldSwitch = true;
    
            break;
    
          }
    
        }
    
        if (shouldSwitch) {
    
          /*If a switch has been marked, make the switch
    
          and mark that a switch has been done:*/
    
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    
          switching = true;
    
        }
    
      }
    
    }
    
    
    
    
    
    function removeDropdownOptions() {
    
    
    
      // len = foodDropdown.options.length;
    
      chosenType = document.getElementById("foodcalcform").elements[0].value;
    
      console.log(chosenType);
    
      var foodDropdown = document.getElementById('food-select');
    
      len = foodDropdown.length;
    
      // console.log("Length of food dropdown=" + len);
    
    
    
        for ( i=0; i<10 ; i++ ) {
    
    
    
        var selectobject = document.getElementById('food-select');
    
        // console.log("Dropdown selected=" + selectobject);
    
        var selected = selectobject.options[i]; /*understanding this line is key to iterating through */
    
        console.log("Current food:" + selected);
    
        var foodType = selected.getAttribute('data-type');
    
        // console.log("food type=" + foodType);
    
    
    
          if (foodType != chosenType) {
    
            selectobject.remove(i);
    
          }
    
        }
    
    }
    
    
    
    
    