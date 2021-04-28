import styled from 'styled-components';


export const HeaderWrapper = styled.header`
    height: 100%;
    background-color: #7BB899;
    margin-bottom: 1em;
`

export const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    padding: 1em 0;
    color: #fff;

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }
`

export const InnerLogo = styled.span`
    font-size: 1.5em;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;

    @media screen and (max-width: 1024px) {
        width: 100%;
        font-size: 1.2em;
        margin-bottom: 0.3em;
    }
`

export const InnerSearch = styled.input`
    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    padding-bottom: 0.5em;
    box-shadow: 0 0 0 1000px var(--blue-050) inset;
    transition: background-color 0s 50000s;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.9);
    caret-color: #fff;

    &::placeholder {
        font-weight: 300;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        font-size: 0.8em;
    }
`