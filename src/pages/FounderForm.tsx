import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStartup from '@/utils/useStartup';
import { toast } from "react-toastify"; 
import { FaWindows } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CircularProgress from '@/components/CircularProgress';
import { uploadToCloudinary } from '@/utils/CloudinaryUpload';
import { File, VideoIcon } from 'lucide-react';
import { ImageIcon } from 'lucide-react';
import { FileBadgeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardHeader from '@/components/FounderHeader';


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
    // Scroll to top on mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    startup_name: '',
    startup_description: '',
    startup_location: '',
    startup_website: '',
    startup_email: '',
    business_stage: '',
    picture: null ,
    team_size: null,
    no_of_teams: null,
    cofounder: '',
    cofounder_img: null,
    profile_image: null ,
    linkedin_profile: '',
    nin: null,
    amount_of_funds: null,
    usage_of_funds: '',
    no_of_customers: null,
    video: null ,
    startup_industry: '',
    full_name: '',
    founder_linkedin_profile: '',
    email_address: '',
    phone_no: null,
    founder_profile_img: null ,
    founder_nin: null,
    role: '',
    hasLaunched: '',
    hasrevenue: '',
    hasRaisedBefore: '',
  });
  const [mediaPreviews, setMediaPreviews] = useState<{
    [key: string]: string | null;
  }>({
    profile_image: null,
    cofounder_img: null,
    founder_profile_img: null,
    video: null,
  });
  const navigate = useNavigate();

  const validateStep = () => {
    if (currentStep === 0) {
      const {
        startup_name,
        startup_website,
        profile_image,
        startup_location,
        startup_email,
        startup_industry ,
        nin
      } = formData;
  
      if (
        ! startup_name ||
        !startup_website ||
        !profile_image ||
        !startup_location ||
        !startup_email ||
        !startup_industry ||
        nin
      ) {
        toast.error("Please fill in all required fields for this step.");
        return false;
      }
    }
    if (currentStep === 1) {
      const {
        full_name,
        email_address,
        phone_no,
        founder_profile_img,
        founder_nin,
        founder_linkedin_profile,
        role
      } = formData;
  
      if (
        !full_name ||
        !email_address ||
        !phone_no ||
        !formData.founder_profile_img || 
        !founder_nin ||
        !founder_linkedin_profile ||
        !role
      ) {
        toast.error("Please fill in all required fields for this step.");
        return false;
      }
    }
  
    if (currentStep === 2) {
      const {
        startup_description,
      } = formData;
  
      if (
        !startup_description
      ) {
        toast.error("Please complete all required fields for this step.");
        return false;
      }
    }
  
    return true;
  };



  const businessStages = [
    "Idea Stage ",
    "Prototype/MVP ",
    "Pre-Revenue ",
    "Early Revenue ",
    "Growth Stage ",
    "Expansion Stage ",
    "Established",
    "Pivoting/Restructuring",
  ];
  
  const coreIndustries = [
    "FinTech ",
    "HealthTech ",
    "EdTech",
    "AgriTech ",
    "CleanTech",
    "PropTech ",
    "Retail & E-commerce",
    "Food & Beverage",
    "Logistics & Mobility ",
    "Media & Entertainment",
    "AI & Data ",
    "Cybersecurity ",
    "Manufacturing & Industrial Tech",
    "Travel & Hospitality",
    "InsurTech",
    "HR & Recruitment Tech ",
    "LegalTech ",
    "Creative & Design",
    "Social Impact / Non-Profit",
    "Telecom & Connectivity",
  ];
  
  
  

  const { submitStartup, loading, error, success } = useStartup();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
  
    if (files && files.length > 0) {
      const file = files[0];
  
      // Update form data
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
  
      // Set image/video preview
      if (["profile_image", "cofounder_img", "founder_profile_img", "video"].includes(name)) {
        const previewUrl = URL.createObjectURL(file);
        setMediaPreviews((prev) => ({
          ...prev,
          [name]: previewUrl,
        }));
      }
  
    } else {
      // Handle number fields
      if (["amount_of_funds", "team_size", "no_of_teams", "no_of_customers", "founder_nin", "nin", "phone_no"].includes(name)) {
        const parsed = parseFloat(value);
        if (!isNaN(parsed)) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: parsed,
          }));
        }
      } else {
        // Handle text fields
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    }
  };
  
  
  
  

  const handleSubmit = async () => {
    try {
      console.log("Form Data before processing:", formData);
  
      const profileImgUrl = formData.profile_image ? await uploadToCloudinary(formData.profile_image) : null;
      const cofounderImgUrl = formData.cofounder_img ? await uploadToCloudinary(formData.cofounder_img) : null;
      const founderImgUrl = formData.founder_profile_img ? await uploadToCloudinary(formData.founder_profile_img) : null;
      const videoUrl = formData.video ? await uploadToCloudinary(formData.video) : null;
  
      const formDataToSubmit = {
        ...formData,
        profile_image: profileImgUrl,
        cofounder_img: cofounderImgUrl,
        founder_profile_img: founderImgUrl,
        video: videoUrl,
      };
  
      console.log("Final formData to submit:", formDataToSubmit);
  
     await submitStartup(formDataToSubmit);
    toast.success("Profile created successfully!");

    setTimeout(() => {
      navigate('/grantee-dashboard');
    }, 2000);

  
      toast.success("Profile created successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission failed. Please try again.");
    }
  };
  
  
  
  
  
  
  



  

  const nextStep = () => {
    if (!validateStep()) return; // Don't go to next step if validation fails
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <>
    <DashboardHeader />
    <div className="flex py-4 w-full lg:px-7 md:px-12 max-w-7xl mx-auto mt-24">
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
                <input name="startup_name" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.startup_name} placeholder='Enter the company name ' required />
                <label className='text-sm text-[#686868]' >Website URL</label>
                <input name="startup_website" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='Enter the website URL' value={formData.startup_website}  required />
                <label className='text-sm text-[#686868]' >Company Logo</label>
                <div className="border p-4 w-full h-32 mb-8 mt-2 bg-[#F7F7F9] rounded-xl flex flex-col items-center justify-center text-center cursor-pointer">
                              <input
                                type="file"
                                name="profile_image"
                                onChange={handleChange}
                                accept=".png, .jpg, .jpeg"
                                className="hidden"
                                id="fileUpload"
                                required
                              />
                              
                              <label htmlFor="fileUpload" className="cursor-pointer">
                                <p className='flex justify-center mb-3'>
                                  <ImageIcon />
                                </p>
                                <p className="text-sm text-gray-500 font-medium">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  PNG, JPG. Max file size: 6MB
                                </p>
                              </label>
                            </div>
                            {mediaPreviews.profile_image && (
                                    <img
                                      src={mediaPreviews.profile_image}
                                      alt="Founder Profile Preview"
                                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                                    />
                                  )}

                <label className='text-sm text-[#686868]' >Country of Operation</label>
                <input name="startup_location" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.startup_location} placeholder='Nigeria' required />
                <label className='text-sm text-[#686868]' >Startup Email</label>
                <input name="startup_email" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.startup_email} placeholder='Starup email' required />
               
                <label className='text-sm text-[#686868]' >NiN</label>
                <input name="nin" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.nin} placeholder='NIN'  />
                <label className='text-sm text-[#686868]'>Business Stage</label>
                            <select
                              name="business_stage"
                              value={formData.business_stage}
                              onChange={handleChange}
                              required
                              className="border p-3 w-full mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none"
                            >
                              <option value="">Select business stage</option>
                              {businessStages.map((stage, index) => (
                                <option key={index} value={stage}>{stage}</option>
                              ))}
                            </select>
                            <label className="text-sm text-[#686868]">Industry/Sector</label>
