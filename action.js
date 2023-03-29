console.log("from script file");
function sizeOfThings(){
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  var screenWidth = screen.width;
  var screenHeight = screen.height;
  
  document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
  document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight;

};
sizeOfThings();


var btn = document.querySelector("#btn");
var infrator = document.querySelector("#infrator");
var item = document.querySelector(".item");
var item2 = document.querySelector(".item2");


// INICIO, FUNÇÃO CLICK PARA ALTERAR O TAMANHO DO ITEM DE BUSCA
//
btn.addEventListener("click", function(){
    if(btn.classList.contains('positivo')) {    
      Abre();
    } else{
      Fecha();
    }
})

function Abre(){
  infrator.classList.remove('item')
  infrator.classList.add('item2')
  btn.classList.remove('positivo');
}
function Fecha(){
  infrator.classList.remove('item2')
  infrator.classList.add('item')
  btn.classList.add('positivo');
}
//
//  FINAL, DAS FUNÇÕES QUE COMPOEM A FUNÇÃO CLICK

//testando git 


