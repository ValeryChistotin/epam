function typeCheck(element){
  switch(typeof element){
    case 'number': {
      console.log('it is number');
      break;
    }
    case 'string': {
      console.log('it is string');
      break;
    }
    default: {
      console.log('it is neither number nor string');
    }
  }
}

typeCheck('1');
