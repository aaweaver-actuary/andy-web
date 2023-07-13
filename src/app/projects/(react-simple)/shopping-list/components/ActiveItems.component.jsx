import ItemList from './ItemList.generic';

const ActiveItems = ({
  activeItems,
  handleComplete,
  handleDelete,
}) => {
  return (
    <ItemList
      titleText="Active Items"
      isChecked={false}
      itemList={activeItems}
      handleClick={handleComplete}
      handleDelete={handleDelete}
    />
  );
};

export default ActiveItems;
