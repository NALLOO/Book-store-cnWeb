import React from "react";

function Header() {
  return (
    <div
      className="header-container"
      style={{
        padding: "0 20px",
        height: "60px",
        background: "#fff",
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        gap: "10px",
        boxShadow: "0 0 10px 0 #aaabbb",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png"
        alt="logo"
        style={{
          width: "70px",
          height: "40px",
        }}
      />

      <div
        className="header-title"
        style={{
          fontWeight: "700",
          fontSize: "25px",
        }}
      >
        Nalloo
      </div>
    </div>
  );
}
export default Header;
