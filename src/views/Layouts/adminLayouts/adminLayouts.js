import NavBar from "../adminLayouts/Navbar/Navbar";
import Footer from "../adminLayouts/Footer/Footer";
import Head from "next/head";
import Sidenav from '../adminLayouts/Sidenav/Sidenav';
const adminLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <NavBar />
      {/* <Sidenav/> */}
      {children}
      <Footer />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </>
  );
};

export default adminLayout;
