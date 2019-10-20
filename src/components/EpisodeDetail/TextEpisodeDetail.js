import React from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";

const Texts = styled.div`
  width: 66%;
  height: 25vh;
  margin: 0 auto;
  min-width: 250px;
  border-radius: 12px;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content:end;
  padding:12px;
  ${props => {
    return { ...props.theme.cards };
  }}
  @media (max-width: 800px) {
    height: 35vh;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    height: 40vh;
    flex-direction: column;
  }
  @media (max-width: 550px) {
    height: 45vh;
    flex-direction: column;
  }
  @media (max-width: 450px) {
    height: 50vh;
    flex-direction: column;
  }
`;
const Openings = styled.div`
  /* height: 66%; */
  /* background: red; */
  margin-bottom:16px;

  font-size:1rem;
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
    const text=props.text&&props.text.split(' ').slice(0,50).join(' ')
  return (
    <Texts>
      <Openings >{text}...</Openings>
      <Detail><span className="name">Director:</span> <span className='data'>{props.director}</span></Detail>
      <Detail><span className="name">Release Date:</span> <span className='data'>{props.date}</span></Detail>
    </Texts>
  );
};

export default withTheme(TextEpisodeDetail);
