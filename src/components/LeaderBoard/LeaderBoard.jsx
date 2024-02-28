import style from "./LeaderBoard.module.css";

export function LeaderBoard() {
  return (
    <div className={style.board}>
      <div className={style.board_header}>
        <div className={style.position}>Позиция</div>
        <div className={style.name}>Пользователь</div>
        <div className={style.time}>Время</div>
      </div>

      <div>
        <div className={style.board_item}>
          <div className={style.position}>12</div>
          <div className={style.name}>jhg</div>
          <div className={style.time}>99:99</div>
        </div>
      </div>

      <div>
        <div className={style.board_item}>
          <div className={style.position}>999 888 777</div>
          <div className={style.name}>poij,ijmujm0u7</div>
          <div className={style.time}>0:30</div>
        </div>
      </div>
    </div>
  );
}
