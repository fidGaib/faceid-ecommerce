import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { useSeeMode } from "../../see-mode/module";
import { SERVER_URL } from "../Info/models";

const textAnimation = {
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

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const $api = axios.create({
        withCredentials: true,
        baseURL: `${SERVER_URL}/api`,
      });
      await $api.post("/user/register", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
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
  return (
    <motion.div custom={1} variants={textAnimation} className="login-page">
      <form onSubmit={registerSubmit}>
        <h2 style={turn ? styles : {}}>Регистрация</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Имя"
          value={user.name}
          onChange={onChangeInput}
          style={turn ? styles : {}}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onChangeInput}
          style={turn ? styles : {}}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Пароль"
          value={user.password}
          onChange={onChangeInput}
          style={turn ? styles : {}}
        />

        <div className="row">
          <button
            className="button-register"
            type="submit"
            style={turn ? styles : {}}
          >
            Ок
          </button>
          <Link to="/login" style={turn ? styles : {}}>
            Вход
          </Link>
        </div>
      </form>
    </motion.div>
  );
}

export default Register;
