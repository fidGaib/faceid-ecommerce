import React from "react";
import { useSeeMode } from "../../../see-mode/module";
import AbashevaTrener from "../img/AbashevaTrener.png";

const Abasheva = () => {
  // see mode
  const store = useSeeMode();
  const turn = useSeeMode((state) => state.turn);
  const styles = {
    color: "#000",
    fontSize: store.size,
    fontFamily: store.font,
    fontStyle: store.style,
    fontWeight: store.style,
    textDecoration: store.style,
  };
  return (
    <div>
      <div className="Abasheva padding-class">
        <div className="Abasheva-photo">
          <img src={AbashevaTrener} alt="Abasheva" />
        </div>
        <div className="Abasheva-text">
          <h2>Ирина Абашева</h2>
          <p style={turn ? styles : {}}>
            Более 17 лет опыта в индустрии красоты Основатель центра
            перманентного макияжа FACE ID в городе Перми.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Abasheva;
