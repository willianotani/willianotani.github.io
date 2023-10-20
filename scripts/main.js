const imagem_teste = document.querySelector("img");


  

imagem_teste.onclick = () =>{
    const mysrc = imagem_teste.getAttribute("src");
    if (mysrc === "images/breno.jpg"){
        imagem_teste.setAttribute("src", "images/exemplo.jpg");
    } else{
        imagem_teste.setAttribute("src", "images/breno.jpg");
    }
}


