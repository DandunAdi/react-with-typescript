import React from "react";
import { IState as IProps } from "../../App";

const List: React.FC<IProps> = ({ people }) => {
  
  const renderList = (): JSX.Element[] => (
    people.map(person => (
      <li className="List" key={person.name}>
        <div className="List-header">
          <img src={person.url} alt="" className="List-img" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years of age</p>
        <p className="List-note">{person.note}</p>
      </li>
    ))
  )

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List;