import './FormRow.css';

const FormRow = ({ name, labelText, value, handleChange, type }) => {
  return (
    <div className="form__row">
      <label className="form__label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        onChange={handleChange}
        type={type}
        value={value}
        name={name}
        className="form__input"
      />
    </div>
  );
};
export default FormRow;
