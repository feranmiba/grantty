import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbar />

    <div className="min-h-screen mt-16">
   
      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className=" p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1D1D1D] mb-6 text-center text-[16px] md:text-xl">
              Grantify ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information.
            </p>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Information We Collect:</h2>
              <ul className="space-y-2 text-[#1D1D1D] text-[16px] md:text-xl">
                <li>• Name, email, and phone number</li>
                <li>• Business-related information submitted in grant applications</li>
                <li>• Payment and transaction data (for donors)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">How We Use Your Data:</h2>
              <ul className="space-y-2 text-[#1D1D1D] text-[16px] md:text-xl">
                <li>• Process applications and donations</li>
                <li>• Communicate with users</li>
                <li>• Improve our platform and services</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Sharing:</h2>
              <ul className="space-y-2 text-[#1D1D1D] text-[16px] md:text-xl">
                <li>• We do not sell your data</li>
                <li>• We only share data with service providers that help us operate the platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Security:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
                We use encryption and secure systems to protect your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Your Rights:</h2>
              <ul className="space-y-2 text-[#1D1D1D] text-[16px] md:text-xl">
                <li>• You can request access, correction, or deletion of your data</li>
                <li>• To do so, email: support@grantty.org</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Cookies:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
                We use cookies to enhance user experience. You can manage cookie settings in your browser.
              </p>
            </section>

            <div className="mt-8 pt-6">
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">Contact: support@grantify.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Privacy;
