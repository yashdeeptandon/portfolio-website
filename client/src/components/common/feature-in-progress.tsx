import { Loader2 } from "lucide-react";

const FeatureInProgressPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8">
      <Loader2 className="w-20 h-20 text-primary mb-6 animate-spin" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4">
        Feature in Progress
      </h1>
      <p className="text-xl text-primary text-center max-w-lg">
        This feature is currently under development. We’re working hard to bring
        you exciting new functionality. Stay tuned for updates!
      </p>
    </div>
  );
};

export default FeatureInProgressPage;
