const usePF = () => {
  // const PF = 'https://falak-api.herokuapp.com/images/'
  // const PF = 'http://localhost:3000/images/'
  let PF;
  if (window.location.href[4] === ':') {
    PF = 'http://localhost:3000/images/';
  } else {
    PF = 'https://falak-social.netlify.app/images/';
  }
  return PF;
};

export default usePF;
