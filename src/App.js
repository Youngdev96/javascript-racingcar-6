import { Console, Random } from "@woowacourse/mission-utils";
import MESSAGE from "./view/constants.js";
import CONDITIONS from "./view/Conditions.js";

class App {
  async play() {
    await this.getCarsName();
  }

  async getCarsName() {
    const carsName = await Console.readLineAsync(MESSAGE.CAR_NAME_PROMPT);
    const carNameList = this.validateCarName(carsName);
    this.runGame(carNameList);
  }

  validateCarName(carsName) {
    if (!carsName.includes(",")) {
      throw new Error(MESSAGE.ERROR_MESSAGE);
    }

    const carNameList = carsName.split(",");
    for (let car of carNameList) {
      if (car.length > CONDITIONS.CAR_NAME_LENGTH) {
        throw new Error(MESSAGE.ERROR_MESSAGE);
      }
    }
    return carNameList;
  }
}
export default App;
