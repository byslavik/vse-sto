export const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const getCook = cookiename => {
  var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
  
  return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}

export const getToken = cook => {
  if (cook) {
    var parted = cook.split(' ');
    if (parted.length === 2 && parted[0] === 'JWT') {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
};