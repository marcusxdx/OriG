//Numero de imagenes de fonod
$numfoto=3;
//Timepo que tarda en realizar el cambio de imagen (1 seg = 1000)
$timeslider=5000;
//Timpo que tarda una imagen en pasar de ser opaca a ser visible y viceversa (1 seg = 1000)
$timeopacity=1000;


//Variable que indica si la ventana se esta visualizando o no
$enuso = true; 

//Funcion que se encarga de realizar el cambio de imagenes y sus animaciones
function slider(){
	//numero de la imagen a utilizar
	$i = 2;
	//Imagen en visible
	$div = 2;
	//Imagen no visible
	$hidiv = 1;
	setInterval(function () {
		//If que utiliza la variable $enuso para decide si se realiza el cambio o no el cambio de la imagen
		if($enuso){
			$('div#'+$hidiv).css('background-image', "url('images/"+$i+".png')")
			$('div#'+$hidiv).animate({ opacity: 1 }, $timeopacity)
			$('div#'+$div).animate({ opacity: 0 }, $timeopacity)
			$fecha = new Date(jQuery.now());
			console.log($fecha.getMinutes()+":"+$fecha.getSeconds());

			//Condicion que detecta si la imagen en uso esta en el div par o impar, y modifica para el siguiente cambio
			if ($div % 2 === 0) {
				$div--;
				$hidiv++;
			}else{
				$div++;
				$hidiv--;
			}

			//Condicion que indica la foto a utilizar y vuelve a la primera una vez llega a la ultima
			if($i < $numfoto){
				$i++;
			}else{
				$i = 1;
			}
		}
	}, $timeslider)

}

//Al cargar la pagina web ejecuta el Slider
$(document).ready(slider)

//Funcion que detecta si la ventana esta en uso
$(window).focus(function() {
	$enuso = true;
});

//Funcion que detecta si la ventana no esta en uso
$(window).blur(function() {
	$enuso = false;
});