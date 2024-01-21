import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function generateOptions(list = []) {
  return list.map((item) => ({value: item, label: item}))
}

export function convertArrayToObject(array) {
  const result = {};

  if(array.length <= 0) return result;

  for(let i=0; i<array[0].length; i++) {
    const key = array[0][i];
    result[key] = [];
  }

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const key = array[0][j];
      result[key].push(array[i][j]);
    }
  }

  return result;
}