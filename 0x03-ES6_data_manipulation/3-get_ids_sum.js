// Create a function getStudentIdsSum that returns the sum of all the student ids.
export default function getStudentIdsSum(list) {
  return list.reduce((sum, currValue) => sum + currValue.id, 0);
}
