import styles from './Button.module.css';

const Button = props => {
  const classFinal = `${styles.button} ${props.className}`;

  return (
    <button className={classFinal} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
