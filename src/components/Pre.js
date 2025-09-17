import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="preloader-content">
        <div className="preloader-spinner"></div>
        <div className="preloader-text">Carregando</div>
      </div>
    </div>
  );
}

export default Pre;