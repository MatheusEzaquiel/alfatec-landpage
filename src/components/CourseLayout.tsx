import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import InfoCourseBar from "./InfoCourseBar";
import { CourseDescription } from "./CourseDescription";
import { ICourseDataProps } from "./../interfaces/ICourseDataProps";


export default function CourseLayout( {courseData} : {courseData: ICourseDataProps}) {
    return(
        <div className="h-screen">
            <div>
                <Link to="/"><BsArrowLeftShort size={100} color="#fff" className="absolute p-5 z-10"/></Link>

                <div className="relative md:h-[70vh] md:w-full">
                    <img src={courseData.img} alt={courseData.title} className="h-full w-full object-cover brightness-50" />

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <h1 className="text-8xl font-bold text-white/50">{courseData.title}</h1>
                    </div>
                </div>
                
                
                {/*<h1 className="font-extrabold text-orange-500 text-4xl font-sans text-center py-5">{title}</h1>*/}

                <InfoCourseBar data={courseData}></InfoCourseBar>

                
                <CourseDescription data={courseData}></CourseDescription>

            </div>

        </div>
    )
}