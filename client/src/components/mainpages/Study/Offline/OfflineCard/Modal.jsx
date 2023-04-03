import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useSeeMode } from "../../../../see-mode/module";

const Modal = ({ data, close }) => {
  const {
    imageUrl,
    address,
    firstday,
    secondday,
    onlineli1,
    onlineli2,
    onlineli3,
    onlineli4,
    onlineli5,
    onlineli6,
    onlineli7,
    onlineli8,
    onlineli9,
    onlineli10,
    offline1,
    offline2,
    offline3,
    offline4,
    offline5,
    offline6,
    offline7,
    offline8,
    offline9,
    offline10,
    present1,
    present2,
    forwhom,
    price,
    bonus,
  } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };
  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };
  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };
  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
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
  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt="real estate mansion"
        src={imageUrl}
        variants={imageVariants}
      ></motion.img>

      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__address">{address}</span>
        </motion.div>

        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <div className="modal__description">
            <h3 style={turn ? styles : {}}>Сроки проведения:</h3>
            <p style={turn ? styles : {}}>2-х дневный мастер-класс.</p>
            <h3 style={turn ? styles : {}}>Первый день </h3>{" "}
            <p style={turn ? styles : {}}>{firstday}</p>
            <h3 style={turn ? styles : {}}>Второй день </h3>{" "}
            <p style={turn ? styles : {}}>{secondday}</p>
            <h3 style={turn ? styles : {}}>Структура</h3>
            <h5 style={turn ? styles : {}}>Online часть:</h5>
            <ul>
              <li style={turn ? styles : {}}>{onlineli1}</li>
              <li style={turn ? styles : {}}>{onlineli2}</li>
              <li style={turn ? styles : {}}>{onlineli3}</li>
              <li style={turn ? styles : {}}>{onlineli4}</li>
              <li style={turn ? styles : {}}>{onlineli5}</li>
              <li style={turn ? styles : {}}>{onlineli6}</li>
              <li style={turn ? styles : {}}>{onlineli7}</li>
              <li style={turn ? styles : {}}>{onlineli8}</li>
              <li style={turn ? styles : {}}>{onlineli9}</li>
              <li style={turn ? styles : {}}>{onlineli10}</li>
            </ul>
            <h5 style={turn ? styles : {}}>Offline часть:</h5>
            <ul>
              <li style={turn ? styles : {}}>{offline1}</li>
              <li style={turn ? styles : {}}>{offline2}</li>
              <li style={turn ? styles : {}}>{offline3}</li>
              <li style={turn ? styles : {}}>{offline4}</li>
              <li style={turn ? styles : {}}>{offline5}</li>
              <li style={turn ? styles : {}}>{offline6}</li>
              <li style={turn ? styles : {}}>{offline7}</li>
              <li style={turn ? styles : {}}>{offline8}</li>
              <li style={turn ? styles : {}}>{offline9}</li>
              <li style={turn ? styles : {}}>{offline10}</li>
            </ul>
            <h3>В конце МК все участники получают подарки:</h3>
            <ul>
              <li style={turn ? styles : {}}>{present1}</li>
              <li style={turn ? styles : {}}>{present2}</li>
            </ul>
            <h3>Для кого:</h3> <p style={turn ? styles : {}}>{forwhom}</p>
          </div>

          <motion.div className="modal__row" variants={modalRowVariants}>
            <span className="modal__price">{price}</span>
          </motion.div>

          <h4 style={turn ? styles : {}}>{bonus}</h4>
        </motion.div>

        <div>
          <h2>НАЧАТЬ</h2>
        </div>

        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
