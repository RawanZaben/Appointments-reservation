import React, { useState } from "react";
import ReservationConfirmation from "./ReservationConfirmation";

import img from '../assets/img1.png';
import img1 from '../assets/img4.png';

type OptionType = {
    id: number
    name: string;
    specialty: string;
    available: boolean;
    rating: number;
    img: string
};

const doctorsData: OptionType[] = [
    { id: 1, name: 'دكتور أحمد محمد', specialty: 'دكتور عام', available: true, rating: 5, img: "https://mrkzgulfup.com/uploads/168065410224671.png" },
    { id: 2, name: 'دكتوره سارة خالد', specialty: 'دكتورة أطفال', available: true, rating: 4, img: "https://mrkzgulfup.com/uploads/168065497966281.png" },
    { id: 3, name: 'دكتور محمد طارق', specialty: 'دكتور جراحة', available: true, rating: 5, img: "https://mrkzgulfup.com/uploads/168065497970762.png" },
    { id: 4, name: 'دكتور خالد وليد', specialty: 'دكتور قلب', available: true, rating: 2, img: "https://mrkzgulfup.com/uploads/168065497974993.png" },
    { id: 5, name: 'دكتوره ليان احمد', specialty: 'دكتورة نساء وولادة', available: true, rating: 1, img: "https://mrkzgulfup.com/uploads/168065497979474.png" },
    { id: 6, name: 'دكتور عبدالعزيز فهد', specialty: 'دكتور عام', available: true, rating: 3, img: "https://mrkzgulfup.com/uploads/168065497983955.png" },
    { id: 7, name: 'دكتور عادل زين', specialty: 'دكتور عام', available: false, rating: 3, img: "https://mrkzgulfup.com/uploads/16806549798856.png" },
    { id: 7, name: 'دكتور مصطفي سعد ', specialty: 'دكتور عام', available: false, rating: 3, img: "https://mrkzgulfup.com/uploads/168065497983955.png" },
];

const ReservationAppointment = () => {
    const [name, setName] = useState("");
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [sortOrder, setSortOrder] = useState("desc");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selectedOption && name !== "" && isSubmit) {
            setIsSubmitted(true);
        }
    };

    return (
        <div>
            {!isSubmitted && (
                <div className="relative flex flex-col items-center justify-center">
                    <div className='flex justify-center items-center z-[100]'>
                        <h1 className='absolute sm:mr-[700px] mr-[200px] mt-3 text-white sm:text-3xl sm:font-bold sm:mt-10'>احجز موعدك الان</h1>
                        <img className="" src={img} />
                    </div>
                    <div className="mt-7 z-[100]">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col items-center ">
                                <h1 className="sm:text-3xl text-xl mb-4 font-bold text-pink sm:mt-10 font-myFont"> اختيار موعدك المناسب </h1>
                            </div>
                            <div className="flex flex-col items-center text-center mt-3 mx-auto sm:w-[700px]">
                                <h1 className="sm:text-xl text-lg font-bold text-blue-500/70 mb-5"> : يرجي ادخال اسمك لحجز الموعد </h1>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    className="mb-2 h-14 sm:w-[600px] w-[250px] rounded-lg border-2 border-blue-700 py-5 px-4 text-sm
                                                focus:border-transparent focus:outline-none focus:ring-2 disabled:bg-opacity-20 placeholder:text-blue-500/50"
                                    placeholder="اكتب اسمك هنا بالعربي ..."
                                    style={{ direction: 'rtl' }}
                                />

                            </div>
                            <div className="flex flex-col justify-center items-center sm:mt-2 mt-7 sm:mb-5 mx-auto ">
                                <h1 className="sm:text-xl text-lg font-bold text-blue-500/70">  يرجي اختيار الموعد المناسب </h1>
                            </div>
                            <div className="mx-auto flex justify-center sm:flex-wrap sm:flex-row-reverse flex-col flex-wrap-reverse text-center sm:ml-10">
                                {doctorsData.sort((a, b) => b.rating - a.rating).map((doctor) => (
                                    <div key={doctor.id} className=''
                                        onClick={() => setSelectedOption(doctor)}
                                    >
                                        {doctor.available &&
                                            <div className={`cursor-pointer border-2 flex h-80 w-80 sm:mr-5 mt-5
                                            flex-col items-center justify-center rounded-2xl transition-all duration-300 md:h-80 md:w-72 md:gap-5
                                            ${selectedOption === doctor ? "border-primary-200 border-pink bg-blue-700" : "border-blue-700"}`}>
                                                <div>
                                                    <img className={`w-32 h-32 rounded-full mr-1 border border-blue-500/50 bg-blue-700 ${selectedOption === doctor ? " bg-pink" : ""}`} src={doctor.img} />
                                                </div>
                                                <div>
                                                    <p className="text-pink md:text-sm mt-3 ">5/{doctor.rating} التقييم </p>
                                                    <p className="text-blue-500 font-bold  md:text-xl mt-2">{doctor.name}</p>
                                                    <p className="text-blue-600  md:text-lg mt-1">{doctor.specialty}</p>
                                                </div>
                                            </div>}

                                    </div>
                                ))}

                            </div>
                            <div className="flex justify-center items-center mt-3 py-5 mx-auto sm:w-[700px]">
                                <button
                                    className="items-center mt-4 h-14 sm:w-[250px] bg-pink rounded-lg border-2 text-xl text-white border-pink py-4 px-3 font-bold shadow-md"
                                    disabled={!selectedOption || !name}
                                    onClick={() => setIsSubmit(true)}
                                >
                                    احجز الموعد
                                </button>
                            </div>
                        </form>
                    </div>
                    <img src={img1} className='absolute z-0' />
                    <img src={img1} className='absolute z-0 mt-[1200px] -ml-[1800px]' />
                    <img src={img1} className='absolute z-0 mt-[1200px] -mr-[1850px]' />


                </div>
            )}
            {
                isSubmitted && selectedOption && (
                    <div>
                        <ReservationConfirmation xname={name} nameDoctor={selectedOption.name} />
                    </div>
                )
            }
        </div >
    );
};

export default ReservationAppointment;
