import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        padding-bottom: 1rem;
    }

    .repo-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        color: #4582D5;
        text-transform: uppercase;
    }

    a.remover {
        color: #FF0000;
        text-transform: uppercase;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`