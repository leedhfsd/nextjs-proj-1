import Seo from "../components/Seo";
import Image from "next/image";
import { useState, useEffect } from "react";
import pic1 from "../public/home.jpg";
import pic2 from "../public/home6.jpg";
import pic3 from "../public/home5.jpg";
import pic4 from "../public/home3.jpg";

export default function Home() {
  //서버에서 이미지 받아와서 랜덤 이미지로 뿌리는거로 수정할 예정
  return (
    <>
      <Seo title="왓챠"/>
      <main className="">
        <div className="relative font-bold">
          <div className="absolute z-10 left-1/2 top-1/2 trans text-center">
            <span className="text-white text-6xl my-8">영화, 드라마, 예능, 다큐멘터리를 무제한으로</span>
            <h1 className="text-gray-400 text-2xl my-8">매주 5백 여편의 신작이 업데이트 되며, 추가 요금은 전혀 없어요.</h1>
            <button className="text-white text-2xl rounded-full bg-[#f82f61] py-6 px-6 my-8 font-bold">2주 무료 이용 시작</button>
          </div>
          <Image className="brightness-50" src={pic1} layout="responsive" alt="main"/>
        </div>
        <div className="relative font-bold">
          <div className="absolute z-10 left-1/2 top-1/2 trans text-center">
            <span className="text-white text-6xl my-8">여럿이 함께, 하나의 이용권으로</span>
            <h1 className="text-gray-400 text-2xl my-8 md:text-2xl">동시 4개 기기에서 재생이 가능한 프리미엄 이용권을 이용해보세요.</h1>
            <button className="text-white text-2xl rounded-full bg-[#f82f61] py-6 px-6 my-8 font-bold">2주 무료 이용 시작</button>
          </div>
          <Image className="brightness-50" src={pic2} layout="responsive" alt="main"/>
        </div>
        <div className="relative font-bold">
          <div className="absolute z-10 left-1/2 top-1/2 trans text-center">
            <span className="text-white text-6xl my-8">이제 TV로 최고의 화질을 경험하세요</span>
            <h1 className="text-gray-400 text-2xl my-8">최대 Ultra HD 4K 해상도로 생생한 감동을 느껴보세요.</h1>
            <button className="text-white text-2xl rounded-full bg-[#f82f61] py-6 px-6 my-8 font-bold">2주 무료 이용 시작</button>
          </div>
          <Image className="brightness-50" src={pic3} layout="responsive" alt="main"/>
        </div>
        <div className="relative font-bold">
          <div className="absolute z-10 left-1/2 top-1/2 trans text-center">
            <span className=" text-white text-6xl my-8">이동 중에도 감상을 멈추지 마세요</span>
            <h1 className=" text-gray-400 text-2xl my-8">보고 싶은 콘텐츠를 다운로드하여 오프라인으로 즐기세요.</h1>
            <button className="text-white text-2xl rounded-full bg-[#f82f61] py-6 px-6 my-8 font-bold">2주 무료 이용 시작</button>
          </div>
          <Image className="brightness-50" src={pic4} layout="responsive" alt="main"/>
        </div>
      </main>
      <style jsx>{`
        .trans {
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>

  )
}
