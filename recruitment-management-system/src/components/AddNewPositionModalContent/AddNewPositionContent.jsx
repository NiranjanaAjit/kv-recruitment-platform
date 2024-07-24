import { useState } from "react";
import { useAddPositionMutation } from "../../api/positionApi";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const AddNewPositionContent = ({ modalClose }) => {
    const [position, setPosition] = useState("");
    const [addPosition] = useAddPositionMutation();
  
    const handleFieldChange = (e) => {
      setPosition(e.target.value);
    };
    const addNewPositionSubmit = () => {
      addPosition({ name: position });
      modalClose(false);
    };
  
    return (
      <div className="add-new-position-container">
        <FormInput
          label={"Enter new position"}
          value={position}
          handleChange={handleFieldChange}
        />
        <Button
          text="Add"
          className={"add-new-position-button"}
          handleSubmit={addNewPositionSubmit}
        />
      </div>
    );
  };

  export default AddNewPositionContent