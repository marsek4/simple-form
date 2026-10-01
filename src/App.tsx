import "./App.css";
import styles from "./FormApp.module.css";
import { useState } from "react";

const App = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    console.log("login: ", login, "password: ", password);
  };

  return (
    <div className={styles.form}>
      <div className={styles.inputContainer}>
        <p className={styles.title}>login</p>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="login"
          className={styles.formInput}
        />
      </div>
      <div className={styles.inputContainer}>
        <p className={styles.title}>password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className={styles.formInput}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Enter
      </button>
    </div>
  );
};

export default App;
