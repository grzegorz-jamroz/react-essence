import { removeFixtures, setUpFixtures } from "./utilities";

const init = async () => {
  await removeFixtures();
  await setUpFixtures();
};

init();
