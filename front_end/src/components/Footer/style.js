import styled from 'styled-components';

export const Box = styled.div`
 background: var(--blue-white);
 position: absolute;
 width: 100%;
 padding-top: 20px;
 
 @media (max-width: 1000px) {
     padding: 70px 30px;
 }
 `;

export const Container = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     max-width: 1300px;
     margin: 0 auto;
 `

export const Column = styled.div`
 display: flex;
 flex-direction: column;
 text-align: left;
 margin-left: 60px;
 `;

export const Row = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit,
                         minmax(185px, 1fr));
 grid-gap: 100px;
 
 @media (max-width: 1000px) {
     grid-template-columns: repeat(auto-fill,
                         minmax(200px, 1fr));
 }
 `;

 export const FooterLink = styled.a`
 @media screen and (max-width: 400px) {
    color: var(--brown);
    margin-bottom: 5px;
    font-size: 0.8em;
    text-decoration: none;
    
    &:hover {
        color: var(--yellow);
        transition: 200ms ease-in;
    }
   }
   @media screen and (min-width: 400px) {
    color: var(--brown);
    margin-bottom: 5px;
    font-size: 18px;
    text-decoration: none;
    
    &:hover {
        color: var(--yellow);
        transition: 200ms ease-in;
    }
   }
 `;

export const Heading = styled.p`
 font-size: 24px;
 color: var(--brown);
 margin-bottom: 20px;
 font-weight: bold;
 `;


 
