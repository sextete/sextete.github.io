values = [];

function addRecord() {
  var inp = document.getElementById('inputtext');
  values.push(inp.value);
  inp.value = "";
  displayRecord();
}

function displayRecord() {
  document.getElementById("jugadores").innerHTML = values.join(", ");
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

var retos = [
  'tomar si o si por pete',
  'escribirle lo que elijan los de mas a quien elijan los de mas',
  'agregarle rey a todo lo que diga',
  'llamar a alguien y decirle que la ama'
]

function darReto() {
  document.getElementById('reto').innerHTML = choose(values) + ' tiene que ' + choose(retos);
}