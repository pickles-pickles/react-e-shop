import styled from 'styled-components';

const $mainBlue = "#2a2a72";
const $lightBlue= "#009ffd";

const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.43rem;
background: transparent;
border: 0.1rem solid  ${$lightBlue};
color:${$lightBlue};
border-radius: 0.5rem;
cursor; pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
background: ${$lightBlue};
color: ${$mainBlue};
}
&:focus{
outline: none;
}
`;



export default ButtonContainer;