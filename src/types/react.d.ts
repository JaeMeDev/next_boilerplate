import { FC, PropsWithChildren } from 'react';

declare module 'react' {
  /**
   * Functional Component with Only Children
   * */
  export type FCOnlyChildren = FC<PropsWithChildren<unknown>>;
  /**
   * Functional Component Props with Children
   */
  export type FCWithChildren<T> = FC<PropsWithChildren<T>>;
  /*
   * Component Props only Children
   */
  export type OnlyChildren = PropsWithChildren<unknown>;
  /*
   * Component Props with Children
   */
  export type WithChildren<T> = PropsWithChildren<T>;
}
