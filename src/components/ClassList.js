import axios from "axios";
import { useState, useEffect } from "react";
import Rating from "./sub-components/Rating";

const ClassList = ({classId}) => {
    const [classes, setClasses] = useState();
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:4000/api/v1/classes/${classId}/ratings`)
            setClasses(response.data)
        }
        getData()
    }, [classId])

     
 
    return ( <>
        {classes ? classes.map((items) => (
            <div key={items.classId}>
                <Rating value={items.rating}/>
            </div>

        )) : null }
       
    </> );
}
 
export default ClassList;