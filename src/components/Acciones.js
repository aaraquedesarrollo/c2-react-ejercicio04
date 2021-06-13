import { Accion } from "./Accion";
import { Display } from "./Display";

export const Acciones = (props) => {
  const { display, mostrarLlamar, puedeLlamar, llamar, colgar } = props;

  return (
    <div className="acciones">
      <Display clase="numero" display={display} />
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
      {/* <!-- el número de teléfono tiene 9 cifras --> */}
      {mostrarLlamar && (
        <Accion
          clase="llamar"
          accion="Llamar"
          puedeLlamar={puedeLlamar}
          funcionOnClick={llamar}
        />
      )}
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      {!mostrarLlamar && (
        <Accion clase="colgar activo" accion="Colgar" funcionOnClick={colgar} />
      )}
    </div>
  );
};
