import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const { anyadirNumero, borrarNumero, borrarTodo, llamando } = props;

  const botones = [
    { id: 1, texto: 1 },
    { id: 2, texto: 2 },
    { id: 3, texto: 3 },
    { id: 4, texto: 4 },
    { id: 5, texto: 5 },
    { id: 6, texto: 6 },
    { id: 7, texto: 7 },
    { id: 8, texto: 8 },
    { id: 9, texto: 9 },
    { id: 10, texto: 0 },
  ];

  return (
    <div className="botones">
      <ol className="teclado">
        {botones.map((boton) => (
          <Tecla
            key={boton.id}
            texto={boton.texto}
            funcionOnClick={anyadirNumero}
            llamando={llamando}
          />
        ))}
        <Tecla
          key={11}
          texto="Borrar"
          funcionOnClick={borrarNumero}
          llamando={llamando}
        ></Tecla>
        <Tecla
          key={12}
          texto="Borrar todo"
          funcionOnClick={borrarTodo}
          llamando={llamando}
        ></Tecla>
      </ol>
    </div>
  );
};
