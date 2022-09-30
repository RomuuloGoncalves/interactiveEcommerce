const imagens = document.querySelectorAll(".imagens__escolha")

let storangeFunctions = {
        guardar: (valor)=> localStorage.setItem("quantidade", JSON.stringify(valor)) || "",
        pegar: ()=> JSON.parse(localStorage.getItem("quantidade")) || "0",
}

function incrementar(valor){
        let quantidade = document.getElementById("quantidade")
        quantidade.innerHTML = Number(quantidade.innerHTML) + valor
        storangeFunctions.guardar(quantidade.innerHTML)
}

function mudarImagem(imagemClicada, posicao){
        let imagemPrincipal = document.getElementById("imagemPrincipal")
        let imagem = imagens[posicao]
        imagens.forEach((elemento)=>{
                elemento.style.border = "none"
        })

        imagemPrincipal.src = imagemClicada
        imagem.style.border = "2px solid orange"
}

document.getElementById("quantidade").innerHTML = storangeFunctions.pegar()