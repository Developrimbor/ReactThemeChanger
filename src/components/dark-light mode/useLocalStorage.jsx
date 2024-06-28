import {useEffect, useState} from 'react'

function LocalStorage(key, defaultvalue){ // key => local storage, defaultValue => represents the default value
  
    const [value, setValue] = useState(() => {
      let currentValue;
      
      try {
        currentValue = JSON.parse(localStorage.getItem(key) || String(defaultvalue)) // if key is null use the defaultValue | value converted to a JS object

      }catch(error){
        console.log(error);
        currentValue = defaultvalue
      }
      return currentValue;

    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value]);

    return [value, setValue ];
}
export default LocalStorage
