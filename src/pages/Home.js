import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import ClassList from "../components/ClassList";
import { Link } from "react-router-dom";
import Rating from "../components/sub-components/Rating";


const Home = () => {
    const [classData, setClassdata] = useState(null);
    const [classesData, setClassesData] = useState();

    useEffect(() => {
        const getClass = async () => {
             const response = await axios.get("http://localhost:4000/api/v1/classes/4")
            setClassdata(response.data)
        }
        getClass()
    }, []);
    useEffect(() => {
        const getClasses = async () => {
            const response = await axios.get("http://localhost:4000/api/v1/classes")
            setClassesData(response.data)
        }
        getClasses()
    }, [])
    return ( <article>
        <Navigation/>
        <section className="flex flex-col ml-5 mr-5">
            <section className="relative">
                <img  className="rounded-xl h-96 " src={classData && classData.asset.url} alt="class" />
        <p className="z-10 absolute bottom-10 text-white text-big w-48 ml-5">
            {classData && classData.className}
        </p>

            
            </section>
                <p className="text-medium mb-10">Classes for you</p>
            <section className="flex flex-row-reverse overflow-x-auto gap-4 ">
            {/* {console.log(classesData)} */}
            {classesData && classesData.map((items, index) => (
                <Link key={index} state={{ from: "something"}} to={`/classDetails/${items.id}`}>
                <div className="flex flex-col">
                <img src={items.asset.url} className="rounded-xl h-32 w-96" alt="" />
                <p>{items.className}</p>
                <Rating classId={items.id} />
                </div>
                </Link>
            ))}
            </section>
        </section>
    </article> );
}
 
export default Home;