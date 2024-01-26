import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './starrating.css';
import { useState } from "react";
function Star(){
    //for giving rating used star and hover 
    const [rating,setRating]=useState(null);
    const [hover,setHover]=useState(null);
    return(
        <div>
            {/*used array function and map method */}
            {[...Array(5)].map((star,index)=>{
                const currentRating=index+1;
                return(
                    <label><input type="radio" name="rating" value={currentRating} onClick={()=>setRating(currentRating)}/>
                    <FontAwesomeIcon icon={faStar} 
                     className="star"
                      size={50}
                      color={currentRating<=(hover||rating)?"#ffc107":"#e4e5e9"}
                      onMouseEnter={()=>setHover(currentRating)}
                      onMouseLeave={()=>setHover(null)}/></label>
                )
            })}
            <p>Rating:{rating}</p>
        </div>
    )
}
export default Star;