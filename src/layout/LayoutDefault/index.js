import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../../components/LogoutButton";
import "./LayoutDefault.css";

export default function Layout() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/blog">Blog</Link> |{" "}
        {isAuthenticated ? <LogoutButton /> : <Link to="/login">Login</Link>}
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
