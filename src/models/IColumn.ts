import { ICard } from './ICard';

export interface IColumn {
  id: number;
  title: string;
  description: string;
  position: number;
  color: string;
  width: number;
  cards: ICard[];
}
