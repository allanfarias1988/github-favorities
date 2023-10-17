import userAdd from "./userAdd.js";
import { setupUserRemovalListeners } from "./userRemove.js";

export function updateTable(user) {
  userAdd(user);
  setupUserRemovalListeners();
}
