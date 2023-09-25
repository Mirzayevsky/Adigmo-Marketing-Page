import styled from "styled-components"
export const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color:#000;
  display: flex;
  align-items: center;
  
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled.div`
color: #fff;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  
`;
export const LinkWrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  font-size: 18px;
  font-weight: 600;
  .from-left:after {
    transform-origin: left;
  }
`;
export const Link = styled.div`
  color: #fff;
  cursor: pointer;
  position: relative;
  
    &:after{
     display:block;
     content: '';
     width: inherit;
     border-bottom: solid 3px #0FFF14;
     transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
  &:hover:after { transform: scaleX(1); }
      
  
`;
export const Button = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  background-color: #0FFF14;
  padding: 7px 35px;
  cursor: pointer;
`;

