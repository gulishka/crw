import React from 'react';

const Sidebar = () => {
  return (
    <aside style={{backgroundColor: 'black'}}>
      <h2>Форма поиска рецептов</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem',}}>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <button style={{backgroundColor: 'yellow', color: 'black'}}>Найти рецепт</button>
      </div>

    </aside>
  );
};

export default Sidebar;