import TotalSalesGraph from "./graphs/TotalSalesGrapg";

const Dashboard = () => {
  return (
    <div className="flex flex-col p-6 ">
      <div className="w-full bg-white rounded-lg shadow-md mb-4">
        <div className="p-6 ">
          <TotalSalesGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
