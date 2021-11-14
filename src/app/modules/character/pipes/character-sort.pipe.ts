import { Pipe, PipeTransform } from "@angular/core";
import { CharacterSortOption } from "../models/character.model";
import { Character } from "../models/character.model"

@Pipe({
  name: "sort"
})
export class CharacterSortPipe  implements PipeTransform {
  transform(array: any, field: CharacterSortOption): Character[] {
    if (!Array.isArray(array)) {
      return;
    }
    if (!field || field.type === '') {
        return array;
    }

    let sortedArray = [...array];

    if (field.type  === 'gender') {
        const arrayWithGender = sortedArray.filter(item => item.gender === 'male' || item.gender === 'female');
        const arrayWithoutGender = sortedArray.filter(item => item.gender !== 'male' && item.gender !== 'female');
        if (field.sort === 'asc') { 
            arrayWithGender.sort((a, b) => a[field.type] > b[field.type] ? 1 : -1);
        } else if (field.sort === 'desc') {
            arrayWithGender.sort((a, b) => b[field.type] > a[field.type] ? 1 : -1);
        }

        return arrayWithGender.concat(arrayWithoutGender);
    } else if (field.type === 'name') {
        if (field.sort === 'asc') { 
            sortedArray.sort((a, b) => a[field.type] > b[field.type] ? 1 : a[field.type] === b[field.type] ? 0 : -1);
        } else if (field.sort === 'desc') {
            sortedArray.sort((a, b) => b[field.type] > a[field.type] ? 1 : b[field.type] === a[field.type] ? 0 : -1);
        }

        return sortedArray;
    }
  }
}