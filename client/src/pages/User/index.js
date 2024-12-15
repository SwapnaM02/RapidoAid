import React, { useEffect, useState } from 'react';

function User() {
  const hospitals=[{
    name:"Apollo",
    img:"https://cdn.apollohospitals.com/bangalore/bangalorestorage/2023/09/Assets-03.jpg",
    address:"bengaluru",
  },
  {
    name:"Manipal",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lB71EZ9xFOlpLYfXbvnwM7muNg1o5yZ-sw&s",
    address:"Bengaluru",
  }
];
const [index,setIndex] = useState(0);



useEffect(()=>{

  const interval = setInterval(()=>{
    setIndex(prevIndex => (prevIndex + 1) % hospitals.length);
  },5000);

  return () => clearInterval(interval);

},[]);

  return (
    <div class="user">
      <div class="user-carousel">
        <div>
          <img src={hospitals[index].img} alt = "hospital name" />
          <h2>{hospitals[index].name}</h2>
          
        </div>

      </div>
      
      
      
    </div>
    
  )
}


export default User;
