export const Info = (props) => {
  const { clase, mensaje, estaLlamando } = props;

  return (
    <span className={`${clase}${estaLlamando ? "" : " off"}`}>{mensaje}</span>
  );
};
