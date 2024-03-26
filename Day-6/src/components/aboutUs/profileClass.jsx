import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child - Class Constructor" + this.props.name);
  }

  async componentDidMount() {
    //API calls
    const data = await fetch("https://api.github.com/users/samsonpg");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("Child - Component Did Mounted" + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.count !== prevState.count){
      //code if the value of count changed from previous value.
    }
    if(this.state.count2 !== prevState.count2){
      //code if the value of count2 changed from previous value.
    }
    console.log("Child - Component Did Updated" + this.props.name);
  }

  componentWillUnmount() {
    console.log("Child - Component Will Unmount" + this.props.name);
  }
  render() {
    const { count2 } = this.state;
    console.log("Child - rendering Class Component" + this.props.name);
    return (
      <div>
        <h1>This is from profile class</h1>
        <h2>
          Name: {this.props.name} , {this.props.xyz}
        </h2>
        <h2>
          Github Name: {this.state.userInfo.name} , Location :{" "}
          {this.state.userInfo.location}
        </h2>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Count : {this.state.count}</h3>
        <h3>Count2 : {count2}</h3>
        <button
          onClick={() => {
            this.setState({ count2: count2 + 1, count: this.state.count + 4 });
            this.setState({ count: this.state.count + 2 });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default ProfileClass;
