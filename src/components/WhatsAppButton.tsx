import { whatsappLink } from '../config/site';
import { WhatsAppIcon } from './ui';

const WhatsAppButton = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-110"
    aria-label="Falar no WhatsApp"
  >
    <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden" />
    <WhatsAppIcon className="relative h-7 w-7" />
  </a>
);

export default WhatsAppButton;
