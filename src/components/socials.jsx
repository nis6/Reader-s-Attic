import React from "react";
import { home_illustrations } from "../assets";
import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: max-content;
  gap: 0.8rem;
  padding: 0.6rem 0;
  border: red 1px solid;
`;

const LinkSocials = styled.a`
  border: red 1px solid;
  clear: both;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Socials = () => {
  return (
    <SocialContainer>
      <LinkSocials href="https://www.linkedin.com/in/nisha-chauhan-31197b17b/s">
        <img src={home_illustrations.linkedin} alt="linkedin-logo" />
      </LinkSocials>
      <LinkSocials href="https://twitter.com/Nishachauhanr">
        <img src={home_illustrations.twitter} alt="twitter-logo" />
      </LinkSocials>
      <LinkSocials href="https://github.com/nis6">
        <img src={home_illustrations.github} alt="github-logo" />
      </LinkSocials>
    </SocialContainer>
  );
};

export default Socials;
