import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlide";

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Đăng xuất</button>;
}
