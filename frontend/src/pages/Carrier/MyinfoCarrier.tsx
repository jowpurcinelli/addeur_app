import React, {useState} from 'react';


//Sidebar will receive props, containing user (costumer or carrier) data.
//Data that will come from backend and will be received from an array 
//in json format 


const Myinfo = () => {
  
  const [isUser, setIsUser] = useState(false);

  
  
  
  return (
    <Sidebar 
      />
  )
}