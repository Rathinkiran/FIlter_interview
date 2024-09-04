import { useState } from "react";

export function NestedDropdown(){

const[isParentOpen,setIsParentOpen] = useState(false);
  const[activeNested,setactiveNested] = useState(null);

  const toggleParentDropdown =()=>{
    setIsParentOpen(isParentOpen);
    setactiveNested(null);
  };

  const toggleNestedDropdown = (index) => {
    setactiveNested(activeNested === index ? null : index);


    return (
        <div className='dropdown'>
      <button onClick={toggleParentDropdown}>Refine by</button>
      {isParentOpen && (
        <ul className='dropdown-menu'>
          <li>
            <button onClick={toggleNestedDropdown(1)}>Date of Registration</button>
            {activeNested === 1 && (
              <ul className='nested-dropdown'>
                <li>option A</li>
                <li>option B</li>

              </ul>
            )}
            
          </li>
          <li>
            <button onClick={()=>{
              toggleNestedDropdown(2)
            }}>Vendor score</button>
            {activeNested === 2 && (
              <ul className='nested-dropdown'>
                <li>Option A</li>
                <li>Option B</li>
              </ul>
                
            )}
          </li>

        </ul>
      )}

    </div>
    )
  };
}