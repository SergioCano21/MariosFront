import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import PageMeta from "../../components/common/PageMeta";
import RecentOrders from "../../components/ecommerce/RecentOrders";

export default function Home() {
  return (
    <>
      <PageMeta
        title="Mario's Team"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-3">
          <EcommerceMetrics />
          <RecentOrders />
        </div>

        <div className="col-span-12 xl:col-span-9">
          <StatisticsChart />
        </div>

        {/* <div className="col-span-12">
          <StatisticsChart />
        </div> */}
      </div>
    </>
  );
}
