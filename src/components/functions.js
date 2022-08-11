function InputPropGenerator(
    domClass,
    type,
    placeholder
  ) {
    return {
      domClass: domClass,
      type: type,
      placeholder: placeholder
    };
};

const NewInput = propArr => {

    const {domClass, type, placeholder} = InputPropGenerator(...propArr);
  
    return (
        <input className={domClass} type={type} placeholder={placeholder}></input>
    )
}

function ButtonPropGenerator (
  domClass,
  type, 
  text
  ) {
  return {
    domClass: domClass,
    type: type,
    text: text
  }
}

const NewButton = propArr => {

  const {domClass, type, text} = ButtonPropGenerator(...propArr)

  return (
    <button className={domClass} type={type}>{text}</button>
  )
}


export {NewInput, NewButton};