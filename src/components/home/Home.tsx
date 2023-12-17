import { Outlet } from "react-router-dom";
import "./home.scss";
import { useSelector } from "react-redux";
import Header from "../common/header/Header";
import Nav from "../common/navbar/Nav";

export default function Home() {
  const isDisableCart = useSelector((state) => state.movies.isDisableCart);

  return (
    <>
      <div className="container">
        {isDisableCart ? <Header /> : ""}
        <Nav />
        <section>
          <Outlet />
        </section>
      </div>
    </>
  );
}
