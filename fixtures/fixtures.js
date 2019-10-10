const process = require('process');
import { removeFixtures, setUpFixtures } from "./utilities";

export const init = async () => {
  await removeFixtures();
  await setUpFixtures();
};

init().then(
  result => {
    console.log("Fixtures has been successfully saved.");
    process.exit();
  },
  reason => {
    console.error(reason);
    process.exit(1);
  },
);
