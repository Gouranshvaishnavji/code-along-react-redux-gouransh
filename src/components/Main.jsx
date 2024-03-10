import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {listAction, listSelector} from '../redux/reducer'
import { fetchUser } from '../redux/reducer';

const Main = () => {

    const dispatch = useDispatch();

    const list = useSelector(listSelector);

    useEffect(() => {
    dispatch(fetchUser());
    }, []);

  return (
    <div className="listContainer">
    {list.map((item, index) => {
        return (
        <div className="listItem" key={index}>
            <p className="name">{item.name}</p>
            <p className="email">{item.email}</p>
            <hr />
        </div>
        );
    })}
    </div>

  )
}
export default Main;