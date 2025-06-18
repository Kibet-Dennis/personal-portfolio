
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center max-w-md px-6">
        <h1 className="text-7xl font-bold mb-4 text-red-500">404</h1>
        <p className="text-2xl text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button 
          onClick={() => window.location.href = "/"} 
          className="bg-red-600 hover:bg-red-700"
        >
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
