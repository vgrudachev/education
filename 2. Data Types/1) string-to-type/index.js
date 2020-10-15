function stringToType(str) {
  switch(str) {
    case 'null': 
      return null;
    case 'undefined':
      return undefined;
    case 'true':
      return true;
    case 'false':
      return false;
    case '': 
      return '';
    default: 
      if (isNaN(+str)) {
        return str;
      } else if (typeof(+str) === 'number')
      return +str;
    }
    return str
};

window.stringToType = stringToType;

export default stringToType;
