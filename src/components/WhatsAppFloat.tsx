
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappNumber = "+254712345678"; // Dennis's WhatsApp number
  const message = "Hi Dennis! I'm interested in your digital media services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
