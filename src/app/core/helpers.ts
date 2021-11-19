import { SortBy } from "../store/characters.actions";

export function sort(list: [], field: string) {
  const sortedList = [...list];

  sortedList.sort((a: any, b: any) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  });

  return sortedList;
}

export function sortListBy(array: any, sortBy: SortBy): any {
  switch (sortBy) {
    case "A-Z":
      return sort(array, "name");
    case "Z-A":
      return sort(array, "name").reverse();
    case "Male":
      return sort(array, "gender").reverse();
    case "Female":
      return sort(array, "gender");
  }
}
