import { createContext, useState } from "react";

const UserProgressContext = createContext({
    userProgress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}

});

export function UserProgressProvider({children}) {
    const [userProgress, setUserProgress] = useState("");

    function showCartHandler() {
        setUserProgress('CART');

    }

    function hideCartHandler() {
        setUserProgress('');
    }

    function showCheckoutHandler() {
        setUserProgress('CHECKOUT');
    }

    function hideCheckoutHandler() {
        setUserProgress('');
    }

    const userProgressContextValue = {
        userProgress: userProgress,
        showCart: showCartHandler,
        hideCart: hideCartHandler,
        showCheckout: showCheckoutHandler,
        hideCheckout: hideCheckoutHandler
    }


    return <UserProgressContext.Provider value={userProgressContextValue}>{children}</UserProgressContext.Provider>

}

export default UserProgressContext;