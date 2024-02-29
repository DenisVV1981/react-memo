import { useEffect, useState } from "react";
import { getLeadersList } from "../../api";
import style from "./LeaderBoard.module.css";

export function LeaderBoard() {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    getLeadersList().then(data => {
      setRating(data.leaders);
    });
  }, []);
  return (
    <div className={style.board}>
      <div className={style.board_header}>
        <div className={style.position}>Позиция</div>
        <div className={style.name}>Пользователь</div>
        <div className={style.time}>Время</div>
      </div>
      {rating.map(element => {
        return (
          <div id={element.id}>
            <div className={style.board_item}>
              <div className={style.position}>{element.id}</div>
              <div className={style.name}>{element.name}</div>
              <div className={style.time}>
                {Math.floor(element.time / 60)
                  .toString()
                  .padStart(2, "0") +
                  ":" +
                  (element.time % 60).toString().padStart(2, "0")}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
