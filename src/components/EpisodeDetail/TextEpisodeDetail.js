import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const Texts = styled.div`
  width: 60%;
  height: 30vh;
  margin: 0 auto;
  min-width: 250px;
  border-radius: 12px;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content:end;
  padding:12px;
  font-size:1.2rem;
  line-height:2rem;
  ${props => {
    return { ...props.theme.cards };
  }}
 @media (max-width: 1600px) {
    width: 60%;
    height: 40vh;
    flex-direction: column;
  }
 @media (max-width: 1200px) {
    width: 60%;
    height: 45vh;
    flex-direction: column;
  }
 @media (max-width: 1000px) {
    width: 60%;
    height: 50vh;
    flex-direction: column;
  }
  
 
  @media (max-width: 800px) {
    width: 60%;
    height: 55vh;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    width: 70%;
    height: 55vh;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    width: 80%;
    height: 60vh;
    flex-direction: column;
  }
  @media (max-width: 550px) {
    width: 90%;
    height: 60vh;
    flex-direction: column;
  }
  @media (max-width: 450px) {
    width: 90%;
    height: 70vh;
    flex-direction: column;
  }
  @media (max-width: 200px) {
    width: 90%;
    height: 75vh;
    flex-direction: column;
  }
 
  
`;
const Openings = styled.div`
  /* height: 66%; */
  /* background: red; */
  margin-bottom:16px;

  
`;
const Detail=styled.div`
justify-self:flex-end;
span.data{
  color:${props=>props.theme.primaryHeading.color}
}
span.name{
  color:${props=>props.theme.name.color}

}
`;

const TextEpisodeDetail = props => {
    // console.log({props});
    const text=props.text&&props.text.split(' ').slice(0,45).join(' ')
  return (
    <Texts>
      <Openings >{text}...</Openings>
      <Detail><span className="name">Director:</span> <span className='data'>{props.director}</span></Detail>
      <Detail><span className="name">Release Date:</span> <span className='data'>{props.date}</span></Detail>
    </Texts>
  );
};

export default withTheme(TextEpisodeDetail);
