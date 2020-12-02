import { fetchTea } from "../util/tea_api_util"


export const receiveTeaDetail = (payload) => {
    return {
        type: RECEIVE_TEA_DETAIL,
        payload
    }
}



export const requestTeaDetail = (id) => (dispatch) => {
    return TeaApiUtil.fetchTea(id)
        .then(payload => dispatch(receiveTeaDetail(payload)))
}