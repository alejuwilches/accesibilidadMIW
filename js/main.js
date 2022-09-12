/*MODO OSCURO*/
/*ESTILO SOL*/
document.getElementById('id-sun').onclick = function()
{
  document.getElementById('page').classList.remove('dark-mode')
  document.getElementById('id-moon').classList.remove('active')
  this.classList.add('active')
}
/*ESTILO LUNA*/
document.getElementById('id-moon').onclick = function()
{
  document.getElementById('page').classList.add('dark-mode')
  document.getElementById('id-sun').classList.remove('active')
  this.classList.add('active')
}

/*CAMBIAR TAMAÑO DE TEXTO*/
const elementsList = document.getElementsByTagName('p');

function getElementFontSize(element){
  //getComputedStyle nos devuelve las propiedades css de cada párrafo(elemento)
  const elementFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
  return parseFloat(elementFontSize);  //Devolvemos el total de pixeles
}
function cambiarTexto(operador) {
   for(let element of elementsList){
     //Obtener el total de pixel de cada párrafo.
     const currentSize = getElementFontSize(element);
     
     //Restar o sumar, dependiendo del operador.
     const newFontSize = (operador === '+' ? (currentSize + 1) : (currentSize - 1)) + 'px';
     //Aplicarle al parrafo actual el nuevo tamaño.
     element.style.fontSize = newFontSize
   }
}
function CambioTexto(){
  var e=document.getElementsByTagName("p");
  var x=document.getElementById("valor");
  for (var i = 0; i < e.length; i++){
  if (x.options[x.selectedIndex].text=="elige"){return false}
  e[i].style.fontSize=x.options[x.selectedIndex].text+"px";
  e[i].style.fontFamily="Arial";
  e[i].style.color="#ff0000";
  }
}

/*TRADUCTOR*/
function googleTranslateElementInit(){
  new google.translate.TranslateElement(
    {pageLanguage: 'en'},
    'google_translate_element'
    );
}

/*ENCUESTA*/
var d = new Date();
/*GUARDAR DATOS*/
$('#saveForm').click(() => {
    var datas = {
        man: $('#nombreCompleto'),
        tel: $('#telefono'),
        p01: $('input:radio[name=pregunta1]:checked'),
        p02: $('input:radio[name=pregunta2]:checked'),
        p03: $('input:radio[name=pregunta3]:checked'),
        p04: $('input:radio[name=pregunta4]:checked'),
        p05: $('input:radio[name=pregunta5]:checked'),
        p06: $('input:radio[name=pregunta6]:checked'),
        p07: $('input:radio[name=pregunta7]:checked'),
        p08: $('input:radio[name=pregunta8]:checked'),
        p09: $('input:radio[name=pregunta9]:checked'),
        p10: $('input:radio[name=pregunta10]:checked'),
        com: $('#comentarios'),
    }
    console.log('ejecutando...')
    console.log(datas)
    console.log(d)
});
