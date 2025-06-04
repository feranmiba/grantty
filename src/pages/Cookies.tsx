import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Cookies = () => {
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbar />
    <div className="min-h-screen mt-16">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mb-8 text-center">Cookies Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1D1D1D] mb-6 text-center text-[16px] md:text-xl">
              This Cookies Policy explains how Grantify uses cookies and similar technologies when you visit our website.
            </p>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">What are Cookies:</h2>
              <p className="text-[#1D1D1D]">
                Cookies are small files placed on your device to collect standard internet log information and visitor behavior.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">How we use Cookies:</h2>
              <ul className="space-y-2 text-[#1D1D1D] text-[16px] md:text-xl">
                <li>• Store user preferences</li>
                <li>• Enable secure logins</li>
                <li>• Analyze traffic and usage behavior</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Types of Cookies:</h2>
              <ul className="space-y-2 text-[#1D1D1D] text-[16px] md:text-xl">
                <li>• <strong>Essential Cookies:</strong> Required for basic functions</li>
                <li>• <strong>Analytics Cookies:</strong> Help us understand user activity</li>
                <li>• <strong>Marketing Cookies:</strong> Used to show relevant ads and campaigns (if applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Managing Cookies:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
                You can change your browser settings to reject cookies or notify you when cookies are used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Consent:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
                By continuing to use our site, you consent to our use of cookies in accordance with this policy.
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

export default Cookies;