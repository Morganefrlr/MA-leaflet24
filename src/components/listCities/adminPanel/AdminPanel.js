import { useContext } from 'react';
import Context from '../../../context/Context';
import { adminPanelConfig } from '../../../config/config';
import { emptyData } from '../../../fakeData/fakeData';
import styled from 'styled-components';

const AdminPanel = () => {

    const {adminPanelSelected, setAdminPanelSelected, setCapitalSelected} = useContext(Context)
    const displayForm = adminPanelConfig.find((item) => item.index === adminPanelSelected)

    const handleReturnAddCity = () => {
       setCapitalSelected(emptyData)
        setAdminPanelSelected('add')
    }
    
    return (
        <AdminPanelStyled>
            <div className='buttonAddNew' onClick={handleReturnAddCity}>+</div>
            {displayForm && displayForm.Content}
        </AdminPanelStyled>
    );
};

const AdminPanelStyled = styled.div`
    display: flex;
    flex-direction: column;

    .buttonAddNew{
        width: 50px;
        height: 50px;
        border: 1px solid #5c746c;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 30px;
        color: #5c746c;
        align-self: center;
        margin-bottom: 20px;
    }
`

export default AdminPanel;