function objectKeysAndProperties(obj){
  for(var key in obj){
    console.log(key + ': ' + obj[key]);
  }
  return;
}

var obj = {
  name: 'Unknown',
  empty: false,
  propertiesInitialLength: 3
}

objectKeysAndProperties(obj);