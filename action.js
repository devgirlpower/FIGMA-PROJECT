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


// INICIO, FUNÇÃO PARA REMOVER OU ADICIONAR ITENS 

  var um = document.querySelector('#um');
    var dois = document.querySelector('#dois');
    var tres = document.querySelector('#tres');
    var quatro = document.querySelector('#quatro');
    var cinco = document.querySelector('#cinco');
    var seis = document.querySelector('#seis');
    var sete = document.querySelector('#sete');
    var oito = document.querySelector('#oito');
    var nove = document.querySelector('#nove');
    var dez = document.querySelector('#dez');
    var onze = document.querySelector('#onze');
    var doze = document.querySelector('#doze');
    var barra = document.querySelector('barravenda');

    function Item(){

      let select = document.querySelector('#Quantidade');
      let optionValue = select.options[select.selectedIndex];
      let value = optionValue.value;
      let text = optionValue.text;
      console.log(value, text);

  if(text==('4')) {   
    Remove();
    console.log('4');
  }else if(text==('8')){
    AdicionaUm();
    console.log('8');
  }else if(text==('12')){
    AdicionaDois();
    console.log('12');
  }}
  Item();
  
  function Remove(){
    um.hidden=false
    dois.hidden=false
    tres.hidden=false
    quatro.hidden=false
    cinco.hidden=true
    seis.hidden=true
    sete.hidden=true
    oito.hidden=true
    nove.hidden=true
    dez.hidden=true
    onze.hidden=true
    doze.hidden=true
  }
  function AdicionaUm(){
    um.hidden=false
    dois.hidden=false
    tres.hidden=false
    quatro.hidden=false
    cinco.hidden=false
    seis.hidden=false
    sete.hidden=false
    oito.hidden=false
    nove.hidden=true
    dez.hidden=true
    onze.hidden=true
    doze.hidden=true
  }

  function AdicionaDois(){
    um.hidden=false
    dois.hidden=false
    tres.hidden=false
    quatro.hidden=false
    cinco.hidden=false
    seis.hidden=false
    sete.hidden=false
    oito.hidden=false
    nove.hidden=false
    dez.hidden=false
    onze.hidden=false
    doze.hidden=false
  }

// FIM, FUNÇÃO PARA REMOVER OU ADICIONAR ITENS 