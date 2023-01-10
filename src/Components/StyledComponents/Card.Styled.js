import styled from 'styled-components'

export const StyledCard = styled.article`
${({theme}) => theme.devMode && "border: 10px solid red;"}
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
width: 300px;
margin: auto;
text-align: center;
font-family: arial;
display: grid;
grid-template-rows: 1fr 1fr 3fr;
justify-content: start;
height: 100%;
text-align: left;
padding-left: 1rem;
p {
    color: darkgrey;
}
`
