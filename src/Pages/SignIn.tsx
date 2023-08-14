import { FC } from "react";
import { Form, Link, useNavigation } from "react-router-dom";
import styles from "./../Sass/_signin.module.scss";

const SignIn: FC = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className={styles["sign_in"]}>
      <Form className={styles["form"]} method="POST" action="/sign_in">
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
          <label className={styles["form__div--label"]}>Password</label>
          <input
            className={styles["form__div--input"]}
            type="password"
            name="password"
            required
          />
        </div>
        <button disabled={isSubmitting} className={styles["form__button"]}>
          {isSubmitting ? "Signing In..." : "Login"}
        </button>
      </Form>
      <p className={styles["form__para"]}>
        Don't have an account?{" "}
        <Link className={styles["form__para--link"]} to="/sign_up">
          Sign Up
        </Link>{" "}
        Today.
      </p>
    </div>
  );
};

export default SignIn;
