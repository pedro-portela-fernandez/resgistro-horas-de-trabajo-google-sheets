// Script encargado de guardar en el historial las horas de cada semana y limpiar la hoja del acumulador.
function registrarSemana() {
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  
  var hojaAcumulador = libro.getSheetByName("Acumulador");
  var hojaHistorial = libro.getSheetByName("Historial");
  
// Leemos las celdas donde se almacena el total de horas de cada trabajador y lo guardamos en una variable.
  var horasTrabajador1 = hojaAcumulador.getRange("F8").getValue();
  var horasTrabajador2 = hojaAcumulador.getRange("G8").getValue();
  
// Generamos la fecha y hora.
  var fechaActual = new Date();
  
// Buscamos la última fila escrita en la hoja de Historial y le sumamos una para obtener la fila donde esrcibiremos.
  var proximaFilaVaciva = hojaHistorial.getLastRow() + 1;
  
// Escribimos los datos en la nueva fila.
  hojaHistorial.getRange(proximaFilaVaciva, 2).setValue(fechaActual);     // Columna B (Fecha)
  hojaHistorial.getRange(proximaFilaVaciva, 3).setValue(horasTrabajador1);      // Columna C (Horas Trabajador1)
  hojaHistorial.getRange(proximaFilaVaciva, 4).setValue(horasTrabajador2);  // Columna D (Horas Trabajador2)

// Limpiamos la tabla del Acumulador.
  hojaAcumulador.getRange("C4:D10").clearContent();
}