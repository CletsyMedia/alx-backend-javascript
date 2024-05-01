// function getStudentsByLocation that returns an array of objects
export default function getStudentsByLocation(list, city) {
  return list.filter((obj) => obj.location === city);
}
