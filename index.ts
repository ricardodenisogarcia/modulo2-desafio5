//Este archivo fue creado en el desafio número 4 
//pero fue sincronizado en el desafio siguiente.
class Departamento {
  nombre: string;
  dueño: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  getName() {
    return this.nombre;
  }
}
class Piso {
  nombre: string;
  departamentos: Departamento[] = []; //
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  pushDepartamento(nombre: string) {
    var nuevoDepto = new Departamento(nombre);
    return this.departamentos.push(nuevoDepto);
  }
  getDepartamentos() {
    return this.departamentos;
  }
}
//un constructor que reciba un array de Piso y lo guarde en una propiedad.
//un método addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento)
//que reciba un Departamento y lo ubique en el piso con el nombre indicado,
//si no existe un piso con ese nombre debe mostrar un error.
class Edificio {
  pisos: Piso[] = [];
  constructor(nombreDelPiso: any) {
    this.pisos = nombreDelPiso;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    var pisoIndicado = this.pisos.find(function (item: any) {
      if (item.nombre == nombreDePiso) {
        return item;
      } else {
        return console.log("El piso no existe");
      }
    });
    return pisoIndicado.departamentos.push(departamento);
  }
  //un método getDepartamentosByPiso(nombreDePiso:string) que devuelva todos los Departamento(s) de un piso.
  getDepartamentosByPiso(nombreDePiso: string) {
    var pisoCorrecto = this.pisos.find(function (item: any) {
      if (item.nombre == nombreDePiso) {
        return item;
      }
    });
    return pisoCorrecto.departamentos;
  }
}

function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
