export const Display = (props) => {
  const { clase, display } = props;
  return <span className={clase}>{display}</span>;
};
