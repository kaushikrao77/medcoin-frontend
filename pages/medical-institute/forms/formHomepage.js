import { useState } from "react"
import StepOne from "../../../components/modals/StepOne";
import StepTwo from "../../../components/modals/StepTwo";

import { Link } from "@mui/material";
import { HospitalNavbar } from "../../../components/Navbar";
import StepThree from "../../../components/modals/StepThree";
import StepFour from "../../../components/modals/StepFour";
import RecentEntries from "../recent-entries";



export default function FormHomepage() {

  const [step, setstep] = useState(1)

  const [formData, setFormData] = useState({
    patientId: "",
    title: "",
    description: "",
    remarks: ""
  })

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const handleInputData = input => e => {
    
    const {value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  switch (step) {

    case 1:
      return (
        <>
        <HospitalNavbar/>
        <div>
          <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
        </div>
        </>
      );

    case 2:
      return (
        <>
        <HospitalNavbar/>
        
        <div>
        <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
        </>
      );
      
    case 3:
      return (
        <>
        <HospitalNavbar/>
        <div>
          <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
        </>
      );

    case 4:
      return (
        <>
        <HospitalNavbar/>
        <div>
          <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
        </>
      );

    // default case to show nothing
    default:
      return (
        <div>
          <RecentEntries/>
        </div>
      );
  }

  
}
