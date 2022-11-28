var x = document.getElementById("num1")
var y = document.getElementById("num2")
const button= document.getElementById("top")

button.addEventListener("click" ,() =>{
       nbr1= x.value;
        nbr2 =y.value;
      nbr1=parseFloat(nbr1);
        nbr2=parseFloat(nbr2);
        plus=nbr1 + nbr2
        document.getElementById("plus").innerHTML="la somme est x+y = " + plus
        mult=nbr1*nbr2
        document.getElementById("mult").innerHTML="la multiplication est x*y = " + mult
        div=nbr1/nbr2
        document.getElementById("div").innerHTML="la division est x/y= " + div
        mod=nbr1 % nbr2
        document.getElsementById("mod").innerHTML="l'addition  est x%y = " +  mod
      
})
