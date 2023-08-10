import { FC } from "react";
import { Form, Link } from "react-router-dom";
import styles from "./../Sass/_signup.module.scss";

const SignUp: FC = () => {
  return (
    <div className={styles["sign_in"]}>
      <Form className={styles["form"]} method="POST">
        <div className={styles["form__div"]}>
          <label className={styles["form__div--label"]}>Name</label>
          <input
            className={styles["form__div--input"]}
            type="text"
            name="name"
            required
          />
        </div>

        <div className={styles["form__div"]}>
          <label className={styles["form__div--label"]}>Email</label>
          <input
            className={styles["form__div--input"]}
            type="text"
            name="email"
            required
          />
        </div>
        <div className={styles["form__div"]}>
          <label className={styles["form__div--label"]}>Telephone</label>
          <input
            className={styles["form__div--input"]}
            type="tel"
            name="telephone"
            required
          />
        </div>
        <div className={styles["form__div"]}>
          <label className={styles["form__div--label"]}>Password</label>
          <input
            className={styles["form__div--input"]}
            type="password"
            name="password"
            required
          />
        </div>
        <button className={styles["form__button"]}>Sign Up</button>
      </Form>
      <p className={styles["form__para"]}>
        Already have an account?{" "}
        <Link className={styles["form__para--link"]} to="/sign_in">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
