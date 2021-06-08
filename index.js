jugadores_inicial = [];

function addRecord() {
  var inp = document.getElementById('inputtext');
  jugadores_inicial.push(inp.value);
  inp.value = "";
  displayRecord();
}

function displayRecord() {
  document.getElementById("jugadores").innerHTML = jugadores_inicial.join(", ");
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}


var retos_inicial = [
  'toma si o si por pete',
  'tiene que escribirle lo que elijan los de mas a quien elijan los de mas',
  'agregale rey a todo lo que digas por una ronda',
  'llama a la persona que elijan los demas y decile que la amas',
  'tiene que darle un beso a la persona de su izquierda',
  'tiene que darle un beso a la persona de su derecha',
  'elegi a alguien para que sea tu dueño, y tenes que hacer todo lo que diga',
  'toman todos menos vos',
  'date vuelta por una ronda, si te cagan mal ahi',
  'elegi un color y todas las personas con una prenda de ese color toman',
  'dale un beso a la persona que elijas',
  'habla 2 rondas en ingles nada mas',
  'confesa que mama esta mas buena de los de la ronda, la que elegis toma',
  '20 flexiones',
  'decile a tus viejos que dejaste una mina embarazada/estas embarazada',
  'el que esta a tu derecha puede hacer un trago con lo que quiera y lo tenes que tomar',
  'subi una historia haciendo algo que elijan los demas',
  'tomas vos y los que tienen tu color de pelo',
  'que el mas alto se termine tu trago',
  'que el mas bajo se termine tu trago',
  'que la persona a tu derecha diga tu historial de busqueda',
  'mandale la ultima foto de tu galeria a tu ex o toma',
  'tenes 5 segundos para nombrar a todos, a los que no llegues a nombrar les tenes que dar un beso',
  'no hables por una ronda',
  'los demas deciden el reto'
]


function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

var retos = shuffle(retos_inicial)
console.log(retos_inicial)



var i=0;
function darReto(){
    document.getElementById("reto").innerHTML = choose(jugadores_inicial) + " "+ retos[i];
    i++;
    if(retos[i + 1] === undefined){
        i=0;
        shuffle(retos);
    }
}