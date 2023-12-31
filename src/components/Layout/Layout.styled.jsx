import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
     justify-content: space-between;
    
  }
`;

export const Link = styled(NavLink)`
  padding: 16px 24px;
  border-radius: 4px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 24px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
