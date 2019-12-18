import { initialData, initialDataSetTwo, initialDataSetThree } from "./data";

const allCount = () => {
  let dataCountOne = 0;
  let dataCountTwo = 0;
  let dataCountThree = 0;

  initialData.map(item => {
    dataCountOne += 1;
  });

  initialDataSetTwo.map(item => {
    dataCountTwo += 1;
  });

  initialDataSetThree.map(item => {
    dataCountThree += 1;
  });

  const total = dataCountOne + dataCountTwo + dataCountThree;
  return total;
};

export default allCount;
