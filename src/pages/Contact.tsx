import { useState } from "react";
import msg from "../assets/falar.gif";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        description: "",
    });

    // Atualiza os valores conforme o usuário digita
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Função para gerar o link do WhatsApp com os dados do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "5585992043834"; // Seu número de WhatsApp (sem +)
        const message = `Olá, meu nome é ${formData.name}. 
Tenho interesse no curso de ${formData.role} e gostaria de mais informações. 
Mensagem: ${formData.description}`;

        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
    };


    return (
        <section className="pt-10 pb-20 bg-zinc-100">
            <form 
                className="w-3/4 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl shadow-black/50"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col-reverse justify-center items-center mb-8">
                    <h2 className="text-3xl text-orange-500 font-serif font-bold">Entre em contato</h2>
                    <img src={msg} alt="Gif msg" className="h-16 object-cover rotate-12 ml-4" />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-xl text-orange-500 font-medium">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="role" className="block text-xl text-orange-500 font-medium">Curso de interesse</label>
                    <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    >
                        <option value="">Selecione...</option>
                        <option value="Administração">Administração</option>
                        <option value="Eletrotécnica">Eletrotécnica</option>
                        <option value="Enfermagem">Enfermagem</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-xl text-orange-500 font-medium">Descrição</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Fale um pouco sobre o que deseja"
                        className="h-32 w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                </div>

                <div className="flex justify-center mt-6 gap-4">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-orange-500 text-white text-xl font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                        Enviar
                    </button>
                    
                </div>
            </form>
        </section>
    );
}
