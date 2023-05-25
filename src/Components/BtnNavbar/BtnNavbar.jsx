import React, { useState } from "react";
import "./BtnNavbar.css";

function BtnNavbar({ icon, description, btnChange, selected }) {
  const [btnClicked, setBtnClicked] = useState(false);

  const multipleClick = () => {
    setBtnClicked(!btnClicked)
    btnChange(description)
  }

  return (
    <div className="btnNavBar" onClick={multipleClick}>
      <h3 style={{color: selected===description ? '#d946ef' : ''}}>{icon}</h3>
      <a style={{color: selected===description ? '#d946ef' : ''}}>{description}</a>
    </div>
  );
}

export default BtnNavbar;
