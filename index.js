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
  'llama a la persona que elijan los demas y decile que la amas o toma 2 shots',
  'la persona en frente tuyo es tu dios, tenes q hacer todo lo que diga o tomar y cada vez que te da un reto tomas',
  'toman todos menos vos',
  'date vuelta por una ronda, si te cagan mal ahi',
  'elegi un color y todas las personas con una prenda de ese color toman',
  'habla 1 ronda en ingles nada mas',
  '20 flexiones',
  'decile a tus viejos que dejaste una mina embarazada/estas embarazada',
  'el que esta a tu derecha puede hacer un trago con lo que quiera y lo tenes que tomar',
  'subi una historia haciendo algo que elijan los demas',
  'tomas vos y los que tienen tu color de pelo',
  'las personas mas altas que vos toman',
  'las personas mas bajas que vos toman',
  'que la persona a tu derecha le diga a todos tu historial de busqueda',
  'mandale la ultima foto de tu galeria a tu ex o toma',
  'tenes 5 segundos para nombrar a todos, cada persona que te falte es un trago',
  'no hables por una ronda, tomas cada vez que hables',
  'los demas deciden el reto, si lo haces toman todos, sino vos tomas 3 shots',
  "señala el mejor culo y que tome",
  "toma sin usar las manos",
  "señala al que peor está vestido", 
  "empieza a tomar y todos te siguen, nadie para hasta que no pares",
  "ahora te llamas carlos/carla el q se equivoca ti nombre toma", 
  "elegí una categoría y empiecen a decir, el que se equivoca toma",
  "el que te haga cualquier pregunta por una ronda toma", 
  "que todos te descansen por 1 minuto, no toma nadie",
  "elegí a alguien y tienen que tomar al mismo tiempo hasta que vos pares",
  "todos deciden lo que tenes que hacer o tomas 5 shots",
  "todos deciden lo que tenes que hacer o tomas 5 shots",
  "todos deciden lo que tenes que hacer o tomas 5 shots",
  "todos deciden lo que tenes que hacer o tomas 5 shots",
  "todos deciden lo que tenes que hacer o tomas 5 shots",
  "todos deciden lo que tenes que hacer o tomas 5 shots",
  "contale a todos tu serie favorita y ellos deciden si tomas o no",
  "contra un chiste y si nadie se ríe tomas",
  "hacele a alguien una pregunta, si responde tomas vos sino toma la otra persona",
  "que otra persona te de de tomar y no paran hasta que esa persona decida",
  "toman los que es su primera vez jugando",
  "que te digan 2 personas, elegí una o toma 3 shots",
  "señala al más facha y que tome", 
  "señala al mas tonto y que tome",
  "beso a alguien que elijan los demás", 
  "nombra al que tenga la mamá más linda y toma el que elegis", 
  "nada, toman las rubias y si no hay toman todos",
  "tomas vos y las personas más altas que vos",
  "tomas vos y las personas más bajas que vos",
  "elegí a alguien para que tome",
  "elegí a alguien para que tome",
  "elegí a alguien para que tome", 
  "elegí a alguien para que tome",
  "elegí a alguien para que tome",
  "hacele un reto a alguien, si lo hace tomas y sino toma el otro",
  "canta una canción sin mirar la letra y si te equivocas tomas, sino toman todos", 
  "señala a la persona más fea y que tome, o toma 3 shots", 
  "deci el abecedario al revés, si te equivocas tomas, sino toman los demás", 
  "deci una frase motivacional y los demas deciden si tomas o no",
  "acompaña a la persona que sigue en su reto",  
  "chamuyate a alguien hasta que por lo menos te de un beso",
  "hace 10 flexiones con el más liviano arriba tuyo, si no llegas tomas",
  "todos te tienen que hacer reir por 30 segundos, si aguantas toman todos, sino tomas vos",
  "serví los vasos para una ronda de among us",
  "tomas vos y todos los demás, menos juan que hizo el juego y es un capo",
  "sácate una prenda en menos de 5 segundos o shot",
  "deci alguna caracteristica y todos señalen a la persona que tenga esa característica, la que sale toma",
  "si quebraste alguna vez toma vos y todos los que quebraron",
  "5 jugadores de fútbol en 5 segundos, si ganas toman los demás y si perdes vos tomas",
  "los que son más viejos que vos toman", 
  "los que son más jóvenes que vos toman",
  "deci que parte del cuerpo te atrae más y los demás deciden si tomas o no", 
  "conta algo flashero y los demás deciden si tomas o no", 
  "deci a quien te llevarías a una isla desierta y tomen los 2", 
  "hace una pregunta que se responda con si o no, la minoría toma",
  "que todos adivinen de que color es tu ropa interior, el que le erra toma"
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
    console.log(i)
    if(retos[i + 1] === undefined){
        i=0;
        shuffle(retos);
    }
}