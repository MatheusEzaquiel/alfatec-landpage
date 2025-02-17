import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
    formData: {
        name: string;
        role: string;
        description: string;
    };
}

const WhatsAppButton = ({ formData }: WhatsAppButtonProps) => {
  
    const phoneNumber = "5585992043834";
    const message = `Olá, meu nome é ${formData.name}. 
Tenho interesse no curso de ${formData.role} e gostaria de mais informações. 
Mensagem: ${formData.description}`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            <FaWhatsapp size={24} />
            <span>Fale Conosco</span>
        </a>
    );
};

export default WhatsAppButton;
