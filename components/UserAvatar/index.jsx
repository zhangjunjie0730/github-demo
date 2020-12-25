import { connect } from 'react-redux';
import UserAvatar from './UserAvatar';
import { logout } from '../../redux/action';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar);
