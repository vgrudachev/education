function stringToType(str) {
  if (str == 'null') {
    return null;
  } else if (str == 'undefined') {
    return undefined;
  } else if (str == 'true') {
    return true;
  } else if (str == 'false') {
    return false;
  } else if ( typeof(+str) == 'number') {
    return +str;
  } else {
    return str;
  }
};

window.stringToType = stringToType;

export default stringToType;
