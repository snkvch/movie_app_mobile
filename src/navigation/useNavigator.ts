import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/user/index';

const useNavigator = () => {
  const isLogged = useSelector(authSelectors.isLogged);
  return {
    isAuthenticated: isLogged,
  };
};

export default useNavigator;
