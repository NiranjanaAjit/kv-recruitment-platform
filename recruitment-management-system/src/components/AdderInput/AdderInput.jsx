import { useState } from "react";
import "../AdderInput/AdderInput.scss"

const AdderInput = () => {

    const options = 
        [
            { "id": 1, "value": "Development", "label": "Development" },
            { "id": 2, "value": "Design", "label": "Design" },
            { "id": 3, "value": "Python", "label": "Python" },
            { "id": 4, "value": "JavaScript", "label": "JavaScript" },
            { "id": 5, "value": "Java", "label": "Java" },
            { "id": 6, "value": "React", "label": "React" },
            { "id": 7, "value": "Angular", "label": "Angular" },
            { "id": 8, "value": "Vue.js", "label": "Vue.js" },
            { "id": 9, "value": "Node.js", "label": "Node.js" },
            { "id": 10, "value": "HTML/CSS", "label": "HTML/CSS" },
            { "id": 11, "value": "TypeScript", "label": "TypeScript" },
            { "id": 12, "value": "PHP", "label": "PHP" },
            { "id": 13, "value": "Ruby on Rails", "label": "Ruby on Rails" },
            { "id": 14, "value": "Swift", "label": "Swift" },
            { "id": 15, "value": "Kotlin", "label": "Kotlin" },
            { "id": 16, "value": "C++", "label": "C++" },
            { "id": 17, "value": "C#", "label": "C#" },
            { "id": 18, "value": "SQL", "label": "SQL" },
            { "id": 19, "value": "MongoDB", "label": "MongoDB" },
            { "id": 20, "value": "GraphQL", "label": "GraphQL" },
            { "id": 21, "value": "Docker", "label": "Docker" },
            { "id": 22, "value": "AWS", "label": "AWS" },
            { "id": 23, "value": "Azure", "label": "Azure" },
            { "id": 24, "value": "Google Cloud Platform", "label": "Google Cloud Platform" },
            { "id": 25, "value": "Machine Learning", "label": "Machine Learning" },
            { "id": 26, "value": "Data Science", "label": "Data Science" },
            { "id": 27, "value": "Cybersecurity", "label": "Cybersecurity" },
            { "id": 28, "value": "UX/UI Design", "label": "UX/UI Design" },
            { "id": 29, "value": "Blockchain", "label": "Blockchain" },
            { "id": 30, "value": "DevOps", "label": "DevOps" }
          ]
          ;
    
      const [selectedOptions, setSelectedOptions] = useState([]);
    
      const handleAddOption = (e) => {
        const selectedValue = e.target.value;
        const selectedOption = options.find(option => option.value === selectedValue);
        const selected = selectedOption.value
        if (selectedOption && !selectedOptions.includes(selected)) {
          setSelectedOptions([...selectedOptions, selected]);
        }
      };
    
      const handleRemoveOption = (value) => {
        setSelectedOptions(selectedOptions.filter(option => option !== value));
      };
	return (
		<div>
      <select className="adder-input-select" onChange={handleAddOption}>
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.id} value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className="selected-options-container">
        {selectedOptions.map(option => (
          <div className="selected-option">
            {option}
            <span className="remove" onClick={() => handleRemoveOption(option)}>x</span>
          </div>
        ))}
      </div>
    </div>
	);
};

export default AdderInput;
