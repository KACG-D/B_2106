import React from "react";
import { BigButton } from "./_components/BigButton";
import { Header } from "../../_components/Header";
import "./index.scss";
type Prop = {};
export const Top: React.FC<Prop> = () => {
  return (
    <div className="top">
      <div className="top__header">
        <Header text="どこでも麻雀卓" />
      </div>
      <div className="top__container">
        <BigButton text="ルームをつくる" to="/room_host" />
        <BigButton text="ルームにはいる" to="/enter_room_client" />
      </div>
    </div>
  );
};