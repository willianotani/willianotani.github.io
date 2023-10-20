const imagem_teste = document.querySelector("img");

imagem_teste.onclick = () =>{
    const mysrc = imagem_teste.getAttribute("src");
    if (mysrc === "images/breno.jpg"){
        imagem_teste.setAttribute("src", "images/exemplo.jpg");
    } else{
        imagem_teste.setAttribute("src", "images/breno.jpg");
    }
}

let botao = document.querySelector("button");
let mheader = document.querySelector("h1");

function setUserName() {
    const nomeguardado = prompt("DÊ-ME SEU NOME.");
    if (!nomeguardado) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      mheader.textContent = `ME DÁ UM PEDAÇO, ${myName}`;
    }
}
  

if (!localStorage.getItem("name")){
    nomedeusuario();
} else{
    const nomeguardado = localStorage.getItem("name");
    mheader.textContent = `Me dá um pedaço, ${nomeguardado}`;
}

botao.onclick = () => {
    nomedeusuario();
}
