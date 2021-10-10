import styled from 'styled-components'

export const Container = styled.div`
    margin: 20px 0;

    display: flex;
    align-items: center;

    border: 2px solid #555;
    border-radius: 15px;

    padding: 12px;

    .icon-plus {
        width: 26px;
        height: 26px;

        cursor: pointer;
        margin-right: 10px;

        color: #fff;
    }

    input {
        flex: 1;        
        border: 0;
        outline: 0;

        font-size: 18px;
        color: #ffffff;
        background-color: transparent;
    }
`