type ListPropsTypes<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends string | number | []>({
  items,
  onClick,
}: ListPropsTypes<T>) => {
  return (
    <div>
      <h2>List</h2>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default List;
