// Script encargado de registrar y organizar horas de trabajo.
function onEdit(e) {
  var hoja = e.source.getActiveSheet();
  var celdaModificada = e.range;
  
// La acción se produce al modificar las celdas F4 y G4 en la hoja del Acumulador.
  if (hoja.getName() !== "Acumulador") return;
  var notacion = celdaModificada.getA1Notation();
  if (notacion === "F4" || notacion === "G4") {
    
var horasNuevas = celdaModificada.getValue();
    if (isNaN(horasNuevas) || horasNuevas === "") return;
    
// En función de que celda fue modificada (en función de qué trabajador registra sus horas) se modificará una columna u otra.
    var columnaDestino;
    if (notacion === "F4") {
      columnaDestino = 3; // Columna C
    } else {
      columnaDestino = 4; // Columna D
    }
    
// Se añadirán las horas según el día de la semana.
    var fechaHoy = new Date();
    var numeroDia = fechaHoy.getDay(); // 0=Dom, 1=Lun, 2=Mar, 3=Mie, 4=Jue, 5=Vie, 6=Sab
    
// Ajuste de la fila en función del día que sea.
    var filaDestino = numeroDia + 3;
    // Ajuste especial para el Domingo.
    if (numeroDia === 0) {
    filaDestino = 10;
    }
    
// Operación de acumulación.
    var rangoAcumulador = hoja.getRange(filaDestino, columnaDestino);
    var horasAnteriores = rangoAcumulador.getValue() || 0;
    
    // Sumamos en la casilla calculada dinámicamente.
    rangoAcumulador.setValue(horasAnteriores + horasNuevas);
    
// Dejamos la celda de entrada vacía otra vez.
    celdaModificada.clearContent();
  }
}