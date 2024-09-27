import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import styles from '../Menu/menu.module.css';

function Modal({children, open, className=''}) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;
        if (open && modal && !modal.open) {
            modal.showModal();
        }
        return () => {
            if (modal && modal.open) {
                modal.close();
            }
        };
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`${styles.modal} ${className}`}>{children}</dialog>, 
        document.getElementById('modal')
    );
}

export default Modal;