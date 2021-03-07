import Ozellikler from "./ozellikler/ozellikler";
import GuvenliKullanici from "./guvenliKullanici/guvenliKullanici";
import Ilan from "./nasiLilanVerebilirim/nasiLilanVerebilirim";
import Doping from "./dopingSystem/dopingSystem";
import BizeUlasin from "./bizeUlasin/bizeUlasin";

const Bodies = () => {
  return (
    <div className="contents">
      <Ozellikler />
      <GuvenliKullanici />
      <Ilan />
      <Doping />
      <BizeUlasin />
    </div>
  );
};

export default Bodies;
