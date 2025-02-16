import CourseLayout from "../../components/CourseLayout";

import ele from "../../assets/ele.jpg";
import { ICourseDataProps } from "../../interfaces/ICourseDataProps";

export default function Ele() {

    const courseData: ICourseDataProps = {
        title: "Técnico em Eletrotécnica",
        subtitle: "Desenvolva habilidades para atuar em instalações elétricas e automação industrial",
        img: ele,
        duration: 1200,
        period: "Tarde",
        description: "O curso de Eletrotécnica forma profissionais qualificados para projetar, instalar e manter sistemas elétricos e eletrônicos em diversos segmentos industriais."
            + " Os alunos aprenderão a trabalhar com circuitos elétricos, automação, controle de processos e segurança no trabalho com eletricidade."
            + " Além disso, o curso aborda temas como manutenção preventiva, instalações prediais e industriais, além de conhecimentos em novas tecnologias de energias renováveis e eficiência energética."
            + " O conteúdo prático e teórico capacita os alunos a atuarem na área de instalações elétricas de alta e baixa tensão, automação e controle de sistemas industriais.",
    
        descriptionJobMarket: "O mercado de trabalho para profissionais de Eletrotécnica está em expansão devido ao crescimento do setor industrial e a necessidade de sistemas de automação mais eficientes."
            + " Técnicos em Eletrotécnica podem trabalhar em empresas de automação, instalação e manutenção de sistemas elétricos em diversos segmentos, como construção civil, indústria e energia."
            + " A demanda por profissionais com conhecimento em energias renováveis e tecnologias emergentes também tem crescido, oferecendo novas oportunidades no mercado."
            + " Os profissionais da área podem atuar em áreas como manutenção industrial, automação predial e corporativa, e em projetos de energias sustentáveis, como a solar e eólica."
    };
    

    return(
        <div className="h-screen">
            <CourseLayout courseData={courseData} />
        </div>
    )
}