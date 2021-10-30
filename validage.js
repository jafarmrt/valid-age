function validAge () {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var age= document.getElementById("age").value;
    document.getElementById("result").innerHTML=firstName+" "+lastName;
    if (age>18) {
    document.getElementById("result2").innerHTML="Valid";
    }
    else{
    document.getElementById("result2").innerHTML="Not Valid";
    }
}
