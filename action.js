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
var menor = document.querySelector(".menor");
var maior = document.querySelector(".maior");


// INICIO, FUNÇÃO CLICK PARA ALTERAR O TAMANHO DO ITEM DE BUSCA   // GRUPO
//
var lateralultra = document.querySelector('#lateralultra');
var alturaAtual = lateralultra.clientHeight;
var alturaum = '430px'
var alturadois = '630'
var alturatres = '830'

btn.addEventListener("click", function(){
    if(btn.classList.contains('positivo')) {    
      Fecha();
    } else{
      Abre();
    }
})

function Abre(){
  infrator.classList.remove('menor')
  infrator.classList.add('maior')
  btn.classList.remove('negativo')
  btn.classList.add('positivo')
}
function Fecha(){
  infrator.classList.remove('maior')
  infrator.classList.add('menor')
  btn.classList.remove('positivo')
  btn.classList.add('negativo')

}
// FIM, FUNÇÃO CLICK PARA ALTERAR O TAMANHO DO ITEM DE BUSCA   // GRUPO

// INICIO, FUNÇÃO CLICK PARA ALTERAR O TAMANHO DO ITEM DE BUSCA   // MARCA

var total = alturaAtual;
var marcaone = document.querySelector('#marcaone');
var btndois = document.querySelector("#btndois");
var menordois = document.querySelector(".marcamenor");
var maiordois = document.querySelector(".marcamaior");

btndois.addEventListener("click", function(){
  if(btndois.classList.contains('positivodois')) {    
    Fechadois();
  } else{
    Abredois();
  }
})

function Abredois(){
btndois.classList.remove('negativodois')
btndois.classList.add('positivodois')
marcaone.classList.remove('marcamenor')
marcaone.classList.add('marcamaior')
// 830
}
function Fechadois(){
  btndois.classList.remove('positivodois')
  btndois.classList.add('negativodois')
marcaone.classList.remove('marcamaior')
marcaone.classList.add('marcamenor')
}
// FIM, FUNÇÃO CLICK PARA ALTERAR O TAMANHO DO ITEM DE BUSCA   // MARCA

// INICIO, FUNÇÃO CLICK PARA ALTERAR O TAMANHO DO ITEM DE BUSCA   // MARCA
var tamanhoone = document.querySelector('#tamanhoone');
var btntres = document.querySelector("#btntres");
var menortres = document.querySelector(".marcatres");
var maiortres = document.querySelector(".marcatres");

btntres.addEventListener("click", function(){
  if(btntres.classList.contains('positivotres')) {    
    Fechatres();
  } else{
    Abretres();
  }
})

function Abretres(){
btntres.classList.remove('negativotres')
btntres.classList.add('positivotres')
tamanhoone.classList.remove('tamanhomenor')
tamanhoone.classList.add('tamanhomaior')
}
function Fechatres(){
  btntres.classList.remove('positivotres')
  btntres.classList.add('negativotres')
tamanhoone.classList.remove('tamanhomaior')
tamanhoone.classList.add('tamanhomenor')
}
// FIM, FUNÇÃO CLICK PARA ALTERAR O TAMANHO DO ITEM DE BUSCA   // MARCA

// INICIO, FUNÇÃO CLICK PARA ALTERAR O ESTRELA DO ITEM DE BUSCA   // MARCA
var estrelaone = document.querySelector('#estrelaone');
var btnquatro = document.querySelector("#btnquatro");
var menorquatro = document.querySelector(".marcaquadro");
var maiorquatro = document.querySelector(".marcaquadro");

btnquatro.addEventListener("click", function(){
  if(btnquatro.classList.contains('positivoquatro')) {    
    Fechaquatro();
  } else{
    Abrequatro();
  }
})

function Abrequatro(){
btnquatro.classList.remove('negativoquatro')
btnquatro.classList.add('positivoquatro')
estrelaone.classList.remove('estrelamenor')
estrelaone.classList.add('estrelamaior')
}
function Fechaquatro(){
  btnquatro.classList.remove('positivoquatro')
  btnquatro.classList.add('negativoquatro')
  estrelaone.classList.remove('estrelamaior')
  estrelaone.classList.add('estrelamenor')
}
// FIM, FUNÇÃO CLICK PARA ALTERAR O ESTRELA DO ITEM DE BUSCA   // MARCA




//  FINAL, DAS FUNÇÕES QUE COMPOEM A FUNÇÃO CLICK\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


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
var treze = document.querySelector('#treze');
var catorze = document.querySelector('#catorze');
var quinze = document.querySelector('#quinze');
var dezeseis = document.querySelector('#dezeseis');
var dezesete = document.querySelector('#dezesete');
var dezoito = document.querySelector('#dezoito');
var dezenove = document.querySelector('#dezenove');
var vinte = document.querySelector('#vinte');

var barra = document.querySelector('barravenda');

function Item(){

  let select = document.querySelector('#Quantidade');
  let optionValue = select.options[select.selectedIndex];
  let value = optionValue.value;
  let text = optionValue.text;
  console.log(value, text);

if(text==('12')) {   
Remove();
console.log('12');
}else if(text==('16')){
AdicionaUm();
console.log('16');
}else if(text==('20')){
AdicionaDois();
console.log('20');
}}
Item();

function Remove(){
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
treze.hidden=true
catorze.hidden=true
quinze.hidden=true
dezeseis.hidden=true
dezesete.hidden=true
dezoito.hidden=true
dezenove.hidden=true
vinte .hidden=true
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
  nove.hidden=false
  dez.hidden=false
  onze.hidden=false
  doze.hidden=false
  treze.hidden=false
  catorze.hidden=false
  quinze.hidden=false
  dezeseis.hidden=false
  dezesete.hidden=true
  dezoito.hidden=true
  dezenove.hidden=true
  vinte .hidden=true
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
  treze.hidden=false
  catorze.hidden=false
  quinze.hidden=false
  dezeseis.hidden=false
  dezesete.hidden=false 
  dezoito.hidden=false
  dezenove.hidden=false
  vinte .hidden=false
}
// FIM, FUNÇÃO PARA REMOVER OU ADICIONAR ITENS 

// 1030x939 dimenção minima para o carrossel


//
// INICIO, FUNÇÃO PARA CARROSEL AUTOMATICO
let count =1;

document.getElementsByName('radio1').checked = true;

setInterval( function(){
  nextImage();
}, 3000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }

  document.getElementById('radio'+count).checked = true;
  
}
// FIM, FUNÇÃO PARA CARROSEL AUTOMATICO

var btnsna = document.querySelector('#btnsnakbar');


btnsnakbar.addEventListener("click", function(){
  document.getElementById('snakbar').style.display = 'none';
  })