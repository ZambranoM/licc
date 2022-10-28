let on = "prendido";
let off = "apagado";
let est_Licuadora = off;
const $blender=document.querySelector("#blender");

//Creo una funcion para ver el estadode mi licuadora prendida o apagada
const offOrOn= function (revi){
    //ya que recivo una cadena de texto uso toLowercase para que no alla errores por ingreso de datos
    revi=revi.toLowerCase();
    //Comparacion;
    if (revi === off) {
        //Cambiamos el estado de la licudaro de apagado a prendido
         est_Licuadora = on;
        $blender.setAttribute("class","blender active");
        
    }else{
        est_Licuadora = off;
        $blender.setAttribute("class","blender");
    }
};