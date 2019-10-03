/** ApiObject Type, id and other key:value pairs */
export interface ApiObject {
  id: number;
  [keys: string]: ApiObjectProperty;
}

/** Possible types of an ApiObject's properties */
export type ApiObjectProperty =
  | ApiObject[]
  | ApiObject
  | number[]
  | number
  | string
  | string[]
  | boolean;
