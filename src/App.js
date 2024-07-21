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

  async runGame(carNameList) {
    const gameRounds = await Console.readLineAsync(MESSAGE.GAME_ROUND_PROMPT);
    const carList = carNameList.map((name) => ({
      carName: name,
      distance: "",
      ranking: 0,
    }));
    for (let round = 0; round < gameRounds; round++) {
      this.moveCar(carList);
      this.resultView(carList);
    }
    this.checkRank(carList);
    this.winnerView(carList);
  }

  moveCar(carList) {
    carList.forEach((car) => {
      let number = Random.pickNumberInRange(0, 9);
      if (number >= CONDITIONS.DISTANCE_INCREASE_CRITERIA) {
        car.distance += "-";
      }
    });
  }
  
  resultView(carList) {
    carList.forEach((car) => {
      Console.print(`${car.carName} : ${car.distance}`);
    });
    Console.print("");
  }

}
export default App;
