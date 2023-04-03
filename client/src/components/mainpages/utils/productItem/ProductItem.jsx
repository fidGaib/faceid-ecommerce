import React from "react";
import { useSeeMode } from "../../../see-mode/module";
import BtnRender from "./BtnRender";
import "./productItem.css";
function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
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
  return (
    <div className="product_card">
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product.id)}
        />
      )}
      <div className="product_img_box">
        <img src={product.images[0].url} alt="" />
      </div>

      <div className="product_box">
        <h2 style={turn ? styles : {}} title={product.title}>
          {product.title}
        </h2>
        <p style={turn ? styles : {}}>{product.description}</p>
        <div className="price_product">
          <span style={turn ? styles : {}}>{product.price} руб.</span>
        </div>
      </div>

      <BtnRender product={product} deleteProduct={deleteProduct} />
    </div>
  );
}

export default ProductItem;
