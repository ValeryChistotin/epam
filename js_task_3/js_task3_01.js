var emptyObject = {};

emptyObject.name = 'Empty object';
emptyObject.propertiesInitialLength = 0;
emptyObject.propertyToDelete = true;

console.log(emptyObject);
delete emptyObject.propertyToDelete;
console.log(emptyObject);