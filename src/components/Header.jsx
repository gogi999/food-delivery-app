import React, { useEffect } from 'react';
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';

const Header = () => {
    useEffect(() => {
        const toggleMenu = document.querySelector('.toggleMenu');

        toggleMenu.addEventListener('click', () => {
            document.querySelector('.rightMenu').classList.toggle('active');
        });
    }, []);

    return (
        <header>
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" 
                alt="" 
                className="logo"
            />
            <div className="inputBox">
                <SearchRounded className="searchIcon" />
                <input 
                    type="text" 
                    placeholder="Search..." 
                />
            </div>
            <div className="shoppingCart">
                <ShoppingCartRounded className="cart" />
                <div className="cart_content">
                    <p>2</p>
                </div>
            </div>
            <div className="profileContainer">
                <div className="imgBox">
                    <img 
                        src="https://www.pinclipart.com/picdir/middle/78-780477_about-us-avatar-icon-red-png-clipart.png" 
                        alt="" 
                        className="profilePic"
                    />
                </div>
                <h2 className="userName">
                    gogi999
                </h2>
            </div>
            <div className="toggleMenu">
                <BarChart className="toggleIcon" />
            </div>
        </header>
    );
}

export default Header;
