import { connect } from 'react-redux';
import Modal from './Modal';
import { addItemToCollection } from './../actions/collection';

const mapDispatchToProps = dispatch => ({
    onSubmited: item => dispatch(addItemToCollection(item))
})

const mapStateToProps = state => ({
    item: state.selectedItem.item
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)