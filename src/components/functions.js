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

    const props = InputPropGenerator(...propArr);
    

    return (
        <input
        className={props.domClass}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        ></input>
    )
}


export default NewInput;