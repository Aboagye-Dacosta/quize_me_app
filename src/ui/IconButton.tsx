import styled from "styled-components"


const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    transition: background-color 200ms ease-in-out;
    background-color: transparent;
    border: none;
    border-radius: var(  --border-radius-md);
    font-size:2rem;

    &:hover{
        background-color: current;
    }

    :has(img) {
        img {
            width: 2rem;
        }
    }

`

export default IconButton