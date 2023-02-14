import axios from "axios";
import { useState, useEffect } from "react";

const ClassList = ({classId}) => {
    const [classes, setClasses] = useState();
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:4000/api/v1/classes/${classId}/ratings`)
            setClasses(response.data)
        }
        getData()
    }, [classId])

     
    
    return ( <div>
        {classes ? classes.map((items) => (
            <div key={items.classId}>
                {items.rating}
            </div>
        )) : <div></div> }
    </div> );
}
 
export default ClassList;