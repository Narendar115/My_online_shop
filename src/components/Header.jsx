import React from "react";
import App, { AppContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const { user } = useContext(AppContext);
  return (
    <div>
        <header className="header">
          <h1 style={{textAlign:"left"}}>My Online Shop</h1>
      <Link to="/">Home</Link>-
      <Link to="/cart">Cart</Link>-
      <Link to="/order">Order</Link>-
        </header>
      {user.token ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <hr />
    </div>
  );
}