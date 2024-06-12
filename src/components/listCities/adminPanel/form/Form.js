
import styled from 'styled-components';
import { configInputs } from '../../../../config/config';
import InputContainer from './InputContainer';

const Form = ({data, title, buttonLabel, handleChange, handleSubmit}) => {
    
    const displayInputs = configInputs(data, handleChange)

    return (
        <FormStyled typeof='submit' onSubmit={handleSubmit}>
            <h3>{title}</h3>
            {displayInputs.map(input =>
                <InputContainer data={input}/>
            )}
            
            <button>{buttonLabel}</button>
        </FormStyled>
    );
};

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 280px;
    border: 1px solid #5c746c;
    border-radius: 10px;
    gap: 10px;
    padding: 20px;
    h3{
        text-align: center;
        color: #5c746c;
    }

    button{
        height: 30px;
        width: 50%;
        align-self: center;
        margin-top: 10px;
        background-color: #5c746c;
        border: none;
        border-radius: 10px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;

        &:hover{
            background-color: #cedad6;
        }
        &:focus{
            background-color: #64bc9c;
        }
    }

`

export default Form;