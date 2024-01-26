export const isAuthenticated = () => {
    if (typeof window === 'undefined') {
      return false;
    }
    //in localstorage the token is present then return the token
    if (localStorage.getItem('token')) {
      return JSON.parse(localStorage.getItem('token'));
    } else {
      return false;
    }
  };