const pressed = [];
const secretCode = 'deanna';

window.addEventListener('keyup', (event) => {
  // Add the pressed key to the array
  pressed.push(event.key);
  
  // Keep the array length in check by removing old keys that are no longer part of the sequence
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  
  // Check if the current pressed keys contain the secret code
  if (pressed.join('').includes(secretCode)) {
    // If the secret code is matched, trigger the cornify (fun effect)
    cornify_add();
  }
});