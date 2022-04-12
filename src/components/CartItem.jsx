import React, { useState, useEffect } from 'react';
import { RemoveRounded, AddRounded } from '@mui/icons-material';
import { useStateValue } from '../redux/StateProvider';
import { actionType } from '../redux/reducer';

let cartItems = [];

const CartItem = ({ itemId, name, imgSrc, price }) => {
    const [qty, setQty] = useState(1);
    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
    const [{ cart }, dispatch] = useStateValue();

    useEffect(() => {
        cartItems = cart;
        setItemPrice(parseInt(qty) * parseFloat(price));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [qty]);

    const updateQuantity = (action, id) => {
        if (action === 'add') {
            setQty(qty + 1);
        } else {
            if (qty === 1) {
                cartItems.pop(id);
                dispatch({
                    type: actionType.SET_CART,
                    cart: cartItems
                });
            }
            setQty(qty - 1);
        }
    }

    return (
        <div className="cartItem">
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>
            <div className="itemSection">
                <h2 className="itemName">
                    {name}
                </h2>
                <div className="itemQuantity">
                    <span>x {qty}</span>
                    <div className="quantity">
                        <RemoveRounded 
                            className="itemRemove"
                            onClick={() => updateQuantity("remove", itemId)}
                        />
                        <AddRounded 
                            className="itemAdd"
                            onClick={() => updateQuantity("add", itemId)}
                        />
                    </div>
                </div>
            </div>
            <p className="itemPrice">
                <span className="dolarSign">$ </span>
                <span className="itemPriceValue">
                    {itemPrice}
                </span>
            </p>
        </div>
    );
}

export default CartItem;
