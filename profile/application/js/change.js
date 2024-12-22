function myfunction () {
    var x = document.getElementById("Myselect").value;
    document.getElementById("tampil").innerHTML="tampil disini :"+x;
}

function  myclick() {

    var k = document.getElementById("klik").value;
    document.getElementById("parag1").innerHTML=k;
}

function fungsi() {
    document.getElementById("parag1").style.display = "none";
    document.getElementById("parag2").style.display = "none";
    
    var gantivalue = document.getElementById("ganti").value;
    if(gantivalue === "1") {
        document.getElementById("parag1").style.display = "block";
    } else if(gantivalue === "2") {
        document.getElementById("parag2").style.display  = "block";
    }

    
}

function pilih1() {
    var y = document.getElementById("parag1");
    var tampilkan = document.getElementById("tampilkan");
    if(y.style.display === "block"){
        y.style.display = "none";
        tampilkan.innerHTML = "";
    }else {
        y.style.display = "";
        tampilkan.innerHTML = y.innerHTML;
    }
}

function pilih2() {
    var k = document.getElementById("parag2");
    var tampilkan2 = document.getElementById("tampilkan");
    if(k.style.display === "block"){
        k.style.display = "none";
        tampilkan2.innerHTML = "";
    }else {
        k.style.display = "";
        tampilkan2.innerHTML = k.innerHTML;
    }
}

function pilih3()  {
    var b = document.getElementById("parag3");
    var tampilkan3 = document.getElementById("tampilkan");
    if(b.style.display === "block"){
        b.style.display = "none"
        tampilkan3.innerHTML = "";
    }else {
        b.style.display = "";
        tampilkan3.innerHTML = b.innerHTML;
    }
}

window.onload = function() {
    var conten = document.getElementById("parag1");
    conten.style.display = "block";
}