import "./App.css";
import Table from "./Components/UI/Table/Table.tsx";
import Sidebar from "./Components/sidebar.tsx";
import { useState } from "react";
import { values } from "./data/mock-data-table.ts";
import Modal from "./Components/UI/Modal/Modal.tsx";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="container">
      <Sidebar setModalActive={setModalActive} />
      <main className="main">
        <Table data={values} />
      </main>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}

export default App;
