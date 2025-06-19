
var divs = [];
var div_array = [];
var array_size = 10;
var container = document.getElementById('array_container');

function generate_Array() {
    cont.innerHTML="";
    for(var i=0; i<array_size; i++) {
        div_array[i] = Math.floor(Math.random()*10);
        divs[i] = document.createElement('div');
        container?.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}


generate_Array();
