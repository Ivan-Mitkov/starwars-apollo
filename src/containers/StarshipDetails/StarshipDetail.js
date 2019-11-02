// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { withTheme } from "styled-components";
// import { withRouter } from "react-router-dom";

// // import { allStarships } from "../../data/allStraships";
// import StarshipCart from "../../components/StarshipDetails/StarshipCart";
// import CharacterDetailTitle from "../../components/CharacterDetails/CharacterDetailTitle";

// import RadarChart from "../../components/StarshipDetails/ReactVisChart";

// const ContainerBig = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   width: 80%;
//   @media (max-width: 800px) {
//     flex-direction: column;
//     margin: 0 auto;
//   }
// `;

// const ContainerSmall = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   min-width: 300px;
//   flex-direction: column;
//   @media (max-width: 800px) {
//     margin: 0 auto;
//   }
// `;
// const StarshipTitle = styled.div`
//   line-height: 3rem;
//   height: 10vh;
//   border-bottom: 1px solid black;
//   width: 100%;
//   text-align: center;
//   h2 {
//     ${props => {
//       return { ...props.theme.name };
//     }}
//   }
//   @media (max-width: 800px) {
//     flex-direction: column;
//     line-height: 1rem;
//     height: 10vh;
//     border-bottom: 1px solid black;
//     width: 100%;
//   }
// `;
// const RadarContainer=styled.div`
//  ${props => {
//     return { ...props.theme.radar };
//   }}

// `;
// const StarshipDetail = props => {
//   const [allStarshipsFromData, setAllStarshipsFromData] = useState(null);
//   const [starship, setStarship] = useState(null);
//   const [sameClassStarships, setSameClassStarships] = useState(null);
//   const [maxCrew, setMaxCrew] = useState(null);
//   const [maxCost, setMaxCost] = useState(0);
//   const [maxMLPerHour, setMaxMLPerHour] = useState(null);
//   const [maxAtmosphericSpeed, setMaxAtmosphericSpeed] = useState(null);
//   const [maxHyperdriveRating, setMaxHyperdriveRating] = useState(null);
 
//   const [data, setData] = useState(null);
//   const [maxData, setMaxData] = useState(null);

//   useEffect(() => {
//     const fetchDataStarshipDetails = async () => {
//       let ep = props.match.params.starshipId;

//       const result = await allStarships;
//       if (result) {
//         // console.log(result);
//         setAllStarshipsFromData(result.data.allStarships.edges);
//         const starship = result.data.allStarships.edges.find(x => {
//           return x.node.id.toString() === ep;
//         });
//         // console.log(starship.node);
//         if (starship) {
//           // console.log('starship',starship)
//           setStarship(starship.node);
//         }
//         return result;
//       }
//     };
//     fetchDataStarshipDetails();
//   }, [props.match.params.starshipId]);
//   useEffect(() => {
//     const fetchAllStarshipsSameClass = async () => {
//       const result = await allStarships;
//       // console.log("im here");
//       if (result && starship) {
//         // console.log(allStarshipsFromData);
//         // console.log(starship);
//         const starshipClass = starship.starshipClass;
//         // console.log(starship.starshipClass);

//         const sameClass = result.data.allStarships.edges.filter(x => {
//           // console.log(x);
//           return x.node.starshipClass === starshipClass;
//         });
//         // console.log(sameClass);
//         if (sameClass) {
//           const sameClassStarship = sameClass.map(x => x.node);

//           setSameClassStarships(sameClassStarship);
//         }
//       }
//     };
//     // fetchDataStarshipDetails();
//     fetchAllStarshipsSameClass();
//   }, [allStarshipsFromData, starship]);

//   useEffect(() => {
//     const findMax = async () => {
//       const result = await allStarships;
//       if (result && sameClassStarships) {
//         const maxCostArr = sameClassStarships.map(x => x.cost);
//         const maxCost = Math.max(...maxCostArr);
//         // console.log(maxCost);
//         setMaxCost(maxCost);

//         const maxMLPerHourArr = sameClassStarships.map(x => x.maxMLPerHour);
//         const maxMLPerHour = Math.max(...maxMLPerHourArr);
//         // console.log(maxMLPerHour);
//         setMaxMLPerHour(maxMLPerHour);

//         const maxAtmosphericSpeedArr = sameClassStarships.map(
//           x => x.maxAtmosphericSpeed
//         );
//         const maxAtmosphericSpeed = Math.max(...maxAtmosphericSpeedArr);
//         // console.log(maxAtmosphericSpeed);
//         setMaxAtmosphericSpeed(maxAtmosphericSpeed);

//         const maxHyperdriveRatingArr = sameClassStarships.map(
//           x => x.hyperdriveRating
//         );
//         const maxHyperdriveRating = Math.max(...maxHyperdriveRatingArr);
//         // console.log(maxHyperdriveRating);
//         setMaxHyperdriveRating(maxHyperdriveRating);

//         const maxCrewArr = sameClassStarships.map(x => x.crew);
//         const maxCrew = Math.max(...maxCrewArr);
//         // console.log(maxCrew);
//         setMaxCrew(maxCrew);
//       }
//     };
//     findMax();
//   }, [sameClassStarships,starship]);

//   useEffect(() => {
//     const findData = async () => {
//       const result = await allStarships;
//       // console.log(starship)
//       if (result && sameClassStarships) {
//         const Range = {
//           name: starship.name,
//           cost: maxCost,
//           Crew:maxCrew,
        
//           MaxAtmSpeed:maxAtmosphericSpeed,
//           HyperDRat: maxHyperdriveRating,
//           MaxMLh: maxMLPerHour
//         };
//         setMaxData(Range)
//         const DATA = [
//           {
//             name: starship.name,
//             cost: starship.cost,
//             crew: starship.crew,
        
//             maxAtmSpeed: starship.maxAtmosphericSpeed,
//             HyperDRat: starship.hyperdriveRating,
//             MaxMLh: starship.maxMLPerHour
//           }
//         ];
//         setData(DATA);
//       }
//     };
//     findData();
//   }, [
//     starship,
//     maxCost,
//     maxMLPerHour,
//     maxAtmosphericSpeed,
//     maxHyperdriveRating,
//     maxCrew,
//     sameClassStarships
//   ]);
 
//   return (
//     <>
     
//       <CharacterDetailTitle name={starship && starship.name} />
//       <ContainerBig>
//         {/* <Container> */}
//         <ContainerSmall>
//           <StarshipCart
//             name={starship && starship.name}
//             url={starship && starship.image}
//             class={starship && starship.starshipClass}
//             cost={starship && starship.cost}
//             crew={starship && starship.crew}
//             maxAtmosphericSpeed={starship && starship.maxAtmosphericSpeed}
//             hyperdriveRating={starship && starship.hyperdriveRating}
//           />
//         </ContainerSmall>
//         <ContainerSmall>
//         <StarshipTitle>
//             <h2>{starship&&starship.name}</h2>
//           </StarshipTitle>
//           <RadarContainer>
//           {data&&maxData ? <RadarChart data={data} range={maxData} /> : null}
//           </RadarContainer>
         
//           {/* {console.log('data:',data)}
//       {console.log("maxData",maxData)} */}
//         </ContainerSmall>
//       </ContainerBig>
//     </>
//   );
// };

// export default withRouter(withTheme(StarshipDetail));
