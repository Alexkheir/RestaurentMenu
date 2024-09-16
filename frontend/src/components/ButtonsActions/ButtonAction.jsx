function ActionButton({ onClick, label, className, ...props }) {
    return (
        <button onClick={onClick} className={`bg-yellow-400 text-white px-4 py-2 rounded ${className}`} {...props}>
            {label}
        </button>
    );
}

export default ActionButton;