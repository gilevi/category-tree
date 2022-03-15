import { removeValue, writeData, updateValue } from "./firebaseServices"


export function addCategoryToFb(path,value){
    writeData(path,value);
  }

export function deleteCategoryFromFb(path){
    removeValue(path);
  }

export function updateCategoryInFb(path,obj){
    updateValue(path,obj);
}