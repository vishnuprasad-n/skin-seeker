var a = 0;
slider();

function slider() {
   var i;
    var y = document.querySelectorAll("#z");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }

    a++;
    if (a > y.length) {
        a = 1;
    }

    y[a - 1].style.display = "block";
    setTimeout(slider, 2000);
}

        /* newsletter */
        function demo(){
            let first= document.getElementById("InputEmail1").value;
          if( first === "" || first.length <5 ){
              alert("wrong input,try again");
          } else{
           alert("successfully signed up");
          }
           }
           