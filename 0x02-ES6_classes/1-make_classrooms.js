// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom';

// Implement the initializeRooms function
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
