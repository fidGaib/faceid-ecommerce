import React from "react";
import bazaIrinaImg from "../img/baza-photo.png";
import { motion } from "framer-motion";
import { useSeeMode } from "../../../see-mode/module";

const textAnimationUp = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const textAnimationLeft = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const textAnimationDown = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const photoAnim = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.5,
    },
  }),
};

const Baza = () => {
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
    <motion.div
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
      initial="hidden"
    >
      <div className="Baza padding-class">
        <div className="Baza-content">
          <div className="Baza-heading">
            <motion.h1
              custom={1}
              variants={textAnimationUp}
              style={turn ? styles : {}}
            >
              Базовый курс по перманентному макияжу
              {/* <span>Базовый курс</span> по перманентному макияжу */}
            </motion.h1>

            <motion.p
              custom={2}
              variants={textAnimationLeft}
              style={turn ? styles : {}}
            >
              Отбросьте сомнения - этот курс непременно изменит Вашу жизнь! Мы
              учли все нюансы, курс дополнен самой актуальной информацией о
              перманентном макияже. Учись и работай уже на своем аппарате. В
              курс включен стартовый набор. Освой новую профессию и стань
              практикующим мастером за 10 дней.
            </motion.p>

            <motion.a
              custom={3}
              variants={textAnimationDown}
              href="#For"
              className="Button-start"
              style={turn ? styles : {}}
            >
              НАЧАТЬ
            </motion.a>
          </div>
        </div>
        <motion.div
          className="Baza-image"
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={photoAnim}
        >
          <img src={bazaIrinaImg} alt="baza_img" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Baza;
