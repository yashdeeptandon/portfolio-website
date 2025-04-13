import { Clock } from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <Clock className="w-20 h-20 text-gray-700 mb-6 animate-spin" />
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Under Maintenance
      </h1>
      <p className="text-xl text-gray-600 text-center max-w-lg">
        Our website is currently undergoing scheduled maintenance. We’re working
        hard to improve our services and will be back soon. Thank you for your
        patience.
      </p>
    </div>
  );
};

export default MaintenancePage;
