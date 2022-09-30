const imagens = document.querySelectorAll(".imagens__escolha");
const modal = document.querySelector(".modal__carrinho")
const quantidade = document.getElementById("quantidade");

let storangeFunctions = {
	guardarContagem: (valor) =>localStorage.setItem("quantidade", JSON.stringify(valor)) || "",
	pegarContagem: () => JSON.parse(localStorage.getItem("quantidade")) || "0",
	guardarCarrinho: (valor)=>localStorage.setItem("carrinho", JSON.stringify(valor)) || "",
	pegarCarrinho: () => JSON.parse(localStorage.getItem("carrinho")) || "	<p id='cart'>Cart</p><p>Your cart is empty</p>",
};

function incrementar(valor) {
	let numero = Number(quantidade.innerHTML) + valor;
	
	if(numero >= 0){
		quantidade.innerHTML = numero
		storangeFunctions.guardarContagem(quantidade.innerHTML);
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

function menuToggle(){
	const imagem = document.getElementById("menu__humburger")
	const blur = document.querySelector(".blur")
	humburguer = document.querySelector(".humburger")
	humburguer.classList.toggle("active")

	if(humburguer.classList.contains("active")){
		imagem.src = "./img/icon-close.svg"
		blur.classList.add("active")
	}else{
		imagem.src = "./img/icon-menu.svg"
		blur.classList.remove("active")
	}
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

	storangeFunctions.guardarCarrinho(modal.innerHTML)
	modalCarrinho()
	setTimeout(modalCarrinho, 1000)
}

function limparCarrinho(){
	modal.innerHTML = ""
	let html = `
	<p id="cart">Cart</p>
	<p>Your cart is empty</p>
	`
	modal.innerHTML += html
	storangeFunctions.guardarCarrinho(modal.innerHTML)
	modalCarrinho()
}

modal.innerHTML = storangeFunctions.pegarCarrinho()
quantidade.innerHTML = storangeFunctions.pegarContagem();
mudarImagem("./img/image-product-1.jpg", 0);