import { useEffect, useState } from "react";

const ListInput = ({ name, label, handleListChange }) => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [currValue, setCurrValue] = useState("");
  useEffect(() => {
    handleListChange(list.map((item) => item?.value));
  }, [list]);
  const addItem = () => {
    setList((list) => [
      ...list,
      {
        id: count + 1,
        value: currValue,
      },
    ]);
    setCount((count) => count + 1);
    setCurrValue("");
  };
  const removeItem = (id) =>
    setList((list) => list.filter((item) => item?.id !== id));

  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      {list?.map((item) => (
        <div key={item?.id} className="list-item">
          <div className="content">
            <p>{item?.value}</p>
          </div>
          <p className="list-item-close" onClick={() => removeItem(item.id)}>
            x
          </p>
        </div>
      ))}
      <div className="list-input-wrapper">
        <textarea
          className=""
          name={name}
          placeholder={label}
          onChange={(e) => setCurrValue(e.target.value)}
          value={currValue || ""}
        />
        <p className="plus-icon" onClick={addItem}>
          +
        </p>
      </div>
    </div>
  );
};

export default ListInput;
