import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken =  () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

      } 
      catch (error) {
        console.error(error);
        navigate('/signin');
      }
    };

    checkToken();
  }, []);

  return (<>{children}</>);
};
 

export default AuthProvider;
