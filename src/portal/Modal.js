import React, { Component } from 'react';

import {
    Input as StyledInput,
    AddToCollectionModal as StyledAddToCollectionModal,
    Title as StyledTitle,
    DescriptionModal as StyledDescriptionModal,
    SelectionModal as StyledSelectionModal,
    Button as StyledButton,
    Header as StyledHeader
} from '../styled-components';
import check from './../assets/icons/check.svg';
import close from './../assets/icons/close.svg';


export default class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            type: '',
            preview: '',
            file: ''
        };    

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangePreview = this.handleChangePreview.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        const { nasa_id, title, description, media_type} = this.props.item.data[0];
        const preview = this.props.item.thumbs[0] || '';
        const file = this.props.item.previews[0] || '';
        this.setState({
            title,
            description,
            type: media_type,
            preview,
            file
        })
    }

    handleChangeTitle(e) {
        e.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            title: e.target.value
        }))
    }
    handleChangeDescription(e) {
        e.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            description: e.target.value
        }))
    }
    handleChangeType(e) {
        e.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            type: e.target.value
        }))
    }
    handleChangePreview(e) {
        e.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            preview: e.target.value
        }))
    }
    handleChangeFile(e) {
        e.preventDefault();
        this.setState(prevState => ({
            ...prevState,
            file: e.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault();
        
        console.log('submit props', this.props.item);
        this.props.onSubmited(this.props.item);
    }

    handleCloseModal(e){
        e.preventDefault();
        this.props.onCloseModal(false);
    }

    render() {
        return (
            <StyledAddToCollectionModal>
                <StyledHeader >
                    <span>{this.props.header}</span>
                    <img src={close} onClick={this.handleCloseModal} />
                </StyledHeader>
                <StyledInput>
                    <span>Title</span>
                    <input onChange={this.handleChangeTitle} value={this.state.title}/>
                </StyledInput>
                <StyledDescriptionModal>
                    <span>Description</span>
                    <textarea onChange={this.handleChangeDescription} value={this.state.description} />
                </StyledDescriptionModal>
                <StyledSelectionModal>
                    <span>Type</span>
                    <select value={this.state.type} onChange={this.handleChangeType}>
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>
                </StyledSelectionModal>
                <StyledInput>
                    <span>Link preview image url </span>
                    <input onChange={this.handleChangeFile} value={this.state.preview} />
                </StyledInput>
                <StyledInput>
                    <span>Link file url </span>
                    <input onChange={this.handleChangeFile} value={this.state.file} />
                </StyledInput>
                <StyledButton onClick={this.handleSubmit}>
                    <img src={check} />
                    <span>Add to collection</span>
                </StyledButton>
            </StyledAddToCollectionModal> 
        )
    }
    
    
}

