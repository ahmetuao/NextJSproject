import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { noAuto } from "@fortawesome/fontawesome-svg-core";
import styles from "./styles.module.scss";

const NavBar = () => {
  return (
    <div></div>
    // <div class="navbar-fixed">
    //   <nav class="nav-extended green darken-4">
    //     <div className={styles.adminNavHeader}>
    //       <div class="nav-wrapper mb-5 text-left">
    //         <a href="/home" class="brand-logo" id="adminNavHeader">
    //           <h4>Kombinebul Admin</h4>
    //         </a>
    //         <a
    //           href="#"
    //           data-target="mobile-demo"
    //           class="sidenav-trigger"
    //           onClick={() => {
    //             var elems = document.querySelectorAll(".sidenav");
    //             var instances = M.Sidenav.init(elems);
    //           }}
    //         >
    //           <i class="material-icons">menu</i>
    //         </a>
    //       </div>
    //     </div>
    //     <div>
    //       <ul class="sidenav" id="mobile-demo">
    //         <li>
    //           <a
    //             class="text-center text-decoration-none"
    //             id="nav1-side-giris"
    //             href="/"
    //           >
    //             KOMBİNEBUL ADMİN
    //           </a>
    //           <hr />
    //         </li>
    //         <li>
    //           <a class="btn-large waves-effect waves-light green darken-4">
    //             Giriş Yap
    //             <i class="fas fa-sign-in-alt"></i>
    //           </a>
    //         </li>
    //         <li>
    //           <a class="btn-large waves-effect waves-light green darken-4">
    //             Çıkış Yap
    //             <i class="fas fa-user-plus"></i>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  );
};
export default NavBar;
