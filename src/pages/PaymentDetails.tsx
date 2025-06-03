
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Copy, CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Frontlettt from '@/assests/Frontlett.png'
import { useNavigate } from "react-router-dom";
import success from '@/assests/success-56EqqIzm6f.svg';


const PaymentDetails = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const bankDetails = {
    bankName: "Providus Bank",
    accountNumber: "1307642748",
    accountName: "Grantty Business Support Services"
  };

  const contactInfo = {
    email: "Info@grantty.com",
    whatsapp: "07041200171"
  };

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      toast.success(`${fieldName} copied to clipboard`);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <>
    <Navbar />

    <div className="min-h-screen mt-20 bg-[#000000BF] py-10 p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-lg rounded-2xl overflow-hidden">
 

      
      


          <CardContent className="p-6 space-y-1">
            <div>
            <p>
      <img src={Frontlettt} alt="Frontlett" className=" inline-block mr-2 w-32 mb-3" />
      </p>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Grant Frontlett</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kindly make your offline bank transfer payment using this provided account details
              </p>
            </div>

            <div className="space-y-3 bg-green-50 border border-green-200 rounded-lg text-[16px] text-[#686868]">
              <div className=" rounded-lg p-4 flex justify-between items-center">
                <div>
                  <div className="">Bank name</div>
                </div>
                <div>
                <div className="">{bankDetails.bankName}</div>
                </div>
               
              </div>

              <div className=" rounded-lg p-4 flex justify-between items-center  ">
                <div>
                  <div className="mb-1">Account number</div>
                </div>
                <div className="flex items-center space-x-2">
                <div className="">{bankDetails.accountNumber}</div>

                <button
                  onClick={() => copyToClipboard(bankDetails.accountNumber, "Account number")}
                  className=""
                >
                  {copiedField === "Account number" ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                </div>
            
              </div>

              <div className=" p-4 flex justify-between items-center">
                <div>
                  <div className="">Account name</div>
                </div>
                <div>
                <div className="">{bankDetails.accountName}</div>

                </div>
              
              </div>
            </div>

            <div className="space-y-3 text-[#1D1D1D] text-[16px]">
              <div className="">Send proof of payment to:</div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="font-medium">Email:</span> {contactInfo.email}
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.email, "Email")}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {copiedField === "Email" ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <div className="">
                    <span className="font-medium">WhatsApp:</span> {contactInfo.whatsapp}
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.whatsapp, "WhatsApp")}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {copiedField === "WhatsApp" ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button
  onClick={() => setShowModal(true)}
  className="w-full bg-[#6CBB2D] hover:bg-green-600 text-white font-medium py-5 rounded-xl text-base mt-5"
>
  Payment sent
</Button>

          </CardContent>
        </Card>
      </div>

      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-white rounded-2xl shadow-lg p-6 max-w-xl w-full text-center space-y-4">
      
      {/* Close Icon */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        onClick={() => setShowModal(false)}
      >
        <X className="w-5 h-5" />
      </button>
      <div className="flex flex-col items-center space-y-4 justify-center">
      <img src={success} alt="" />

      </div>
      <p className="text-[#1D1D1D] text-[18px] font-semibold my-3">
      Your Grantt towards Frontlett will be processed      </p>

      <Button
        onClick={() => navigate("/grantor-dashboard")}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white w-full"
      >
        Proceed to Dashboard
      </Button>
    </div>
  </div>
)}


    </div>

    <Footer />
    </>
 
  );
};

export default PaymentDetails;