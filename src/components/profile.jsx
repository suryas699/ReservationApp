import React, { Component } from 'react';
//import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'India', 
            disabled:true,
            firstName:null,
            lastName:null,
            address:null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            value: event.target.value,
        });
      }
      handleChangef=(event)=>{
            if(event.target.value.length>4){
                this.setState({
                    firstName:event.target.value
                })
            }
            else{
                this.setState({
                    disabled:true,
                    firstName:null
                })
            }
            
      }
      handleChangel=(event)=>{
        if(event.target.value.length>4){
            this.setState({
                lastName:event.target.value
            })
        }
        else{
            this.setState({
                disabled:true,
                lastName:null
            })
        }
    }
    handleChangea=(event)=>{
        if(event.target.value.length>4){
            this.setState({
                address:event.target.value
            })
        }
        else{
            this.setState({
                disabled:true,
                address:null
            })
        }
        if(this.state.firstName !==null && this.state.lastName!==null && this.state.address!==null){
            this.setState({
                disabled:false
            })
        }
        else{
            this.setState({
                disabled:true
            })
        }
  }
      handleSubmit(event) {
        //alert('Submitted changes');
        event.target.reset();
        this.setState({
            value:"India",
            disabled:true,
            firstName:null,
            lastName:null,
            address:null
        })
        event.preventDefault();
      }
    render() { 
        <h1>this.state.firstName</h1>
        return (  
            <form className="container-root" onSubmit={this.handleSubmit}>
                <h1>Hello</h1>
            <div className="container">
                <p>Enter your First Name:<input type="text" name="fname" placeholder="Enter First Name" onChange={this.handleChangef}/></p>
                <p>Enter your Last Name:<input type="text" placeholder="Enter Last Name" onChange={this.handleChangel}/></p>
                <p>Address Line 1:<input type="text" placeholder="Enter Address" onChange={this.handleChangea}/></p>
                <p>Address Line 2:<input type="text"placeholder="Enter Address"/></p>
                <p>
                <label>
                    Country:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="India">India</option>
                        <option value="Germany">Germany</option>
                        <option value="Australia">Australia</option>
                    </select>
                </label>
                <button type="submit" disabled={this.state.disabled}>Submit</button>
                </p>
            </div>
            </form>
        );
    }
}
 
export default Profile;