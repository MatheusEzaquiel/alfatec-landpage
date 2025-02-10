import { FaClock, FaDollarSign, FaInfo, FaSun } from "react-icons/fa";

const InfoCourseBar = () => {
  return (
    <article className="flex justify-between items-center bg-white p-6 shadow-lg rounded-2xl w-full max-w-4xl mx-auto my-3">
      <div className="flex items-center gap-2">
        <FaInfo className="text-orange-500 text-xl" />
        <span className="text-gray-700 font-medium">Sobre o Curso</span>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="text-orange-500 text-xl" />
        <span className="text-gray-700 font-medium">Duração: 100 horas</span>
      </div>
      <div className="flex items-center gap-2">
        <FaDollarSign className="text-orange-500 text-xl" />
        <span className="text-gray-700 font-medium">Investimento: R$ 450,00</span>
      </div>
      <div className="flex items-center gap-2">
        <FaSun className="text-orange-500 text-xl" />
        <span className="text-gray-700 font-medium">Turnos: Tarde, Noite</span>
      </div>
    </article>
  );
};

export default InfoCourseBar;
