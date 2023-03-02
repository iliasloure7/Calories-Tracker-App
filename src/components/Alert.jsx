import AlertContext from '../context/AlertContext';
import { useContext } from 'react';
import { StyledAlert } from './styles/Alert.styled';
function Alert() {
  const { alert } = useContext(AlertContext);
  const { message, color } = alert;

  return (
    Object.keys(alert).length > 0 && (
      <StyledAlert color={color}>{message}</StyledAlert>
    )
  );
}

export default Alert;
