import styles from "./Button.module.css";

function Button() {
  let count = 0;

  const handleClick = (e) => {
    console.log(e.target.textContent);
    e.target.textContent = "Yeah!";
  };

  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} clicked me ${count} times`);
  //   }
  // };

  // const handleClick2 = (name) => {
  //   console.log(`${name} clicked me`);
  // };

  return (
    // <button onClick={() => handleClick2("Joshua")} className={styles.button}>
    // <button onDoubleClick={(e) => handleClick(e)} className={styles.button}>
    <button onClick={(e) => handleClick(e)} className={styles.button}>
      Click me
    </button>
  );
}

export default Button;
