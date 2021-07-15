export function Button({disable, name, onClick}) {
  return <button disabled={disable} onClick={onClick}>{name}</button>;
}
