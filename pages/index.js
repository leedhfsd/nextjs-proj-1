import Seo from "../components/Seo";
import Image from "next/image";
import { useState, useEffect } from "react";
import pic1 from "../public/home.jpg";
import pic2 from "../public/home6.jpg";
import pic3 from "../public/home5.jpg";
import pic4 from "../public/home3.jpg";

export default function Home() {

  return (
    <>
      <Seo title="왓챠"/>
      <Image src={pic1} layout="responsive" alt="main"/>
      <Image src={pic2} layout="responsive" alt="main"/>
      <Image src={pic3} layout="responsive" alt="main"/>
      <Image src={pic4} layout="responsive" alt="main"/>
    </>

  )
}
