function btmEncriptar() {
	const input = document.getElementById("input").value
    let condicion = /^[a-z\s]+$/;
    if(input.match(condicion)){
		const mensaje = encriptar(input);
		document.getElementById("info").style.display = "none";
		document.getElementById("resultadoMensaje").style.display = "block";
		document.getElementById("btn-copiar").style.display = "block";
		document.getElementById("input").value = "";
		document.getElementById("resultadoMensaje").value = mensaje;
	}
    else{
        swal("Debe ingresar solo letras minúsculas y sin acentos")
		document.getElementById("Munheco").src = "./imagenes/encriptado.jpg"
    }
}
function btmDesencriptar() {
	const input = document.getElementById("input").value
    let condicion = /^[a-z\s]+$/;
    if(input.match(condicion)){
		const mensaje = desencriptar(input);
		document.getElementById("info").style.display = "none";
		document.getElementById("resultadoMensaje").style.display = "block";
		document.getElementById("btn-copiar").style.display = "block";
		document.getElementById("input").value = "";
		document.getElementById("resultadoMensaje").value = mensaje;
	}
    else{
        swal("Debe ingresar solo letras minúsculas y sin acentos")
		document.getElementById("Munheco").src = "./imagenes/encriptado.jpg"
    }
}
function encriptar(stringEncritada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncritada = stringEncritada

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncritada.includes(matrizCodigo[i][0])){
            stringEncritada =stringEncritada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncritada
}
function desencriptar(stringDesencritada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencritada = stringDesencritada

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