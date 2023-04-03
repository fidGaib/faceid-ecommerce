import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import axios from "axios";
import { useSeeMode } from "../../see-mode/module";

function Cart() {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const total = cart?.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);
      setTotal(total);
    };
    getTotal();
  }, [cart]);

  const addToCart = async () => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };
  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
    addToCart();
  };
  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
    addToCart();
  };
  const removeProduct = (id) => {
    if (window.confirm("Вы хотите удалить этот продукт?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
      addToCart();
    }
  };
  // see mode
  const store = useSeeMode();
  const turn = useSeeMode((state) => state.turn);
  const styles = {
    color: store.color,
    fontSize: store.size,
    fontFamily: store.font,
    fontStyle: store.style,
    fontWeight: store.style,
    textDecoration: store.style,
  };

  if (cart?.length === 0)
    return (
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "400",
          margin: "200px 0 200px 0",
          color: "silver",
          color: store.color,
          fontSize: store.size,
          fontFamily: store.font,
          fontStyle: store.style,
          fontWeight: store.style,
          textDecoration: store.style,
        }}
      >
        В корзине пусто
      </h2>
    );

  return (
    <div className="wrapperCarts">
      <div className="detail cart" key={1}>
        <img
          src={
            "https://mobimg.b-cdn.net/v3/fetch/93/93e2e2a056559265ceca8012244e0f98.jpeg"
          }
          alt=""
        />

        <div className="box-detail">
          <h2 style={turn ? styles : {}}>{"камасутра"}</h2>

          <h3 style={turn ? styles : {}}>{2 * 5} руб.</h3>
          <p className="descriptionCart" style={turn ? styles : {}}>
            {
              "orem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, odio!"
            }
          </p>
          <p className="contentCart" style={turn ? styles : {}}>
            {
              "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, odiLorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, odiLorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, odio!"
            }
          </p>
          <div className="amount">
            <button onClick={() => decrement(1)}> - </button>
            <span>{5}</span>
            <button onClick={() => increment(1)}> + </button>
          </div>

          <div className="delete" onClick={() => removeProduct(1)}>
            <VscChromeClose fontSize={27} className="overlay__close" />
          </div>
        </div>
      </div>
      {cart?.map((product) => (
        <div className="detail cart" key={product._id}>
          <img src={product.images.url} alt="" />

          <div className="box-detail">
            <h2 style={turn ? styles : {}}>{product.title}</h2>

            <h3 style={turn ? styles : {}}>
              {product.price * product.quantity} руб.
            </h3>
            <p style={turn ? styles : {}}>{product.description}</p>
            <p style={turn ? styles : {}}>{product.content}</p>

            <div className="amount">
              <button onClick={() => decrement(product._id)}> - </button>
              <span>{product.quantity}</span>
              <button onClick={() => increment(product._id)}> + </button>
            </div>

            <div className="delete" onClick={() => removeProduct(product._id)}>
              <VscChromeClose fontSize={27} className="overlay__close" />
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <h3 style={turn ? styles : {}}>Итого: {10000} руб.</h3>
        {/* <h3 style={turn ? styles : {}}>Итого: {total} руб.</h3> */}
        <Link style={turn ? styles : {}} to="#!">
          Payment
        </Link>
      </div>
    </div>
  );
}
export default Cart;
