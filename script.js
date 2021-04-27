let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];

//function to delete data
function deleteData() {
  activities.pop();
  console.log(activities);
}

// deleteData();

//function to add data
function addData(row, msg) {
  activities.splice(row, 0, msg);
  console.log(activities);
}

// addData(4, ["dance", 9]);

//function to update data
function updateData(row, msg) {
  activities[row] = msg;
  console.log(activities);
}
// updateData(0, ["eating", 1]);
