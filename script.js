var icone = document.querySelectorAll(".icone");

icone.forEach((icone, index) =>{
    icone.addEventListener("click", () =>{
        document.querySelector(".active").classList.remove("active");
        icone.classList.add("active");

        var indicador = document.querySelector(".indicador");

        indicador.style.left = `${index * 93 + 48}px`
    } )
})