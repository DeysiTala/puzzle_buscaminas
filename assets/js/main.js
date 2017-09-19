var tablero = document.getElementById("tablero");
var tabla = document.createElement("table");

var mapa = [
    "*******",
    "** ** *",
    "** ****",
    "****  *",
    "* **  *",
    "**** **",
    "*******",
]

var arr = new Array(mapa.length);

for(var i = 0; i<arr.length; i++)
    {
        arr[i] = new Array(mapa[0].length);
    }
//creando el laberinto
for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < mapa[i].length; j++) {
            var celda = document.createElement('td');
            celda.id=i+""+j;
            fila.appendChild(celda);
     					
		} 
		tabla.appendChild(fila);			    
	}
 tablero.appendChild(tabla);
$("td").click(function(){
	let xy = $(this).attr("id");
	

});

//-----------------------------------------
/*

var imagenes = [
	"assets/img/bomb2.Png", "assets/img/bandera.png", "assets/img/bomb2.Png", "assets/img/bandera.png","assets/img/bandera.png", "assets/img/bomb2.Png","assets/img/bomb2.Png",
	"assets/img/bomb2.Png", "assets/img/bandera.png", "assets/bandera.png", "assets/img/bomb2.Png", "assets/img/bandera.png", "assets/img/bomb2.Png","assets/img/bandera.png",
	"assets/img/bandera.png", "assets/img/bomb2.Png","assets/bandera.png", "assets/img/bomb2.Png", "assets/img/bandera.png", "assets/img/bomb2.Png","assets/img/bandera.png",
	"assets/img/bomb2.Png", "assets/img/bandera.png", "assets/img/bomb2.Png", "assets/img/bandera.png","assets/img/bandera.png", "assets/img/bomb2.Png","assets/img/bomb2.Png",
	"assets/img/bomb2.Png", "assets/img/bandera.png", "assets/img/bomb2.Png", "assets/img/bandera.png","assets/img/bandera.png", "assets/img/bomb2.Png","assets/img/bomb2.Png",
	"assets/img/bomb2.Png", "assets/img/bandera.png", "assets/img/bomb2.Png", "assets/img/bandera.png","assets/img/bandera.png", "assets/img/bomb2.Png","assets/img/bomb2.Png"
];	
var fondito;

function createimg() {


	for (var i = 0; i < imagenes.length; i++) {
		var imagn = document.getElementById("container");
		var fondo = document.getElementById("container");
		fondito = "assets/img/fondo2.png";



		var tag_img = document.createElement("img");
		tag_img.setAttribute('src', fondito);
		tag_img.setAttribute("id", i);
		tag_img.classList.add("picture");
		imagn.appendChild(tag_img);
		//tag_img.appendChild(fondito);

	}

}
createimg();
//cambio de imagenes
var contadorClick = 0;
var imagenAnterior;
var idimagenAnterior;
function otherimage(e) {

	var cont_image = e.target;
	var imgId = cont_image.id;
	cont_image.src = imagenes[imgId];
	contadorClick++;
	console.log(contadorClick);
	if (contadorClick == 1) {
		imagenAnterior = cont_image.src;//enlace de la imagen
		idimagenAnterior = cont_image.id;//buscamos el id
		//alert(perdiste)
	} else if (contadorClick == 2) {
		console.log(contadorClick);
		contadorClick = 0;
		if (imagenAnterior == cont_image.src) {
			alert("iguales");
		} else {
			//console.log(imagenAnterior);
			//console.log(cont_image);
			setTimeout(function() {
				alert("sigue jugando")
				cont_image.src = fondito;
				var elementoAnterior = document.getElementById(idimagenAnterior);
				elementoAnterior.removeAttribute('src');
				elementoAnterior.src = fondito;
			}, 2000);

		}
	}

}

var cont = document.getElementById("container");
cont.addEventListener("click", otherimage);*/