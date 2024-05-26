import React, {useState} from 'react'
import Menu from './MenuApi.js'
import "./style.css";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((currEle) => {
  return currEle.category;
})), "All"];

console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);


  const filterItem = (category) => {
    
    if(category == "All") {
      setMenuData(Menu);
      return;
    }
    
    const updatedList = Menu.filter((currEle) => {
      return currEle.category === category;
    })
    setMenuData(updatedList);
  };


  return (
    <div>
      
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </div>
  );
};

export default Restaurant