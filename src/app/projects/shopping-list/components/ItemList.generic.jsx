import { Checkbox } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const ItemList = ({
  titleText,
  isChecked,
  itemList,
  handleClick,
  handleDelete,
}) => {
  return (
    <>
      <h2 className="text-lg mb-5 ubuntu lowercase">
        {titleText}
      </h2>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>
            <span
              onClick={() => handleClick(item.id)}
              className={`px-5 py-3 rounded-lg transition-all duration-200 ubuntu ${
                isChecked
                  ? 'text-gray-600 line-through italic'
                  : ''
              } hover:scale-105 hover:bg-slate-300`}
            >
              <Checkbox
                checked={isChecked}
                onChange={() => handleClick(item.id)}
              />
              {item.text}
              <ClearIcon
                onClick={() => handleDelete(item.id)}
                className="ml-5 cursor-pointer hover:scale-110 transition-all duration-250 hover:border-black hover:border-2 hover:rounded-lg hover:bg-slate-300"
              />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
