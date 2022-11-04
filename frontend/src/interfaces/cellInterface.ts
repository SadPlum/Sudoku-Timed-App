export interface CellInterface {
  playNumber: number;
  index: number;
  highlighted: boolean;
  playBoard: number[];
  lockedNumber: number;
  gameNumber: number;
  changeCellNum: Function;
  setActiveCell: Function;
  wrongCheck?: boolean;
  boardRef: any;
}
