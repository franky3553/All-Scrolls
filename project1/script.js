function darkTheme() {
    document.querySelector("#body").style.backgroundColor="#282828";

    document.querySelector("#intro").style.backgroundColor="#282828";

    var x = document.querySelectorAll(".cellIndex");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#404040"
        x[i].style.boxShadow= "0 4px 6px 0 #181818, 0 0px 0px #181818";
    }


    var x = document.querySelectorAll(".cellIndexHover");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#404040"
        x[i].style.boxShadow= "0 0px 6px 0 white, 0 0px 0px white";
    }

    var x = document.querySelectorAll(".cellIndexHover:hover");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.boxShadow= "0 0px 6px 0 white, 0 0px 0px white";
    }


    var x = document.querySelectorAll(".black");
    var i;
    for (i = 0; i < x.length; i++) {
     x[i].style.color = "white";
    }

    var x = document.querySelectorAll(".yellow");
    var i;
    for (i = 0; i < x.length; i++) {
     x[i].style.color = "#F1FA3C";
    }

    var x = document.querySelectorAll(".blue");
    var i;
    for (i = 0; i < x.length; i++) {
     x[i].style.color = "#64DFDF";
    }

    var x = document.querySelectorAll(".brown");
    var i;
    for (i = 0; i < x.length; i++) {
     x[i].style.color = "#FFA500";
    }

    var x = document.querySelectorAll(".green");
    var i;
    for (i = 0; i < x.length; i++) {
     x[i].style.color = "#06FF00";
    }

    var x = document.querySelectorAll(".purple");
    var i;
    for (i = 0; i < x.length; i++) {
     x[i].style.color = "#e059d2";
    }
}
