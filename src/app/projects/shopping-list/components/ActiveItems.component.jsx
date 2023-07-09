import ItemList from './ItemList.generic';

const ActiveItems = ({ activeItems, handleComplete, handleDelete }) => {
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

// import { Checkbox } from '@mui/material';
// import ClearIcon from '@mui/icons-material/Clear';

// const ActiveItems = ({ activeItems, handleComplete, handleDelete }) => {
//   return (
//     <>
//       <h2 className="text-lg mb-5 font-bold">Active Items</h2>
//       <ul>
//         {activeItems.map((item) => (
//           <li key={item.id}>
//             <span
//               onClick={() => handleComplete(item.id)}
//               className="px-5 py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:bg-slate-300"
//             >
//               <Checkbox
//                 checked={false}
//                 onChange={() => handleComplete(item.id)}
//               />
//               {item.text}
//               <ClearIcon
//                 onClick={() => handleDelete(item.id)}
//                 className="ml-5 cursor-pointer hover:scale-110 transition-all duration-250 hover:border-black hover:border-2 hover:rounded-lg hover:bg-slate-300"
//               />
//             </span>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

export default ActiveItems;
