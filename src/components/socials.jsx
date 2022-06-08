import React from "react";
import { home_illustrations } from "../assets";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: max-content;
  gap: 0.8rem;
  padding: 0.6rem 0;
`;

const LinkSocials = styled(Link)`
  clear: both;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Socials = () => {
  return (
    <SocialContainer>
      <LinkSocials to="https://www.linkedin.com/in/nisha-chauhan-31197b17b/s">
        <img src={home_illustrations.linkedin} alt="linkedin-logo" />
      </LinkSocials>
      <LinkSocials to="https://twitter.com/Nishachauhanr">
        <img src={home_illustrations.twitter} alt="twitter-logo" />
      </LinkSocials>
      <LinkSocials to="https://github.com/nis6">
        <img src={home_illustrations.github} alt="github-logo" />
      </LinkSocials>
    </SocialContainer>
  );
};

export default Socials;
