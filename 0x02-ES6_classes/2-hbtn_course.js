class HolbertonCourse {
  constructor(name, length, students) {
      this._name = typeof name === 'string' ? name : (() => { throw new TypeError("Name must be a string") })();
      this._length = typeof length === 'number' ? length : (() => { throw new TypeError("Length must be a number") })();
      this._students = Array.isArray(students) ? students : (() => { throw new TypeError("Students must be an array of strings") })();   
  }

  get name() {
      return this._name;
  }

  set name(newName) {
      if (typeof newName !== 'string') {
          throw new TypeError("Name must be a string");
      }
      this._name = newName;
  }

  get length() {
      return this._length;
  }

  set length(newLength) {
      if (typeof newLength !== 'number') {
          throw new TypeError("Length must be a number");
      }
      this._length = newLength;
  }

  get students() {
      return this._students;
  }

  set students(newStudents) {
      if (!Array.isArray(newStudents) || !newStudents.every(student => typeof student === 'string')) {
          throw new TypeError("Students must be an array of strings");
      }
      this._students = newStudents;
  }
}

export default HolbertonCourse;
