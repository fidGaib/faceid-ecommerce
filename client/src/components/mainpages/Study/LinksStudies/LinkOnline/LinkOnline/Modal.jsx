import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useSeeMode } from "../../../../../see-mode/module";

const Modal = ({ data, close }) => {
  const { imageUrl, title, description, subtitle } = data;
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
          <span className="modal__address" style={turn ? styles : {}}>
            {title}
          </span>
        </motion.div>

        <motion.div className="modal__row" variants={modalRowVariants}>
          <h4 style={turn ? styles : {}}>{subtitle}</h4>
        </motion.div>

        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
          <p className="modal__description" style={turn ? styles : {}}>
            {description}
          </p>
        </motion.div>

        <motion.div variants={modalRowVariants}>
          <NavLink to="/online">
            <h3 style={turn ? styles : {}}>ЗАЙТИ</h3>
          </NavLink>
        </motion.div>

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
