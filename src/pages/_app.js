import Layout from "../views/Layouts/Layout";
import AdminLayouts from "../views/Layouts/adminLayouts/adminLayouts";
import "../views/Layouts/Navbar/styles.css";
import "../pages/home/Slider.css";
import "../views/bodies/dopingSystem/Slider2.css";
import Head from "next/head";
import Swiper, { Navigation, Pagination } from "swiper";
import "../views/bodies/bodies.css";
import "../views/bodies/Deneme/deneme.css";
import "../views/bodies/guvenliKullanici/guvenliKullanici.css";
import "../views/bodies/nasiLilanVerebilirim/nasiLilanVerebilirim.css";
import "../views/bodies/dopingSystem/dopingSystem.scss";
import $ from "jquery";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/admin")) {
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
            crossorigin="anonymous"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossorigin="anonymous"
          ></link>
          {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script> */}

          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper/swiper-bundle.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/swiper/swiper-bundle.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
        </Head>

        <AdminLayouts>
          <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
          <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
          <Component {...pageProps} />
        </AdminLayouts>
      </>
    );
  }
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="css/materialize.min.css"
          media="screen,projection"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        ></link>

        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
      </Layout>
    </>
  );
}

export default MyApp;
