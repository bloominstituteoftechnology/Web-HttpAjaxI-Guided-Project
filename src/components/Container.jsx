import React from 'react';
import styled from 'styled-components';
// import $ from 'jquery';
// import axios from 'axios';


const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;
`;

export default class Container extends React.Component {
  state = {
    friend: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/friends/1')
      .then(response => {
        return response.json();
      })
      .then(parsedData => {
        console.log(parsedData);
        this.setState({ friend: parsedData });
      });

    console.log('whatever');
    // the happy console.log has not executed at this line yet
    // When the promise resolves, the browser will know.
    // IT will run this callback we put in the .then()
  }

  render() {
    return (
      <StyledContainer>
        {
          this.state.friend && <div>{this.state.friend.name}</div>
        }
      </StyledContainer>
    );
  }
}
