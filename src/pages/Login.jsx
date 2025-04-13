import { useDispatch } from "react-redux";
import { login } from "../redux/authSlide";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    // thực tế nên có form + gọi API, ở đây giả lập
    dispatch(login({ username: "manh" }));
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}
