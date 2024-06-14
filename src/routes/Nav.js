import { Outlet } from "react-router-dom";

export const Nav = () => {
  return (
    <div id="app-container">
      <h1>Nav</h1>
      <Outlet />
    </div>
  );
};
