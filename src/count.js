import { initialData, initialDataSetTwo, initialDataSetThree } from "./data";

// import the data

const allCount = () => {
  let dataCountOne = 0;
  let dataCountTwo = 0;
  let dataCountThree = 0;

  // for every item inside of each data set
  // add to the count
  initialData.map(item => {
    dataCountOne += 1;
  });

  initialDataSetTwo.map(item => {
    dataCountTwo += 1;
  });

  initialDataSetThree.map(item => {
    dataCountThree += 1;
  });

  // add up all the counts
  const total = dataCountOne + dataCountTwo + dataCountThree;
  // return a total
  return total;
};

export default allCount;
