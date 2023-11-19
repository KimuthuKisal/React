// import { MouseEvent } from "react";

import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup( {items, heading, onSelectItem}: ListGroupProps) {
  //   let selected_index = 1;

  //Hook
  const [selected_index, setSelectedIndex] = useState(-1);

  const getEmpty = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {getEmpty()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selected_index === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
