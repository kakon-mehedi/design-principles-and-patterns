import { UserService } from "./hlm-user.service";
import { ApiUserDataService, InMemoryUserDataService } from "./llm-user-data.service";

export class UserServiceConsumer {
    // LLM
    inMemoryUserDataInstance = new InMemoryUserDataService();

    // LLM 
    apiUserDataInstance = new ApiUserDataService(); 

    // HLM which accepts LLM instace as a parameter
    userInMemory = new UserService(this.inMemoryUserDataInstance); 
    userInDb = new UserService(this.apiUserDataInstance);

    constructor() {
        this.printValues();
    }

    async printValues() {
        console.log(await this.userInMemory.getUsers());
        console.log(await this.userInMemory.getUser('1'));

        console.log('USER IN DB')

        console.log(await this.userInDb.getUsers());
        console.log(await this.userInDb.getUser('1'));
    }
}