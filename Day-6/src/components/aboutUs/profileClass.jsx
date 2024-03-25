import React from "react";
class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        }
        console.log("Class Constructor");
    }

  render() {
const  {count2} = this.state
console.log("rendering Class Component");
    return (
      <div>
        <h1>This is from profile class</h1>
        <h2>Name: {this.props.name} , {this.props.xyz}</h2>
        <h3>Count : {this.state.count}</h3>
        <h3>Count2 : {count2}</h3>
        <button onClick={()=>{
            this.setState({count2: count2+1, count: this.state.count+4})
            this.setState({count: this.state.count+2})
        }}>Click Me</button>
      </div>
    );
  }
}

export default ProfileClass;
