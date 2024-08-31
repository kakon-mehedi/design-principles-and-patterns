/**
 * Class should get it's dependency from outside rather than creating them by self
 */

/**
 * So we will have a root injector class 
 * Which will be responsible to make all the instances 
 * When any class has any dependency
 * That class will ask that root class to resolve its dependecy 
 * That's how we can inject dependency from outside 
 */