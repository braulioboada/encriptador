function btmEncriptar(){
    const input = document.getElementById("input").value.toLowerCase();
    const mensaje = encriptar(input);
    if (input) {
		document.getElementById("info").style.display = "none";
		document.getElementById("resultadoMensaje").style.display = "block";
		document.getElementById("btn-copiar").style.display = "block";
		document.getElementById("input").value = "";
	} else {
		document.getElementById("info").style.display = "block";
		document.getElementById("resultadoMensaje").style.display = "none";
		document.getElementById("btn-copiar").style.display = "none";
		document.getElementById("Munheco").src = "./imagenes/encriptado.jpg"
		swal("Debe ingresar un texto")
	}
	document.getElementById("resultadoMensaje").value = mensaje;
}
function encriptar(stringEncritada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncritada = stringEncritada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncritada.includes(matrizCodigo[i][0])){
            stringEncritada =stringEncritada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncritada
}
function btmDesencriptar(){
    const input = document.getElementById("input").value;
    const mensaje = desencriptar(input);
    if (input) {
		document.getElementById("info").style.display = "none";
		document.getElementById("resultadoMensaje").style.display = "block";
		document.getElementById("btn-copiar").style.display = "block";
		document.getElementById("input").value = "";
	} else {
		document.getElementById("info").style.display = "block";
		document.getElementById("resultadoMensaje").style.display = "none";
		document.getElementById("btn-copiar").style.display = "none";
		document.getElementById("Munheco").src = "./imagenes/encriptado.jpg"
		swal("Debe ingresar un texto")
	}
	document.getElementById("resultadoMensaje").value = mensaje;
}
function desencriptar(stringDesencritada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencritada = stringDesencritada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencritada.includes(matrizCodigo[i][1])){
            stringDesencritada =stringDesencritada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencritada
}
function btmCopiar(){
	const mensaje = document.getElementById("resultadoMensaje");
    mensaje.select()
    mensaje.setSelectionRange(0, 99999);
    document.execCommand("copy")
	swal("Texto copiado")
}