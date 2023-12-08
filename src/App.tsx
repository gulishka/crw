import "./App.css";
import Sidebar from "./components/sidebar.tsx";
import { useState } from "react";
// import styles from "./components/modal.tsx";
import Modal from "./components/modal.tsx";

function App() {
  const values = {
    recepies: [
      {
        id: "9a5e9d45-8020-4987-b49c-bef64838a309",
        createdAt: "2023-10-14T19:26:01.000000Z",
        updatedAt: "2023-10-14T19:26:01.000000Z",
        description:
          "Quod facere illo dolor et cum maiores. Qui saepe omnis velit culpa quisquam. Repudiandae nulla vel voluptatem consequatur atque quo suscipit. Quidem explicabo saepe sit.",
        sourceCoffeeWeight: 15,
        beverageWeight: 34,
        brewRatio: 2.2666666666667,
        roaster: {
          id: "9a5e9d45-74b2-4afd-8bc6-3aa98e773091",
          name: "roaster 1",
        },
        coffeeBeen: {
          id: "9a5e9d45-74b2-4afd-8bc6-3aa98e773091",
          name: "coffeeBeen 1",
        },
        coffeeMakingMethod: {
          id: "9a5e9d45-74b2-4afd-8bc6-3aa98e773091",
          name: "coffeeMakingMethod 1",
        },
        coffeeMachineBrand: {
          id: "9a5e9d45-74b2-4afd-8bc6-3aa98e773091",
          name: "coffeeMachineBrand 1",
        },
        coffeeGrinderBrand: {
          id: "9a5e9d45-74b2-4afd-8bc6-3aa98e773091",
          name: "coffeeGrinderBrand 1",
        },
      },
    ],
  };

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="container">
      <Sidebar setModalActive={setModalActive} />
      <main className="main">
        <ul className="main__list main__list-1 list-reset">
          <li className="main__th main__th-1">#</li>
          <li className="main__th main__th-2">Обжарщик</li>
          <li className="main__th main__th-3">Название зерна</li>
          <li className="main__th main__th-4">Способ приготовления</li>
          <li className="main__th main__th-5">Кофемолка</li>
          <li className="main__th main__th-6">Кофемашина</li>
        </ul>
        {values.recepies.map((item) => (
          <ul className="main__list main__list-2 list-reset">
            <li className="main__td main__td-1">{item.id}</li>
            <li className="main__td main__td-2">{item.roaster.name}</li>
            <li className="main__td main__td-3">{item.coffeeBeen.name}</li>
            <li className="main__td main__td-4">{item.description}</li>
            <li className="main__td main__td-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 12C24 12 19.5 3.75 12 3.75C4.5 3.75 0 12 0 12C0 12 4.5 20.25 12 20.25C19.5 20.25 24 12 24 12ZM1.7595 12C2.48478 13.1023 3.31897 14.129 4.2495 15.0645C6.18 16.998 8.82 18.75 12 18.75C15.18 18.75 17.8185 16.998 19.752 15.0645C20.6825 14.129 21.5167 13.1023 22.242 12C21.5167 10.8977 20.6825 9.87103 19.752 8.9355C17.8185 7.002 15.1785 5.25 12 5.25C8.82 5.25 6.1815 7.002 4.248 8.9355C3.31746 9.87103 2.48327 10.8977 1.758 12H1.7595Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25ZM6.75 12C6.75 10.6076 7.30312 9.27226 8.28769 8.28769C9.27226 7.30312 10.6076 6.75 12 6.75C13.3924 6.75 14.7277 7.30312 15.7123 8.28769C16.6969 9.27226 17.25 10.6076 17.25 12C17.25 13.3924 16.6969 14.7277 15.7123 15.7123C14.7277 16.6969 13.3924 17.25 12 17.25C10.6076 17.25 9.27226 16.6969 8.28769 15.7123C7.30312 14.7277 6.75 13.3924 6.75 12Z"
                  fill="black"
                />
              </svg>
            </li>
          </ul>
        ))}
      </main>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
