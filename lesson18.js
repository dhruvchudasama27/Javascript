// Write a programe to create a result generator
// name , math , science , english , 
// -> total , average 
// if total less than 150 color red else green
function stdmark()
{
   
    var name = document.getElementById("sname").value ;
    var maths =parseInt(document.getElementById("mathsMark").value );
    var science =parseInt(document.getElementById("scienceMark").value) ;
    var english =parseInt(document.getElementById("englishMark").value) ;
    var total = maths + science + english ;
    var average = parseFloat(total / 3);

    console.log(`name is ${name} maths ${maths} science ${science} english ${english} total ${total} average ${average}`);

    if(total<=150)
    {
        var table = ` <tr style="background-color: #DC3545;">
        <td>${name}</td>
        <td>${maths}</td>
        <td>${science}</td>
        <td>${english}</td>
        <td>${total}</td>
        <td>${average}</td>
    </tr>`
    }
    else
    {
        var table = ` <tr style="background-color: #198754;">
        <td>${name}</td>
        <td>${maths}</td>
        <td>${science}</td>
        <td>${english}</td>
        <td>${total}</td>
        <td>${average}</td>
    </tr>`
    }
    document.getElementById("marks").innerHTML += table ; 
}
function clearall()
{

    document.getElementById("sname").value = '';
    document.getElementById("mathsMark").value = '';
    document.getElementById("scienceMark").value = '';
    document.getElementById("englishMark").value = '';
    document.getElementById("marks").innerHTML = '';
}