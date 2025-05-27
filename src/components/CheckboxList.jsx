import React, { useState } from 'react';

const CheckboxList = ({ items }) => {

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheck = (id) =>{
    setCheckedItems(prev=> prev.includes(id)?prev.filter(item=>item !== id) : [...prev,id]);
  };

  const handleSelectAll = () => {
    if (checkedItems.length === items.length) {
      setCheckedItems([]);
    }
    else {
      setCheckedItems(items.map(item => item.id))
    }
  };
  const isAllSelected = items.length > 0 && checkedItems.length === items.length;

  return (
    <div>
      <input type="checkbox" onChange={handleSelectAll} 
      // value="Select All" 
      checked={isAllSelected} />
      <label>Select All</label>

      <ul>
{items.map(({id,name})=>(
  <li key={id} >
    <input 
    // value = {name} 
    type="checkbox" checked={checkedItems.includes(id)} onChange={()=>handleCheck} />
  <label>{name}</label>
  </li>
))}
      </ul>
    </div>
  )

}

export default CheckboxList;