function formSubmit() {
  document.getElementById("papas").submit();
}
function Error(n) {
  var err = false;
  for (let index = 1; index < n; index++) {
    if (document.getElementById("num" + index).value === "") {
      err = true;
    }
  }
  return err;
}

function Mensaje(txt1, txt2, color = "success", icono = "fa-calculator") {
  return (
    '<div class="container-fluid col-xl-3 col-md-6 mb-4"> <div class="card border-left-' +
    color +
    ' shadow h-100 py-2"> <div class="card-body"> <div class="row no-gutters align-items-center"> <div class="col mr-2"> <div class="text-xs font-weight-bold text-' +
    color +
    ' text-uppercase mb-1">' +
    txt1 +
    '</div> <div class="h5 mb-0 font-weight-bold text-gray-800">' +
    txt2 +
    '</div> </div> <div class="col-auto"> <i class="fa ' +
    icono +
    ' fa-2x text-gray-300"></i> </div> </div> </div> </div> </div> '
  );
}
function MensajeError() {
  document.getElementById("resultado").innerHTML = Mensaje(
    "¡ERROR!",
    "¡¡¡¡INGRESE LAS PAPAS!!!!",
    "danger",
    "fa-car"
  );
}
function Mayor() {
  if (!Error(5)) {
    var mayor = 1;
    i = parseInt(document.getElementById("num1").value);
    j = parseInt(document.getElementById("num1").value);
    var menor = 1;
    for (let index = 1; index < 4; index++) {
      if (
        i <
        parseInt(document.getElementById("num" + (parseInt(index) + 1)).value)
      ) {
        mayor = index + 1;
        i = parseInt(
          document.getElementById("num" + (parseInt(index) + 1)).value
        );
      } else if (
        i ==
        parseInt(document.getElementById("num" + (parseInt(index) + 1)).value)
      ) {
        mayor = 0;
      }
    }
    for (let index = 1; index < 4; index++) {
      if (
        j >
        parseInt(document.getElementById("num" + (parseInt(index) + 1)).value)
      ) {
        menor = index + 1;
        j = parseInt(
          document.getElementById("num" + (parseInt(index) + 1)).value
        );
      } else if (
        j ==
        parseInt(document.getElementById("num" + (parseInt(index) + 1)).value)
      ) {
        menor = 0;
      }
    }
    if (mayor != "0") {
      var grande = "La papa más grande es la: " + mayor + "° papa.";
    } else {
      var grande = "No existe una papa grande.";
    }

    if (menor != "0") {
      var peque = "La papa mas pequeña es la: " + menor + "° papa.";
    } else {
      var peque = "No existe una papa pequeña.";
    }

    document.getElementById("resultado").innerHTML =
      Mensaje("Papa Más Grande", grande) +
      Mensaje("Papa Más Pequeña", peque, "warning");
  } else {
    MensajeError();
  }
}

function Suma() {
  if (!Error(3)) {
    var i =
      parseInt(document.getElementById("num1").value) +
      parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = Mensaje(
      "Cantidad de Papas",
      i
    );
  } else {
    MensajeError();
  }
}

function Papasfahrenheit() {
  if (!Error(2)) {
    F = (parseInt(document.getElementById("num1").value) * 9) / 5 + 32;
    document.getElementById("resultado").innerHTML = Mensaje(
      "De papas Papascelsius a Papasfahrenheit",
      F + " °F"
    );
  } else {
    MensajeError();
  }
}

function Papascelsius() {
  if (!Error(2)) {
    C = ((parseInt(document.getElementById("num1").value) - 32) * 5) / 9;
    document.getElementById("resultado").innerHTML = Mensaje(
      "De papas Papasfahrenheit a Papascelsius",
      C + " °C"
    );
  } else {
    MensajeError();
  }
}

function Par() {
  if (!Error(2)) {
    var valor;
    if (parseInt(document.getElementById("num1").value) % 2 == 0) {
      valor = "La cantidad de papas es par";
    } else {
      valor = "La cantidad de papas es impar";
    }
    document.getElementById("resultado").innerHTML = Mensaje(
      "Papa partida en...",
      valor
    );
  } else {
    MensajeError();
  }
}

function Multiplos() {
  if (!Error(2)) {
    i = 1;
    multi = "0";
    while (i <= parseInt(document.getElementById("num1").value)) {
      if (i % 3 == 0) {
        multi += ", " + i;
      }
      i++;
    }
    document.getElementById("resultado").innerHTML = Mensaje(
      "Papas que se pueden cortar en 3",
      multi
    );
  } else {
    MensajeError();
  }
}

function Primos() {
  if (!Error(2)) {
    primo = true;
    for (i = 2; i < parseInt(document.getElementById("num1").value); i++) {
      if (parseInt(document.getElementById("num1").value) % i == 0) {
        primo = false;
        break;
      }
    }
    var sobrina;
    if (primo) {
      sobrina = "La papa es una papa prima, ¿Tendrá sobrinos?";
    } else {
      sobrina = "Efectivamente, esta papa está sola, ¡No tiene primos!";
    }
    document.getElementById("resultado").innerHTML = Mensaje(
      "Papas sobrinas",
      sobrina
    );
  } else {
    MensajeError();
  }
}

function Pure() {
  if (!Error(3)) {
    if (
      parseInt(document.getElementById("num1").value) >=
      parseInt(document.getElementById("num2").value)
    ) {
      document.getElementById("resultado").innerHTML = Mensaje(
        "¡ERROR!",
        "¡¡¡¡EL PRIMER TROZO DE PAPA DEBE SER MÁS PEQUEÑO!!!!",
        "danger"
      );
    } else {
      var valores = parseInt(document.getElementById("num1").value) + 1 + "";
      j = 0;
      for (
        let i = parseInt(document.getElementById("num1").value) + 1;
        i < parseInt(document.getElementById("num2").value);
        i++
      ) {
        if (i != valores.split(",")[0]) {
          valores += ", " + i;
        }
        j++;
      }
      if (j == 0) {
        var valores = "No se pudo añadir pure de papa, no tengo lugar.";
      }
      document.getElementById("resultado").innerHTML = Mensaje(
        "Pure de Papas",
        valores
      );
    }
  } else {
    MensajeError();
  }
}
