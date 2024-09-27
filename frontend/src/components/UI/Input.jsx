import styles from '../Menu/menu.module.css';

function Input({ label, id, ...props }) {
    return <div className={styles.control}>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} required {...props} />
    </div>
}

export default Input;