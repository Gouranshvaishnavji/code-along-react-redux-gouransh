import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAction, listSelector, toggleDataAction } from '../redux/reducer'; // Import toggleDataAction

const Main = () => {
  const dispatch = useDispatch();
  const list = useSelector(listSelector);
  const [dataVisible, setDataVisible] = useState(true); // State for data visibility

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const toggleData = () => {
    setDataVisible(!dataVisible); // Toggle data visibility state
    dispatch(toggleDataAction(dataVisible)); // Dispatch action to update data visibility in redux (if necessary)
  };

  return (
    <div className="listContainer">
      <button onClick={toggleData}>{dataVisible ? 'Hide Data' : 'Show Data'}</button>
      {dataVisible && ( // Conditionally render data if visible
        <div>
          {list.map((item, index) => (
            <div className="listItem" key={index}>
              <p className="name">{item.name}</p>
              <p className="email">{item.email}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
