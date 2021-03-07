import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

const NavBar = () => {
  return (
      <div class="navbar-fixed">
        <nav class="nav-extended green darken-4">
          <div class="nav-wrapper">
            <a href="/home" class="brand-logo">
              KombineBul
            </a>
            <a
              href="#"
              data-target="mobile-demo"
              class="sidenav-trigger"
              onClick={() => {
                var elems = document.querySelectorAll(".sidenav");
                var instances = M.Sidenav.init(elems);
              }}
            >
              <i class="material-icons">menu</i>
            </a>
            <div class="tabs tabs-transparent center" id="social-media-icons">
              <li class="tab">
                <a>
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li class="tab">
                <a>
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li class="tab">
                <a>
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="tab">
                <a>
                  <i class="fab fa-pinterest"></i>
                </a>
              </li>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <a href="sass.html">
                    <i class="fas fa-sign-in-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="badges.html">
                    <i class="fas fa-user-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="nav-content white">
            <div class="tabs tabs-transparent center" id="nav1">
              <li class="tab">
                <a href="/home">Ana Sayfa</a>
              </li>
              <li class="tab">
                <a href="#ozellikler">Özellikler</a>
              </li>
              <li class="tab">
                <a href="#guvenliKullanici">Güvenli Kullanıcı</a>
              </li>
              <li class="tab">
                <a href="#ilan">Nasıl İlan Verebilirim</a>
              </li>
              <li class="tab">
                <a href="#dopingSystem">Doping Sistemi</a>
              </li>
              <li class="tab">
                <a href="#bizeUlasin">Bize Ulaşın</a>
              </li>
            </div>
          </div>

          <div>
            <ul class="sidenav" id="mobile-demo">
              <li>
                <a
                  class="text-center text-decoration-none"
                  id="nav1-side-giris"
                  href="/"
                >
                  KOMBİNEBUL
                </a>
                <hr />
              </li>
              <li>
                <a class="btn-large waves-effect waves-light green darken-4">
                  Giriş Yap
                  <i class="fas fa-sign-in-alt"></i>
                </a>
              </li>
              <li>
                <a class="btn-large waves-effect waves-light green darken-4">
                  Kayıt Ol
                  <i class="fas fa-user-plus"></i>
                </a>
              </li>
              <li class="row">
                <div class="col-6">
                  <a>
                    <img
                      src="/static/assets/png/app-store.png"
                      width={"100%"}
                      height={"100%"}
                    />
                  </a>
                </div>
                <div class="col-6">
                  <a>
                    <img
                      src="/static/assets/png/app-store.png"
                      width={"100%"}
                      height={"100%"}
                    />
                  </a>
                </div>
              </li>
              <li>
                <a href="/Deneme">Deneme</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
};
export default NavBar;
