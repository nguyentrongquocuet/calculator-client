export enum STATUS {
  COMPLETED = 'COMPLETED',
  UNCOMPLETED = 'UNCOMPLETED',
}

export enum PRIORITY {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export type TTodoStatus = keyof typeof STATUS;

export type TTodoPriority = keyof typeof PRIORITY;

export interface ITodo {
  id: string;
  content: string;
  created: number;
  status: TTodoStatus;
  priority: TTodoPriority;
}

export type TTodoData = Omit<ITodo, 'id' | 'created'>;
