import styled from "styled-components";
import bgImg from "../../../assets/homePage/header/123.png"
export const Wrapper = styled.div`
  //height: calc(100vh - 80px);
  width: 100%;
  height: 85vh;
  background:url(${bgImg});
  background-position:bottom;
  background-size:cover;
  background-repeat: no-repeat;
  background-color: #000;
 
`;
export const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
`;
export const TextWrapper = styled.div`
  width: 60%;
`;
export const TitleWrapper = styled.div`
`;
export const Title = styled.div`
  color: #fff;
  font-size: 64px;
  font-weight: 600;
  padding-top: 40px;
  .color{
    color: #0FFF14;
    
  }
`;
export const GoogleIcon = styled.div`
`;
export const DolorIcon = styled.div`
`;
export const BottomWrapper = styled.div`
`;
export const ContentLeft = styled.div`
`;
export const NoteAndIconWrapper = styled.div`
`;
export const NoteIcon = styled.div`
`;
export const Text = styled.div`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;
export const RequestButton = styled.div`
  width: fit-content;
  color: #222;
  font-size: 18px;
  font-weight: 600;
  background-color:#0FFF14;
  padding: 7px 20px;
  margin:20px 0;
`;
export const ContentRight = styled.div`
`;
export const YandexIcon = styled.div`
`;

export const PictureWrapper = styled.div`
  //height: 100%;
  width:fit-content;
  //background-color: greenyellow;
  display: flex;
  align-items: center;
  img{
    height:800px;
    width: 1400px;
   
    //background-color: darkcyan;
  }
`;
export const  GoogleAds= styled.img`
  height:1000px;
  width: 700px;
`;
