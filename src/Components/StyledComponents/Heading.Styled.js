import styled from "styled-components"

export const Heading = styled.h1 `
${(props) => HandleHTAG(props)}
`

const HandleHTAG = (props) => {
    switch (props.as) {
        case "h1":
            return `
            font-size: 3rem;
            `
        case "h2":
            return `
            font-size: 2rem;
            color: green;
            `
        case "h3":
            return `
            font-size: 1rem;
            color: darkred;
            `
        case "h4":
            return `
            font-size: 0.5rem;
            `
        case "h5":
            return `
            font-size: 0.1rem;
            `
        default: 
        return`
        font-size: 1rem;
        `
    }
}
