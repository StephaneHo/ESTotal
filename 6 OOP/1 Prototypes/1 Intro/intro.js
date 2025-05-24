// almost every JS has a second objectg associated with it: the protoptype pbject
// and it borrows properties from this object

// if this all the objects need the same method, ideal is to place it on the prototype

// ex: objects with a firstname and a lastame, and a method fullName that concatenates the fisrt name and last name

// the JS Engine first to look for the fullName method on the object, and if it does not find it, il will look on the object prototype

// there are situations where we have a situation when we do not have a prototpye, but we have to force it
