import { message } from 'antd';
import axios from 'axios';

export const LOGOUT = 'logout';

// action creators
export function logout() {
  return dispatch => {
    axios
      .post('/logout')
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: LOGOUT });
          message.success('注销成功');
        } else {
          console.log('logout failed', response);
        }
      })
      .catch(error => {
        console.log('logout failed', error);
      });
  };
}
