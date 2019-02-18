import { connect } from 'react-redux';
import { fetchNasaItems } from './../actions'
import Search from './../components/Search';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearch: () => dispatch(fetchNasaItems(''))
    }
}

const SearchContainer = connect(
    null,
    mapDispatchToProps
)(Search)

export default SearchContainer
