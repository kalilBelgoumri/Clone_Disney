import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TiThMenu
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
        size="20"
      />
      <div className={open ? "showMenuNav" : "hideMenuNav"}>
        <style>{`
.hideMenuNav {
  display: none;
}
.showMenuNav {
  position: absolute;
  width: 100vw;
  height: 100vh;
  margin-top:20px;
  left: 0;
  background: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition:all .10s ease-in-out
}
`}</style>
      </div>
    </div>
  );
}

export default HamburgerMenu;
