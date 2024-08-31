import { UserServiceConsumer } from "./4DIP/repository-pattern/consumer.service";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `Hello World`;

new UserServiceConsumer();