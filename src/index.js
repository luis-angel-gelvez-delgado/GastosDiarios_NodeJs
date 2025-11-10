 const {
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
  submenuConfirmarEliminacion
} = require('./modules/menus');

const fs = require('fs');
const { stringify } = require('querystring');
const prompt = require('prompt-sync')();

class Categoria {
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }

}


class Gasto {
    constructor(id, monto, fecha, descripcion, idCategoria){
        this.id = id;
        this.monto = monto;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.idCategoria = idCategoria;
    }
}


class Reporte {
    constructor(id, tipo, fechaInicio, fechaFin, total, fechaGeneracion){
        this.id = id;
        this.tipo = tipo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.total = total;
        this.fechaGeneracion = fechaGeneracion;
    }
}

class ReporteGasto {
    constructor(id, idReporte, idGasto){
        this.id = id;
        this.idReporte = idReporte
        this.idGasto = idGasto;
    }
}

class DetalleReporte {
    constructor(id, idReporte, idCategoria, totalCategoria){
        this.id = id;
        this.idReporte = idReporte
        this.idCategoria = idCategoria;
        this.totalCategoria = totalCategoria;
    }
}




class GestorCategoria {
    constructor(archivoJson){
        this.archivoJson = archivoJson;
        this.categorias = this.cargarCategorias();
    }

    cargarCategorias(){
        if (fs.existsSync(this.archivoJson)) {
            const data = fs.readFileSync(this.archivoJson, 'utf8')
            return JSON.parse(data)
        }
        else{
            return []
        }
    }

    guardarCategorias(){
        fs.writeFileSync(this.archivoJson, JSON.stringify(this.categorias))
    }

    agregarCategoria(categoria){
        this.categorias.push(categoria)
        this.guardarCategorias()
        console.log("Categoria agregada exitosamente")
    }
}

class GestorGastos {
    constructor(archivoJson){
        this.archivoJson = archivoJson;
        this.gastos = this.cargarGastos();
    }
    cargarGastos(){
        if (fs.existsSync(this.archivoJson)) {
            const data = fs.readFileSync(this.archivoJson, 'utf8')
            return JSON.parse(data)
        }
        else{
            return []
        }
    }

    guardarGasto(){
        fs.writeFileSync(this.archivoJson, JSON.stringify(this.gastos))
    }

    agregarGasto(gasto){
        this.gastos.push(gasto)
        this.guardarGasto()
        console.log("Gasto agregado exitosamente")
    }
}

class GestorReportes {
    constructor(archivoJson){
        this.archivoJson = archivoJson;
        this.reportes = this.cargarReportes();
    }

    cargarReportes(){
        if (fs.existsSync(this.archivoJson)) {
            const data = fs.readFileSync(this.archivoJson, 'utf8')
            return JSON.parse(data)
        }
        else{
            return []
        }
    }

    guardarReporte(){
        fs.writeFileSync(this.archivoJson, JSON.stringify(this.reportes))
    }

    agregarReporte(reporte){
        this.reportes.push(reporte)
        this.guardarReporte()
        console.log("Reporte agregado exitosamente")
    }
}

class ReporteGastos {
    constructor(archivoJson){
        this.archivoJson = archivoJson;
        this.reporteGastos = this.cargarReporteGastos();
    }

    cargarReporteGastos(){
        if (fs.existsSync(this.archivoJson)) {
            const data = fs.readFileSync(this.archivoJson, 'utf8')
            return JSON.parse(data)
        }
        else{
            return []
        }
    }

    guardarReporteGastos(){
        fs.writeFileSync(this.archivoJson, JSON.stringify(this.Reporte))
    }

    agregarReporteGastos(reporteGastos){
        this.reporteGastos.push(reporteGastos)
        this.guardarReporteGastos()
        console.log("Reporte de gasto agregado exitosamente")
    }
}

class DetalleReporte {
    constructor(archivoJson){
        this.archivoJson = archivoJson;
        this.detalleReporte = this.cargarDetalleReportes();
    }

    cargarDetalleReportes(){
        if (fs.existsSync(this.archivoJson)) {
            const data = fs.readFileSync(this.archivoJson, 'utf8')
            return JSON.parse(data)
        }
        else{
            return []
        }
    }

    guardarDetalleReporte(){
        fs.writeFileSync(this.archivoJson, JSON.stringify(this.DetalleReporte))
    }

    agregarDetalleReporte(detalleReporte){
        this.detalleReporte.push(detalleReporte)
        this.guardarDetalleReporte()
        console.log("Detalle del reporte del gasto agregado exitosamente")
    }
}

