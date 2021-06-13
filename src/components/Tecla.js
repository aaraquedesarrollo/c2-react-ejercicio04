export const Tecla = (props) => {
  const { texto, clase, funcionOnClick, llamando } = props;
  return (
    <li>
      <button
        className={clase}
        onClick={() => funcionOnClick(texto)}
        disabled={llamando}
      >
        {texto}
      </button>
    </li>
  );
};
