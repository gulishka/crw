import React from 'react';
import '../App.css'

interface SidebarProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar:React.FC<SidebarProps> = ({setModalActive}) => {
  return (
    <aside className="aside">
      <h2 className="aside__heading">Форма поиска<br/>рецептов</h2>
      <div className="aside__block">
        <button className="aside__button btn-reset" onClick={()=>setModalActive(true)}>Обжарщик</button>
        <button className="aside__button btn-reset" onClick={()=>setModalActive(true)}>Название зерна</button>
        <button className="aside__button btn-reset" onClick={()=>setModalActive(true)}>Способ приготовления</button>
        <button className="aside__button btn-reset" onClick={()=>setModalActive(true)}>Кофемолка</button>
        <button className="aside__button btn-reset" onClick={()=>setModalActive(true)}>Кофемашина</button>
        <button className="aside__button aside__last-button btn-reset" onClick={()=>setModalActive(true)}>Найти рецепт</button>
      </div>
    </aside>
  );
};

export default Sidebar;