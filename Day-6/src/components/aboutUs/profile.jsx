import { useState } from "react";

const Profile = (props) => {

    const [count] = useState(0);
    const [count2,setCount2] = useState(0);
    console.log("rendering Functional Component");

  return (
    <>
      <h2>This is from profile functional</h2>
      <h3>Name: {props.name} , {props.xyz}</h3>
      <h4>Count : {count}</h4>
      <h4>Count2 : {count2}</h4>
      <button onClick={()=>setCount2(count2+1)}>Click Me</button>
    </>
  );
};

export default Profile;
