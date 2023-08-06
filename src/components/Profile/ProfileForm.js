import AuthContext from "../../store/Auth-Context";
import classes from "./ProfileForm.module.css";
import { useContext, useRef } from "react";

const ProfileForm = () => {
  const newPasswordref = useRef();
  const authCntxt = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPassword = newPasswordref.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDsDBhlL65XQvkTXBbRM2IAOooK1c15K4Y",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCntxt.token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {});
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="6"
          ref={newPasswordref}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
