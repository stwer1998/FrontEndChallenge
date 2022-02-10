import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTitle, filterCategory } from "../redux/AlbumActionCreatoe";
import { store } from "../redux/store";

const Inputs: React.FC = () => {
  const [filterItem, setFilterItem] = useState<string>("");
  let delaySearch: ReturnType<typeof setTimeout>;
  const dispatch = useDispatch();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterItem(event.target.value);
    clearTimeout(delaySearch);
    delaySearch = setTimeout(() => dispatch(filterTitle(event.target.value)), 800);
  };

  const categoryChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) =>{      
      dispatch(filterCategory(event.target.value));
  }

  const state = store.getState();
  let category = state.data.map(x=>x.category).filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);
  return (
    <div className="search-container" aria-label="Search fields">
      <input
        onChange={changeHandler}
        value={filterItem}
        className="search"
        placeholder="Search…"
        type="text"
        data-bind="value: filter, valueUpdate: 'input'"
      />
        <select name="category" id="category" defaultValue={''} onChange={categoryChangeHandler}>
        <option value={''}> -- Select category -- </option>
        {category.map(x=>{
            return (<option key={x} value={x}>{x}</option>)
        })}
        </select>
    </div>
  );
};

export default Inputs;
