// we can have empty objects or empty lists

var list6 = []
var obj6 = {}

// calling these would return undefined, but sometimes we want something else

// don't really know why yet tbh, but can also call the null datatype 

var nullObj6 = null;

// calling this returns 'null'

// with an empty object, you can add things to it: 

obj6.name = 'david'; 

// but you can't add things to a null 

nullObj6.name = 'david';

// returns error, cannot set property 'name' of null

