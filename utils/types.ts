export type Unwrap<T> = T extends Promise<infer U>
  ? U
  : T extends (...args: any) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : T;

export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
