import style from "./Button.module.css";

export function Button({ disable, name, onClick }) {
  return (
    <button className={style.Button} disabled={disable} onClick={onClick}>
      {name}
    </button>
  );
}
