export interface IGenericError<T extends string | number> {
  stack: T;
  message: string;
}
