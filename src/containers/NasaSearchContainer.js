import { connect } from 'react-redux';
import NasaSearch from '../components/NasaSearch';
import { fetchNasaItems } from '../actions'
import { selectItem } from '../actions/selectedItem';
import { getDisplayItems } from '../selectors';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => ({
    items: getDisplayItems(state),
    isFetching: state.nasaItems.isFetching,
    isSuccess: state.nasaItems.isSuccess,
    isError: state.nasaItems.isError,
    items_count: state.nasaItems.items_count
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchItems: dispatch(fetchNasaItems(ownProps.location.search)),
    selectedItem: item => dispatch(selectItem(item))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(NasaSearch));