import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStartup from '@/utils/useStartup';
import { toast } from "react-toastify"; 
import { FaWindows } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CircularProgress from '@/components/CircularProgress';


interface Step {
  label: string;
  content: string;
}

const steps: Step[] = [
  { label: 'Basic Company information', content: 'Enter company details' },
  { label: 'Founder Details', content: 'Enter founder information' },
  { label: 'Company Overview', content: 'Provide an overview' },
  { label: 'Team Information', content: 'Details about the team' },
  { label: 'Product and traction', content: 'Describe product and traction' },
  { label: 'Funding Information', content: 'Funding and financials' },
];

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    startup_name: '',
    startup_description: '',
    startup_location: '',
    startup_website: '',
    startup_email: '',
    picture: null ,
    team_size: 0,
    no_of_teams: 0,
    cofounder: '',
    profile_image: null ,
    linkedin_profile: '',
    nin: 0,
    amount_of_funds: 0,
    usage_of_funds: '',
    no_of_customers: 0,
    video: null ,
    startup_industry: '',
    full_name: '',
    founder_linkedin_profile: '',
    email_address: '',
    phone_no: 0,
    founder_profile_img: null ,
    founder_nin: 0,
    role: '',
    hasLaunched: '',
    hasRaisedBefore: '',
    user_id: 1,
  });

  const { submitStartup, loading, error, success } = useStartup();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
  
    if (files && files.length > 0) {
      // Handle file input
      const file = (e.target as HTMLInputElement).files?.[0];
  
      // Instead of converting to base64, directly store the file object
      setFormData((prevData) => ({
        ...prevData,
        [name]: file, 
      }));
    } else {
      // Handle other inputs (e.g., numeric input validation)
      if (name === 'amount_of_funds') {
        const validAmount = /^[0-9]+(\.[0-9]{0,2})?$/;
        if (validAmount.test(value)) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: parseFloat(value), // Parse value as a number
          }));
        } else {
          console.log('Invalid amount format');
        }
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }
  };
  
  
  

  const handleSubmit = async () => {
    try {
      // Log formData before processing
      console.log("Form Data before processing:", formData);
      
      // Create a plain object instead of FormData
      const formDataToSubmit = {};
  
      // Process each field in formData and append it to formDataToSubmit
      Object.entries(formData).forEach(([key, value]) => {
        if (value != null) { // Handle null/undefined values
          formDataToSubmit[key] = value instanceof File ? value : String(value); // Convert value to string if not a file
        }
      });
  
      // Log the data before submission
      console.log("Form Data before submission:", formDataToSubmit);
  
      // Call the API with the form data
      await submitStartup(formDataToSubmit);
  
      // Success feedback
      toast.success("Profile created successfully!");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission failed. Please try again.");
      alert("Submission failed. Please try again.");
    }
  };
  
  
  
  
  



  

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <>
    <Navbar />
    <div className="flex py-4 w-full max-w-7xl mx-auto mt-24">
      <div className="w-1/3 pr-4 space-y-10 hidden md:block">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${index <= currentStep ? 'bg-[#6CBB2D] text-white' : 'bg-[#D9D9D9]'} mr-2 `}> 0{index + 1}</div>
            <span className={`text-2xl ${index === currentStep ? 'text-black font-normal' : 'text-gray-500'}`}>{step.label}</span>
          </div>
        ))}
      </div>
      <div className=" w-full px-10 md:px-0 md:w-2/3">

      <div className="mb-4 text-gray-600 md:hidden flex justify-between items-center">
  <div className="">
    <p>{steps[currentStep].label}</p>
  </div>

  {/* Progress Bar */}
  <CircularProgress currentStep={currentStep + 1} totalSteps={steps.length} />

</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="border-[#D2D2D2] border-2 p-6  rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">{steps[currentStep].label}</h2>

            {/* STEP 0 */}
            {currentStep === 0 && (
              <>
                <label className='text-sm text-[#686868]'>Startup/Company Name</label>
                <input name="startup_name" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.startup_name} placeholder='Enter the company name ' />
                <label className='text-sm text-[#686868]' >Website URL</label>
                <input name="startup_website" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='Enter the website URL' value={formData.startup_website} />
                <label className='text-sm text-[#686868]' >Company Logo</label>
                <div className="border p-4 w-full h-32 mb-8 mt-2 bg-[#F7F7F9] rounded-xl flex flex-col items-center justify-center text-center cursor-pointer">
                              <input
                                type="file"
                                name="profile_image"
                                onChange={handleChange}
                                accept=".png, .jpg, .jpeg"
                                className="hidden"
                                id="fileUpload"
                              />
                              
                              <label htmlFor="fileUpload" className="cursor-pointer">
                                <p className="text-sm text-gray-500 font-medium">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  PNG, JPG. Max file size: 6MB
                                </p>
                              </label>
                            </div>

                <label className='text-sm text-[#686868]' >Country of Operation</label>
                <input name="startup_location" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.startup_location} placeholder='Nigeria' />
                <label className='text-sm text-[#686868]' >NiN</label>
                <input name="nin" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.nin} placeholder='NIN'  />
                <label className='text-sm text-[#686868]' >Industry/Sector</label>
                <input name="startup_industry" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.startup_industry} placeholder='Select industry/sector' />
              </>
            )}

            {/* STEP 1 */}
            {currentStep === 1 && (
              <>
                <label className='text-sm text-[#686868]' >Full Name</label>
                <input name="full_name" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.full_name} placeholder='Enter the full name ' />
                <label className='text-sm text-[#686868]' >Email</label>
                <input name="email_address" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.email_address} placeholder='Enter email address' />
                <label className='text-sm text-[#686868]' >Phone Number</label>
                <input name="phone_no" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.phone_no} placeholder='Enter phone no' />
                <label className='text-sm text-[#686868]' >Profile Image</label>
                <div className="border p-4 w-full h-32 mb-8 mt-2 bg-[#F7F7F9] rounded-xl flex flex-col items-center justify-center text-center cursor-pointer">

                <input type="file" name="founder_profile_img"     onChange={handleChange}
                                accept=".png, .jpg, .jpeg"
                                className="hidden"
                                id="fileUpload" />
                                  <label htmlFor="fileUpload" className="cursor-pointer">
                                <p className="text-sm text-gray-500 font-medium">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  PNG, JPG. Max file size: 6MB
                                </p>
                              </label>
                                </div>
                <label className='text-sm text-[#686868]' >NIN</label>
                <input name="founder_nin" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.founder_nin} placeholder='Enter NIN' />
                <label className='text-sm text-[#686868]' >LinkedIn Profile</label>
                <input name="founder_linkedin_profile" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.founder_linkedin_profile} placeholder='Enter linkedIn URL' />
                <label className='text-sm text-[#686868]' >Role in Company</label>
                <input name="role" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.role} placeholder='Enter role' />
              </>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <>
                <label className='text-sm text-[#686868]' >Short Summary</label>
                <input name="shortSummary" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='Enter short summary ' />
                <label className='text-sm text-[#686868]' >Detailed Description</label>
                <textarea name="startup_decription" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.startup_description} placeholder='Enter detailed description'></textarea>
                <label className='text-sm text-[#686868]' >Industry and Sector</label>
                <input name="industrySector" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='Select industry/sector'/>
              </>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
            <>
            <label className='text-sm text-[#686868]'>Number of Founders</label>
            <input
              name="numberOfFounders"
              onChange={handleChange}
              className="border p-3 w-full mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none"
              placeholder="How many founders?"
            />
          
            <label className='text-sm text-[#686868]'>Total Team Size</label>
            <input
              name="no_of_teams"
              onChange={handleChange}
              className="border p-3 w-full mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none"
              placeholder="Enter your total team size"
              value={formData.no_of_teams}
            />
          
            <label className='text-sm text-[#686868]'>Co-founder Name</label>
            <input
              name="cofounder"
              onChange={handleChange}
              className="border p-3 w-full mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none"
              placeholder="Enter co-founder’s full name"
              value={formData.cofounder}
            />
          
            <label className='text-sm text-[#686868]'>Co-founder LinkedIn Profile</label>
            <input
              name="coFounderLinkedIn"
              onChange={handleChange}
              className="border p-3 w-full mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none"
              placeholder="Paste LinkedIn profile URL"
            />
          
            <label className='text-sm text-[#686868]'>Co-founder NIN</label>
            <input
              name="coFounderNIN"
              onChange={handleChange}
              className="border p-3 w-full mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none"
              placeholder="Enter NIN of co-founder"
            />
          </>
          
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <>
                <label className="block mb-2">Have you launched?</label>
                <div className="mb-2">
                  <label className="mr-4">
                    <input type="radio" name="hasLaunched" value="yes" onChange={handleChange} /> Yes
                  </label>
                  <label className='text-sm text-[#686868]' >
                    <input type="radio" name="hasLaunched" value="no" onChange={handleChange} /> No
                  </label>
                </div>
                {formData.hasLaunched === 'yes' && (
                  <>
                    <label className='text-sm text-[#686868]' >Number of Users</label>
                    <input name="no_of_customers" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.no_of_customers} placeholder='Current number of Users/Customers' />
                  </>
                )}
              </>
            )}

            {/* STEP 5 */}
            {currentStep === 5 && (
              <>
                <label className='text-sm text-[#686868]' >How much funds are you seeking?</label>
                <input name="amount_of_funds" onChange={handleChange} className="border p-3 w-full  mb-2 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.amount_of_funds} placeholder='Enter amount ' />
                <p className='mb-8 text-[#475467]'>Maximum amount ₦5,000,000 / $3,000</p>
                <label className='text-sm text-[#686868]' >Planned use of funds</label>
                <input name="usage_of_funds" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.usage_of_funds} placeholder='Enter amount ' />

                <label className="block mb-2">Have you raised money before?</label>
                <div className="mb-2">
                  <label className="mr-4">
                    <input type="radio" name="hasRaisedBefore" value="yes" className='p-4' onChange={handleChange} /> Yes
                  </label>
                  <label className='text-sm text-[#686868]' >
                    <input type="radio" name="hasRaisedBefore" value="no" onChange={handleChange} /> No
                  </label>
                </div>
                {formData.hasRaisedBefore === 'yes' && (
                  <>
                    <label className='text-sm text-[#686868]' >How much?</label>
                    <input name="amountRaised" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='How much?' />
                    <label className='text-sm text-[#686868]' >From whom?</label>
                    <input name="raisedFrom" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='From who?' />
                  </>
                )}
              </>
            )}

            <div className="flex justify-between mt-4">
              <button onClick={prevStep} className="bg-gray-200 px-4 py-2 rounded" disabled={currentStep === 0}>Back</button>
              <button   onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}  className="bg-[#6CBB2D] text-white px-4 py-2 rounded">
                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    <Footer />
    </>
 
  );
};

export default MultiStepForm;

