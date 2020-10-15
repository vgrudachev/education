function searchString(obj) {
  let str = '?';
  for (let key in obj) {
    if (obj[key] == null || obj[key] == undefined) {
      continue;
    } else {
      str = str + (key + '=' + obj[key] + '&');
    }
  }
  return str.slice(0, str.length - 2);
}

window.searchString = searchString;

export default searchString;
