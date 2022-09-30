const imagens = document.querySelectorAll(".imagens__escolha");
const modal = document.querySelector(".modal__carrinho")
const quantidade = document.getElementById("quantidade");

let storangeFunctions = {
	guardar: (valor) =>localStorage.setItem("quantidade", JSON.stringify(valor)) || "",
	pegar: () => JSON.parse(localStorage.getItem("quantidade")) || "0",
};

function incrementar(valor) {
	let numero = Number(quantidade.innerHTML) + valor;
	
	if(numero >= 0){
		quantidade.innerHTML = numero
		storangeFunctions.guardar(quantidade.innerHTML);
	}
}

function mudarImagem(imagemClicada, posicao) {
	let imagemPrincipal = document.querySelector("#imagem__principal img");
	let imagem = imagens[posicao];
	imagens.forEach((elemento) => {
		elemento.style.border = "none";
		elemento.style.opacity = "1";
	});

	imagemPrincipal.src = imagemClicada;
	imagem.style.border = "2px solid orange";
	imagem.style.opacity = "0.5";
}

function modalCarrinho(){
	modal.classList.toggle ("active")
}

function adicionarCarrinho(){
	modal.innerHTML = ""
	let html = `
	<p id="cart">Cart</p>
	<div class="compra">
		<img src="./img/image-product-1-thumbnail.jpg"
			onclick="mudarImagem('./img/image-product-1.jpg', 0)" alt="">
		<div class="info">
			<p>Fall Limited Edition Seneakers</p>
			<p>$125.00 X ${quantidade.innerHTML} <span>$ ${125.00 * Number(quantidade.innerHTML)}</span></p>
		</div>
		<div class="lixo" onclick="limparCarrinho()"><img src="./img/icon-delete.svg" alt=""></div>
	</div>
	`
	modal.innerHTML += html

	modalCarrinho()

	setTimeout(modalCarrinho, 1000)
}

function limparCarrinho(){
	modal.innerHTML = ""
	let html = `
	<p id="cart">Cart</p>
	`
	modal.innerHTML += html
	modalCarrinho()
}

document.getElementById("quantidade").innerHTML = storangeFunctions.pegar();
mudarImagem("./img/image-product-1.jpg", 0);