import style from "./Input.module.css";

export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      className={style.Input}
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
}
