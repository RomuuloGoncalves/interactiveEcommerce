const imagens = document.querySelectorAll(".imagens__escolha");

let storangeFunctions = {
	guardar: (valor) =>
		localStorage.setItem("quantidade", JSON.stringify(valor)) || "",
	pegar: () => JSON.parse(localStorage.getItem("quantidade")) || "0",
};

function incrementar(valor) {
	let quantidade = document.getElementById("quantidade");
	quantidade.innerHTML = Number(quantidade.innerHTML) + valor;
	storangeFunctions.guardar(quantidade.innerHTML);
}

function mudarImagem(imagemClicada, posicao) {
	let imagemPrincipal = document.querySelector("#imagem__principal img");
	let imagem = imagens[posicao];
	imagens.forEach((elemento) => {
		imagemPrincipal.style.border = "none";
		elemento.style.opacity = "1";
	});

	imagemPrincipal.src = imagemClicada;
	imagem.style.border = "2px solid orange";
	imagem.style.opacity = "0.5";
}

document.getElementById("quantidade").innerHTML = storangeFunctions.pegar();
mudarImagem("./img/image-product-1.jpg", 0);
