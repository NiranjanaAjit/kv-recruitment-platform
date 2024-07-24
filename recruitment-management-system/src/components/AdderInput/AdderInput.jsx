import { useEffect, useState } from "react";
import "../AdderInput/AdderInput.scss";

const AdderInput = ({ options, label, handleListChange, value }) => {

  const [selectedOptions, setSelectedOptions] = useState([]);
  useEffect(()=>{
    if(value== undefined){ }
    else{
        console.log(selectedOptions,"before")
        // setSelectedOptions([value])
    console.log(selectedOptions,"saafterr")}
},[value])
  const [count, setCount] = useState(0);
  useEffect(() => {
    handleListChange(selectedOptions.map((option) => option.value));
  }, [selectedOptions]);
  const handleAddOption = (e) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    const selected = selectedOption?.value;
    if (selectedOption && !selectedOptions.includes(selected)) {
      setSelectedOptions((selectedOptions) => [
        ...selectedOptions,
        { id: count + 1, value: selected },
      ]);
      setCount((count) => count + 1);
    }
  };

  const handleRemoveOption = (id) => {
    setSelectedOptions((selectedOptions) =>
      selectedOptions.filter((option) => option.id !== id)
    );
  };
  return (
    <div>
      <select className="adder-input-select" onChange={handleAddOption}>
        <option value="">{label}</option>
        {options?.map((option) => (
          <option key={option?.id} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
      <div className="selected-options-container">
        {selectedOptions.map((option) => (
          <div key={option?.id} className="selected-option">
            {option?.value}
            <span
              className="remove"
              onClick={() => handleRemoveOption(option.id)}
            >
              x
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdderInput;
