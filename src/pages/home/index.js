import Head from "next/head";
import Link from 'next/link';
import Bodies from "../../views/bodies/Bodies";
import Slider from "./Slider";

export default function Home() {
  return (
    <div>
      <br></br><br></br>
      <Slider/>
      {/* <br></br>
      KombineBul
      <br></br>
      
      <Link href="/deneme">Go to Deneme</Link> */}
      <Bodies/>
    </div>
  )
}
