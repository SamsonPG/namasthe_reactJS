import React from "react";
class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        }

    }

  render() {
const  {count2} = this.state

    return (
      <div>
        <h1>This is from profile class</h1>
        <h2>Name: {this.props.name} , {this.props.xyz}</h2>
        <h3>Count : {this.state.count}</h3>
        <h3>Count2 : {count2}</h3>
      </div>
    );
  }
}

export default ProfileClass;
