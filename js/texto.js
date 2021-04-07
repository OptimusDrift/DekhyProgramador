function Repetir() {
    if (!Error(3)) {
        var msj = "";
        for (let index = 0; index < parseInt(document.getElementById("num2").value); index++) {
            msj += document.getElementById("num1").value + "<br>";
        }
        document.getElementById("resultado").innerHTML = Mensaje("Oración Papil", msj, "success", "fa-book");
    }else{
        MensajeError();
    }
}

function Letras() {
    if (!Error(2)) {
        if (parseInt(document.getElementById("num1").value.length) == 1) {
            singular = " raíz.";
        }else{
            singular = " raíces."
        }
        document.getElementById("resultado").innerHTML = Mensaje("Papas en la Papa", "La papa tiene " + document.getElementById("num1").value.length + singular,"success", "fa-book");
    }else{
        MensajeError();
    }
}

function Parrafo() {
    if (!Error(5)) {
        frase = "Bien tu tonta papa se llama " + document.getElementById("num1").value +" "+ document.getElementById("num2").value + ", fue plantada la fecha "+ document.getElementById("num3").value + ". Y su granja de cultivo fue " + document.getElementById("num4").value + ". ¿Feliz?";
        frases = [frase,frase,frase,"... <br>" + frase,"Dekhy, ¿Realmente esto es necesario? <br> ¡Claro que sí, contesta! <br>" + frase, "¿Porque una papa tendría un apellido o siquiera un nombre? <br>" + frase, "Dekhy, ve a la esquina a ver si llueve. <br> «Vuelve a intentarlo otra vez.»","¿Porqué rayos sigo haciendote caso? <br>" + frase,"Sí lo digo ¿Te callarías un rato? <br>" + frase,"Ufff… con solo pensarlo tu me estas quitando la cordura a mí. <br>" + frase];
        document.getElementById("resultado").innerHTML = Mensaje("Papas en la Papa", frases[parseInt((Math.random() * 9)+1)], "success", "fa-book");
    }else{
        MensajeError();
    }
}