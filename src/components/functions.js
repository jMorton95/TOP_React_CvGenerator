function InputPropGenerator(
    domClass = "error",
    type = "text",
    placeholder = "",
    defaultValue = ""
  ) {
    return {
      domClass: domClass,
      type: type,
      placeholder: placeholder,
      defaultValue: defaultValue,
    };
};


        

const NewInput = (propArr) => {

    const {domClass, type, placeholder, defaultValue} = InputPropGenerator(...propArr);
    

    return (
        <input
        className={domClass}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        ></input>
    )
}


export default NewInput;