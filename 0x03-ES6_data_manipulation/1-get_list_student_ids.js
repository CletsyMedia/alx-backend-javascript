export default function getListStudentIds() {
  if(!Array.isArray(arr)){
    return [];
  }
  return arr.map(student => student.id);
}