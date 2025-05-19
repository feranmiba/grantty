
import DashboardHeader from "@/components/GrantorDahsboard/DashboardHeader";
import SummaryCard from "@/components/GrantorDahsboard/SummaryCard";
import GrantActivity from "@/components/GrantorDahsboard/GrantActivity";
import RecentActivity from "@/components/GrantorDahsboard/RecentActivity";
import ApplicationManagementTable from "@/components/GrantorDahsboard/ApplicationManagement";
import GranteeManagementTable from "@/components/GrantorDahsboard/GranteeManagementTable";
import DisbursementTrendChart from "@/components/GrantorDahsboard/DisbursementTrendChart";
import FundingBySectorChart from "@/components/GrantorDahsboard/FundingBySectorChart";
import { ArrowDown, ArrowUp, ArrowRight, ChevronDown } from "lucide-react";

const Index = () => {
  // Summary stats
  const grantsDown = "₦1,000,000";
  const amountDisbursed = "₦500,000";
  const activeGrantees = "5";
  const pendingApplications = "2";

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-start">
      <div className="w-full ">
        <DashboardHeader />
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-24 mx-auto">
          <SummaryCard
            icon={<ArrowUp size={24} />}
            label="Total Grants Given"
            value={grantsDown}
          />
          <SummaryCard
            icon={<ArrowDown size={24} />}
            label="Total Amount Disbursed"
            value={amountDisbursed}
          />
          <SummaryCard
            icon={<ArrowRight size={24} />}
            label="Total Number of Active Grantees"
            value={activeGrantees}
          />
          <SummaryCard
            icon={<ChevronDown size={24} />}
            label="Pending Applications"
            value={pendingApplications}
          />
        </div>

        {/* Main section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          <GrantActivity />
          <RecentActivity />
          {/* blank on small, holds chart on large */}
          <div className="hidden xl:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <ApplicationManagementTable />
          <GranteeManagementTable />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <DisbursementTrendChart />
          <FundingBySectorChart />
        </div>
      </div>
    </div>
  );
};

export default Index;