import { Outlet } from "react-router-dom";

export const Nav = () => {
  return (
    <div id="app-container">
      <h1 id="company-name">A Happy Bouncing LLC</h1>
      <nav>
        <a href="/">Products</a> |<a href="/account">Account</a> |
        <a href="/about">About</a>
      </nav>
      <Outlet />
    </div>
  );
};
