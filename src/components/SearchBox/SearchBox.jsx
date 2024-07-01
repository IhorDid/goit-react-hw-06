import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Filter, selectNameFilter } from "../../redux/filtersSlice";
const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input
        className={styles.search}
        type="text"
        name="seachName"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default SearchBox;
