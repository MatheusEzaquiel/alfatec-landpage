import { ICourseDataProps } from "../interfaces/ICourseDataProps";


const CourseDescription = ({data} : {data: ICourseDataProps}) => {
    return (
        <section className="w-4/5 mx-auto bg-white p-8 shadow-lg rounded-2xl flex gap-8 mt-16">
          <div className="w-1/2">

          <div className="my-6 mb-12">
          <h1 className="py-2 text-4xl font-bold text-orange-600">{data.title}</h1>
          <h2 className="text-xl text-gray-500 pb-5">{data.subtitle}</h2>
          </div>

          <h2 className="text-3xl font-bold text-orange-600 mb-3">Sobre o Curso</h2>
            <p className="text-gray-700 text-lg mb-4 text-justify">
              {data.description}
            </p>

            <h2 className="text-3xl font-bold text-orange-600 mt-16 mb-3 ">Mercado de Trabalho</h2>
            <p className="text-gray-700 text-lg text-justify">
              {data.descriptionJobMarket}
            </p>
          </div>

          
          <div className="w-1/2 bg-gray-200 flex items-center justify-center rounded-2xl">
          <img src={data.img} alt={data.title} className="h-full w-full object-cover brightness-50"/>
          </div>
        </section>
      );
    
};

  
export {CourseDescription};