import React, { useState, useEffect } from 'react';
import { StarRounded, AddRounded, Favorite } from '@mui/icons-material';
import { Items } from './Data';
import { useStateValue } from '../redux/StateProvider';
import { actionType } from '../redux/reducer';

let cartData = [];

const ItemCard = ({ imgSrc, name, ratings, price, itemId }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [currentVal, setCurrentVal] = useState(Math.floor(ratings));
    const [isCart, setIsCart] = useState(null);
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        if (isCart) {
            cartData.push(isCart);
            dispatch({
                type: actionType.SET_CART,
                cart: cartData
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isCart]);

    const handleClick = (val) => {
        setCurrentVal(val);
    }

    return (
        <div className="itemCard" id={itemId}>
            <div 
                className={`isFavourite ${isFavourite ? "active" : ""}`}
                onClick={() => setIsFavourite(!isFavourite)}
            >
                <Favorite /> 
            </div>
            <div className="imgBox">
                <img 
                    src={imgSrc} 
                    alt="" 
                    className="itemImg"
                />
            </div>
            <div className="itemContent">
                <h3 className="itemName">{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, { length: 5 }).map((e, i) => (
                            <i 
                                key={i} 
                                className={`rating 
                                    ${currentVal > i 
                                        ? "orange"
                                        : "gray"
                                    }`
                                }
                                onClick={() => handleClick(i + 1)}    
                            >
                                <StarRounded />
                            </i>
                        ))}
                        <h3 className="price">
                            <span>$ </span>{price}
                        </h3>
                    </div>
                    <i 
                        className="addToCart"
                        onClick={() => setIsCart(
                            Items.find((n) => n.id === itemId)
                        )}
                    >
                        <AddRounded />
                    </i>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
