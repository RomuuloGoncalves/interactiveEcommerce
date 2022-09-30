function incrementar(valor){
        let quantidade = document.getElementById("quantidade")
        quantidade.innerHTML = Number(quantidade.innerHTML) + valor
        storangeFunctions.guardar(quantidade.innerHTML)
}

let storangeFunctions = {
        guardar: (valor)=> localStorage.setItem("quantidade", JSON.stringify(valor)) || "",
        pegar: ()=> JSON.parse(localStorage.getItem("quantidade")) || "0",
}

document.getElementById("quantidade").innerHTML = storangeFunctions.pegar()