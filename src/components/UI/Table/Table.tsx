import React from "react";
import EyeIcon from "../../Icons/EyeIcon/EyeIcon";
import { IRecipes } from "../../../data/mock-data-table";
import "../../../App.css";

interface ITableProps {
  data: IRecipes;
}

const Table: React.FC<ITableProps> = ({ data: { recipes } }) => {
  return (
    <>
      <ul className="main__list main__list-1 list-reset">
        <li className="main__th main__th-1">#</li>
        <li className="main__th main__th-2">Обжарщик</li>
        <li className="main__th main__th-3">Название зерна</li>
        <li className="main__th main__th-4">Способ приготовления</li>
        <li className="main__th main__th-5">Кофемолка</li>
        <li className="main__th main__th-6">Кофемашина</li>
      </ul>
      {recipes.map((item) => (
        <ul className="main__list main__list-2 list-reset">
          <li className="main__td main__td-1">{item.id}</li>
          <li className="main__td main__td-2">{item.roaster.name}</li>
          <li className="main__td main__td-3">{item.coffeeBeen.name}</li>
          <li className="main__td main__td-4">{item.description}</li>
          <li className="main__td main__td-5">
            <EyeIcon />
          </li>
        </ul>
      ))}
    </>
  );
};

export default Table;
