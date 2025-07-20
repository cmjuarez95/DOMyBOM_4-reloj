const fechaActual = new Date()

const opcionesFecha={
    weekday: "long", // 'long' (ej. "lunes"), 'short' (ej. "lun"), 'narrow' (ej. "L")
    year: "numeric", //'numeric' (ej. "2023"), '2-digit' (ej. "23")
    month: "long", // 'numeric' (ej. "1"), '2-digit' (ej. "01"), 'long' (ej. "enero"), 'short' (ej. "ene"), 'narrow' (ej. "E")
    day: "numeric", //'numeric' (ej. "3"), '2-digit' (ej. "03")

}

const fechaFormateada= fechaActual.toLocaleDateString(undefined, opcionesFecha)
console.log(fechaFormateada)