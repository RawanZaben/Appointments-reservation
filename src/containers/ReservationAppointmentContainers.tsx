import React, { useState } from "react";
import ReservationConfirmation from "../components/ReservationConfirmation";

import { OptionType } from "../components/data";
import ReservationAppointment from "../components/ReservationAppointment";

const ReservationAppointmentContainers = () => {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      {!isSubmitted && (
        <ReservationAppointment
          setIsSubmitted={setIsSubmitted}
          name={name}
          setName={setName}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
        />
      )}
      {isSubmitted && selectedOption && (
          <ReservationConfirmation
            name={name}
            nameDoctor={selectedOption.name}
          />
      )}
    </div>
  );
};

export default ReservationAppointmentContainers;
