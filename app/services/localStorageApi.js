/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export const loadItem = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveItem = (key, value) => {
  try {
    console.log("inside save key : ",key, " and value:",value);
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    // Ignoring write error as of now
  }
};

export const clearItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};


