/**
 * HLM Module should not depend on LLM 
 * Rather they should depend on abstraction
 * Abstraction should not depend on details (LLM)
 * Details (LLM) should depend on Abstraction 
 */

/**
 * Build the consumer first, how you want to consume it
 * That means build HLM first.
 * HLM class e kono implementation thakbe na
 * Only High level details lekha thakbe that
 * Like Interface er konta se accept korbe konta return korbe etc 
 * HLM accept LLM as parameter 
 * LLM will implement the abstraction
 */

/**
 * Consumer can get final value by consuming HLM instance 
 * Consumer Make instance of a particular LLM
 * Then create an Instance of the HLM by putting LLM instance as a paramter 
 * And then consumer get the final value from the HLM instance that was made 
 */