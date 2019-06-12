import React from 'react';
import styled from 'styled-components';
// import $ from 'jquery';
// import axios from 'axios';


const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  .error {
    color: red;
  }
`;

export default class Container extends React.Component {
  state = {
    friend: null,
    errorMessage: '',
  }

  fetchFriendWithNativeFetch = () => {
    fetch('http://localhost:3000/api/friends/2')
      .then(response => {
        return response.json();
      })
      .then(parsedData => {
        this.setState({ friend: parsedData });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }

  componentDidMount() {
    this.fetchFriendWithNativeFetch();
  }

  render() {
    return (
      <StyledContainer>
        {
          this.state.errorMessage &&
          <div className='error'>{this.state.errorMessage}</div>
        }

        {
          this.state.friend &&
          <div>{this.state.friend.name}</div>
        }
      </StyledContainer>
    );
  }
}
