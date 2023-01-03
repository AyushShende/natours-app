import './Field.css';
const Field = ({ icon, title, text }) => {
  return (
    <div className="fact__field">
      <span className="field__icon">{icon}</span>
      <span className="field__title">{title}</span>
      <span>{text}</span>
    </div>
  );
};
export default Field;
