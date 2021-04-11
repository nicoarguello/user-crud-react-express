// import axios from 'axios';

export const dispatchUsers = (users) => {
    return {
        type: 'FET_ALL_USERS',
        payload: users
    }
}

// export function fetchAllUsers() {
//     return function (dispatch) {
//         return axios.get("http://localhost:4001/users/all", {
//             headers: {"Access-Control-Allow-Origin": "*"}
//         })
//             .then(({data}) => {
//                 dispatch(dispatchUsers(data));
//             }).catch(e => console.log(e.message));
//     };
// }


