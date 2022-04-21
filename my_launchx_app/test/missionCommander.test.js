//Importamos la clase
const MissionCommander = require("./../app/missionCommander");

describe("Unit Test dor Mission Commande Class", () => {
  test("1) Create a mission commander objet", () => {
    const myMissionComamnder = new MissionCommander("Woopa");
    expect(myMissionComamnder.name).toBe("Woopa");
  });
});
