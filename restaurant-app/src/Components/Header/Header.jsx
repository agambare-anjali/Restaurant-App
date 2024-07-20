import React, { Fragment } from "react";
import styles from "./header.module.css";

const Header = ({ heading, showHomeIcon }) => {
  return (
    <Fragment>
      <div className={styles.headerWrapper}>
        <h3>{heading}</h3>
        {showHomeIcon ? <i className="fa fa-user"></i> : ""}
      </div>
    </Fragment>
  );
};

export default Header;
