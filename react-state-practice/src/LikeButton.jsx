import { useState } from "react"

export default function LikeButton(){
 let [isLiked , setIsLiked] = useState(false);
 let [clicks , setClicks] = useState(0);

 let likeStyle = {
    color:"red"
}


 function toggleLikeBtn(){
    setIsLiked(!isLiked);
    setClicks(clicks +1);
 };

    return(
        <div>
            <h3>clicks = {clicks}</h3>
            <p onClick={toggleLikeBtn}>
                { isLiked ? (
                     <i className="fa-solid fa-heart" style={likeStyle}></i>
                )
            :
            (
            <i className="fa-regular fa-heart"></i>
            )
            }   
            </p>
        </div>
    )
}