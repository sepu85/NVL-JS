    var pelis = [
     {
       Nombre: “El señor de los anillos”,
       Genero: “Acción”
     },
     {
       Nombre: “Regreso al Futuro”,
       Genero: “Acción”
     },
    {
       Nombre: “Los increibles 2”,
       Genero: “Animación”
     },
     {
       Nombre: "Merry Poppins",
       Genero: "Aventura"
     },
      {
       Nombre: "Destroyer",
       Genero: "Acción"
     },
      {
       Nombre: "RedCon",
       Genero: "Acción"
     },
      {
       Nombre: "Titanic",
       Genero: "Romantica"
     },
      {
       Nombre: "50 Sombras de Grey",
       Genero: "Romantica"
     },
      {
       Nombre: "Matrix",
       Genero: "Acción"
     },
      {
       Nombre: "La Guerra de las Galaxias",
       Genero: "Aventura"
     },
      {
       Nombre: "Han Solo",
       Genero: "Aventura"
     },
      {
       Nombre: "Instant Family",
       Genero: "Comedia"
     },
      {
       Nombre: "Querida he encogido a los ninos",
       Genero: "Comedia"
     },
      {
       Nombre: "El Aro",
       Genero: "Acción"
     },
      {
       Nombre: "Rapidos y Furiosos",
       Genero: "Acción"
     },
      {
       Nombre: "The Grinch",
       Genero: "Comedia"
     },
      {
       Nombre: "Indivisible",
       Genero: "Acción"
     },
      {
       Nombre: "Made In Italy",
       Genero: "Comedia"
     },
      {
       Nombre: "Amanda",
       Genero: "Romantica"
     },
      {
       Nombre: "The Hangover",
       Genero: "Comedia"
     },
      {
       Nombre: "007",
       Genero: "Acción"
     },
      {
       Nombre: "Forest Gump",
       Genero: "Drama"
     },
      {
       Nombre: "Sense and Sensibility",
       Genero: "Drama"
     },
      {
       Nombre: "John Wick",
       Genero: "Accion"
     },
      {
       Nombre: "The Shinning",
       Genero: "Drama"
     }
    ];

    var eleLista = [];
    for (i=0; i<= 24; i++) {


    var miLista = document.querySelector(#targetLista);
    var eleLista[i] = document.createElement("li");

    eleLista[i].textcontent = pelis[i].Nombre + "\nGenero: " + pelis[i].Genero; 
    miLista.appenChild(eleLista[i]);


    }
