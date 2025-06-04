import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbar />
    <div className="min-h-screen mt-16">


      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1D1D1D] mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#1D1D1D] mb-6 text-center text-[16px] md:text-xl">
            Welcome to Grantty. By accessing or using our website or services, you agree to be bound by these terms.            </p>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Eligibility:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
              • Applicants must be Nigerian residents, age 18+, with a minimum of two co-founders.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Grant Disbursement:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
              • Funds are paid directly to vendors listed in the grantee's approved plan. Founders do not receive funds directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Contributions:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
              • All donations are final unless a project fails to execute within 60 days, in which case a refund or reallocation may be processed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Community Guidelines:</h2>
              <ul className="space-y-2 text-[#1D1D1D] text-[16px] md:text-xl">
                <li>• No fraudulent information or behavior</li>
                <li>• No misuse of funds</li>
                <li>• No harassment or abuse of other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Intellectual Property:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
              • All content on the site is owned by Grantty or licensed for use. You may not copy or redistribute it without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Termination:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
              • We reserve the right to suspend accounts for violations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Limitation of Liability:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
              • We are not responsible for losses resulting from grantee failure, misuse of information, or third-party services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-[#6CBB2D] mb-4">Changes:</h2>
              <p className="text-[#1D1D1D] text-[16px] md:text-xl">
              • We may update these terms at any time. Continued use constitutes acceptance.
              </p>
            </section>

            <div className="mt-8 pt-6 text-[16px] md:text-xl">
              <p className="text-[#1D1D1D]">Contact: support@grantty.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>

  );
};

export default Terms;