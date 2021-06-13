import { Acciones } from "./components/Acciones";
import { Teclado } from "./components/Teclado";
import { Info } from "./components/Info";
import { useEffect, useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [mostrarLlamar, setMostrarLlamar] = useState(true);
  const [puedeLlamar, setPuedeLlamar] = useState(false);
  const [llamando, setLlamando] = useState(false);

  const anyadirNumero = (numero) => {
    if (display.length < 9) {
      setDisplay(`${display}${numero}`);
    }
  };

  const borrarNumero = () => {
    if (display.length !== 0) {
      setDisplay(display.slice(0, display.length - 1));
    }
  };

  const borrarTodo = () => {
    setDisplay("");
  };

  const checkLlamar = () => {
    if (display.length === 9) {
      setPuedeLlamar(true);
    } else {
      setPuedeLlamar(false);
    }
  };

  const llamar = (e) => {
    e.preventDefault();
    setLlamando(true);
    setMostrarLlamar(false);
    setTimeout(() => {
      setLlamando(false);
      setMostrarLlamar(true);
    }, 5000);
  };

  const colgar = (e) => {
    e.preventDefault();
    setLlamando(false);
    setMostrarLlamar(true);
  };

  useEffect(() => {
    checkLlamar();
  }, [display]);

  return (
    <div className="contenedor">
      <Info clase="mensaje" mensaje="Llamando..." estaLlamando={llamando} />
      <main className="telefono">
        <Teclado
          anyadirNumero={anyadirNumero}
          borrarNumero={borrarNumero}
          borrarTodo={borrarTodo}
          llamando={llamando}
        />
        <Acciones
          display={display}
          mostrarLlamar={mostrarLlamar}
          puedeLlamar={puedeLlamar}
          llamar={llamar}
          colgar={colgar}
        />
      </main>
    </div>
  );
}

export default App;
