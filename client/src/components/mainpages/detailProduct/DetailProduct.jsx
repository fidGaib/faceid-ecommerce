import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import { useSeeMode } from "../../see-mode/module";
import ProductItem from "../utils/productItem/ProductItem";

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);
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
  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product.id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);
  if (detailProduct.length === 0) return null;

  return (
    <>
      <div className="detail">
        <img src={detailProduct.images.url} alt="" />
        <div className="box-detail">
          <div className="row">
            <h2 style={turn ? styles : {}}>{detailProduct.title}</h2>
          </div>
          <h6 style={turn ? styles : {}}>#id: {detailProduct.product_id}</h6>
          <p style={turn ? styles : {}}>{detailProduct.description}</p>
          <p style={turn ? styles : {}}>{detailProduct.content}</p>
          {/* <p>Продано: {detailProduct.sold}</p> */}
          <span style={turn ? styles : {}}>{detailProduct.price} руб.</span>
          <Link
            to="/cart"
            className="cart"
            onClick={() => addCart(detailProduct)}
            style={turn ? styles : {}}
          >
            Купить Сейчас
          </Link>
        </div>
      </div>

      <div className="shop-wrapper">
        <h2 style={turn ? styles : {}}>Сопутствующие товары</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
