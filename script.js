/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
const keys = {a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat",};

function btmEncriptar(){
    const input = document.getElementById("input").value;
    const mensaje = encriptar(input);
    if (input) {
		document.getElementById("info").style.display = "none";
		document.getElementById("resultadoMensaje").style.display = "block";
		document.getElementById("btn-copiar").style.display = "block";
	} else {
		document.getElementById("info").style.display = "block";
		document.getElementById("resultadoMensaje").style.display = "none";
		document.getElementById("btn-copiar").style.display = "none";
	}
	document.getElementById("resultadoMensaje").value = mensaje;
}

function encriptar(text) {
	let result = "";

	for (let i = 0; i < text.length; i++) {
		const char = text.charAt(i);

		if (keys[char]) {
			result += keys[char];
		} else {
			result += char;
		}
	}
    return result;
}

function btmDesencriptar(){
    const input = document.getElementById("input").value;
    const mensaje = desencriptar(input);
    if (input) {
		document.getElementById("info").style.display = "none";
		document.getElementById("resultadoMensaje").style.display = "block";
		document.getElementById("btn-copiar").style.display = "block";
	} else {
		document.getElementById("info").style.display = "block";
		document.getElementById("resultadoMensaje").style.display = "none";
		document.getElementById("btn-copiar").style.display = "none";
	}
	document.getElementById("resultadoMensaje").value = mensaje;
}

function desencriptar(text) {
	const keysArray = Object.entries(keys);
	let result = text;
	keysArray.forEach(([key, value]) => {
		const regex = new RegExp(value, "g");
		result = result.replace(regex, key);
	});
	return result;
}

function btmCopiar(){
	const mensaje = document.getElementById("resultadoMensaje");
    mensaje.select()
    mensaje.setSelectionRange(0, 99999);
    document.execCommand("copy")
}