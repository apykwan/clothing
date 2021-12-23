export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exisitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id); 

    if (exisitingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return { ...cartItem, quantity: Number(cartItem.quantity) + 1}
            }
            return cartItem;
        });
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const exisitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id); 

    if (exisitingCartItem === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove);
    }

    return cartItems.map(cartItem => {
        if (cartItem.id === cartItemToRemove.id) {
            return { ...cartItem, quantity: Number(cartItem.quantity) - 1}
        }
        return cartItem;
    });
};