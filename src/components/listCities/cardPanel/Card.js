
import styled from 'styled-components';
import { FaEdit } from "react-icons/fa";


const Card = ({city, handleDelete, handleOpenFormCity}) => {



    return (
        <CardStyled>
            <h2>{city.capital}</h2>
            <div className='test'>
                <p>Pays:</p>
                <p>{city.country}</p>
            </div>
            <div className='test'>
                <p>Population:</p>
                <p>{city.population}</p>
            </div>
            <div className='test'>
                <p>Latitude:</p>
                <p>{city.latitude}</p>
            </div>
            <div className='test'>
                <p>longitude:</p>
                <p>{city.longitude}</p>
            </div>

            <div className='boutton'>
                <div onClick={() => handleOpenFormCity(city)}><FaEdit/></div>
                <div onClick={() => handleDelete(city.capital,city.country)}>X</div>
            </div>
        </CardStyled>
    );
};
const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 200px;
    height: 240px;
    border: 1px solid #74c4a4;
    border-radius: 10px;

    h2{
        color: #74c4a4;
    }
    .test{
        display: flex;
        gap: 10px;

        p:first-child{
            color: #74c4a4;
        }
    }

    .boutton{
        display: flex;
        gap: 5px;

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #ffc2b5;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            &:hover{
                background-color: #fe7f64;
            }
            &:first-child{
                background-color: #cdf1ce;

                &:hover{
                    background-color: #69db82;
                }
            }
        }
    }
`
export default Card;