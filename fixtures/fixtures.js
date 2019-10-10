const process = require('process');
import { removeFixtures, setUpFixtures } from "./utilities";

export const init = async () => {
  await removeFixtures();
  await setUpFixtures();
  process.exit();
};

init();
