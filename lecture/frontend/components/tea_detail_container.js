// import TeaDetail... ;
// import {connect} from 'react-redux';

import { requestTeaDetail } from "../actions/tea_actions";
import { selectTransactionByTea } from "../reducers/selectors";
//import { selectTransactionByTea } from '...'

const mapStateToProps = (state, ownProps) => {
    return {
        tea: state.teas[ownProps.teaId],
        transactions: selectTransactionByTea(state, ownProps.teaId)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestTeaDetail: (id) => dispatch(requestTeaDetail(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeaDetail)