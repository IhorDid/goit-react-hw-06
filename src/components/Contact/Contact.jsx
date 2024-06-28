import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
const Contact = ({ currentUser, onDelete }) => {
  return (
    <li className={styles.list}>
      <div>
        <p>
          <FaUser /> {currentUser.name}
        </p>
        <p>
          <FaPhoneAlt /> {currentUser.number}
        </p>
      </div>
      <button onClick={() => onDelete(currentUser.id)}>Delete</button>
    </li>
  );
};

export default Contact;
