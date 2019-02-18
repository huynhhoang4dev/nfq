import styled from 'styled-components';
// import play from './../assets/icons/play.svg';

export const GridItems = styled.div`
    display: flex;
    postion: relative;
    width: 100%;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    width: 33%;
    padding: 15px;
    float: left;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const CollectionButton = styled.div`
    border: 1px solid #CECED2;
    border-radius: 3px;
    width: 44px;
    height: 44px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

`;

export const Preview = styled.div`
    border-radius: 3px;
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    box-shadow: 0px 22px 60px -26px rgba(0,0,0,1);
    -webkit-box-shadow: 0px 22px 60px -26px rgba(0,0,0,1);
    -moz-box-shadow: 0px 22px 60px -26px rgba(0,0,0,1);
    img{
        position: relative;
        min-width: 100%;
        min-height: 100%;
    }
    
`;

export const AddNewItem = styled.button`
    background-color: #784CC0;
    border-radius: 3px;
    padding: 15px 25px;
    border: 0;
    display: flex;
    align-items: center;
    img{
        margin-right: 10px;
    }
    span{
        color: #FFFFFF;
        font-family: Helvetica;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0.11px;
        line-height: 17px;
    }
`;

export const PlayIcon = styled.div`
    z-index: 1000;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        position: relative;
        width: 60px;
        height: 60px;
        padding-left:15px;
    }
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export const AuthorAndDate = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    span{
        position: relative;
        width: 50%;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        color: #000000;
        font-family: Helvetica;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.09px;
        line-height: 21px;
        opacity: 0.6000000238418579;
    }
`;

export const Title = styled.h2`
    position: relative;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #000000;
    font-family: Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.58px;
    line-height: 29px;
    width: 100%;
    height: 29px;
    margin-top: 15px;
`;
export const Description = styled.b`
    color: #000000;
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.11px;
    line-height: 21px;
    opacity: 0.6000000238418579;
    margin-top: 15px;
    height: 85px;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const BackToCollection = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    span{
        color: #784CC0;
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: -0.34px;
        line-height: 17px;
    }
`;

export const SearchTitle = styled.h1`
    color: #000000;
    font-family: Helvetica;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: -0.96px;
    line-height: 48px;
    opacity: 0.75;
    margin-top: 30px;
`;

export const Search = styled.div`
    border: 1px solid #CECED2;
    border-radius: 3px;
    width: 100%;
    height: 62px;
    margin-top: 30px;
    
    input{
        position: relative;
        width: 96%;
        height: 100%;
        border: 0;
        margin-left: 2%;
        font-size: 1.5em;
    }
    input:focus{
        outline: none;
    }
    input::placeholder{
        color: #000000;
        opacity: 0.3;
        font-size: 1.em;
    }
`;

export const Button = styled.div`
    border: 1px solid #CECED2;
    background-color: #784CC0;
    border-radius: 3px;
    width: 200px;
    height: 44px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 10px;
    margin-top: 35px;
    span{
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.11px;
        line-height: 17px;
    }
`;

export const Input = styled.div`
    border: 1px solid #CECED2;
    border-radius: 3px;
    position: relative;
    width: 100%;
    padding: 0 15px;
    height: 56px;
    margin-top: 20px;
    span{
        color: rgba(0, 0, 0, 0.9);
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        display: inline-block;
        position: relative;
        width: 100%;
    }
    input{
        position: relative;
        width: 100%;
        border: 0;
        color: #000000;
        font-family: Helvetica;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.13px;
        line-height: 19px;
    }
    input:focus{
        outline: none;
    }
`;

export const Selection = styled.div``;

export const Modal = styled.div` 
    position: fixed;    
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.h2`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35px;
    span{
        color: #000000;
        font-family: Helvetica;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.58px;
        line-height: 29px;
    }
    img{

    }
`;

export const AddToCollectionModal = styled.div`
    position: relative;    
    top: 11%;
    width: 607px;
    height: 743px;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
    width: 607px;
    height: 743px;
    padding: 20px;
`;

export const DescriptionModal = styled.div`
    border: 1px solid #CECED2;
    border-radius: 3px;
    position: relative;
    width: 100%;
    height: 208px;
    margin-top: 20px;
    padding: 0 15px;
    span{
        color: rgba(0, 0, 0, 0.9);
        font-family: Helvetica;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        width: 224px;
    }
    textarea{
        color: #000000;
        font-family: Helvetica;
        font-size: 16px;
        font-weight: 400;
        border: 0;
        letter-spacing: 0.13px;
        line-height: 19px;
        position: relative;
        width: 100%;
        height: 170px;
    }
    textarea:focus{
        outline: none;
    }
`;

export const SelectionModal = styled.div`
    position: relative;
    width: 100%;
    padding: 15px;
    border: 1px solid #CECED2;
    border-radius: 3px;
    height: 70px;
    margin-top: 20px;
    span{
        display: inline-block;
        position: relative;
        width: 100%;
    }
    select{
        position: relative;
        width: 100%;
        border: 0;

    }
    select:focus{
        outline: none;
    }
`;

export const LightBox = styled.div`
    
`;

export const LightBoxImage = styled.div`
    background-image: url(${props => props.imageSRC});
    background-size: 100%;
    border-radius: 5px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.5);
    width: 963px;
    height: 622px;
`;

export const LightBoxVideo = styled.iframe`
    width: 963px;
    height: 622px;
`;

export const LightBoxTitle = styled.h2`

`;

export const LightBoxCloseButton = styled.button`

`;

export const AddItemToCollectionButton = styled.div`
    position: relative;
    border: 1px solid #CECED2;
    border-radius: 3px;
    opacity: 0.4000000059604645;
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    span {
        color: #000000;
        font-family: Helvetica;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0.09px;
        line-height: 15px;
    }
`;