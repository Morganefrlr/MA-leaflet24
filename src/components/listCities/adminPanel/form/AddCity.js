import { useContext } from 'react';
import Form from './Form';
import Context from '../../../../context/Context';
import { createCity } from '../../../../fakeData/fakeData';

const AddCity = () => {

    const {capitalSelected, setCapitalSelected, handleAddCity } = useContext(Context)

    const handleChangeInputs = (e) => {
        const value = e.target.value
        setCapitalSelected({
            ...capitalSelected,
            [e.target.name]: value
        })
    }

    const handleAddNewCity = (e) => {
        e.preventDefault()
        const newCity =  createCity(capitalSelected)
        handleAddCity(newCity)
    }


    return (
       <Form title={'Ajouter une capitale'} data={capitalSelected} handleChange={handleChangeInputs} buttonLabel={'Ajouter'} handleSubmit={handleAddNewCity}/>
    );
};

export default AddCity;