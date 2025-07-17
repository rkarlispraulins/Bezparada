import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { CheckCircle } from "lucide-react";

export function Paldies() {
  const [, setLocation] = useLocation();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setLocation('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [setLocation]);

  const handleRedirect = () => {
    setLocation('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Tava ziņa ir nosūtīta!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Tava ziņa ir veiksmīgi saņemta — paldies! Mūsu komanda atbildēs tuvāko 24 stundu laikā.
          </p>
        </div>
        
        <button
          onClick={handleRedirect}
          className="w-full px-8 py-4 rounded-full text-lg font-black transition-all duration-200 hover:opacity-90"
          style={{
            backgroundColor: '#94f27f',
            border: '3px solid #bff7b2',
            color: '#013720'
          }}
        >
          Sapratu! {countdown > 0 && `(${countdown}s)`}
        </button>
      </div>
    </div>
  );
}