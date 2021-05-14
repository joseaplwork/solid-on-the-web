import { getFirstName } from "./current-user.js";

// UI/View -- Designers. Copywriting
export function welcomeMessage() {
  const name = getFirstName();

  return `Welcome ${name}!`;
}