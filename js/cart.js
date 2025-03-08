let zina = document.querySelectorAll(".zina")


let price = [71590, 869, 1199, 1299, 1399, 700 ] 

        let every = 0
        let one = 71590
        let two = 869
        let three = 1199
        let four = 1299
        let five = 1399
        let six = 700

        let first = document.querySelector(".first")

    for(let i = 0; i < zina.length; i++){
        zina[i].addEventListener('click', function(){
            if(i == 0){
              every= one+ every
            }
            else if (i == 1){
                 every= two + every 
            }
            else if (i == 2){
                 every= three + every 
            }
            else if (i == 3){
                 every= four + every 
            }
            else if (i == 4){
                 every= five + every 
            }
            else if (i == 5){
                every= six + every 
           }
           
               first.innerHTML= every
        })}



                let h = document.querySelector('.hi')
        h.addEventListener('click', switchTheme)

   let images = document.querySelectorAll(".ine");

   


        
   const chk = document.getElementById('chk');
   let current_background = '#090014'; 
   
   chk.addEventListener('change', switchTheme);
   
   function switchTheme() {
       let body = document.querySelector('.by');
       let footer = document.querySelector('.f');
       let header = document.querySelector('.hr');
       let pov = document.querySelector('.pov');
       let hr = document.querySelector('.hr');
       let log = document.querySelector('.logo');
       let images = document.querySelectorAll('img');
   
       if (current_background === '#090014') {
           body.style.color = "#001133";
           current_background = '#C56EFF';
           body.style.backgroundColor = "#16DEB8";
           for (let i = 0; i < images.length; i++) {
               images[i].style.border = "5px inset #F3EDF6";
           }
           footer.style.backgroundImage = "linear-gradient(#4BCCC7, #9199CB)";
           header.style.backgroundImage = "linear-gradient(#4BCCC7, #9199CB)";
           pov.style.backgroundImage = "linear-gradient(#4BCCC7, #9199CB)";
           hr.style.border = "3px inset #F3EDF6";
           if (log) log.style.border = "3px inset #F3EDF6";
       } else {
           body.style.color = "#3B93E0";
           current_background = '#090014';
           body.style.backgroundColor = "#090014";
           for (let i = 0; i < images.length; i++) {
               images[i].style.border = "5px inset #4E4E4E";
           }
           footer.style.backgroundImage = "linear-gradient(#4E4E4E, #000000)";
           header.style.backgroundImage = "linear-gradient(#4E4E4E, #000000)";
           pov.style.backgroundImage = "linear-gradient(#0C1012, #000000)";
           hr.style.border = "3px inset #4E4E4E";
           if (log) log.style.border = "3px inset #4E4E4E";
       }
   
       console.log("Theme switched!");
   }
   


let nanaElements = document.querySelectorAll('.nana');

for (let i = 0; i < nanaElements.length; i++) {
  nanaElements[i].addEventListener('click', function switchTheme() {
    nanaElements[i].innerHTML = 'Додано до кошика!';
  });
}
