function red() {
    
   
    var colors = document.getElementById("color");
    if (colors.value == "on") {
       colors.value = "off";
       colors.style.backgroundColor="#198754";
    }
    else if (colors.value == "off") {
        document.getElementById("color").value = "on";   
        colors.style.backgroundColor="yellow";
    }

}




