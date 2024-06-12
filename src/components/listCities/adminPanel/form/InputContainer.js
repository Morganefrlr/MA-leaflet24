import React from 'react';
import styled from 'styled-components';

const InputContainer = ({data}) => {
    return (
        <InputContainerStyled>
            <label>{data.label}:</label>
            <input type="text" placeholder={data.label} name={data.name} value={data.value} onChange={data.handleChange}/>
        </InputContainerStyled>
    );
};
const InputContainerStyled = styled.div`
        display: flex;
        gap: 10px;

        label{
            color: #5c746c;
        }
        input{
            outline: none;
            border: 1px solid #cedad6;
            padding: 2px;

            &::placeholder{
                font-size: 12px;
            }
            &:focus{
                border: 1px solid #5c746c;
            }
        }
`
export default InputContainer;