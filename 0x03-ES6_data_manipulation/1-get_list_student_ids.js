export default function getListStudentIds() {
  if (Array.isArray(arr)) {
    return arr.map(student => student.id);
  }
  return [];
}