import React, { useRef } from "react";
import domtoimage from "dom-to-image";
import img1 from "../assets/img2.png";
import img2 from "../assets/img3.png";

type ReservationConfirmationProps = {
    name: string;
    nameDoctor: string;
};
const ReservationConfirmation: React.FC<ReservationConfirmationProps> = ({
    name,
    nameDoctor,
}) => {
    const downloadRef = useRef<any>();
    const downloadRef1 = useRef<any>();

    const handleDownloadImage = () => {
    const targetEl = downloadRef.current;
    domtoimage.toJpeg(targetEl!, { quality: 0.95 }).then((dataUrl) => {
        let link = document.createElement("a");
        link.download = "img.jpeg";
        link.href = dataUrl;
        link.click();
    });
    };
    const handleDownloadImage1 = () => {
    const targetEl = downloadRef1.current;
    domtoimage.toJpeg(targetEl!, { quality: 0.95 }).then((dataUrl) => {
        let link = document.createElement("a");
        link.download = "img.jpeg";
        link.href = dataUrl;
        link.click();
    });
    };
    return (
    <div className="relative flex flex-col items-center justify-center">
        <div className="hidden sm:block" ref={downloadRef}>
        <div className="flex justify-center items-center">
            <h1 className="absolute ml-[800px] text-white text-3xl sm:font-bold mt-10">
            {name} تم حجز موعدك بنجاح
            </h1>
            <h1 className="absolute ml-[800px] text-white text-xl font-bold mt-32">
            مع {nameDoctor}
            </h1>
            <img className="" src={img1} alt="" />
        </div>
        <button
            className="absolute items-center h-14 w-[200px] bg-[#D47782] rounded-lg text-xl text-white  font-bold shadow-md ml-[1050px] -mt-[250px]"
            onClick={handleDownloadImage}
        >
            لطباعه الموعد
        </button>
        </div>
        <div className="sm:hidden block" ref={downloadRef1}>
        <div className="flex justify-center items-center">
            <h1 className="absolute -mt-[270px] text-white sm:text-xl text-base">
            {name} تم حجز موعدك بنجاح
            </h1>
            <h1 className="absolute -mt-[210px] text-white sm:text-lg text-sm">
            مع {nameDoctor}
            </h1>
            <img className="" src={img2} alt="" />
        </div>
        <button
            className="absolute items-center mt-4 h-14 sm:w-[200px] w-[100px] bg-[#D47782] rounded-lg sm:text-xl text-sm text-white font-bold shadow-md ml-[150px]"
            onClick={handleDownloadImage1}
        >
            لطباعه الموعد
        </button>
        </div>
    </div>
    );
};

export default ReservationConfirmation;
