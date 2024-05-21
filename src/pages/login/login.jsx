import "./style.css";
import logo from "../../assets/logo.svg";

export const Login_page = () => {
  return (
    <div className="login_page container">
      <nav>
        <img src={logo} alt="logo image" />
      </nav>

      <div className="wrapper">
        <div className="form">
          <h3>Welcome, sigin with your email.</h3>
          <div className="input_con">
            <label htmlFor="emial">Email</label>
            <input type="email" required className="email_input" />
            <p className="err_msg"></p>
          </div>
          <button className="login_btn">sign in</button>
        </div>
      </div>
    </div>
  );
};
