window.addEventListener("DOMContentLoaded", function() {
    init()
});

function init() {
    var a = document.createElement("div");
    a.setAttribute("id", "qunit");
    var b = document.createElement("div");
    b.setAttribute("id", "qunit-fixture");
    var c = document.getElementsByTagName("body")[0];
    c.insertBefore(a, c.firstChild), c.insertBefore(b, c.firstChild)
}
var logBackup = console.log,
    logMessages = [];
console.log = function() {
    logMessages.push.apply(logMessages, arguments), logBackup.apply(console, arguments)
};
var alerta = "";
window.alert = function(a) {
    alerta = a.trim()
}, window.prompt = function() {
    return ""
};
const BLANCO = "rgb(255, 255, 255)",
    NEGRO = "rgb(0, 0, 0)";
QUnit.module("Ejercicio 1"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio1, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio1();
    var b = $("#contenedor"),
        c = "" !== b.css("color");
    a.ok(c, "Color de fuente"), c = "" !== b.css("border"), a.ok(c, "Color de borde"), c = "" !== b.css("background") || "" !== b.css("background-color"), a.ok(c, "Color de fondo")
}), QUnit.module("Ejercicio 2"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio2, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio2();
    var b = $("#lista-no-ordenada").find("li"),
        c = "green" === b.eq(13).css("color") || "rgb(0, 128, 0)" === b.eq(13).css("color");
    a.ok(c, "Color verde (green)"), c = "italic" === b.eq(1).css("font-style"), a.ok(c, "Estilo it\xE1lica"), c = "uppercase" === b.eq(1).css("text-transform") && "uppercase" === b.eq(3).css("text-transform") && "uppercase" === b.eq(9).css("text-transform") && "uppercase" === b.eq(11).css("text-transform") && "uppercase" === b.eq(15).css("text-transform"), a.ok(c, "Estilo may\xFAsculas")
}), QUnit.module("Ejercicio 3"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio3, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio3();
    var b = $("#dia-noche"),
        c = "img/noche.png" === b.attr("src");
    a.ok(c, "Imagen correcta (noche.png)"), c = "200" === b.attr("width"), a.ok(c, "Ancho correcto"), c = "193" === b.attr("height"), a.ok(c, "Altura correcto")
}), QUnit.module("Ejercicio 4a"), QUnit.test("C\xE1lculo correcto", function(a) {
    var b, c = $("#hello-world");
    aplicarCambioTexto("hello"), a.ok("hello" === c.text(), "Texto correcto (hello)"), aplicarCambioTexto("world"), a.ok("world" === c.text(), "Texto correcto (world)"), aplicarCambioNegritas();
    var d = c.hasClass("negritas");
    aplicarCambioNegritas();
    var e = c.hasClass("negritas");
    a.ok(d || e, "Clase negritas"), aplicarCambioCursivas(), d = c.hasClass("cursivas"), aplicarCambioCursivas(), e = c.hasClass("cursivas"), a.ok(d || e, "Clase cursivas"), aplicarCambioSubrayado(), d = c.hasClass("subrayado"), aplicarCambioSubrayado(), e = c.hasClass("subrayado"), a.ok(d || e, "Clase subrayado"), aplicarCambioSeparacion(5), b = "5px" === c.css("letter-spacing"), a.ok(b, "Espaciado de caracteres"), aplicarCambioTamano(), d = c.hasClass("mayusculas"), aplicarCambioTamano(), e = c.hasClass("mayusculas"), a.ok(d || e, "Cambio de tama\xF1o"), aplicarCambioColor("#ff0000"), b = "#ff0000" === c.css("color") || "rgb(255, 0, 0)" === c.css("color"), a.ok(b, "Color de fuente")
}), QUnit.module("Ejercicio 4"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio4, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio4(), a.ok($("#deshabilitame").prop("disabled"), "Campo desactivado")
}), QUnit.module("Ejercicio 5"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio5, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio5(), a.ok(0 === $("#desmarca").find("input:checked").length, "Checkboxes desmarcados"), a.ok($("#marca").find("input").eq(3).is(":checked"), "Radiobutton marcado")
}), QUnit.module("Ejercicio 6"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio6, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    var b = $("#quiero-crecer");
    ejercicio6(), a.ok("600px" === b.css("width") && "400px" === b.css("height"), "Medidas ajustadas")
}), QUnit.module("Ejercicio 7"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio7, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio7(), a.ok($("#registro :text").prop("readonly"), "S\xF3lo lectura (campo tipo text)")
}), QUnit.module("Ejercicio 8"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio8, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio8(), a.ok("2" === $("#ejercicio8 select").val(), "Opci\xF3n seleccionada (Opci\xF3n 2)")
}), QUnit.module("Ejercicio 9"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio9, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio9(), a.ok(1 === $("#madre #hijo").length, "Cambio de padre a madre")
}), QUnit.module("Ejercicio 10"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio10, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    var b = $("#lista-dias-semana"),
        c = $("#lista-meses");
    ejercicio10();
    a.ok(7 === b.find("li").length && $.trim(b.find("li").text()) === "LunesMartesMi\xE9rcolesJuevesViernesS\xE1badoDomingo", "D\xEDas de la semana");
    a.ok(12 === c.find("li").length && $.trim(c.find("li").text()) === "EneroFebreroMarzoAbrilMayoJunioJulioAgostoSeptiembreOctubreNoviembreDiciembre", "D\xEDas del a\xF1o");
    a.ok("H3" === b.prev().prop("nodeName") && "Lista de d\xEDas" === $.trim(b.prev().text()), "Subencabezado lista de d\xEDas");
    a.ok("H3" === c.prev().prop("nodeName") && "Lista de meses" === $.trim(c.prev().text()), "Subencabezado lista de meses");
    a.ok("IMG" === c.next().prop("nodeName") && "img/jquery_logo.png" === $.trim(c.next().attr("src")), "Logotipo jQuery")
}), QUnit.module("Ejercicio 11"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio11, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    var b = $("#cabeza");
    ejercicio11();
    a.ok(0 === b.find(".piojos").length, "La cabeza no debe tener piojos");
}), QUnit.module("Ejercicio 12"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio12, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    var b = $("#gato");
    ejercicio12();
    var c = b.find("tr").eq(2).find("td").eq(0),
        d = b.find("tr").eq(2).find("td").eq(1),
        e = b.find("tr").eq(2).find("td").eq(2),
        f = 3 === b.find("tr").length && ("0" === c.text() || "X" === c.text()) && ("0" === d.text() || "X" === d.text()) && ("0" === e.text() || "X" === e.text());

    a.ok(f, "Diagonal ganadora");
    var g = b.find("tr").eq(0).find("td").eq(0),
        h = b.find("tr").eq(0).find("td").eq(2),
        i = b.find("tr").eq(1).find("td").eq(1);
    f = (g.css("background-color") !== BLANCO || h.css("background-color") !== BLANCO) && i.css("background-color") !== BLANCO && (c.css("background-color") !== BLANCO || e.css("background-color") !== BLANCO), a.ok(f, "Diagonal ganadora (marcado)")
}), QUnit.module("Ejercicio 13"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio13, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio13();
    var b = $("#arbol-genealogico").find("div");
    a.equal(b.eq(4).css("background-color"), "rgb(0, 0, 255)", "Hermana"), a.equal(b.eq(3).css("background-color"), "rgb(0, 128, 0)", "Yo"), a.equal(b.eq(2).css("background-color"), "rgb(255, 0, 0)", "Hermano"), a.equal(b.eq(1).css("background-color"), "rgb(128, 0, 128)", "Pap\xE1"), a.equal(b.eq(0).css("background-color"), "rgb(128, 128, 128)", "Abuelo")
}), QUnit.module("Ejercicio 14"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio14, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio14(), a.equal(logMessages[logMessages.length - 5], "Hugo", "Heredero 1: Hugo"), a.equal(logMessages[logMessages.length - 4], "Mar\xEDa", "Heredero 2: Mar\xEDa"), a.equal(logMessages[logMessages.length - 3], "Paco", "Heredero 3: Paco"), a.equal(logMessages[logMessages.length - 2], "Lisa", "Heredero 4: Lisa"), a.equal(logMessages[logMessages.length - 1], "Luis", "Heredero 5: Luis")
}), QUnit.module("Ejercicio 15"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio15, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio15();
    var b = $("#marcalos").find("input:text");
    a.ok("rgb(0, 128, 0)" === b.eq(0).css("border-color"), "Input 1: borde verde"), a.ok("rgb(255, 0, 0)" === b.eq(1).css("border-color"), "Input 2: borde rojo"), a.ok("rgb(255, 0, 0)" === b.eq(2).css("border-color"), "Input 3: borde rojo"), a.ok("rgb(0, 128, 0)" === b.eq(3).css("border-color"), "Input 4: borde verde")
}), QUnit.module("Ejercicio 16"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio16, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio16();
    var b = $("#sumas tbody").find("td");
    a.equal($.trim(b.eq(4).text()), "75", "Suma: 75"), a.equal($.trim(b.eq(9).text()), "150", "Suma: 150"), a.equal($.trim(b.eq(14).text()), "310", "Suma: 310")
}), QUnit.module("Ejercicio 17"), QUnit.test("Existencia de la funci\xF3n", function(a) {
    a.equal(typeof ejercicio17, "function", "La funci\xF3n existe")
}), QUnit.test("C\xE1lculo correcto", function(a) {
    ejercicio17();
    var b = $("#mayores-que-10").find("td"),
        c = b.eq(0).css("color") !== NEGRO && b.eq(0).css("background-color") !== BLANCO;
    a.ok(c, "Celda 1 (183)"), c = b.eq(2).css("color") !== NEGRO && b.eq(2).css("background-color") !== BLANCO, a.ok(c, "Celda 3 (201)"), c = b.eq(5).css("color") !== NEGRO && b.eq(5).css("background-color") !== BLANCO, a.ok(c, "Celda 6 (97)"), c = b.eq(6).css("color") !== NEGRO && b.eq(6).css("background-color") !== BLANCO, a.ok(c, "Celda 7 (21)"), c = b.eq(8).css("color") !== NEGRO && b.eq(8).css("background-color") !== BLANCO, a.ok(c, "Celda 9 (47)")
}), QUnit.module("Ejercicio 18"), QUnit.test("C\xE1lculo correcto", function(a) {
    var b = a.async(2),
        c = $("#foco"),
        d = $("body"),
        e = !1;
    setTimeout(function() {
        c.click();
        var f = "img/foco_encendido.png" === c.find("img").attr("src"),
            g = "rgb(255, 221, 115)" === d.css("background-color");
        a.ok(f, "Foco se enciende"), a.ok(g, "Color de fondo (amarillo)"), e = f && g, b()
    }, 1e3), setTimeout(function() {
        c.click();
        var f = e && "img/foco_apagado.png" === c.find("img").attr("src"),
            g = e && d.css("background-color") === BLANCO;
        a.ok(f, "Foco se apaga"), a.ok(g, "Color de fondo (blanco)"), b()
    }, 1500)
}), QUnit.module("Ejercicio 19"), QUnit.test("C\xE1lculo correcto", function(a) {
    a.equal($("#a-mayusculas").val("Hola mundo desde la UCC").blur().val(), "HOLA MUNDO DESDE LA UCC", "El texto se convierte a may\xFAsculas")
}), QUnit.module("Ejercicio 20");
var en_otra_pesania = !1;
$(document).ready(function() {
    $(window).blur(function() {
        en_otra_pesania = !0
    })
}), QUnit.test("C\xE1lculo correcto", function(a) {
    var b = a.async(),
        c = $("#lista-buscadores");
    c.find("option").eq(1).prop("selected", !0), setTimeout(function() {
        a.ok(en_otra_pesania, "Abrir buscador en otra pesta\xF1a"), b()
    }, 500)
}), QUnit.module("Ejercicio 21"), QUnit.test("C\xE1lculo correcto", function(a) {
    $("#llenar-estados").click();
    var b = 32 === $("#lista-estados").find("option").length;
    a.ok(b, "Llenar Estados de la Rep\xFAblica"), $("#borrar-estados").click();
    var c = b && 0 === $("#lista-estados").find("option").length;
    a.ok(c, "Borrar Estados de la Rep\xFAblica")
}), QUnit.module("Ejercicio 22"), QUnit.test("C\xE1lculo correcto", function(a) {

    var b = $('#usuario');
    var c = $('#contra1');
    var d = $('#contra2');
    var e = $('#acuerdos');

    c.val('12345678');
    d.val('12345678');
    e.prop('checked', true);

    $.each(usuariosRegistrados, function(k,v){
        b.val(v);
        $('#nuevo-usuario').submit();
        a.ok( $('#errores').is(":visible") , 'Validación de usuario repetido ('+ v + ')');
        $('#errores').hide();
    });

    b.val('testuser');
    c.val('12345678');
    d.val('87654321');
    $('#nuevo-usuario').submit();
    a.ok( $('#errores').is(":visible") , 'Validación de contraseñas deben ser iguales');

    b.val('testuser');
    c.val('12345678');
    d.val('12345678');
    e.prop('checked', false);
    $('#nuevo-usuario').submit();
    a.ok( $('#errores').is(":visible") , 'Validación de la aceptación de los términos (marcar checkbox)');

}),
    QUnit.module("Ejercicio 23"), QUnit.test("C\xE1lculo correcto", function(a) {
    $("#pesos").val("1000").trigger("keyup");

    a.equal($.trim($("#dolares h4").text()), 51.282051282051285, "Dolares correctos");
    a.equal($.trim($("#euros h4").text()), 46.425255338904364, "Euros correctos");
    a.equal($.trim($("#libras h4").text()), 41.511000415110004, "Libras correctos");

}), QUnit.module("Ejercicio 24"), QUnit.test("C\xE1lculo correcto", function(a) {
    var b = a.async(6),
        c = !1,
        d = !1;
    $("#galeria-animales").find("li").each(function(e) {
        var f = $(this);
        f.trigger("mouseenter"), c = !1, d = !1, setTimeout(function() {
            c = f.find("span").is(":hidden"), a.ok(c, "Se oculta el t\xEDtulo " + (e + 1)), b(), f.trigger("mouseleave")
        }, 500), setTimeout(function() {
            d = f.find("span").is(":visible"), a.ok(c && d, "Se muestra el t\xEDtulo " + (e + 1)), b()
        }, 1e3)
    })
}), QUnit.module("Ejercicio 25"), QUnit.test("C\xE1lculo correcto", function(a) {
    var b = a.async(4),
        c = !1,
        d = !1,
        e = !1;
    $("#galeria-miniaturas").find("li").eq(1).find("a").trigger("click"), c = !1, d = !1, setTimeout(function() {
        c = 1 >= $("#galeria-miniaturas-completa").find("img").css("opacity"), a.ok(c, "Se oculta la imagen 1"), b()
    }, 500), setTimeout(function() {
        var f = $("#galeria-miniaturas").find("li").eq(1).find("a").find("img").attr("src").replace(/^.*[\\\/]/, ""),
            g = $("#galeria-miniaturas-completa").find("img").attr("src").replace(/^.*[\\\/]/, "");
        d = g === f, a.equal(g, f, "La imagen completa corresponde a la miniatura 1"), e = "1" === $("#galeria-miniaturas-completa").find("img").css("opacity"), a.ok(c && d && e, "Se muestra la imagen 1"), b()
    }, 1500), setTimeout(function() {
        $("#galeria-miniaturas").find("li").eq(3).find("a").trigger("click")
    }, 2e3), c = !1, d = !1, e = !1, setTimeout(function() {
        c = 1 >= $("#galeria-miniaturas-completa").find("img").css("opacity"), a.ok(c, "Se oculta la imagen 3"), b()
    }, 2500), setTimeout(function() {
        var f = $("#galeria-miniaturas").find("li").eq(3).find("a").find("img").attr("src").replace(/^.*[\\\/]/, ""),
            g = $("#galeria-miniaturas-completa").find("img").attr("src").replace(/^.*[\\\/]/, "");
        d = g === f, a.equal(g, f, "La imagen completa corresponde a la miniatura 3"), e = "1" === $("#galeria-miniaturas-completa").find("img").css("opacity"), console.log($("#galeria-miniaturas-completa").find("img").css("opacity")), a.ok(c && d && e, "Se muestra la imagen 3"), b()
    }, 3500)
}), QUnit.module("Ejercicio 26"), QUnit.test("C\xE1lculo correcto", function(a) {
    for (var b = new Date, c = ["Tarea de prueba 1", "Tarea de prueba 2"], d = [b.getFullYear() + "-01-01", b.getFullYear() + "-12-31"], e = 0; e < c.length; e++) $("#nueva-tarea").val(c[e]), $("#fecha-tarea").val(d[e]), $("#boton-agregar-tarea").click(), a.ok(1 === $("#mis-tareas tbody").find("tr").last().find("td:contains('" + c[e] + "')").length, "Tarea " + (e + 1)), a.ok(1 === $("#mis-tareas tbody").find("tr").last().find("td:contains('" + d[e] + "')").length, "Fecha " + (e + 1));
    var f = $("#mis-tareas tbody").find("tr").length;
    window.confirm = function() {
        return !0
    }, $("#mis-tareas tbody").find("tr").last().find("a:contains('Eliminar')").click();
    var g = $("#mis-tareas tbody").find("tr").length;
    a.equal(g, f - 1, "Se elimina la tarea 2")
});
