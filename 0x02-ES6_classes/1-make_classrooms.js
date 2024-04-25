import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const clsA = new ClassRoom(19);
  const clsB = new ClassRoom(20);
  const clsC = new ClassRoom(34);
  const newCls = [clsA, clsB, clsC];
  return (newCls);
}
