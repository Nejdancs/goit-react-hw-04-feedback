import { Message } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
