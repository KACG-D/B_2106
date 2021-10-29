import React from "react";
import "./index.scss";
import Table from "./_components/Table/Table";

const GameHost: React.FC = () => {
  return (
    <div className="game-host">
      <Table />
      {/* <Sidebar /> */}
    </div>
  );
};

export default GameHost;
