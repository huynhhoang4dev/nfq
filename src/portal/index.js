 import React from 'react';
import ReactDOM from 'react-dom';
import { 
    Modal as StyledModal
} from '../styled-components';




const portal = document.getElementById('portal');


export default ({children, isActive}) => {
    return isActive ? ReactDOM.createPortal(
        <>
            <StyledModal>
                {children}
            </StyledModal>        
        </>,
        portal
    ) : null
}