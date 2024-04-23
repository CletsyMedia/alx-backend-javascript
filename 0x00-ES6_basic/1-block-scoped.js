export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var
  let task2 = true; // Use let instead of var

  if (trueOrFalse) {
    // Remove the var declarations
    task = true; // Update the value without redeclaration
    task2 = false; // Update the value without redeclaration
  }

  return [task, task2];
}

