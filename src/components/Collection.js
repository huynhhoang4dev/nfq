import React from 'react'; 
import styled from 'styled-components';

import add from './../assets/icons/add.svg';
import heart from './../assets/icons/heart.svg';
import pen from './../assets/icons/pen.svg';
import trash from './../assets/icons/trash-bin.svg';
import play from './../assets/icons/play.svg';

import { Link } from 'react-router-dom';
import { 
    GridItems, 
    Item, 
    Preview, 
    AuthorAndDate, 
    Title, 
    Description, 
    Button, 
    PlayIcon,
    AddNewItem,
    CollectionButton as StyledCollectionButton
} from './../styled-components';

const Favorite = styled.button`
    background: ${ ({isFavorite}) => isFavorite ? "pink" : ""}
`;


const TopView = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 15px 30px;
`;

const Header = styled.h1`
    color: #000000;
    font-family: Helvetica;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: -1.21px;
    line-height: 60px;
    opacity: 0.30327;
`;



const demoItems = [
    {
        nasa_id: 1,
        author: 'Paolo Lazzaroti',
        date_created: '12 Feb, 2018',
        title: 'Eclipse over the Gulf of Poets askdakshd aksdhkashd askdhakshd aksdh',
        description: 'The total phase of the July 27 lunar eclipse lasted for an impressive 103 minutes. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        isFavorite: true,
        media_type: 'video',
        preview: 'http://images-assets.nasa.gov/image/PIA12228/PIA12228~thumb.jpg'
    },
    {
        nasa_id: 2,
        author: 'Paolo Lazzaroti',
        date_created: '12 Feb, 2018',
        title: 'Eclipse over the Gulf of Poets',
        description: 'The total phase of the July 27 lunar eclipse lasted for an impressive 103 minutes. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        isFavorite: false,
        media_type: 'image',
        preview: 'http://images-assets.nasa.gov/image/PIA12228/PIA12228~thumb.jpg'
    },
    {
        nasa_id: 3,
        author: 'Paolo Lazzaroti',
        date_created: '12 Feb, 2018',
        title: 'Eclipse over the Gulf of Poets',
        description: 'The total phase of the July 27 lunar eclipse lasted for an impressive 103 minutes. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        isFavorite: false,
        media_type: 'image',
        preview: 'http://images-assets.nasa.gov/image/PIA12228/PIA12228~thumb.jpg'
    },
    {
        nasa_id: 4,
        author: 'Paolo Lazzaroti',
        date_created: '12 Feb, 2018',
        title: 'Eclipse over the Gulf of Poets',
        description: 'The total phase of the July 27 lunar eclipse lasted for an impressive 103 minutes. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        isFavorite: false,
        media_type: 'image',
        preview: 'http://images-assets.nasa.gov/image/PIA12228/PIA12228~thumb.jpg'
    }
]


export default ({items, onFavorite, onDelete, onEdit}) => {


    return (
        <>
            <TopView>
                <Header>NASA Collection</Header>
                
                    <Link to="/nasa-search" style={{textDecoration: 'none'}}>
                    <AddNewItem>
                        <img src={add}/>
                        <span>Add New Item</span>
                        </AddNewItem>
                    </Link>
                
            </TopView>
            
            
            <GridItems>
                {
                    items.map(item => 
                        <Item key={item.data[0].nasa_id}>
                            <Preview>
                                
                                {
                                    item.datap[0].media_type === 'video'
                                    ?   <PlayIcon>
                                            <img src={play} />
                                        </PlayIcon>
                                    : null
                                }
                                <img src={item.thumbs[0]} />
                                
                            </Preview>
                            <AuthorAndDate>
                                <span>{item.data[0].secondary_creator}</span>
                                <span>{item.data[0].date_created}</span>
                            </AuthorAndDate>
                            <Title>{item.data[0].title}</Title>
                            <Description>{item.data[0].description}</Description>
                            <div style={{display: 'flex', marginTop: '15px'}}>   
                                <StyledCollectionButton onClick={onFavorite} isFavorite={item.isFavorite}>
                                    <img src={heart} />
                                </StyledCollectionButton>
                                <StyledCollectionButton onClick={onDelete}>
                                    <img src={trash} />
                                </StyledCollectionButton>
                                <StyledCollectionButton onClick={onEdit}><img src={pen} /></StyledCollectionButton>
                            </div>
                            
                        </Item>
                    )
                }
            </GridItems>
            
        </>
    )
}