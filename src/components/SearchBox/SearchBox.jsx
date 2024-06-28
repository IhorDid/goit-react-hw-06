import styles from "./SearchBox.module.css";
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
