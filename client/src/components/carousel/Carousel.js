import React,{useState} from "react";
import "../carousel/carousel.css";

const Carousel = ({carouselDetails})=> {

    const [current,setCurrent]=useState(0);

    function handleClick(index){
        setCurrent(index);


    }
    
    return(
        <>

        <div class="carousel">
        <div class="carousel-container">
            <p>{carouselDetails[current].heading}</p>
            <p>{carouselDetails[current].content}</p>

        </div>

        <div  class="circle-button  ">
            {carouselDetails.map((item,index)=>{
                return (
                    index == current
                    ?
                    <div key="index" class="selected-circle" onClick={()=>{handleClick(index)}}> </div>
                    :
                    <div key="index" class="circle" onClick={()=>{handleClick(index)}}> </div>
                )
            })
            }
        </div>
        </div>
        

        
        </>
    )

}
export default Carousel;