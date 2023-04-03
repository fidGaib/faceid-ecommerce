import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { useSeeMode } from "../../see-mode/module";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
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
    textIndent: "8px",
  };
  return (
    <div className="filter_menu">
      <div className="row">
        <span style={turn ? styles : {}}>Фильтры: </span>
        <select
          className="filter-sort-select"
          name="category"
          value={category}
          onChange={handleCategory}
        >
          <option value="" style={turn ? styles : {}}>
            Все товары
          </option>
          {categories.map((category) => (
            <option value={"category=" + category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row sort">
        <span>Сортировать по: </span>
        <select
          className="filter-sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="" style={turn ? styles : {}}>
            Новым
          </option>
          <option value="sort=oldest" style={turn ? styles : {}}>
            Старым
          </option>
          <option value="sort=-sold" style={turn ? styles : {}}>
            Лучшим продажам
          </option>
          <option value="sort=-price" style={turn ? styles : {}}>
            Убыванию цены
          </option>
          <option value="sort=price" style={turn ? styles : {}}>
            Возрастанию цены
          </option>
        </select>
      </div>

      <input
        className="filter-sort-select"
        type="text"
        value={search}
        placeholder="Найти товар..."
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        style={turn ? styles : {}}
      />
    </div>
  );
}

export default Filters;
