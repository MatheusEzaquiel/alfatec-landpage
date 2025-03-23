import school from "../assets/a1.jpg";

export default function SchoolStructure() {
    return (
        <section className="flex justify-center items-center px-2 py-4 bg-stone-300 sm:h-[40vw] h-auto">

            <div className="p-2">
                <h2 className="text-4xl sm:text-6xl text-center text-stone-500 font-extrabold pb-10">
                    Sobre a Escola
                </h2>

                <div className="h-auto p-4 w-[90vw] block sm:flex sm:justify-evenly sm:items-top sm:gap-5 md:gap-10" >


                    <div className="text-justify ">
                        <div className="w-full sm:w-[30vw]">
                            <h2 className="text-stone-400 text-4xl font-bold sm:text-5xl">Estrutura</h2>
                            <br></br>

                            {/* Texto Mobile*/}
                            <p className="text-base mb-3 indent-first sm:text-xl sm:hidden">
                                Nossa escola técnica se destaca por oferecer uma infraestrutura moderna e inovadora, garantindo um ambiente de ensino que alia teoria e prática de forma eficiente.
                                Contamos com salas de aula amplas, climatizadas e equipadas com recursos audiovisuais de última geração, proporcionando uma experiência dinâmica e interativa para nossos alunos.
                                Além disso, dispomos de espaços de convivência e áreas de estudo colaborativo, permitindo que os estudantes compartilhem conhecimento e desenvolvam projetos em equipe.
                            </p>

                            {/* Texto Desktop */}
                            <p className="text-base mb-3 indent-first  hidden sm:text-xl sm:block">
                                Nossa escola técnica se destaca por oferecer uma infraestrutura moderna e inovadora, garantindo um ambiente de ensino que alia teoria e prática de forma eficiente.
                                Nosso compromisso é oferecer um ambiente que estimula a criatividade, a inovação e a excelência acadêmica, formando profissionais capacitados e preparados para o futuro.
                                Nossa instituição valoriza a aprendizagem prática, por isso investimos constantemente em tecnologia e recursos pedagógicos atualizados,
                                preparando nossos alunos para os desafios do mercado de trabalho.
                            </p>

                            <p className="text-base mb-3 indent-first  hidden sm:text-xl sm:block">
                                Contamos com salas de aula amplas, climatizadas e equipadas com recursos audiovisuais de última geração, proporcionando uma experiência dinâmica e interativa para nossos alunos.
                                Além disso, dispomos de espaços de convivência e áreas de estudo colaborativo, permitindo que os estudantes compartilhem conhecimento e desenvolvam projetos em equipe.
                            </p>

                            <p className="text-base mb-3 indent-first sm:text-xl">
                                Além das salas convencionais, oferecemos laboratórios técnicos especializados, desenvolvidos para atender às necessidades específicas de cada área de ensino.
                                <br /><br />
                                Possuímos laboratórios de que destacam-se no mercado:
                                <br></br>
                                <ul className="list-disc pl-5 mt-2">
                                <li className="mb-2"><strong>Laboratório de Enfermagem</strong> - Equipamentos modernos e técnicas atualizadas para práticas de cuidados de saúde, incluindo simulações de atendimento e manuseio de materiais médicos.</li>
                                <li className="mb-2"><strong>Laboratório de Informática</strong> - Equipamentos para o aprofundamento em Conhecimentos em hardware, software e redes, com ênfase em sistemas operacionais e programação.</li>
                                <li><strong>Laboratório de Eletrotécnica</strong> - Ferramentas e dispositivos para análise, montagem e manutenção de sistemas elétricos e eletrônicos, com foco em circuitos e automação industrial.</li>
                            </ul>
                            </p>
                        </div>
                    </div>

                    <div className="text-center">

                        <img
                            src={school}
                            alt="Colaborador"
                            className="h-[30vh] w-[80vw] pt-4 mt-2 object-cover filter hover:brightness-75 mx-auto sm:h-[60vh] sm:w-[40vw]"
                        />
                    </div>


                    {/*
                    <div className="text-justify ">
                        <div className="w-[30vw]">
                            <h2 className="text-stone-400 text-4xl font-bold sm:text-5xl">Estrutura</h2>
                            <br></br>
                        </div>
                        <p className="text-sm mb-3 indent-first sm:text-xl">
                            Nossa escola técnica se destaca por oferecer uma infraestrutura moderna e inovadora, garantindo um ambiente de ensino que alia teoria e prática de forma eficiente.
                            Nosso compromisso é oferecer um ambiente que estimula a criatividade, a inovação e a excelência acadêmica, formando profissionais capacitados e preparados para o futuro.
                            Nossa instituição valoriza a aprendizagem prática, por isso investimos constantemente em tecnologia e recursos pedagógicos atualizados,
                            preparando nossos alunos para os desafios do mercado de trabalho.
                        </p>

                        <p className="text-sm mb-3 indent-first sm:text-xl">
                            Contamos com salas de aula amplas, climatizadas e equipadas com recursos audiovisuais de última geração, proporcionando uma experiência dinâmica e interativa para nossos alunos.
                            Além disso, dispomos de espaços de convivência e áreas de estudo colaborativo, permitindo que os estudantes compartilhem conhecimento e desenvolvam projetos em equipe.
                        </p>
                        <p className="text-sm mb-3 indent-first sm:text-xl">
                            Além das salas convencionais, oferecemos laboratórios técnicos especializados, desenvolvidos para atender às necessidades específicas de cada área de ensino.
                            <br /><br />
                            Possúimos laboratórios de que destacam-se no mercado:
                            <br></br>
                            <ul className="list-disc pl-5 mt-2">
                                <li className="mb-2"><strong>Laboratório de Enfermagem</strong> - Equipamentos modernos e técnicas atualizadas para práticas de cuidados de saúde, incluindo simulações de atendimento e manuseio de materiais médicos.</li>
                                <li className="mb-2"><strong>Laboratório de Informática</strong> - Conhecimento aprofundado em hardware, software e redes, com ênfase em sistemas operacionais, programação e segurança digital.</li>
                                <li><strong>Laboratório de Eletrotécnica</strong> - Ferramentas e dispositivos para análise, montagem e manutenção de sistemas elétricos e eletrônicos, com foco em circuitos e automação industrial.</li>
                            </ul>
                        </p>
                    </div>
                    */}
                </div>
            </div>


            {/*<div className="p-2">

                <h2 className="text-6xl text-center text-stone-500 font-extrabold pb-10">
                    Sobre a Escola
                </h2>

                <div className="h-auto p-4 w-[75vw] flex justify-evenly items-top gap-5  bg-blue-500  sm:block md:gap-10" >

                    <div className="text-justify ">
                        <div className="w-[30vw]">

                            <h2 className="text-stone-400 text-4xl font-bold sm:text-5xl">Estrutura</h2>
                            <br></br>

                            <p className="text-sm mb-3 indent-first sm:text-xl">
                                Nossa escola técnica se destaca por oferecer uma infraestrutura moderna e inovadora, garantindo um ambiente de ensino que alia teoria e prática de forma eficiente.
                                Nosso compromisso é oferecer um ambiente que estimula a criatividade, a inovação e a excelência acadêmica, formando profissionais capacitados e preparados para o futuro. 
                                Nossa instituição valoriza a aprendizagem prática, por isso investimos constantemente em tecnologia e recursos pedagógicos atualizados,
                                preparando nossos alunos para os desafios do mercado de trabalho.
                            </p>

                            <p className="text-sm mb-3 indent-first sm:text-xl">
                                Contamos com salas de aula amplas, climatizadas e equipadas com recursos audiovisuais de última geração, proporcionando uma experiência dinâmica e interativa para nossos alunos.
                                Além disso, dispomos de espaços de convivência e áreas de estudo colaborativo, permitindo que os estudantes compartilhem conhecimento e desenvolvam projetos em equipe.
                            </p>

                            <p className="text-sm mb-3 indent-first sm:text-xl">
                           
                            </p>


                            <p className="text-sm mb-3 indent-first sm:text-xl">
                                Além das salas convencionais, oferecemos laboratórios técnicos especializados, desenvolvidos para atender às necessidades específicas de cada área de ensino.
                                <br /><br />
                                Possúimos laboratórios de que destacam-se no mercado:
                                <br></br>
                                <ul className="list-disc pl-5 mt-2">
                                    <li className="mb-2"><strong>Laboratório de Enfermagem</strong> - Equipamentos modernos e técnicas atualizadas para práticas de cuidados de saúde, incluindo simulações de atendimento e manuseio de materiais médicos.</li>
                                    <li className="mb-2"><strong>Laboratório de Informática</strong> - Conhecimento aprofundado em hardware, software e redes, com ênfase em sistemas operacionais, programação e segurança digital.</li>
                                    <li><strong>Laboratório de Eletrotécnica</strong> - Ferramentas e dispositivos para análise, montagem e manutenção de sistemas elétricos e eletrônicos, com foco em circuitos e automação industrial.</li>
                                </ul>
                            </p>

                        </div>
                    </div>

                    <div className="text-center">

                        <img
                            src={school}
                            alt="Colaborador"
                            className="h-[60vh] w-[40vw] object-cover filter hover:brightness-75 mx-auto"
                        />
                        {/*<div className="text-orange-400 mt-3">
                            <h3 className="font-bold text-lg">Paulo Henrique</h3>
                            <p className="text-md">Lorem Lorem</p>
                        </div>*-/}
                    </div>
                </div>
            </div> */}
        </section>
    );
}