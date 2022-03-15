import { database } from './firebase';
import { ref, onValue, update, remove, set } from "firebase/database";

function getDataRef(path=''){
  return ref(database, `/data${path}`)
}

export function getValue(func){
  onValue(getDataRef(), (snapshot) => {
    const realtimeData = snapshot.val();
    func(realtimeData);
  }, (errorObject)=> {
  });

}
export function updateValue(path, obj) {
  let updates={};
  updates[path] = obj;
  update(getDataRef(), updates)
  .then(() => {
  })
  .catch((error) => {
  });
}

export function removeValue(path) {

  remove(getDataRef(path))
  .then(() => {
  })
  .catch((error) => {
  });
}

export function writeData(path,newObj){
  let obj = {}
  onValue(getDataRef(path), (snapshot) => {
    const data = snapshot.val();
    if(data !== null){
      let size = data.subCategory == null ? 0: data.subCategory.length; 
      obj.key=`${data.key}-${size}`;
      obj.label = newObj;
      path += `/subCategory/${size}`;
      if(!data.subCategory){
        data.subCategory = [obj];
      }
      else{
        data.subCategory.push(obj)
      }
    }
    else{
      obj = newObj
    }
  });
    set(getDataRef(path), obj).then().catch()
 }