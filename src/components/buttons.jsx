export function Increase(props) {
  return <button onClick={() => props.click()}>Increase</button>;
}

export function Decrease(props) {
  console.log(props);
  return <button disabled={!props.counter} onClick={() => props.click()}>Decrease</button>;
}

export function Reset(props) {
  console.log("dsd");
  return <button onClick={() => props.click()}>Reset</button>;
}
