import valores from "../assets/valores.png";
import visao from "../assets/visao.png";
import missao from "../assets/missao.png";

export default function About() {
    return (
        <section className="flex justify-center items-center px-5 py-60 bg-zinc-100">
            
            <section className="pt-30 w-[75vw]">
                <h1 className="text-4xl font-bold text-orange-500 text-center">
                    Rede de Ensino <br />
                    <span className="text-5xl font-extrabold">Alfatec</span>
                </h1>

                <div className="pt-5 text-center">
                    <p className="text-lg lg:w-[70vw] lg:m-auto lg:text-xl">
                        Somos uma renomada rede de ensino especializada em capacitar profissionais para atender às demandas do mercado de trabalho atual. Oferecemos uma variedade de cursos técnicos e profissionalizantes para garantir que nossos alunos estejam preparados para enfrentar os desafios e se destacarem em suas carreiras.
                    </p>
                </div>

                <div className="pt-10 grid gap-5 md:grid-cols-3">

                    <div className="transform hover:scale-105 ease-in-out p-5 border shadow-xl bg-orange-500 rounded-tl-[50px] rounded-br-[50px] text-white text-center">
                        <img src={valores} alt="Valores" className="h-[10vh] mx-auto" />
                        <h2 className="text-2xl font-bold mt-3">Valores</h2>
                        <ul className="text-md space-y-1">
                            <p className="mt-2">Honestidade, respeito, compromisso e ética são pilares essenciais para relações confiáveis, justas e harmoniosas.</p>
                        </ul>
                    </div>

                    <div className="transform hover:scale-105 ease-in-out p-5 border shadow-xl bg-orange-500 rounded-tl-[50px] rounded-br-[50px] text-white text-center">
                        <img src={visao} alt="Visão" className="h-[10vh] mx-auto" />
                        <h2 className="text-2xl font-bold mt-3">Visão</h2>
                        <p className="mt-2">
                            Ser a melhor Escola Técnica do Brasil reconhecida como o melhor método de ensino e a mais eficiente na realização dos sonhos de nossos alunos.
                        </p>
                    </div>

                    <div className="transform hover:scale-105 ease-in-out p-5 border shadow-xl bg-orange-500 rounded-tl-[50px] rounded-br-[50px] text-white text-center">
                        <img src={missao} alt="Missão" className="h-[10vh] mx-auto" />
                        <h2 className="text-2xl font-bold mt-3">Missão</h2>
                        <p className="mt-2">
                            Proporcionar aos alunos ensino de excelência visando desenvolver o potencial de cada educando e formando cidadãos úteis à sociedade e à Pátria.
                        </p>
                    </div>
                </div>
            </section>

            {/*<div className="pt-60">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 text-center">
                    Conheça nossos <br />
                    <span className="text-orange-400 text-4xl sm:text-5xl font-extrabold">colaboradores</span>
                </h2>

                <div className="py-10 flex justify-center items-center gap-5 md:gap-10">

                    <div className="text-center">
                        <img
                            src={brendha}
                            alt="Colaboradora"
                            className="h-[40vh] w-[40vh] rounded-full object-cover filter hover:brightness-75 mx-auto"
                        />
                        <div className="text-orange-400 mt-3">
                            <h3 className="font-bold text-lg">Brendha Bezerra</h3>
                            <p className="text-md">Lorem Lorem</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <img
                            src={ph}
                            alt="Colaborador"
                            className="h-[40vh] w-[40vh] rounded-full object-cover filter hover:brightness-75 mx-auto"
                        />
                        <div className="text-orange-400 mt-3">
                            <h3 className="font-bold text-lg">Paulo Henrique</h3>
                            <p className="text-md">Lorem Lorem</p>
                        </div>
                    </div>
                </div>
            </div>*/}

            {/*Sobre a Alfatec
            <section className="py-60">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 text-center">
                    <h2>Sobre a Escola</h2>
                    <span className="text-orange-400 text-4xl sm:text-5xl font-extrabold">Estrutura</span>
                </h2>

                <div className="py-10 flex justify-center items-center gap-5 md:gap-10">

                    <div className="text-center">
                       
                    </div>

                    <div className="text-center">

                        <div className="w-[30vw]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae laborum doloremque 
                            aliquam, amet cupiditate? Sequi laudantium repellendus, distinctio quia doloremque voluptas
                             reprehenderit quas, aspernatur eaque, eveniet minima nostrum eius?
                        </div>
                        <img
                            src={ph}
                            alt="Colaborador"
                            className="h-[40vh] w-[40vh] object-cover filter hover:brightness-75 mx-auto"
                        />
                        <div className="text-orange-400 mt-3">
                            <h3 className="font-bold text-lg">Paulo Henrique</h3>
                            <p className="text-md">Lorem Lorem</p>
                        </div>
                    </div>
                </div>
            </section>*/}
        </section>
    );
}