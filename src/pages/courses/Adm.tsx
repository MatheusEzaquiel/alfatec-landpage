import CourseLayout from "../../components/CourseLayout";

import adm from "../../assets/adm.jpg";
import { ICourseDataProps } from "../../interfaces/ICourseDataProps";


export default function Adm() {

    const courseData: ICourseDataProps = {
        title: "Técnico em Admnistração",
        subtitle: "Aprenda a metodologia de crescimento e administração de Empresas",
        img: adm,
        duration: 350,
        period: "Manhã",
        description: "O curso de Administração proporciona uma base sólida em gestão, abordando estratégias empresariais, finanças, marketing e liderança."
        +"Os alunos aprenderão a tomar decisões eficientes, otimizar processos e desenvolver habilidades de comunicação e negociação essenciais para o mundo corporativo."
        +"Com uma abordagem prática e teórica, o curso capacita profissionais para atuar em diversos setores, desde pequenas empresas até grandes corporações."
        +"O conteúdo é atualizado conforme as tendências do mercado, garantindo que os estudantes adquiram conhecimentos relevantes e aplicáveis.",

        descriptionJobMarket: " Com uma abordagem prática e teórica, o curso capacita profissionais para atuar em diversos setores, desde pequenas empresas até grandes corporações. "
        +"O conteúdo é atualizado conforme as tendências do mercado, garantindo que os estudantes adquiram conhecimentos relevantes e aplicáveis.Com uma abordagem prática e teórica, o curso capacita profissionais para atuar em diversos setores"
        +", desde pequenas empresas até grandes corporações.  O conteúdo é atualizado conforme as tendências do mercado, garantindo que os estudantes adquiram conhecimentos relevantes e aplicáveis."
        +" O conteúdo é atualizado conforme as tendências do mercado, garantindo que os estudantes adquiram conhecimentos relevantes e aplicáveis."
    }

    return(
        
        <div className="h-screen">
            <CourseLayout courseData={courseData} />
        </div>
    )
}