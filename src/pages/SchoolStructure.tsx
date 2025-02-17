import school from "../assets/a1.jpg";

export default function SchoolStructure() {
    return (
        <section className="flex justify-center items-center px-5 py-20 bg-orange-300">

            <div className="py-60">
              
                <h2 className="text-6xl text-center text-orange-400 font-extrabold">
                    Sobre a Escola
                </h2>

                <div className="py-10 flex justify-center items-center gap-5 md:gap-10">

                    <div className="text-justify">
                        <div className="w-[30vw]">
                        <span className="text-orange-400 text-4xl sm:text-5xl">Estrutura</span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae laborum doloremque
                                aliquam, amet cupiditate? Sequi laudantium repellendus, distinctio quia doloremque voluptas
                                reprehenderit quas, aspernatur eaque, eveniet minima nostrum eius?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae laborum doloremque
                                aliquam, amet cupiditate? Sequi laudantium repellendus, distinctio quia doloremque voluptas
                                reprehenderit quas, aspernatur eaque, eveniet minima nostrum eius?
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae laborum doloremque
                                aliquam, amet cupiditate? Sequi laudantium repellendus, distinctio quia doloremque voluptas
                                reprehenderit quas, aspernatur eaque, eveniet minima nostrum eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae laborum doloremque
                                aliquam, amet cupiditate? Sequi laudantium repellendus, distinctio quia doloremque voluptas
                                reprehenderit quas, aspernatur eaque, eveniet minima nostrum eius?
                                orem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae laborum doloremque
                                aliquam, amet cupiditate? Sequi laudantium repellendus, distinctio quia doloremque voluptas
                                reprehenderit quas, aspernatur eaque, eveniet minima nostrum eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat recusandae laborum doloremque
                                aliquam, amet cupiditate? Sequi laudantium repellendus, distinctio quia doloremque voluptas
                                reprehenderit quas, aspernatur eaque, eveniet minima nostrum eius?
                            </p>
                        </div>
                    </div>

                    <div className="text-center">

                        <img
                            src={school}
                            alt="Colaborador"
                            className="h-[40vh] w-[40vh] object-cover filter hover:brightness-75 mx-auto"
                        />
                        {/*<div className="text-orange-400 mt-3">
                            <h3 className="font-bold text-lg">Paulo Henrique</h3>
                            <p className="text-md">Lorem Lorem</p>
                        </div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}