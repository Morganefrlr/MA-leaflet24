import { useContext } from 'react';
import Form from './Form';
import Context from '../../../../context/Context';
import { createCity } from '../../../../fakeData/fakeData';

const EditCity = () => {

    const {capitalSelected, setCapitalSelected, handleEditCity } = useContext(Context)

    const handleChangeInputs = (e) => {
        const value = e.target.value
        setCapitalSelected({
            ...capitalSelected,
            [e.target.name]: value
        })
        
    }
    const handleEditCapital =  (e) => {
        e.preventDefault()
        const cityUpdated = createCity(capitalSelected)
        handleEditCity(cityUpdated)

    }

    return (
        <Form title={"Editer la capital"} data={capitalSelected} buttonLabel={'Editer'}  handleChange={handleChangeInputs} handleSubmit={handleEditCapital}/>
    );
};

export default EditCity;