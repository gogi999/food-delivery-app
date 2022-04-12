import React, { useEffect, useState } from 'react';
import { 
  AccountBalanceWallet, 
  Chat, 
  HomeRounded,
  Favorite,
  Settings,
  SummarizeRounded 
} from '@mui/icons-material';
import './App.css';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer';
import BannerName from './components/BannerName';
import SubMenuContainer from './components/SubMenuContainer';
import MenuCard from './components/MenuCard';
import ItemCard from './components/ItemCard';
import DebitCard from './components/DebitCard';
import CartItem from './components/CartItem';
import { MenuItems, Items } from './components/Data';
import { useStateValue } from './redux/StateProvider';

const App = () => {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === 'buger01')
  );

  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }
    
    menuLi.forEach((n) => n.addEventListener('click', setMenuActive));
  
    // MenuCard active toggle
    const menuCards = document
      .querySelector('.rowContainer')
      .querySelectorAll('.rowMenuCard');

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    menuCards.forEach((n) => n.addEventListener('click', setMenuCardActive));
  }, [isMainData, cart]);

  // Set main dish items on filter
  const setData = (itemId) => {
    setMainData(
      Items.filter((element) => element.itemId === itemId)
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName 
              name={"gogi999"}
              discount={"20"}
              link={"#"}
            />
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337" 
              alt="" 
              className="deliveryPic"
            />
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            <div className="rowContainer">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div 
                    key={data.id}
                    onClick={() => setData(data.itemId)}  
                  >
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === "1" 
                        ? true : false
                      }
                    />
                  </div>
                ))}
            </div>
            <div className="dishItemContainer">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))
              }
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
          {!cart 
            ? <div></div>
            : (
              <div className="cartCheckOutContainer">
                <SubMenuContainer name={"Cart Items"} />
                <div className="cartContainer">
                  <div className="cartItems">
                    {cart && cart.map((data) => (
                      <CartItem 
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))}
                  </div>
                </div>
                <div className="totalSection">
                  <h3>Total</h3>
                  <p>
                    <span>$ 45.0</span>
                  </p>
                </div>
                <button className="checkOut">
                  Check Out
                </button>
              </div>
            )
          }
        </div>
      </main>
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer 
            link={"#"} 
            icon={<HomeRounded />} 
            isHome
          />
          <MenuContainer 
            link={"#"} 
            icon={<Chat />} 
          />
          <MenuContainer 
            link={"#"} 
            icon={<AccountBalanceWallet />} 
          />
          <MenuContainer 
            link={"#"} 
            icon={<Favorite />} 
          />
          <MenuContainer 
            link={"#"} 
            icon={<SummarizeRounded />} 
          />
          <MenuContainer 
            link={"#"} 
            icon={<Settings />} 
          />
          <div className="indicator">

          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
