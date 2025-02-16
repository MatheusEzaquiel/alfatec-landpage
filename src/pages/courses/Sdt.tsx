import CourseLayout from "../../components/CourseLayout";

import sdt from "../../assets/sdt.jpg";
import { ICourseDataProps } from "../../interfaces/ICourseDataProps";

export default function Sdt() {

    const courseData: ICourseDataProps = {
        title: "Técnico em Segurança do Trabalho",
        subtitle: "Capacitação para prevenir acidentes e garantir um ambiente de trabalho seguro",
        img: sdt,
        duration: 400,
        period: "Manhã",
        description: "O curso de Segurança do Trabalho prepara profissionais para identificar e prevenir riscos ocupacionais, garantindo um ambiente de trabalho mais seguro e saudável."
            + " Os alunos aprenderão sobre normas regulamentadoras, ergonomia, primeiros socorros e medidas de controle de riscos em diferentes setores industriais."
            + " Com uma abordagem prática e teórica, o curso capacita profissionais para atuar na promoção da saúde e segurança no trabalho."
            + " O conteúdo é constantemente atualizado conforme as regulamentações vigentes e as necessidades do mercado.",
    
        descriptionJobMarket: "O profissional de Segurança do Trabalho tem um mercado amplo, podendo atuar em indústrias, hospitais, construção civil e diversos outros segmentos."
            + " A demanda por técnicos qualificados cresce à medida que empresas buscam cumprir normas regulamentadoras e reduzir acidentes de trabalho."
            + " Com conhecimento técnico e prático, o profissional pode trabalhar em auditorias, treinamentos e na implementação de programas de prevenção de riscos."
            + " A área oferece boas oportunidades, especialmente para aqueles que se especializam e se mantêm atualizados sobre as legislações e inovações em segurança ocupacional."
    };
    

    return(
        <div className="h-screen">
            <CourseLayout courseData={courseData} />
        </div>
    )
}