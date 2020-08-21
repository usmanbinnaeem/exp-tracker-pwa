export type IState = { transactions: Array<ITrans> };
export type ITrans = { id: number; text: string; amount: number };
export type IAction = { type: string; payload: any };
export type IAmts = { amount: Array<number> };