<select
  name="startup_industry"
  value={formData.startup_industry}
  onChange={handleChange}
  required
  className="border p-3 w-full mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none"
>
  <option value="">Select industry/sector</option>
  {coreIndustries.map((industry, index) => (
    <option key={index} value={industry}>
      {industry}
    </option>
  ))}
</select></>
            )}

            {/* STEP 1 */}
            {currentStep === 1 && (
              <>
                <label className='text-sm text-[#686868]' >Full Name</label>
                <input name="full_name" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.full_name} placeholder='Enter the full name ' required />
                <label className='text-sm text-[#686868]' >Email</label>
                <input name="email_address" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.email_address} placeholder='Enter email address' required />
                <label className='text-sm text-[#686868]' >Phone Number</label>
                <input name="phone_no" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.phone_no} placeholder='Enter phone no' required />
                <label className='text-sm text-[#686868]' >Profile Image</label>
                <div className="border p-4 w-full h-32 mb-8 mt-2 bg-[#F7F7F9] rounded-xl flex flex-col items-center justify-center text-center cursor-pointer">

                <input type="file" name="founder_profile_img"     onChange={handleChange}
                                accept=".png, .jpg, .jpeg"
                                className="hidden"
                                id="fileUpload" />
                                  <label htmlFor="fileUpload" className="cursor-pointer">
                                  <p className='flex justify-center mb-3'>
                                  <ImageIcon />
                                </p>
                                <p className="text-sm text-gray-500 font-medium">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  PNG, JPG. Max file size: 6MB
                                </p>
                              </label>
                                </div>
                                {mediaPreviews.founder_profile_img && (
                                    <img
                                      src={mediaPreviews.founder_profile_img}
                                      alt="Founder Profile Preview"
                                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                                    />
                                  )}
                <label className='text-sm text-[#686868]' >National Identification Number</label>
                <input name="founder_nin" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.founder_nin} placeholder='Enter NIN' required />
                <label className='text-sm text-[#686868]' >LinkedIn Profile</label>
                <input name="founder_linkedin_profile" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.founder_linkedin_profile} placeholder='Enter linkedIn URL' required />
                <label className='text-sm text-[#686868]' >Role in Company</label>
                <input name="role" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.role} placeholder='Enter role' required />
              </>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <>
                <label className='text-sm text-[#686868]' >Short Summary</label>
                <input name="shortSummary" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='Enter short summary ' required />
                <label className='text-sm text-[#686868]' >Detailed Description</label>
                <textarea name="startup_description" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.startup_description} placeholder='Enter detailed description' required></textarea>
                <label className='text-sm text-[#686868]' >Industry and Sector</label>
                <input name="industrySector" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='Select industry/sector' required />
              </>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
            <>
            <label className='text-sm text-[#686868]'>No. of Founders</label>
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

            <label className='text-sm text-[#686868]'>Co-founder Profile Image</label>
                <div className="border p-4 w-full h-32 mb-8 mt-2 bg-[#F7F7F9] rounded-xl flex flex-col items-center justify-center text-center cursor-pointer">

                <input type="file" name="cofounder_img"     onChange={handleChange}
                                accept=".png, .jpg, .jpeg"
                                className="hidden"
                                id="fileUpload" />
                                  <label htmlFor="fileUpload" className="cursor-pointer">
                                  <p className='flex justify-center mb-3'>
                                  <ImageIcon />
                                </p>
                                <p className="text-sm text-gray-500 font-medium">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  PNG, JPG. Max file size: 6MB
                                </p>
                              </label>
                                </div>
                                {mediaPreviews.cofounder_img && (
                                    <img
                                      src={mediaPreviews.cofounder_img}
                                      alt="Founder Profile Preview"
                                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                                    />
                                  )}
          
            <label className='text-sm text-[#686868]'> LinkedIn Profile</label>
            <input
              name="coFounderLinkedIn"
              onChange={handleChange}
              className="border p-3 w-full mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none"
              placeholder="Paste LinkedIn profile URL"
            />
          
            <label className='text-sm text-[#686868]'>Co-founder National identification Number</label>
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
                <label className='text-sm text-[#686868]'>Video Pitch</label>
                <div className="border p-4 w-full h-32 mb-8 mt-2 bg-[#F7F7F9] rounded-xl flex flex-col items-center justify-center text-center cursor-pointer">

                <input type="file" name="video"     onChange={handleChange}
                              accept="video/mp4, video/webm, video/ogg, video/quicktime"
                                className="hidden"
                                id="fileUpload" />
                                  <label htmlFor="fileUpload" className="cursor-pointer">
                                  <p className='flex justify-center mb-3'>
                                  <VideoIcon />
                                </p>
                                <p className="text-sm text-gray-500 font-medium">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                MP4, WEBM, MOV. Max file size: 6MB
                                </p>
                              </label>
                                </div>

                                {mediaPreviews.video && (
                                    <img
                                      src={mediaPreviews.video}
                                      alt="Founder Profile Preview"
                                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                                    />
                                  )}
                              
                <label className="block mb-2">Have you launched?</label>
                <div className="mb-2">
                  <label className="mr-4">
                    <input type="radio" name="hasLaunched" value="yes" onChange={handleChange} /> Yes
                  </label>
                  <label className='text-sm text-[#686868]' >
                    <input type="radio" name="hasLaunched" value="no" onChange={handleChange} /> No
                  </label>
                </div>
                  <>
                    <label className='text-sm text-[#686868]' >Number of Users</label>
                    <input name="no_of_customers" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" value={formData.no_of_customers} placeholder='Current number of Users/Customers'  disabled={formData.hasLaunched === 'no'} />
                  </>
                <label className="block mb-2">Any Revenue?</label>
                  <div className="mb-2">
                  <label className="mr-4">
                    <input type="radio" name="hasrevenue" value="yes" className='p-4' onChange={handleChange} /> Yes
                  </label>
                  <label className='text-sm text-[#686868]' >
                    <input type="radio" name="hasrevenue" value="no" onChange={handleChange} /> No
                  </label>
                </div>

                <label className='text-sm text-[#686868]' >If yes</label>
                    <input name="revenue" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='Current number of Revenue'   disabled={formData.hasrevenue === 'no'} />
             

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
              
                    <label className='text-sm text-[#686868]' >How much?</label>
                    <input
                  name="amountRaised"
                  onChange={handleChange}
                  className="border p-3 w-full mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none"
                  placeholder="How much?"
                  disabled={formData.hasRaisedBefore === 'no'}
                />
                    <label className='text-sm text-[#686868]' >From whom?</label>
                    <input name="raisedFrom" onChange={handleChange} className="border p-3 w-full  mb-8 mt-2 bg-[#F7F7F9] rounded-xl outline-none" placeholder='From who?'   disabled={formData.hasRaisedBefore === 'no'} />
             
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

