import React from "react";
import UserContext from "../utils/userContext";
class AboutUser extends React.Component{
    constructor(props){
    super(props);
    
    }
    render(){
       const {name,location} = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <h3>{location}</h3>
                <h3>Contact :salmanparay7@gmail.com</h3>
                <div>
                    {/* this is how we consume the context in class based components */}
                    <UserContext.Consumer>
                        {/* {(data)=>console.log(data)} */}
                        {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
            </div>
        )
    }
}
export default AboutUser;