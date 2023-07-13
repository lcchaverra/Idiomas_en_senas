import { useState } from "react";
import { createStoreHook } from "react-redux";
import { Provider } from "react-redux/es/exports";
import reactLogo from "./assets/react.svg";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const mensaje = () => {
    let bol: boolean = false;
    let numero: number = 1.5;
    return console.log("hola", bol, numero);
  };

  let hola: Date = new Date();
  console.log(hola);

  let objeto = {
    nombre: "",   
  };

  let arreglo: (string | number)[] = ["hola", 5];

  const funcion = (): string | number | boolean => {
    objeto.nombre ? (arreglo[0] = 1) : (arreglo[0] = 0);
    return true;
  };

  //usando un alias
  type mixtype = String | Number | boolean;

  const funcion2 = (): mixtype => {
    console.log("");
    return true;
  };

  // Asersiones de tipo
  let codigo: any = 1;
  let id: number = codigo as number;
  console.log(id);

  // Tambien puede hacerse
  let codigo2: any = 1;
  let id2: mixtype = codigo2 as mixtype;
  console.log(id2);

  let usuario: { nombre: string; apellido: string; telefono: number } = {
    nombre: "",
    apellido: "",
    telefono: 0,
  };
  console.log(usuario.telefono);

  type tipoUser = { nombre: string; apellido: string; telefono: number };

  let estudiante: tipoUser = {
    nombre: "",
    apellido: "",
    telefono: 0,
  };

  let API = `{"nombre":"alberta", "edad": "15"}`;
  let Machete = JSON.parse(API);
  console.log(Machete);

  // Enumerados
  enum formatosArchivos {
    JS,
    TS,
    JSX,
    TSX,
  }

  let PruebaEnum: formatosArchivos = formatosArchivos.JSX;
  console.log(PruebaEnum);

  //Interfaces
  interface Iuser {
    cedula: number;
    nombre: string;
    celular?: number;
  }

  let usuariosGym: Iuser = {
    cedula: 1193223824,
    nombre: "Luis Chaverra",
    celular: 3235145034,
  };
  console.log('Usuarios Gym: ',usuariosGym);

  // Extender Interfaces
  interface iUserGymNew extends Iuser {
    mensulidad: number;
  }

  let usuariosGym2: iUserGymNew = {
    cedula: 1193223824,
    nombre: "Luis Chaverra",
    celular: 3235145034,
    mensulidad: 50000,
  };

  console.log(usuariosGym2);

  //Clases y constructores en typescript

  class EscuelaDigital {
    nombre: string;
    cursos: curso[] = [];
    duracion: duracion[] = [];
    constructor(nombre: string) {
      this.nombre = nombre;
    }
    agregarcurso(curso: curso) {
      this.cursos.push(curso);
    }
    agregarDuracion(duracion: duracion) {
      this.duracion.push(duracion);
    }
  }

  //Miembros Publicos

  class curso {
    id: number;
    nombre: string;

    constructor(id: number, nombre: string) {
      this.id = id;
      this.nombre = nombre;
    }
  }
  //Mienbros Privados
  class duracion{
    constructor(private _duracion: number){}
    
    //Metodos Set y Get
    get duracion() {
      return this._duracion
    }

    set duracion(newDuracion: number) {
      this._duracion = newDuracion
    }
  
  }

  // Herencia
  class paginaWeb extends EscuelaDigital {
    constructor(protected pagina:string, nombre: string){
      super(nombre)
    }
  }

  const Edteam = new EscuelaDigital("Edteam");
  let Typescript = new curso(0, "Typescript");
  let Javascript = new curso(1, "Javascript");
  let duracionCursoJS = new duracion (5)
  let duracionCursoTS = new duracion (2)
  Edteam.agregarcurso(Typescript);
  Edteam.agregarcurso(Javascript);
  console.log("Duracion Get:", duracionCursoJS.duracion)
  duracionCursoTS.duracion = 3
  console.log("Duracion Set:", duracionCursoTS)
  Edteam.agregarDuracion(duracionCursoJS);
  Edteam.agregarDuracion(duracionCursoTS)

  console.log(Edteam);

//VOY EN LA CLASE 5---------------------------------------------------------


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={
            () => mensaje()
            // setCount((count) => count + 1)
          }
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
