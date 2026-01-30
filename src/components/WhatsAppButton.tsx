import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "62811735865";
  const message = encodeURIComponent("Halo, saya tertarik dengan layanan percetakan Anda. Bisa tolong berikan informasi lebih lanjut?");
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat via WhatsApp"
        suppressHydrationWarning={true}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat WhatsApp
        </span>
      </a>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="container mx-auto px-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center py-3 bg-green-500 hover:bg-green-600 text-white transition-colors duration-300"
            suppressHydrationWarning={true}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Chat WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
