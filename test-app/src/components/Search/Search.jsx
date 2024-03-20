import css from "../Form/Form.module.css";

export const Search = () => {
  return (
    <div>
      <p className={css.text}>Location</p>
      <input type="text" className={css.input} placeholder="Kyiv, Ukraine" />
      <p className={css.text}>Filters</p>
      <h3 className={css.title}>Vehicle equipment</h3>
      <ul></ul>
    </div>
  );
};
