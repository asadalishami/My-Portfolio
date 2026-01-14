
import React from 'react';

interface WhatsAppButtonProps {
  className?: string;
  variant?: 'primary' | 'outline' | 'sticky';
  text?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  className = "", 
  variant = 'primary',
  text = "Chat on WhatsApp"
}) => {
  const handleClick = () => {
    // International format for Pakistan: 923006577200
    window.open('https://wa.me/923006577200', '_blank');
  };

  const baseStyles = "flex items-center justify-center gap-2 font-bold transition-all duration-200 rounded-lg active:scale-95";
  
  const variants = {
    primary: "bg-[#25D366] text-white px-8 py-4 text-lg hover:bg-[#1ebe57] shadow-lg hover:shadow-[#25D366]/20",
    outline: "border-2 border-[#25D366] text-[#25D366] px-6 py-3 hover:bg-[#25D366] hover:text-white",
    sticky: "bg-[#25D366] text-white px-5 py-2.5 text-sm hover:bg-[#1ebe57] shadow-sm"
  };

  return (
    <button onClick={handleClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.408c0 6.556-5.332 11.888-11.888 11.888-2.003 0-3.963-.51-5.703-1.474l-6.281 1.647zm5.992-4.045l.432.257c1.458.868 3.14 1.326 4.863 1.326 5.093 0 9.237-4.144 9.237-9.237 0-2.469-.961-4.79-2.706-6.535s-4.066-2.705-6.531-2.705c-5.093 0-9.237 4.144-9.237 9.237 0 1.76.49 3.475 1.417 4.965l.278.448-1.11 4.053 4.157-1.09zM17.155 14.12c-.311-.156-1.841-.908-2.126-1.012-.285-.104-.492-.156-.699.156-.207.311-.803 1.012-.984 1.219-.181.207-.363.233-.674.078-.311-.156-1.313-.483-2.5-1.541-.923-.824-1.545-1.841-1.726-2.152-.181-.311-.019-.479.136-.633.14-.139.311-.363.466-.544.156-.181.207-.311.311-.518.104-.207.052-.389-.026-.544-.078-.156-.699-1.684-.958-2.306-.252-.603-.509-.521-.699-.531l-.596-.011c-.207 0-.544.078-.829.389-.285.311-1.088 1.062-1.088 2.591s1.114 3.004 1.269 3.212c.156.207 2.193 3.349 5.312 4.698.742.321 1.321.512 1.772.656.745.237 1.423.204 1.958.124.597-.089 1.841-.751 2.1-.1.477.259 1.44.259 1.751s.57.156.674.078.207-.311.207-.311z"/>
      </svg>
      {text}
    </button>
  );
};

export default WhatsAppButton;
