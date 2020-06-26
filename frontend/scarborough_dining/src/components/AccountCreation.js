import React, { Component } from 'react'

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const inputStyle = {
    padding: '1em',
    fontSize: '20px',
    margin: '10px 0px'
}

function UserForm() {
    return (
            <form name="accountInformation" style={formStyle}>
                <input style={inputStyle} name="fullName" type="text" placeholder="Full Name" required={true} />
                <input style={inputStyle} name="email" type="email" placeholder="Email" required={true} />
                <input style={inputStyle} name="phoneNumber" type="tel" placeholder="Phone Number" required={true} />
                <input style={inputStyle} name="password" type="password" placeholder="Password" required={true} />
                <input style={inputStyle} name="confirmPassword" type="password" placeholder="Confirm Password" required={true} />
            </form>
    )
}

function RestaurantForm() {
    return (
            <form name="restaurantInformation" style={formStyle}>
                <input style={inputStyle} name="restaurantName" type="text" placeholder="Business Name" required={true} />
                <input style={inputStyle} name="restaurantPhone" type="tel" placeholder="Business Number" required={true} />
                <input style={inputStyle} name="restaurantLocation" type="text" placeholder="Business Address" required={true} />
                <input style={inputStyle} name="restaurantCuisine" type="text" placeholder="Type of Food" required={true} />
            </form>
    )
}

//Renders the customer vs restaurant account creation form depending on which link user clicks
export class AccountCreation extends Component {

    render() {
        if (this.props.userType === "restaurant") {
            return (
                <div name="accountCreationForm" style={{display: 'flex', flexDirection: 'column', padding: '5% 30%'}}>
                    <h2 style={{fontSize: '30px', padding: '0 0 5% 0'}}>Account Information</h2>
                    <UserForm />
                    <h2 style={{fontSize: '30px', padding: '5% 0 5% 0'}}>Restaurant Information</h2>
                    <RestaurantForm />
                </div>
            )
        }
        else {
            return (
                <div name="accountCreationForm" style={{display: 'flex', flexDirection: 'column', padding: '5% 30%'}}>
                    <h2 style={{fontSize: '30px', padding: '0 0 5% 0'}}>Account Information</h2>
                    <UserForm />
                </div>
            )
        }
    }
}

export default AccountCreation
