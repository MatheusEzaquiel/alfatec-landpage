import CourseLayout from "../../components/CourseLayout";

import enf from "../../assets/enf.jpg";
import { ICourseDataProps } from "../../interfaces/ICourseDataProps";

export default function Enf() {

    const courseData: ICourseDataProps = {
        title: "Técnico em Enfermagem",
        subtitle: "Cuidados de saúde, prevenção e assistência à saúde de pacientes",
        img: enf,
        duration: 1200,
        period: "Manhã",
        description: "O curso de Enfermagem prepara profissionais para atuar no cuidado integral de pacientes em hospitais, clínicas, postos de saúde e domicílios."
            + " Os alunos aprenderão sobre primeiros socorros, cuidados de enfermagem, administração de medicamentos, curativos, controle de sinais vitais e apoio emocional aos pacientes."
            + " Além disso, o curso aborda a legislação da área, ética profissional e a importância da comunicação eficaz no ambiente de saúde."
            + " Com uma abordagem prática e teórica, o curso capacita os alunos para fornecer cuidados de qualidade e atuar em situações de emergência e no acompanhamento de doenças crônicas.",
    
        descriptionJobMarket: "O mercado de trabalho para profissionais de Enfermagem é promissor, com a demanda por cuidados de saúde crescendo devido ao envelhecimento da população e à necessidade de serviços médicos especializados."
            + " Técnicos em Enfermagem podem trabalhar em hospitais, clínicas, unidades de saúde, ambulatórios, asilos e também na área domiciliar, prestando cuidados essenciais a pacientes."
            + " Além disso, a profissão oferece diversas oportunidades de especialização, como enfermagem obstétrica, pediátrica, geriátrica e em saúde mental."
            + " O mercado está em busca de profissionais bem preparados, com boas habilidades técnicas e interpessoais, que saibam trabalhar em equipe e lidar com situações desafiadoras no atendimento ao paciente."
    };

    return(
        <div className="h-screen">
            <CourseLayout courseData={courseData} />
        </div>
    )
}