import { Outlet } from "react-router-dom";

export const Nav = () => {
  return (
    <div id="app-container">
      <h1 id="company-name">A Happy Bouncing LLC</h1>
      <nav>
        {/* Products page is HOME component */}
        <a href="/">Products</a> {" | "}
        <a href="/admin">Admin</a> {" | "}
        <a href="/about">About</a> {" | "}
        <a href="/login">Login</a>
      </nav>
      <Outlet />
    </div>
  );
};
