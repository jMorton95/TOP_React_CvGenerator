import {v4 as uuidv4} from 'uuid';

function PropGenerator(
    domClass,
    type,
    value,
    key
  ) {
    return {
      domClass: domClass,
      type: type,
      value: value,
      key: key
    };
};

const NewInput = propArr => {

    const {domClass, type, value, key} = PropGenerator(...propArr, uuidv4());
      
    return (
        <input className={domClass} type={type} placeholder={value} key={key}></input>
    )
}

const NewButton = propArr => {

  const {domClass, type, value, key} = PropGenerator(...propArr, uuidv4());

  return (
    <button className={domClass} type={type}>{value}</button>
  )
}


export {NewInput, NewButton};