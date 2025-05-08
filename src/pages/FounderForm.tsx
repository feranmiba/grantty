import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    startupName: '',
    webUrl: '',
    companyLogo: '',
    country: '',
    businessStage: '',
    industry: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    profileImage: '',
    nin: '',
    linkedin: '',
    role: '',
    numberOfFounders: '',
    totalTeamSize: '',
    coFounderName: '',
    coFounderLinkedIn: '',
    coFounderNIN: '',
    shortSummary: '',
    detailedDescription: '',
    industrySector: '',
    hasLaunched: '',
    numberOfUsers: '',
    fundsSeeking: '',
    plannedUseOfFunds: '',
    hasRaisedBefore: '',
    amountRaised: '',
    raisedFrom: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="flex p-4 w-full max-w-4xl mx-auto">
      <div className="w-1/4 pr-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className={`w-8 h-8 rounded-full ${index <= currentStep ? 'bg-black' : 'bg-gray-300'} mr-2`}></div>
            <span className={`text-sm ${index === currentStep ? 'text-black font-semibold' : 'text-gray-500'}`}>{step.label}</span>
          </div>
        ))}
      </div>
      <div className="w-3/4">
        <div className="mb-4 text-gray-600">Step {currentStep + 1} of {steps.length}</div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="border p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">{steps[currentStep].label}</h2>

            {/* STEP 0 */}
            {currentStep === 0 && (
              <>
                <label>Startup/Company Name</label>
                <input name="startupName" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Website or Landing Page URL</label>
                <input name="webUrl" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Company Logo</label>
                <input type="file" name="companyLogo" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Country of Operation</label>
                <input name="country" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Business Stage</label>
                <input name="businessStage" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Industry/Sector</label>
                <input name="industry" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
              </>
            )}

            {/* STEP 1 */}
            {currentStep === 1 && (
              <>
                <label>Full Name</label>
                <input name="fullName" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Email</label>
                <input name="email" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Phone Number</label>
                <input name="phoneNumber" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Profile Image</label>
                <input type="file" name="profileImage" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>NIN</label>
                <input name="nin" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>LinkedIn Profile</label>
                <input name="linkedin" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Role in Company</label>
                <input name="role" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
              </>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <>
                <label>Short Summary</label>
                <input name="shortSummary" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Detailed Description</label>
                <input name="detailedDescription" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Industry and Sector</label>
                <input name="industrySector" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
              </>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <>
                <label>Number of Founders</label>
                <input name="numberOfFounders" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Total Team Size</label>
                <input name="totalTeamSize" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Co-founder Name</label>
                <input name="coFounderName" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Co-founder LinkedIn Profile</label>
                <input name="coFounderLinkedIn" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Co-founder NIN</label>
                <input name="coFounderNIN" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
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
                  <label>
                    <input type="radio" name="hasLaunched" value="no" onChange={handleChange} /> No
                  </label>
                </div>
                {formData.hasLaunched === 'yes' && (
                  <>
                    <label>Number of Users</label>
                    <input name="numberOfUsers" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                  </>
                )}
              </>
            )}

            {/* STEP 5 */}
            {currentStep === 5 && (
              <>
                <label>How much funds are you seeking?</label>
                <input name="fundsSeeking" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                <label>Planned use of funds</label>
                <input name="plannedUseOfFunds" onChange={handleChange} className="border p-2 w-full rounded mb-2" />

                <label className="block mb-2">Have you raised money before?</label>
                <div className="mb-2">
                  <label className="mr-4">
                    <input type="radio" name="hasRaisedBefore" value="yes" onChange={handleChange} /> Yes
                  </label>
                  <label>
                    <input type="radio" name="hasRaisedBefore" value="no" onChange={handleChange} /> No
                  </label>
                </div>
                {formData.hasRaisedBefore === 'yes' && (
                  <>
                    <label>How much?</label>
                    <input name="amountRaised" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                    <label>From whom?</label>
                    <input name="raisedFrom" onChange={handleChange} className="border p-2 w-full rounded mb-2" />
                  </>
                )}
              </>
            )}

            <div className="flex justify-between mt-4">
              <button onClick={prevStep} className="bg-gray-200 px-4 py-2 rounded" disabled={currentStep === 0}>Back</button>
              <button onClick={nextStep} className="bg-black text-white px-4 py-2 rounded">
                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MultiStepForm;

