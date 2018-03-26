import React, { Component } from 'react';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import styled from 'styled-components';
import Button from '../components/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProfile, updateProfile } from '../actions/profile';

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

  handleSave(event) {
    event.preventDefault();
    const newProfile = Object.assign(this.props.profile.data, this.state);
    console.log('saving ', newProfile);
  }

  render() {
    const { profile = {} } = this.props;

    if (!profile.data) return <div>Loading...</div>

    return (
      <div>
        <PageTitle>
          Profile
        </PageTitle>
        <ProfileForm onSubmit={event => this.handleSave(event)}>
          <InputGroup>
            <Input
              name="firstName"
              type="text"
              placeholder="First Name"
              defaultValue={profile.data.firstName}
              onChange={event => this.handleInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="lastName"
              type="text"
              placeholder="Last Name"
              defaultValue={profile.data.lastName}
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
              defaultValue={profile.data.phone}
              onChange={event => this.handleInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              defaultValue={profile.data.email}
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
              defaultValue={profile.data.address.street}
              onChange={event => this.handleAddressInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="city"
              type="text"
              placeholder="City"
              defaultValue={profile.data.address.city}
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
              defaultValue={profile.data.address.state}
              onChange={event => this.handleAddressInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="zipCode"
              type="text"
              placeholder="Zip Code"
              defaultValue={profile.data.address.zipCode}
              onChange={event => this.handleAddressInputChange(event)}
              disabled={!this.state.editing}
              required
            />
            <Input
              name="country"
              type="text"
              placeholder="Country"
              defaultValue={profile.data.address.country}
              onChange={event => this.handleAddressInputChange(event)}
              disabled={!this.state.editing}
              required
            />
          </InputGroup>
          <ProfileFormBottom>
            {!this.state.editing && <Button type="button" onClick={() => this.toggleEdit()}>Edit Profile</Button>}
            {this.state.editing && (
              <div>
                <Button type="submit">Save</Button>
                <Button type="button" onClick={() => this.toggleEdit()}>Cancel</Button>
              </div>
            )}
          </ProfileFormBottom>
        </ProfileForm>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {

  dispatch(fetchProfile());

  return {
    actions: bindActionCreators({
      fetchProfile,
      updateProfile
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
