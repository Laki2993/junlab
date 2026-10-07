document.addEventListener('DOMContentLoaded', () => {
    
    let cont = 0;
    let cont2 = 0;
  
    function dote(){
        document.querySelectorAll('.cirk').forEach((cirk) => {
            cirk.style.backgroundColor  = 'rgba(255, 255, 255, 0.411)';
            cirk.style.width = '0.7vw';
        })
        if(cont ==0){
        document.getElementById("cirk1").style.backgroundColor  = 'white';
        document.getElementById("cirk1").style.width = '2.5vw';
        }
        if(cont ==90){
        document.getElementById("cirk2").style.backgroundColor  = 'white';
        document.getElementById("cirk2").style.width = '2.5vw';
        }
        if(cont ==180){
        document.getElementById("cirk3").style.backgroundColor  = 'white';
        document.getElementById("cirk3").style.width = '2.5vw';

        }
    }
    
    function slide(){
        if(cont<180){
            cont+=90;
            document.getElementById("slider").style.right =  cont + "vw"; 
            dote();
        }
        else{
            cont = 0;
            document.getElementById("slider").style.right =  cont + "vw";
            dote();
        }
    } 
    let slider = setInterval(slide,4000);

      function dote1(){
       document.querySelectorAll('.cirk2').forEach((cirk) => {
           cirk.style.backgroundColor  = 'rgba(255, 255, 255, 0.411)';
           cirk.style.width = '0.7vw';
       })
       if(cont2 ==0){
       document.getElementById("cirk01").style.backgroundColor  = 'white';
       document.getElementById("cirk01").style.width = '2.5vw';
       }
       if(cont2 ==100){
       document.getElementById("cirk02").style.backgroundColor  = 'white';
       document.getElementById("cirk02").style.width = '2.5vw'
       }
       if(cont2 ==200){
       document.getElementById("cirk03").style.backgroundColor  = 'white';
       document.getElementById("cirk03").style.width = '2.5vw';
       }
   }
   
   function slide2(){
       if(cont2<200){
           cont2+=100;
           document.getElementById("slider2").style.right =  cont2 + "vw"; 
           dote1();
       }
       else{
           cont2 = 0;
           document.getElementById("slider2").style.right =  cont2 + "vw";
           dote1();
       }
   } 
   let slider2 = setInterval(slide2,4000);
    
});