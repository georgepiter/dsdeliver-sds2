import React from "react";
import ReactLoading from "react-loading";

import "./styles.css";

const Loading = () => (
    <div className="section-loading">
        <ReactLoading type="bars" color="#DA5C5C" />
    </div>
);

export default Loading;