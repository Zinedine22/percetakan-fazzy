import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "62811735865";
  const message = encodeURIComponent("Halo, saya tertarik dengan layanan percetakan Anda. Bisa tolong berikan informasi lebih lanjut?");
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 block"
        aria-label="Chat via WhatsApp"
        suppressHydrationWarning={true}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Konsultasi Gratis!
        </span>
      </a>
    </div>
  );
}
