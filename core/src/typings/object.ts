/* eslint-disable prettier/prettier */
export type GetField<
  Target,
  Key extends keyof any,
  Default
> = Key extends keyof Target
  ? Target[Key]
  : Key extends `${number}`
  ? "length" extends keyof Target
    ? number extends Target["length"]
      ? number extends keyof Target
        ? Target[number]
        : Default
      : Default
    : Default
  : Default;

type GetRestPath<
  Rest extends string,
  FieldKey extends string,
  IndexKey extends string
> = FieldKey extends ""
  ? `${Rest}[${IndexKey}]`
  : `${Rest}[${FieldKey}][${IndexKey}]`;

export type ToPath<
  Target extends string,
  Rest extends string = ""
> = Target extends `${infer Left}.${infer Right}`
  ? Left extends `${infer FieldKey}[${infer IndexKey}]`
    ? ToPath<Right, GetRestPath<Rest, FieldKey, IndexKey>>
    : ToPath<Right, `${Rest}[${Left}]`>
  : Target extends `${infer FieldKey}[${infer IndexKey}]`
  ? GetRestPath<Rest, FieldKey, IndexKey>
  : Target extends `[${infer Target}]`
  ? `${Rest}${Target}`
  : `${Rest}[${Target}]`;

export type GetFieldDeepBase<Target, Path, Default> =
  Path extends `[${infer FieldKey}][${infer Right}]`
    ? GetFieldDeepBase<
        GetField<Target, FieldKey, Default>,
        `[${Right}]`,
        Default
      >
    : Path extends `[${infer FieldKey}]`
    ? GetField<Target, FieldKey, Default>
    : Default;

export type GetFieldDeep<
  Target,
  Path extends string,
  Default
> = GetFieldDeepBase<Target, ToPath<Path>, Default>;

export type MergeInsertions<T> = T extends object
  ? { [K in keyof T]: MergeInsertions<T[K]> }
  : T;

export type DeepMerge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? DeepMerge<F[K], S[K]>
    : K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
}>;
