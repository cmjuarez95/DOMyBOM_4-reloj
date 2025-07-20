const fechaActual = new Date()

const opcionesFecha={
    weekday: "long", // 'long' (ej. "lunes"), 'short' (ej. "lun"), 'narrow' (ej. "L")
    year: "numeric", //'numeric' (ej. "2023"), '2-digit' (ej. "23")
    month: "long", // 'numeric' (ej. "1"), '2-digit' (ej. "01"), 'long' (ej. "enero"), 'short' (ej. "ene"), 'narrow' (ej. "E")
    day: "numeric", //'numeric' (ej. "3"), '2-digit' (ej. "03")
}

const opcionesHora={
    hora: "numeric",
    minutos:"numeric",
    segundos:"numeric",
    hour12: false // Esto fuerza el formato de 24 horas

}

function actualizarReloj() {
    const horaActual=new Date()
    const horaFormateada=horaActual.toLocaleTimeString(undefined,opcionesHora)
    hora.textContent=horaFormateada
}

const fecha = document.querySelector("#fecha")
let hora = document.getElementById("hora")

actualizarReloj()
const fechaFormateada= fechaActual.toLocaleDateString(undefined, opcionesFecha)
fecha.textContent=fechaFormateada
setInterval(actualizarReloj,1000)




