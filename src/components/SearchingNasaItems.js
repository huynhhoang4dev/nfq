import React from 'react';
import { connect } from 'react-redux';

const SearchingNasaItemsComponent = ({isSuccess, history}) => {
    
}

const mapStateToProps = (state, ownProps) => ({
    isSuccess: state.nasaItems.isSuccess,
})

export default () => {
    
}