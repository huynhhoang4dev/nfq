import { connect } from 'react-redux';
import Collection from './../components/Collection'

const mapStateToProps = (state, ownProps) => ({
    items: state.collection.items
})
// const mapDispatchToProps = (dispatch, ownProps) => ({
//     onFavorite: ,
//     onDelete: 
//     onEdit: 
// })

export default connect(
    mapStateToProps
)(Collection);