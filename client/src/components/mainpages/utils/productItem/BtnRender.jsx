import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
import { useSeeMode } from "../../../see-mode/module";

function BtnRender({ product, deleteProduct }) {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;
  const addCart = state.userAPI.addCart;
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
    <div className="row_btn">
      {isAdmin ? (
        <>
          <Link
            id="btn_buy"
            to="#!"
            onClick={() =>
              deleteProduct(product.id, product.images[0].public_id)
            }
          >
            Удалить
          </Link>
          <Link id="btn_view" to={`/edit_product/${product.id}`}>
            Изменить
          </Link>
        </>
      ) : (
        <>
          <Link
            id="btn_buy"
            to="#!"
            onClick={() => addCart(product)}
            style={turn ? styles : {}}
          >
            Купить
          </Link>
          <Link
            id="btn_view"
            to={`/shop/detail/${product.id}`}
            style={turn ? styles : {}}
          >
            Смотреть
          </Link>
        </>
      )}
    </div>
  );
}

export default BtnRender;
