import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

function cartReducer(state, action) {

    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.Item_Id === action.item.Item_Id);
        const updatedItems = [...state.items];
        let updatedTotalAmount = state.totalAmount;

        if (existingCartItemIndex > -1) {
            const existingCartItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
            updatedTotalAmount += action.item.price;
        } else {
            updatedItems.push({ ...action.item, amount: 1 });
            updatedTotalAmount += action.item.price;
        }

        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.Item_Id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];
        let updatedTotalAmount = state.totalAmount;

        if (existingCartItem.amount === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
            updatedTotalAmount -= existingCartItem.price;
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems[existingCartItemIndex] = updatedItem;
            updatedTotalAmount -= existingCartItem.price;
        }

        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return state;
}

export function CartProvider({ children }) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, { items: [], totalAmount: 0 });

    function addItemToCartHandler(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    }

    function removeItemFromCartHandler(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;