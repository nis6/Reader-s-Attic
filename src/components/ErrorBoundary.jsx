import React, { Component } from "react";
// @ts-ignore
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utilities";

const ErrorMessageContainer = styled.div`
  width: 50%;
  height: 50%;
  text-align: center;
  border-radius: 3px;
  border: ${colors.beige100};
  box-shadow: 0 0 4px 5px ${colors.beige100};
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError() {
    console.log("Error Caught, hasError: true");
    //this method should return a value to update state.
    return { hasError: true }; // why no use of this.setState here???
  }

  componentDidCatch(error, info) {
    console.log("Error Boundary caught an error: ", error);
    console.log("Information about Error: ", info);
    setTimeout(() => this.setState({ redirect: true }), 2000);
  }

  render() {
    if (this.state.redirect) {
      console.log("redirect: ", this.state.redirect);
      return <Redirect to="/search" />;
    }
    if (this.state.hasError) {
      return (
        <ErrorMessageContainer>
          <p>
            Sorry we seem to have a problem with this one.
            <Link to="/search">Click here</Link> to go back.
          </p>
        </ErrorMessageContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
