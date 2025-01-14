import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { GiDiamondTrophy } from "react-icons/gi";
import { BsPercent } from "react-icons/bs";
import { FcInspection } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { VscWand } from "react-icons/vsc";
import { FcDebian } from "react-icons/fc";
import { FcStatistics } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { useSeeMode } from "../../../see-mode/module";

const Bonus = () => {
  // see mode
  const store = useSeeMode();
  const turn = useSeeMode((state) => state.turn);
  const styles = {
    color: store.color,
    fontSize: "14px",
    fontFamily: "calibri",
    fontStyle: store.style,
    fontWeight: store.style,
    textDecoration: store.style,
  };
  const styles2 = {
    color: store.color,
    fontSize: store.size,
    fontFamily: "calibri",
    fontStyle: store.style,
    fontWeight: store.style,
    textDecoration: store.style,
  };
  return (
    <div>
      <div className="Bonus padding-class">
        <div className="Bonus-container">
          <h2>БОНУСЫ</h2>
          <p style={turn ? styles2 : {}}>
            Дополнительно, вас ждут 12 бонусов, которые послужат отличным
            стартом в вашей карьере
          </p>
          <span></span>

          <div className="Bonus-card">
            <div className="block-card">
              <div className="card">
                <div className="card-style 7">
                  <div className="card-img">
                    <FcStatistics />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Информационные плакаты для кабинета мастера
                  </p>
                </div>
              </div>
            </div>
            <div className="block-card">
              <div className="card">
                <div className="card-style card-11">
                  <div className="card-img">
                    <GiDiamondTrophy />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Свидетельство о присвоении квалификации «Косметик 4 разряда»
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-style 2">
                  <div className="card-img">
                    <FcShipped />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Чек-лист «Оснащение кабинета и расходные материалы для
                    мастера перманентного макияжа»
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-style card-3">
                  <div className="card-img">
                    <VscWand />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Чек-лист «Технология выполнения перманентного макияжа
                    бровей»
                  </p>
                </div>
              </div>
            </div>
            <div className="block-card">
              <div className="card">
                <div className="card-style 1">
                  <div className="card-img">
                    <FcGraduationCap />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Учебное пособие по перманентному макияжу
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-style 9">
                  <div className="card-img">
                    <FcMindMap />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Бесплатный доступ к чату поддержки
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-style 8">
                  <div className="card-img">
                    <FcDebian />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Готовые палитры из пигментов для Ваших клиентов
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-style card-4">
                  <div className="card-img">
                    <VscWand />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Чек-лист «Технология выполнения перманентного макияжа губ»
                  </p>
                </div>
              </div>
            </div>
            <div className="block-card">
              <div className="card">
                <div className="card-style 6">
                  <div className="card-img">
                    <FcInspection />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Договор с клиентом на проведение процедуры
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-style">
                  <div className="card-img">
                    <FcIdea />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Чек лист - «10 тем для постов, которые приведут вам
                    клиентов»
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-style 5">
                  <div className="card-img">
                    <VscWand />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Чек-лист «Технология выполнения перманентного макияжа век»
                  </p>
                </div>
              </div>
            </div>
            <div className="block-card">
              <div className="card">
                <div className="card-style card-10">
                  <div className="card-img">
                    <BsPercent />
                  </div>
                </div>
                <div className="card-content">
                  <p style={turn ? styles : {}}>
                    Скидка -10% на пигменты в магазине центра FACE ID
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
