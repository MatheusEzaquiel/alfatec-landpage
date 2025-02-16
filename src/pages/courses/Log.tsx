import CourseLayout from "../../components/CourseLayout";

import log from "../../assets/log1.jpg";
import { ICourseDataProps } from "../../interfaces/ICourseDataProps";

export default function Log() {

    const courseData: ICourseDataProps = {
        title: "Técnico em Logística",
        subtitle: "Gestão eficiente de operações logísticas e cadeia de suprimentos",
        img: log,
        duration: 300,
        period: "Noite",
        description: "O curso de Logística capacita profissionais para planejar, implementar e gerenciar processos logísticos, garantindo eficiência no transporte, armazenamento e distribuição de produtos."
            + " Os alunos aprenderão sobre gestão de estoques, supply chain, logística reversa e uso de tecnologias para otimização de processos."
            + " Com um enfoque prático e teórico, o curso prepara os estudantes para lidar com desafios logísticos em empresas de diversos segmentos."
            + " O conteúdo é atualizado conforme as tendências do setor, incluindo automação e sustentabilidade na logística.",
    
        descriptionJobMarket: "O mercado de trabalho para profissionais de Logística está em constante crescimento, impulsionado pelo comércio eletrônico, globalização e necessidade de operações mais eficientes."
            + " O técnico em Logística pode atuar em transportadoras, indústrias, centros de distribuição, portos e aeroportos, garantindo o fluxo adequado de mercadorias."
            + " Empresas buscam profissionais capacitados para reduzir custos, otimizar prazos e implementar soluções inovadoras no gerenciamento da cadeia de suprimentos."
            + " Com experiência e qualificação, há oportunidades de crescimento para cargos de supervisão e gerência na área logística."
    };
    

    return(
        <div className="h-screen">
            <CourseLayout courseData={courseData} />
        </div>
    )
}