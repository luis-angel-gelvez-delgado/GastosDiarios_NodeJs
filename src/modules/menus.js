const menuWelcome = () => {
  return `=============================================
         Simulador de Gasto Diario
=============================================
Seleccione una opcion:

1. Registrar nuevo gasto
2. Editar gasto
3. Eliminar gasto
4. Listar gastos
5. Calcular total de gastos
6. Generar reporte de gastos
7. Salir
=============================================`;
};
const menuRegistroGastos = () => {
  return `=============================================
            Registrar Nuevo Gasto
=============================================
Ingrese la informacion del gasto:
- Descripcion del gasto:`;
};

const menuListarGastos = () => {
  return `=============================================
                Listar Gastos
=============================================
Seleccione una opcion para filtrar los gastos:

1. Ver todos los gastos
2. Filtrar por categoria
3. Filtrar por rango de fechas
4. Regresar al menu principal
=============================================`;
};
const menuCalculoGastos = () => {
  return `=============================================
          Calcular Total de Gastos
=============================================
Seleccione el periodo de calculo:

1. Calcular total diario
2. Calcular total semanal
3. Calcular total mensual
4. Regresar al menu principal
=============================================`;
};

const menuReportesGastos = () => {
  return `=============================================
           Generar Reporte de Gastos
=============================================
Seleccione el tipo de reporte:

1. Reporte diario
2. Reporte semanal
3. Reporte mensual
4. Reportes guardados
5. Regresar al menu principal
=============================================`;
};

const submenuReportes = () => {
  return `=============================================
           Generar Reporte de Gastos
=============================================
Seleccione el tipo de reporte:

1. Ver en pantalla
2. Guardar
3. Regresar al menu anterior
=============================================`;
};

const submenuReportes2 = () => {
  return `=============================================
           Generar Reporte de Gastos
=============================================
Seleccione una opcion:

1. Buscar reporte
2. Eliminar
3. Regresar al menu anterior
=============================================`;
};

const menuSalir = () => {
  return `¿Desea salir del programa? (S/N):`;
};

const menuEditarGasto = () => {
  return `=============================================
               Editar Gasto
=============================================
Seleccione una opcion:

1. Buscar Gasto
2. Regresar al menu principal
=============================================`;
};

const menuEliminarGasto = () => {
  return `=============================================
               Eliminar Gasto
=============================================
Seleccione una opcion:

1. Eliminar Gasto
2. Regresar al menu principal
=============================================`;
};

const submenuConfirmarEliminacion = () => {
  return `¿Esta seguro que desea eliminar este gasto? (S/N):`;
};

module.exports = {
  menuWelcome,
  menuRegistroGastos,
  menuListarGastos,
  menuCalculoGastos,
  menuReportesGastos,
  submenuReportes,
  submenuReportes2,
  menuSalir,
  menuEditarGasto,
  menuEliminarGasto,
  submenuConfirmarEliminacion,
};