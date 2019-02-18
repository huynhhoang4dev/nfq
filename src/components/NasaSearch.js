import React, { useState } from 'react';
import './../HOC/LoadingHOC.css';
import Portal from './../portal';
import ModalContainer from '../portal/ModalContainer';
import LightBoxContainer from './../portal/LightBoxContainer';
import queryString from 'query-string';
import back from './../assets/icons/back.svg';
import { 
    Item as StyledItem,
    Preview as StyledPreview,
    AuthorAndDate as StyledAuthorAndDate,
    SearchTitle as StyledSearchTitle,
    Title as StyledTitle,
    Description as StyledDescription,
    Button as StyledButton,
    GridItems as StyledGridItems,
    BackToCollection as StyledBackToCollection,
    Search as StyledSearch,
    AddItemToCollectionButton as StyledAddItemToCollectionButton
} from './../styled-components';

import { Link } from 'react-router-dom'





export default ({items = [], isFetching, isSuccess, isError, items_count, fetchItems, match, history, selectedItem}) => {


    const [activeModal, setActiveModal] = useState(false);

    const LoadingComponent = <div className="loader" />    
    const ErrorComponent = <div>ERROR</div>   
    const EmptyComponent = <div>Empty</div>   
    const _handleKeyPress = e => {
        
        if(e.key === 'Enter') {
            // history.push(`${location.pathname}?query=${e.target.value}`)
            history.push(`/nasa-search?query=sun`)
        }
    }
        return (         
            <>
                <Link to="/">
                    <StyledBackToCollection>
                        <img src={back} />
                        <span>Back To Collection</span>
                    </StyledBackToCollection>
                </Link>
                
                <StyledSearchTitle>Search from Nasa</StyledSearchTitle>
                <StyledSearch>
                    <input placeholder="Type something to search..." onKeyPress={_handleKeyPress} />
                </StyledSearch>
                {/* <span>{items_count} result for {queryString.parse(location.search).query || ''}</span> */}
                {
                    isFetching
                        ?   LoadingComponent 
                        :   isError
                            ?   ErrorComponent
                            :   <StyledGridItems>{
                                    items.map(item => 
                                        <StyledItem key={item.data[0].nasa_id}>
                                            <StyledPreview>
                                                <img src={item.thumbs[0]} />
                                            </StyledPreview>
                                            <StyledAuthorAndDate>
                                                <span>{item.data[0].author}</span>
                                                <span>{item.data[0].date_created}</span>
                                            </StyledAuthorAndDate>
                                            <StyledTitle>{item.data[0].title}</StyledTitle>
                                            <StyledDescription>{item.data[0].description}</StyledDescription>
                                            <StyledAddItemToCollectionButton onClick={e => {
                                                e.preventDefault();
                                                selectedItem(item);                                   
                                                setActiveModal(true);
                                            }}>
                                                <span>Add to NASA Collection</span>
                                            </StyledAddItemToCollectionButton>
                                        </StyledItem>    
                                    )
                                }</StyledGridItems>
                }
                

                <Portal isActive={activeModal}>
                    <ModalContainer header={'Add to collection'} onCloseModal={setActiveModal}/>
                    {/* <LightBoxContainer></LightBoxContainer> */}
                </Portal>
            </>
        )
    // }
}