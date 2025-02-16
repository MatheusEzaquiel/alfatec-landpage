import { FaClock, FaDollarSign, FaInfo, FaSun } from "react-icons/fa";
import { ICourseDataProps } from "../interfaces/ICourseDataProps";


const InfoCourseBar = ({data} : {data: ICourseDataProps}) => {
  return (
    <article className="flex justify-between items-center
     bg-white p-6 shadow-[0px_4px_10px_rgba(0,0,0,0.3)] 
     rounded-2xl max-w-6xl mx-auto mt-[10vh]">
      <div className="flex items-center gap-2">
        <FaInfo className="text-orange-500 text-xl" />
        <span className="text-gray-700 font-medium">Sobre o Curso</span>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="text-orange-500 text-xl" />
        <span className="text-gray-700 font-medium">Duração: {data.duration} horas</span>
      </div>
      <div className="flex items-center gap-2">
        <FaDollarSign className="text-orange-500 text-xl" />
        <span className="text-gray-700 font-medium">Investimento: R$ 450,00</span>
      </div>
      <div className="flex items-center gap-2">
        <FaSun className="text-orange-500 text-xl" />
        <span className="text-gray-700 font-medium">Turnos: {data.period}</span>
      </div>
    </article>
  );
};

export default InfoCourseBar;
