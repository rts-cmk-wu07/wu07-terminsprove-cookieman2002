import { useState, useEffect } from "react";
import axios from "axios";

const Rating = (props) => {
    const [classes, setClasses] = useState();
    
    const classId = props.classId
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:4000/api/v1/classes/${classId}/ratings`)
            setClasses(response.data)
        }
        getData()
    }, [classId])

    const ratingFound = classes ? classes.map((item) => ( item.rating )) : null
    const value = ratingFound || 0
    const maxRating = 5
    
    const filledRating = Math.round(value);
    const emptyRating = maxRating - filledRating;
    
    const filledContainers = []
    for(let i  = 0; i < filledRating; i++) {
        filledContainers.push( <div className="h-5 w-5   bg-orange"></div> )
    }
    
    const emptyContainers = []
    for(let i = 0; i < emptyRating; i++) {
        emptyContainers.push( <div className="bg-grey w-5 h-5"></div> )
    }
    

    
    
    return ( <div className="flex">
       
{filledContainers}
{emptyContainers}
    </div> );
}
 
export default Rating;