export const Accion = (props) => {
  const { clase, accion, puedeLlamar, funcionOnClick } = props;
  return (
    <a
      href={accion}
      className={`${clase}${puedeLlamar ? " activo" : ""}`}
      onClick={funcionOnClick}
    >
      {accion}
    </a>
  );
};
