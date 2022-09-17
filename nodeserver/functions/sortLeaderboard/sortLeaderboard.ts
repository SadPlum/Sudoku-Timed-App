// Takes in array of objects composed of a name and time ex:[
//   { name: "abc", time: "6.57" },
//   { name: "def", time: "5.09" },
//   { name: "ghi", time: "3.32" },
//   { name: "jkl", time: "4.00" },
//   { name: "mno", time: "1.04" },
//   { name: "pqr", time: "6.40" },
// ],
// And returns array sorted in ascnending order based on time.

interface Entries {
  name: string;
  time: string;
}

export const sortLeaderboard = (array: Entries[]) => {
  // Set array to manipulate
  let newArray = array;
  // Sort array based on number value of the time string in ascending order
  newArray.sort((a, b) => {
    return Number(a.time) - Number(b.time);
  });
  // Returns newly sorted array
  return newArray;
};
