function card1(id) {
    let color = document.getElementById(id);
    if (color.datavalue == "c1") {
        color.datavalue = "c2";
        color.style.backgroundColor = "red";
        console.log(color);
    }
    else if(color.datavalue = "c2") {
        color.datavalue = "c1";
        color.style.backgroundColor = "green";
        console.log(color);
    }
    
}