import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import UserAPI from "./api/UserAPI";
import ProductsAPI from "./api/ProductsAPI";
import CategoriesAPI from "./api/CategoriesAPI";
import { SERVER_URL } from "./components/mainpages/Info/models";

export const GlobalState = createContext();
export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    const refreshToken = async () => {
      const $api = axios.create({
        withCredentials: true,
        baseURL: `${SERVER_URL}/api`,
      });
      const res = await $api.get("/user/refresh_token");
      setToken(res.data);
      setTimeout(() => {
        refreshToken();
      }, 10 * 60 * 1000); // 1 неделя
    };
    refreshToken();
  }, []);
  const state = {
    token: [token, setToken],
    productsAPI: ProductsAPI(),
    userAPI: UserAPI(token),
    categoriesAPI: CategoriesAPI(),
  };

  return (
    <GlobalState.Provider value={state}>{children}</GlobalState.Provider> // обертка всего приложения
  );
};
