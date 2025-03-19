
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-yarrow-cream px-6">
      <div className="text-center max-w-md">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-yarrow-sage/10 border border-yarrow-sage/20 text-yarrow-sage text-xs uppercase tracking-wider font-medium">
          Page Not Found
        </div>
        
        <h1 className="text-5xl font-display font-semibold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          We can't seem to find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center bg-yarrow-sage hover:bg-yarrow-moss text-white px-6 py-3 rounded-md transition-all duration-300 font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
