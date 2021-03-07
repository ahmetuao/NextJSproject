// import Head from "next/head";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../ozellikler/Styles.module.css";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Ozellikler() {
  return (
    <div id="ozellikler" className={styles.ozellikler}>
      <div class="container" id="myContainer">
        <h5 className={styles.ozelliklerH1}>ÖZELLİKLER</h5>
        <div className={styles.gridRow}>
          <div className={styles.gridColumn}>
            <h3 className={styles.ozelliklerH3}>Puan Durumu & Fikstür</h3>
            <div>
              <img
                src="\static\assets\png\touchscreen-smartphone.png"
                width={250}
              />
            </div>
          </div>

          <div className={styles.gridColumn}>
            <div className={styles.gridRow2}>
              <div>
                <img src="\static\assets\png\touchscreen-smartphone.png" />
              </div>
              <div>
                Tüm akıllı telefonlarda kullanılabilen akıcı ve basit arayüz.
              </div>
            </div>
            <div className={styles.gridRow2}>
              <div>
                <img src="\static\assets\png\stack-of-money.png" />
              </div>
              <div>Daha hızlı satış için vitrin ilanları.</div>
            </div>
            <div className={styles.gridRow2}>
              <div>
                <img
                  src="\static\assets\png\onayli.png"
                  width={"128"}
                  height={"128"}
                />
              </div>

              <div>Güvenli kullanıcı ile güvenilir alışveriş.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
