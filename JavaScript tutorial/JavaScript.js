var words = ["Hejeeeeeeeee", "Hejejejejeje", "Heasdjsajjasd", "Hahsdhash", "Hej", "Heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeej"];
var arr = ['first item', 'second item is longer than the third one', 'third longish item'];
var countries = ["Denmark", "Sweden", "Norway", "Germany", "Rusia", "Italy"];
var newString = "";
var largest = "";
var largestName = "";
var count = 0;
var count1 = 412;
var count2 = 200;

function sizeOfLongest(words) {
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > count)
        { count = words[i].length }
    }

    console.log(count)
}

sizeOfLongest(words)

function getLongestWord(words) {
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > largest) {
            largest = words[i].length;
            largestName = words[i];
        }
    }
    console.log(largestName);
}

getLongestWord(words)

function max(count1, count2) {
    var higestNumber = Math.max(count1, count2);
    console.log(higestNumber);
}
max(count1, count2)

function max2() {
    var i, max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log("Max: " + max)
}

x = max2(1, 2, 3, 4, 5, 6, 7);

function todaysDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    console.log(n)
}

todaysDay()

function addRow() {
    
    var table = document.getElementById("table")
    var countRow = table.rows.length;
    var row = table.insertRow(countRow);
    var cell1 = row.insertCell(0);

}

function removeRow() {
    var table = document.getElementById("table").deleteRow(0);
}

function changeHeading() {
    var input = document.getElementById("form1").value;
    var element = document.getElementById("h1h");
    element.innerHTML = input; 
}

function hideList() {
    var list = document.getElementById("list1");
    
    list.style.visibility = 'hidden';
}

function showList() {
    var list = document.getElementById("list1");

    list.style.visibility = 'visible';
}

function isItFriday()
{
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    
    if (n == "Wednesday") {
        alert("ITS FUCKING FRIDAY")

    } else {
       alert("ITS NOT FRIDAY YET YOU MORON")
    }
}