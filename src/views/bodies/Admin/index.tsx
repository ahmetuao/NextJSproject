const styles = require("./styles.module.scss");
import Link from "next/link";
import Contact from "./Contact";
import Home from "./Home";
import classNames from "classnames";

import { useState } from "react";

import React from "react";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  const sections = [
    {
      id: 1,
      name: "contact",
    },
    {
      id: 2,
      name: "home",
    },
    {
      id: 3,
      name: "try",
    },
    {
      id: 4,
      name: "hebele",
    },
  ];
  const [Section, setSection] = useState(sections[0].id);

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar-fixed">
        <nav>
          <div className={classNames("nav-wrapper", styles.panelHeader)}>
            <a href="/admin" className="brand-logo center">
              Kombinebul Admin
            </a>

            {/* MOBİLE SIDENAV */}
            <a
              href="#"
              data-target="slide-out"
              className="sidenav-trigger"
              onClick={() => {
                var elems = document.querySelectorAll(".sidenav");
                var instances = M.Sidenav.init(elems, {
                  inDuration: 500,
                  outDuration: 500,
                });
              }}
            >
              <i className="material-icons">menu</i>
            </a>
            {/* -----------------MOBİLE SIDENAV------------------ */}
          </div>
        </nav>
      </div>

      {/* ---------------------------NAVBAR--------------------------- */}

      {/* SIDENAV (BOTH OF DESKTOP AND MOBILE) */}
      <ul
        id="slide-out"
        className={classNames("sidenav sidenav-fixed", styles.mySideNav)}
      >
        <li>
          <a className="btn-large waves-effect waves-light green darken-4">
            Giriş Yap
            <i className="fas fa-sign-in-alt"></i>
          </a>
        </li>
        <li>
          <a className="btn-large waves-effect waves-light green darken-4">
            Çıkış Yap
            <i className="fas fa-user-plus"></i>
          </a>
        </li>
        <ul className={styles.list}>
          {/* STATE KATEGORİLER LİSTELEME */}
          {sections.map((section) => {
            // const active = section.id === activeSection
            const active = Section === section.id && styles.listItemActive;

            return (
              <li
                key={section.id}
                className={classNames(styles.listItem, active)}
                onClick={() => setSection(section.id)}
              >
                {/* <i className={section.icon} aria-hidden="true"></i> */}
                <span>{section.name}</span>
              </li>
            );
          })}
          {/* ------------------STATE KATEGORİLER LİSTELEME---------------------- */}
        </ul>
      </ul>
      {/* --------------SIDENAV (BOTH OF DESKTOP AND MOBILE)--------------- */}

      <div className={styles.adminContent}>
        <div className={styles.contact}>
          <h3>{sections[Section - 1].name}</h3>
          <div className={styles.container}>
            <div className={styles.children}>
              {Section === 1 && <Contact />}
              {Section === 2 && <Home />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
