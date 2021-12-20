import React, {useState} from "react";

const UseStateArray = () => {

    const myBioData = [
        {
            id:0, curElm:"shivali",age:24
        }, {
            id:1, myName:"singh",age:23
        }
    ]
   const [myArray,setmyArray] = useState(myBioData);

    const clearArray = () => {
        setmyArray([]);
    }
  return (
    <>
      
      {
         myArray.map((curElm)=> {
              return <h1 className = "h1style" key ={curElm.id}>Name: {curElm.myName} & Age: {curElm.age}</h1>

          })
      }
      <button className = "btn" onClick = {clearArray}>Clear</button>
    </>
  );
};
export default UseStateArray;
