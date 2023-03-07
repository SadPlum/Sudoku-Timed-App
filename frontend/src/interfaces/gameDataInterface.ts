export interface GameDataInterface {
  gameBoard: number[][];
  playBoard: number[][];
  _id: string | undefined;
  minutes: number;
  seconds: number;
  timeDisplay: string;
  difficulty: string;
  publicGame?: boolean;
}
