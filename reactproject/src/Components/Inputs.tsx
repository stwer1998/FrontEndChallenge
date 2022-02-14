import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterTitle,
  filterCategory,
  sortByPrice,
  sortByRealise,
} from "../redux/AlbumActionCreator";
import { store } from "../redux/store";
import { bypriseSort, byRealiseSort } from "../types/InitialState";

const Inputs: React.FC = () => {
  const [filterItem, setFilterItem] = useState<string>("");
  const dispatch = useDispatch();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterItem(event.target.value);
  };

  useEffect(()=>{
    const timeoutId = setTimeout(() => {
      dispatch(filterTitle(filterItem))
    }, 500);
    return ()=>clearTimeout(timeoutId)
  })

  const categoryChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(filterCategory(event.target.value));
  };

  const sortPricehandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case "price_asc":
        dispatch(sortByPrice(bypriseSort.price_asc));
        break;
      case "price_dsc":
        dispatch(sortByPrice(bypriseSort.price_desc));
        break;
      case "ralease_asc":
        dispatch(sortByRealise(byRealiseSort.release_asc));
        break;
      case "ralease_dsc":
        dispatch(sortByRealise(byRealiseSort.release_desc));
        break;
      default:
        dispatch(sortByPrice(null));
    }
  };

  const state = store.getState();
  let category = state.data
    .map((x) => x.category)
    .filter(
      (value, index, categoryArray) => categoryArray.indexOf(value) === index
    );

  const styles = {
    searchContainer: {
      padding: "20px 3% 0 3%",
      width: "100%",
      margin: "0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    searchItem: {
      padding: "4px 24px 0 24px",
      backgroundColor: "rgba(255, 255, 255, 0.19)",
      maxWidth: "570px",
      minWidth: "275px",
      width: "50%",
      border: "none",
      height: "60px",
      borderRadius: "19px",
      color: "white",
      transition: "background-color .3s ease, outline 0.3s ease",
    },
  } as const;

  return (
    <div style={styles.searchContainer} aria-label="Search fields">
      <input
        style={styles.searchItem}
        onChange={changeHandler}
        value={filterItem}
        className="search"
        placeholder="Search by title…"
        type="text"
        data-bind="value: filter, valueUpdate: 'input'"
      />
      <select
        style={styles.searchItem}
        className="category"
        name="category"
        id="category"
        defaultValue={""}
        onChange={categoryChangeHandler}
      >
        <option value={""}> -- Select category -- </option>
        {category.map((x) => {
          return (
            <option key={x} value={x}>
              {x}
            </option>
          );
        })}
      </select>
      <select
        style={styles.searchItem}
        className="sort"
        name="sort"
        id="sort"
        defaultValue={""}
        onChange={sortPricehandler}
      >
        <option value="" disabled>
          {" "}
          -- Select sort --{" "}
        </option>
        <option value="price_asc"> Prise_asc </option>
        <option value="price_dsc"> Price_dsc </option>
        <option value="ralease_asc"> Release_asc </option>
        <option value="ralease_dsc"> Release_dsc </option>
      </select>
    </div>
  );
};

export default Inputs;
