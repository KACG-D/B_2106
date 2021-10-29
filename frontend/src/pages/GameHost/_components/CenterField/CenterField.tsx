import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { KazeType } from "../../../../_type";
import "./CenterField.scss";
import {
  selectCenterFieldState,
  setCenterFieldState,
} from "./CenterFieldSlice";
import { DirectionType } from "../../../../_type";
import classNames from "classnames";
import Hougaku from "../../../../_components/Hougaku/Hougaku";

interface Props {
  styles?: any;
}

const CenterField: React.FC<Props> = (props) => {
  const centerFieldState = useSelector(selectCenterFieldState);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("CenterField: useEffect");
    dispatch(
      setCenterFieldState({
        oya: 0,
        player: [
          { score: 21000 },
          { score: 27000 },
          { score: 16000 },
          { score: 18000 },
        ],
        turnPlayer: 1,
        riichiPlayer: 3,
      })
    );
  }, []);

  interface Fields {
    score: ReactElement[];
    kaze: ReactElement[];
  }

  const fields: Fields = {
    score: [],
    kaze: [],
  };

  for (let i = 0; i < 4; i++) {
    let direction: DirectionType = "up";
    let hougakuDirection: DirectionType = "down";

    if (i == 1) {
      direction = "left";
      hougakuDirection = "right";
    } else if (i == 2) {
      direction = "down";
      hougakuDirection = "up";
    } else if (i == 3) {
      direction = "right";
      hougakuDirection = "left";
    }

    fields.score.push(
      <button
        key={i}
        onClick={() => {
          console.log(`Riichi!!: Player ${i}`);
        }}
        className={classNames(
          "center-field__contents__score",
          `center-field__contents__score--${direction}`
        )}
      >
        <span>{centerFieldState.player[i].score}</span>
      </button>
    );

    fields.kaze.push(
      <div
        key={i}
        className={classNames(
          "center-field__contents__kaze",
          `center-field__contents__kaze--${direction}`
        )}
      >
        <Hougaku
          text={getKazeName(i, centerFieldState.oya)}
          isLighting={i == centerFieldState.turnPlayer}
          direction={hougakuDirection}
          device="host"
        />
      </div>
    );
  }

  const centerField = (
    <div className="center-field" style={props.styles}>
      <div className="center-field__contens">
        <button className="center-field__contents__tsumo-button">ツモ</button>
        {fields.score}
        {fields.kaze}
      </div>
    </div>
  );

  return centerField;
};

export default CenterField;

function getKazeName(kazenum: number, oya: number): KazeType {
  if (kazenum - oya < 0) {
    kazenum += 4;
  }

  switch (kazenum - oya) {
    case 0:
      return "東";
    case 1:
      return "南";
    case 2:
      return "西";
    case 3:
      return "北";
    default:
      throw new Error("invalid kaze number");
  }
}