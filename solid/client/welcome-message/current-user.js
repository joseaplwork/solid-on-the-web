import { parseFirstName } from './name-parser.js';
import { getNameInputValue } from './welcome-view.js';

// View change -- Designers, PM, Developers
function getFullName() {
  return getNameInputValue();
}

export function getFirstName() {
  return parseFirstName(getFullName());
}