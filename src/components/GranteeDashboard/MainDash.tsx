import React, { useEffect, useState } from 'react'
import SummaryCard from '../GrantorDahsboard/SummaryCard'
import { useGranteeDashboardUtils } from './utils/utils';
import { usePaymentUtils } from '@/utils/usePayment';

const expectedFields = [
  "startup_name",
  "startup_description",
  "startup_location",
  "startup_website",
  "startup_email",
  "startup_picture",
  "team_size",
  "no_of_teams",
  "cofounder",
  "profile_image",
  "linkedin_profile",
  "nin",
  "amount_of_funds",
  "usage_of_funds",
  "no_of_customers",
  "video",
  "startup_industry",
  "amount_raised",
  "verification_status",
  "status",
  "founder_full_name",
  "founder_linkedin_profile",
  "founder_email",
  "founder_phone_no",
  "founder_profile_img",
  "founder_nin",
  "founder_role"
];

function MainDash() {

    const priority = [
      
    ]

    const { getUserCompanyStatus } = useGranteeDashboardUtils();
    const { getPaymentById } = usePaymentUtils();
    const [status, setStatus] = useState<"Completed" | "Not Completed">("Not Completed");

      const [grantData, setGrantData] = useState<any[]>([]);
      const [loading, setLoading] = useState(true);
      const [totalRaised, setTotalRaised] = useState(0);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getUserCompanyStatus();
        
          if (Array.isArray(response?.data) && response.data.length > 0) {
            const startups = response.data;
  
            // Fetch payments for each startup
            const startupsWithPayments = await Promise.all(
              startups.map(async (startup: any) => {
                const payment = await getPaymentById(startup.id);
                console.log(payment)
                setTotalRaised(payment?.totalAmount)
                
                return {
                  ...startup,
                  payment: payment?.totalAmount || null,
                };
              })
            );

            setGrantData(startupsWithPayments);
            console.log(startupsWithPayments)

  
        
          const data = response?.data?.[0];
  
          if (!data) {
            setStatus("Not Completed");
            return;
          }
  
          const allFieldsExist = expectedFields.every(
            (field) => data[field] !== null && data[field] !== undefined && data[field] !== ""
          );
  
          setStatus(allFieldsExist ? "Completed" : "Not Completed");
          }
        } catch (error) {
          console.error("Error fetching user company status:", error);
          setStatus("Not Completed");
        }
      };
  
      fetchData();
    }, [getUserCompanyStatus]);

  return (
    <div>
        <p className='text-[#060E22] font-bold'>Dashboard</p>
        <section>

            <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className='flex justify-between border py-5 px-5 rounded-2xl ' >
                    <div className='space-y-10'>
                        <p className='text-[#1A1F2C] font-medium text-2xl'>Application Status</p>

                        <p className='px-2 bg-[#5D9CEC0D] border-[#297FFF] py-4 rounded-2xl border text-center text-[#297FFF]'>           {status}
                        </p>
                    </div>

                    <div>
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07321 3.86255C8.07321 3.01355 8.66121 2.32355 9.38321 2.32355H11.7832C12.5052 2.32355 13.0932 3.01355 13.0932 3.86255V3.88655C12.3272 3.80955 11.4932 3.77155 10.5832 3.77155C9.67221 3.77155 8.83821 3.80955 8.07321 3.88655V3.86255ZM1.08921 9.78155C3.69821 11.3895 7.07821 12.2765 10.6032 12.2795C14.1212 12.2765 17.4922 11.3925 20.0992 9.79155C19.5712 6.52855 17.9062 4.79255 14.5932 4.11755V3.86255C14.5932 2.18655 13.3322 0.823547 11.7832 0.823547H9.38321C7.83421 0.823547 6.57321 2.18655 6.57321 3.86255V4.11755C3.26521 4.79155 1.60121 6.52255 1.06921 9.77355C1.07621 9.77755 1.08321 9.77755 1.08921 9.78155Z" fill="#6CBB2D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.333 13.8174V15.9804C11.333 16.3944 10.997 16.7304 10.583 16.7304C10.169 16.7304 9.83305 16.3944 9.83305 15.9804V13.8164C6.57205 13.7074 3.45405 12.8934 0.897047 11.4844C0.882047 11.8034 0.873047 12.1314 0.873047 12.4734C0.873047 18.8994 3.41405 21.1764 10.583 21.1764C17.752 21.1764 20.293 18.8994 20.293 12.4734C20.293 12.1394 20.285 11.8184 20.271 11.5074C17.71 12.9084 14.592 13.7144 11.333 13.8174Z" fill="#6CBB2D"/>
              </svg>
                    </div>
                    
              </div>
              <div className='py-5 px-5 rounded-2xl  border ' >
                    <div className='flex justify-between '>
                        <p className='text-[#1A1F2C] font-medium text-2xl'>Priority Alert</p>

                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.08789C4.802 3.08789 2.25 5.63989 2.25 12.8379C2.25 20.0359 4.802 22.5879 12 22.5879C19.198 22.5879 21.75 20.0359 21.75 12.8379C21.75 5.63989 19.198 3.08789 12 3.08789Z" fill="#6CBB2D"/>
        <path d="M11.249 16.3379C11.249 16.7519 11.59 17.0879 12.004 17.0879C12.418 17.0879 12.754 16.7519 12.754 16.3379C12.754 15.9239 12.418 15.5879 12.004 15.5879H11.995C11.581 15.5879 11.249 15.9239 11.249 16.3379Z" fill="#6CBB2D"/>
        <path d="M12 8.19287C11.586 8.19287 11.25 8.52887 11.25 8.94287V12.8379C11.25 13.2519 11.586 13.5879 12 13.5879C12.414 13.5879 12.75 13.2519 12.75 12.8379V8.94287C12.75 8.52887 12.414 8.19287 12 8.19287Z" fill="#6CBB2D"/>
        </svg>
                        </div>

                    <div>
                  

                    {priority.length > 0 ? (
            <ul className='w-full mt-10'>
              {priority.map((pri, index) => (
                <li
                  key={index}
                  className='border-t border-[#F0F2F5] text-[16px] py-2 flex gap-3'
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 3.08789C4.802 3.08789 2.25 5.63989 2.25 12.8379C2.25 20.0359 4.802 22.5879 12 22.5879C19.198 22.5879 21.75 20.0359 21.75 12.8379C21.75 5.63989 19.198 3.08789 12 3.08789Z"
                      fill="#6CBB2D"
                    />
                    <path
                      d="M11.249 16.3379C11.249 16.7519 11.59 17.0879 12.004 17.0879C12.418 17.0879 12.754 16.7519 12.754 16.3379C12.754 15.9239 12.418 15.5879 12.004 15.5879H11.995C11.581 15.5879 11.249 15.9239 11.249 16.3379Z"
                      fill="#6CBB2D"
                    />
                    <path
                      d="M12 8.19287C11.586 8.19287 11.25 8.52887 11.25 8.94287V12.8379C11.25 13.2519 11.586 13.5879 12 13.5879C12.414 13.5879 12.75 13.2519 12.75 12.8379V8.94287C12.75 8.52887 12.414 8.19287 12 8.19287Z"
                      fill="#6CBB2D"
                    />
                  </svg>
                  {pri}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center mt-10 text-gray-500">No alerts</p>
          )}

                        
                    </div>
                    
              </div>
                
            </section>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">
          <SummaryCard
            icon={<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07321 3.86255C8.07321 3.01355 8.66121 2.32355 9.38321 2.32355H11.7832C12.5052 2.32355 13.0932 3.01355 13.0932 3.86255V3.88655C12.3272 3.80955 11.4932 3.77155 10.5832 3.77155C9.67221 3.77155 8.83821 3.80955 8.07321 3.88655V3.86255ZM1.08921 9.78155C3.69821 11.3895 7.07821 12.2765 10.6032 12.2795C14.1212 12.2765 17.4922 11.3925 20.0992 9.79155C19.5712 6.52855 17.9062 4.79255 14.5932 4.11755V3.86255C14.5932 2.18655 13.3322 0.823547 11.7832 0.823547H9.38321C7.83421 0.823547 6.57321 2.18655 6.57321 3.86255V4.11755C3.26521 4.79155 1.60121 6.52255 1.06921 9.77355C1.07621 9.77755 1.08321 9.77755 1.08921 9.78155Z" fill="#6CBB2D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.333 13.8174V15.9804C11.333 16.3944 10.997 16.7304 10.583 16.7304C10.169 16.7304 9.83305 16.3944 9.83305 15.9804V13.8164C6.57205 13.7074 3.45405 12.8934 0.897047 11.4844C0.882047 11.8034 0.873047 12.1314 0.873047 12.4734C0.873047 18.8994 3.41405 21.1764 10.583 21.1764C17.752 21.1764 20.293 18.8994 20.293 12.4734C20.293 12.1394 20.285 11.8184 20.271 11.5074C17.71 12.9084 14.592 13.7144 11.333 13.8174Z" fill="#6CBB2D"/>
              </svg>
              }
            label="Total Grants Given"
            value={totalRaised ? `₦${totalRaised.toLocaleString()}` : "₦0" }
          />
          <SummaryCard
            icon={<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M15.9362 13.172C14.1092 13.172 12.6232 11.686 12.6232 9.86C12.6232 8.033 14.1092 6.546 15.9362 6.546H20.1462C19.2682 2.492 16.4752 0.960999 10.6662 0.960999C3.43023 0.960999 0.865234 3.327 0.865234 10C0.865234 16.674 3.43023 19.039 10.6662 19.039C16.6082 19.039 19.3962 17.439 20.2042 13.172H15.9362Z" fill="#6CBB2D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3168 6.64099H6.25684C5.84284 6.64099 5.50684 6.30499 5.50684 5.89099C5.50684 5.47699 5.84284 5.14099 6.25684 5.14099H10.3168C10.7308 5.14099 11.0668 5.47699 11.0668 5.89099C11.0668 6.30499 10.7308 6.64099 10.3168 6.64099Z" fill="#6CBB2D"/>
              <path d="M20.3721 8.04596C20.4311 8.65496 20.4658 9.29806 20.4658 10.0001C20.4658 10.595 20.4385 11.144 20.3965 11.6719H15.9365C14.9377 11.6719 14.1233 10.8592 14.123 9.86041C14.123 8.86041 14.9375 8.04596 15.9365 8.04596H20.3721ZM16.0762 9.04987C15.6622 9.04987 15.3262 9.38587 15.3262 9.79987C15.3262 10.2139 15.6622 10.5499 16.0762 10.5499C16.4902 10.5499 16.8262 10.2139 16.8262 9.79987C16.8262 9.38587 16.4902 9.04987 16.0762 9.04987Z" fill="#6CBB2D"/>
              </svg>
              }
            label="Total Amount Disbursed"
            value={totalRaised ? `₦${totalRaised.toLocaleString()}` : "₦0" }
          />
         
        </div>

        </section>
    </div>
  )
}

export default MainDash