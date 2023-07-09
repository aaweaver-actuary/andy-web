import ItemList from './ItemList.generic';

const CompletedItems = ({ completedItems, handleUncheck, handleDelete }) => {
  return (
    <ItemList
      titleText="Completed Items"
      isChecked={true}
      itemList={completedItems}
      handleClick={handleUncheck}
      handleDelete={handleDelete}
    />
  );
};

// import { Checkbox, TextField } from '@mui/material';
// import ClearIcon from '@mui/icons-material/Clear';
// import { TextSnippet } from '@mui/icons-material';

// const CompletedItems = ({ completedItems, handleUncheck, handleDelete }) => {
//   return (
//     <>
//       <h2 className="text-lg mb-5 font-bold">Completed Items</h2>
//       <ul>
//         {completedItems.map((item) => (
//           <li
//             key={item.id}
//             className=" text-gray-600 line-through italic flex flex-col"
//           >
//             <span className="border-slate-600 flex flex-row px-5 py-3 rounded-lg  transition-all duration-200 hover:scale-105 hover:bg-slate-300">
//               <Checkbox
//                 checked={true}
//                 onChange={() => handleUncheck(item.id)}
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

export default CompletedItems;
