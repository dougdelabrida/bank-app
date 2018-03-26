import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import styled from 'styled-components';
import Button from '../components/Button';

const ProfileForm = styled.form`
  display: block;

  input {
    margin: 5px 3px;
  }
`;

const ProfileFormBottom = styled.div`
  button {
    margin: 3px;
  }
`;

const InputGroup = styled.div`
  display: flex;

  input {
    width: 100%;
  }
`;

class Profile extends Component {

  state = {
    firstName: 'Douglas',
    lastName: 'Delabrida',
    phone: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    editing: false
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAddressInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const address = {...this.state.address};

    address[name] = value;

    this.setState({
      address
    });
  }

  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    });
  }

  render() {
 
    return (
      <div>
        <PageTitle>
          Profile
        </PageTitle>
        <ProfileForm>
          <InputGroup>
            <Input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={event => this.handleInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={event => this.handleInputChange(event)}
              disabled={!this.state.editing}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="phone"
              type="text"
              placeholder="Phone Number"
              value={this.state.phone}
              onChange={event => this.handleInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={event => this.handleInputChange(event)}
              disabled={!this.state.editing}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="street"
              type="text"
              placeholder="Street"
              value={this.state.address.street}
              onChange={event => this.handleAddressInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="city"
              type="text"
              placeholder="City"
              value={this.state.address.city}
              onChange={event => this.handleAddressInputChange(event)}
              disabled={!this.state.editing}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              name="state"
              type="text"
              placeholder="State"
              value={this.state.address.state}
              onChange={event => this.handleAddressInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="zipCode"
              type="text"
              placeholder="Zip Code"
              value={this.state.address.zipCode}
              onChange={event => this.handleAddressInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="country"
              type="text"
              placeholder="Country"
              value={this.state.address.country}
              onChange={event => this.handleAddressInputChange(event)}
              disabled={!this.state.editing}
              required
            />
          </InputGroup>
          <ProfileFormBottom>
            {!this.state.editing && <Button type="button" onClick={() => this.toggleEdit()}>Edit Profile</Button>}
            {this.state.editing && (
              <div>
                <Button type="button" onClick={() => this.toggleEdit()}>Save</Button>
                <Button type="button" onClick={() => this.toggleEdit()}>Cancel</Button>
              </div>
            )}
          </ProfileFormBottom>
        </ProfileForm>
      </div>
    )
  }
}

export default Profile;
