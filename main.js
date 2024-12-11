// Codigo de texto que se borra y se reescribe
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ingeniera Eléctrica Electrónica y Desarrolladora Fronted Jr.')
    .pauseFor(2500)
    .deleteAll()//Borra todo
    .typeString('¡Si lo puedes imaginar, lo puedes lograr!')
    .pauseFor(2500)
    .deleteChars(7) //El numero de caracteres que quiero que se borrer
    .typeString('<strong>programar!</strong>')
    .pauseFor(2500)
    .start();