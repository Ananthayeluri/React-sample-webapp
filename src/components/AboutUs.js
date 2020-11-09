import React from 'react';



export default class AboutPage extends React.Component {
  constructor(props){
   super(props);
   this.state={
    username:"",
    email:"",
    password:"",

   }

this.handleSubmit= this.handleSubmit.bind(this);
this.handleChange= this.handleChange.bind(this);

  }

handleSubmit=(e)=>{
e.preventDefault();
this.setState(
    {
    username:"",
    email:"",
    password:"",
    }
)
document.getElementById("demo").innerHTML=this.state.username + " "+"(" +this.state.email+")"+"  you are successfully logged in";
}
handleChange=(e)=>{
 this.setState({[e.target.name]:e.target.value})
}
    render(){
return(
<div>
<div><h4 style={{textAlign:"center", marginTop:"90px"}}>Login Form</h4></div>
<form className="col-md-6" onSubmit={this.handleSubmit}> 
<div className="form-group">
<label htmlFor="username">Username:</label>
<input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
</div>
<div className="form-group">
<label htmlFor="email">Email:</label>
<input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} required/>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>

<h4 id ="demo" style={{textAlign:"center"}}></h4>
</div>


)

}
}
