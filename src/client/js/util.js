const validatePlace = (userInput) => {
  if(userInput.trim().length > 0)
      return true;
  else
      return false;
}


export { validatePlace };