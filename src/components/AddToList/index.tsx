import { useState } from "react";
import { IState as Props } from "../../App";

interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note
      }
    ]);

    setInput({
      name: "",
      age: "",
      url: "",
      note: ""
    });
  }

  return (
    <div className="AddToList">
      <input type="text" value={input.name} name="name" onChange={handleChange} className="AddToList-input" placeholder="Name" />
      <input type="text" value={input.age} name="age" onChange={handleChange} className="AddToList-input" placeholder="Age" />
      <input type="text" value={input.url} name="url" onChange={handleChange} className="AddToList-input" placeholder="Image Url" />
      <textarea name="note" value={input.note} onChange={handleChange} className="AddToList-input" placeholder="Notes" />
      <button className="AddToList-btn" onClick={handleClick}>Add to the List</button>
    </div>
  );
}

export default AddToList;