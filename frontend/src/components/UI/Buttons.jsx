import styles from '../Menu/menu.module.css';

function Button({children, textOnly, className, ...props}) {
    let cssClasses = textOnly ? styles.textButton : styles.button;
    cssClasses += ' ' + className;

    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    )
}

export default Button;