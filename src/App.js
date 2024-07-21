import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGE from "./view/constants.js";

class App {
  async play() {
    await this.getCarsName();
  }
  //실행
  async getCarsName() {
    const carsName = await Console.readLineAsync(MESSAGE.CAR_NAME_PROMPT);
    const carNameList = this.validateCarName(carsName);
    this.runGame(carNameList);
  }
}
export default App;
