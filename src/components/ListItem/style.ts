import styled from 'styled-components'

type ContainerProps = {
    check: boolean
}

export const Container = styled.div(({check}: ContainerProps) => (
    `
    display: flex;
    align-items: center;

    background-color: #20212C;
    padding: 13px;
    margin-bottom: 10px;

    input {
        width: 22px;
        height: 22px;

        cursor: pointer;
        margin-right: 10px;
    }

    label {
        cursor: pointer;
        font-size: 1.3rem;
        text-decoration: ${check ? 'line-through' : 'initial'};
        color: ${check ? '#00ff0090' : '#797A81'};
    }
`
))