
import DashboardHeader from "@/components/GrantorDahsboard/DashboardHeader";
import SummaryCard from "@/components/GrantorDahsboard/SummaryCard";
import GrantActivity from "@/components/GrantorDahsboard/GrantActivity";
import RecentActivity from "@/components/GrantorDahsboard/RecentActivity";
import AvailableProjectTable from "@/components/GrantorDahsboard/ApplicationManagement";
import GranteeManagementTable from "@/components/GrantorDahsboard/GranteeManagementTable";
import DisbursementTrendChart from "@/components/GrantorDahsboard/DisbursementTrendChart";
import FundingBySectorChart from "@/components/GrantorDahsboard/FundingBySectorChart";
import NotificationSettingsCard from "@/components/GrantorDahsboard/NotificationSettingCard";
import ProfileSettingsCard from "@/components/GrantorDahsboard/ProfileSettingCard";
import { ArrowDown, ArrowUp, ArrowRight, ChevronDown } from "lucide-react";
import { usePaymentUtils } from "@/utils/usePayment";
import { useEffect, useState } from "react";
import usePaymentStore from "@/store/usePaymentstore";

const Index = () => {
  const { getUserPayment } = usePaymentUtils();
  // Summary stats
  const [payment, setPayment] = useState<any[]>([]);
  const [amountDisbursed, setAmountDisbursed] = useState("₦0");
  const [startupGrants, setStartupGrants] = useState<{ [key: number]: number }>({});
  const [activeGrantees, setActiveGrantees] = useState(0);
  const { clearPayment } = usePaymentStore()

  useEffect(() => {
    return () => {
      clearPayment(); // Clear payment data on unmount
    };
  }
, [clearPayment]);
  
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await getUserPayment();
        if (response && response.data) {
          const payments = response.data;
          setPayment(payments);
  
          // ✅ Calculate total amount
          const totalAmount = payments.reduce((sum: number, payment: any) => sum + payment.amount, 0);
          setAmountDisbursed(`₦${totalAmount.toLocaleString()}`);
  
          // ✅ Calculate amount per startup_id
          const grants: { [key: number]: number } = {};
          payments.forEach((payment: any) => {
            if (!grants[payment.startup_id]) {
              grants[payment.startup_id] = 0;
            }
            grants[payment.startup_id] += payment.amount;
          });
          setStartupGrants(grants);

  
          // ✅ Count unique startup_ids (active grantees)
          const uniqueStartups = new Set(payments.map((p: any) => p.startup_id));
          setActiveGrantees(uniqueStartups.size);
        } else {
          console.log("No payments found for the user.");
        }
      } catch (error) {
        console.error("Error fetching user payments:", error);
      }
    };
  
    fetchPayments();
  }, [getUserPayment]);
  console.log(startupGrants)
  

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-start mb-10">
      <div className="w-full ">
        <DashboardHeader />
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 px-5 sm:px-10 md:px-12 lg:px-24 mx-auto">
          <SummaryCard
            icon={<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07321 3.86255C8.07321 3.01355 8.66121 2.32355 9.38321 2.32355H11.7832C12.5052 2.32355 13.0932 3.01355 13.0932 3.86255V3.88655C12.3272 3.80955 11.4932 3.77155 10.5832 3.77155C9.67221 3.77155 8.83821 3.80955 8.07321 3.88655V3.86255ZM1.08921 9.78155C3.69821 11.3895 7.07821 12.2765 10.6032 12.2795C14.1212 12.2765 17.4922 11.3925 20.0992 9.79155C19.5712 6.52855 17.9062 4.79255 14.5932 4.11755V3.86255C14.5932 2.18655 13.3322 0.823547 11.7832 0.823547H9.38321C7.83421 0.823547 6.57321 2.18655 6.57321 3.86255V4.11755C3.26521 4.79155 1.60121 6.52255 1.06921 9.77355C1.07621 9.77755 1.08321 9.77755 1.08921 9.78155Z" fill="#6CBB2D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.333 13.8174V15.9804C11.333 16.3944 10.997 16.7304 10.583 16.7304C10.169 16.7304 9.83305 16.3944 9.83305 15.9804V13.8164C6.57205 13.7074 3.45405 12.8934 0.897047 11.4844C0.882047 11.8034 0.873047 12.1314 0.873047 12.4734C0.873047 18.8994 3.41405 21.1764 10.583 21.1764C17.752 21.1764 20.293 18.8994 20.293 12.4734C20.293 12.1394 20.285 11.8184 20.271 11.5074C17.71 12.9084 14.592 13.7144 11.333 13.8174Z" fill="#6CBB2D"/>
              </svg>
              }
            label="Total Grants Given"
            value={amountDisbursed}
          />
          <SummaryCard
            icon={<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M15.9362 13.172C14.1092 13.172 12.6232 11.686 12.6232 9.86C12.6232 8.033 14.1092 6.546 15.9362 6.546H20.1462C19.2682 2.492 16.4752 0.960999 10.6662 0.960999C3.43023 0.960999 0.865234 3.327 0.865234 10C0.865234 16.674 3.43023 19.039 10.6662 19.039C16.6082 19.039 19.3962 17.439 20.2042 13.172H15.9362Z" fill="#6CBB2D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3168 6.64099H6.25684C5.84284 6.64099 5.50684 6.30499 5.50684 5.89099C5.50684 5.47699 5.84284 5.14099 6.25684 5.14099H10.3168C10.7308 5.14099 11.0668 5.47699 11.0668 5.89099C11.0668 6.30499 10.7308 6.64099 10.3168 6.64099Z" fill="#6CBB2D"/>
              <path d="M20.3721 8.04596C20.4311 8.65496 20.4658 9.29806 20.4658 10.0001C20.4658 10.595 20.4385 11.144 20.3965 11.6719H15.9365C14.9377 11.6719 14.1233 10.8592 14.123 9.86041C14.123 8.86041 14.9375 8.04596 15.9365 8.04596H20.3721ZM16.0762 9.04987C15.6622 9.04987 15.3262 9.38587 15.3262 9.79987C15.3262 10.2139 15.6622 10.5499 16.0762 10.5499C16.4902 10.5499 16.8262 10.2139 16.8262 9.79987C16.8262 9.38587 16.4902 9.04987 16.0762 9.04987Z" fill="#6CBB2D"/>
              </svg>
              }
            label="Total Amount Disbursed"
            value={amountDisbursed}
          />
          <SummaryCard
            icon={<svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.445 8.86855H19.465C21.595 8.86855 23.335 7.12855 23.335 5.00855C23.335 2.87855 21.595 1.13855 19.465 1.13855C19.045 1.13855 18.645 1.20855 18.265 1.32855C18.955 2.34855 19.355 3.57855 19.355 4.90855C19.365 6.25855 18.945 7.55855 18.155 8.63855C18.565 8.78855 18.995 8.86855 19.445 8.86855Z" fill="#6CBB2D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.52504 8.86855H6.55504C7.00504 8.86855 7.43504 8.78855 7.84504 8.63855C7.08504 7.59855 6.63504 6.30855 6.63504 4.90855C6.63504 3.57855 7.03504 2.34855 7.72504 1.32855C7.34504 1.20855 6.94504 1.13855 6.52504 1.13855C4.39504 1.13855 2.66504 2.87855 2.66504 5.00855C2.66504 7.12855 4.39504 8.86855 6.52504 8.86855Z" fill="#6CBB2D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9956 9.77463H13.0286C14.3236 9.77063 15.5396 9.26163 16.4516 8.34263C17.3646 7.42363 17.8646 6.20463 17.8596 4.91163C17.8596 2.22863 15.6786 0.0466309 12.9956 0.0466309C10.3136 0.0466309 8.13263 2.22863 8.13263 4.91163C8.13263 7.59263 10.3136 9.77463 12.9956 9.77463Z" fill="#6CBB2D"/>
              <g opacity="0.4">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4752 10.3083C18.3352 10.3083 17.2652 10.5383 16.3652 10.9283C19.5152 11.8383 21.7452 14.0183 21.8052 16.5683C23.4452 16.3583 25.2152 15.7383 25.2152 14.0483C25.2152 12.0183 22.5852 10.3083 19.4752 10.3083Z" fill="#6CBB2D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62516 10.9183C8.72516 10.5383 7.65516 10.3083 6.52516 10.3083C3.41516 10.3083 0.785156 12.0183 0.785156 14.0483C0.785156 15.7383 2.54516 16.3484 4.18516 16.5683C4.23516 14.0183 6.46516 11.8383 9.62516 10.9183Z" fill="#6CBB2D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9948 11.9454C9.03377 11.9454 5.68677 14.1014 5.68677 16.6534C5.68677 19.9534 11.1868 19.9534 12.9948 19.9534C16.1328 19.9534 20.3048 19.6134 20.3048 16.6744C20.3048 14.1104 16.9568 11.9454 12.9948 11.9454Z" fill="#6CBB2D"/>
              </g>
              </svg>}
            label="Total Number of Active Grantees"
            value={activeGrantees.toString()}
          />
      
        </div>

        {/* Main section */}
        <div className="flex justify-between flex-wrap md:flex-nowrap  gap-10 mt-8 px-5 sm:px-10 md:px-12 lg:px-24 mx-auto">
          <GrantActivity />
          <RecentActivity />
          {/* blank on small, holds chart on large */}
          <div className="hidden xl:block"></div>
        </div>
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-10 mt-8 px-5 sm:px-10 md:px-12 lg:px-24 mx-auto">
          <AvailableProjectTable />
          <GranteeManagementTable />
        </div>
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-10 mt-8 px-5 sm:px-10 md:px-12 lg:px-24 mx-auto">
          <DisbursementTrendChart />
          <FundingBySectorChart />
        </div>

        <div className="flex justify-between flex-wrap md:flex-nowrap gap-10 mt-8 px-5 sm:px-10 md:px-12 lg:px-24 mx-auto">
          <ProfileSettingsCard />
          <NotificationSettingsCard />
        </div>
      </div>
    </div>
  );
};

export default Index;