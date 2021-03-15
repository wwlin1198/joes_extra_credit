function GetNum1() {
    var hotdogs = document.getElementById("num1").value;
    return hotdogs;
}

function GetNum2() {
    var french_fries = document.getElementById("num2").value;
    return french_fries;
}

function GetNum3() {
    var drinks = document.getElementById("num3").value;
    return drinks;
}
//var values
let cost_hotdog = 3.25;
let cost_fries = 2.00;
let cost_drink = 1.5;
let tax = 0.0625;
let discount = 0.10;
let total = 0.00;
let cost2 = 0.00;

//calculate the cost and apply discount if total cost before tax is over $20.00
function calculate_total(){

    var hotdogs = GetNum1();
    var french_fries = GetNum2();
    var drinks = GetNum3();
    if(document.forms['items']['num1'].value == "" && document.forms['items']['num2'].value == "" && document.forms['items']['num3'].value == ""){
        alert('ERROR: No Items Ordered')
    }
   

    //console log to make sure the numbers are correct
    console.log(hotdogs);
    console.log(french_fries);
    console.log(drinks);

 
    let cost = (hotdogs * cost_hotdog) + (french_fries * cost_fries) + (drinks * cost_drink);
    cost = cost.toFixed(2);
    cost2 = cost;
    console.log(cost2);
    if(cost > 20.00){
        
        discount = cost * discount;
        discount = discount.toFixed(2);
        cost = cost - discount;
        tax = cost * tax;
        tax = tax.toFixed(2);
        console.log(tax)
        total = Number(cost) + Number(tax);
        total = total.toFixed(2)
    }else{
        tax = cost * tax;
        tax = tax.toFixed(2);
        discount = 0.00;
        total = Number(cost) + Number(tax);
        console.log(total)
        total = total.toFixed(2);
    }
    //table information
    var tableArray = [
        ['Items', 'Quantity/Cost'],
        ['Hot Dogs $3.25ea', hotdogs],
        ['French Fries $2.00ea' , french_fries],
        ['Drinks $1.50ea', drinks],
        ['Cost Before Tax ($)' , cost2],
        ['Discount ($)',discount],
        ['Tax After Discount($)', tax],
        ['Total ($)', total]
    ];


    //creating the table 2 by 2
    var myTableDiv = document.getElementById("myTable");

    var table = document.createElement('TABLE');
    table.setAttribute('border','2');
    table.setAttribute('width','100%')

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < 8; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 2; j++) {
    var td = document.createElement('TD');
    td.appendChild(document.createTextNode(tableArray[i][j]));
    tr.appendChild(td);
    }
    }
    myTableDiv.appendChild(table);
}



