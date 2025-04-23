import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";

function Layout() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-screen-2xl overflow-hidden">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
