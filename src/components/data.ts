export type OptionType = {
    id: number
    name: string;
    specialty: string;
    available: boolean;
    rating: number;
    img: string
};

export const doctorsData: OptionType[] = [
    { id: 1, name: 'دكتور أحمد محمد', specialty: 'دكتور عام', available: true, rating: 5, img: "https://mrkzgulfup.com/uploads/168065410224671.png" },
    { id: 2, name: 'دكتوره سارة خالد', specialty: 'دكتورة أطفال', available: true, rating: 4, img: "https://mrkzgulfup.com/uploads/168065497966281.png" },
    { id: 3, name: 'دكتور محمد طارق', specialty: 'دكتور جراحة', available: true, rating: 5, img: "https://mrkzgulfup.com/uploads/168065497970762.png" },
    { id: 4, name: 'دكتور خالد وليد', specialty: 'دكتور قلب', available: true, rating: 2, img: "https://mrkzgulfup.com/uploads/168065497974993.png" },
    { id: 5, name: 'دكتوره ليان احمد', specialty: 'دكتورة نساء وولادة', available: true, rating: 1, img: "https://mrkzgulfup.com/uploads/168065497979474.png" },
    { id: 6, name: 'دكتور عبدالعزيز فهد', specialty: 'دكتور عام', available: true, rating: 3, img: "https://mrkzgulfup.com/uploads/168065497983955.png" },
    { id: 7, name: 'دكتور عادل زين', specialty: 'دكتور عام', available: false, rating: 3, img: "https://mrkzgulfup.com/uploads/16806549798856.png" },
    { id: 7, name: 'دكتور مصطفي سعد ', specialty: 'دكتور عام', available: false, rating: 3, img: "https://mrkzgulfup.com/uploads/168065497983955.png" },
];