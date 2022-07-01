declare module "regedit" {
  export declare interface REG_SZ_Value {
    value: string;
    type: "REG_SZ";
  }

  export declare interface REG_EXPAND_SZ_Value {
    value: string;
    type: "REG_EXPAND_SZ";
  }

  export declare interface REG_DWORD_Value {
    value: number;
    type: "REG_DWORD";
  }

  export declare interface REG_QWORD_Value {
    value: number;
    type: "REG_QWORD";
  }

  export declare interface REG_MULTI_SZ_Value {
    value: string[];
    type: "REG_MULTI_SZ";
  }

  export declare interface REG_BINARY_Value {
    value: number[];
    type: "REG_SZ";
  }

  export declare interface REG_DEFAULT_Value {
    value: string;
    type: "REG_DEFAULT";
  }

  export declare type RegistryItemValue =
    | REG_SZ_Value
    | REG_EXPAND_SZ_Value
    | REG_DWORD_Value
    | REG_QWORD_Value
    | REG_MULTI_SZ_Value
    | REG_BINARY_Value
    | REG_DEFAULT_Value;

  export declare interface RegistryItem {
    exists: boolean;
    keys: string[];
    values: {
      [name: string]: RegistryItemValue;
    };
  }

  export declare type RegistryItemCollection<
    T extends readonly string[],
    U = { [key in T[number]]: RegistryItem }
  > = U;

  export declare interface RegistryPutItem {
    [name: string]: RegistryItemValue;
  }

  export declare type RegistryItemPutCollection = {
    [key: string]: RegistryPutItem;
  };

  export declare const OS_ARCH_AGNOSTIC = "A";
  export declare const OS_ARCH_SPECIFIC = "S";
  export declare const OS_ARCH_32BIT = "32";
  export declare const OS_ARCH_64BIT = "64";

  type Architecture =
    | typeof OS_ARCH_AGNOSTIC
    | typeof OS_ARCH_SPECIFIC
    | typeof OS_ARCH_32BIT
    | typeof OS_ARCH_64BIT;
  type ErrResCallback<T extends readonly string[]> = (
    err: Error | undefined,
    res: RegistryItemCollection<T>
  ) => void;

  export declare function list<K extends string>(
    keys: readonly K[],
    callback: ErrResCallback<typeof keys>
  ): void;
  export declare function list<K extends string>(
    keys: readonly K[],
    architecture: Architecture,
    callback?: ErrResCallback<typeof keys>
  ): void;

  export declare function setExternalVBSLocation(newLocation: string): string;

  type ErrCallback = (err: Error | undefined) => void;

  export declare function createKey<K extends string>(
    keys: readonly K[],
    callback: ErrCallback
  ): void;
  export declare function createKey<K extends string>(
    keys: readonly K[],
    architecture: Architecture,
    callback?: ErrCallback
  ): void;

  export declare function deleteKey(
    keys: readonly string[],
    callback: ErrCallback
  ): void;
  export declare function deleteKey(
    keys: readonly string[],
    architecture: Architecture,
    callback?: ErrCallback
  ): void;

  export declare function putValue(
    map: RegistryItemPutCollection,
    callback: ErrCallback
  ): void;
  export declare function putValue(
    map: RegistryItemPutCollection,
    architecture: Architecture,
    callback?: ErrCallback
  ): void;

  export declare namespace arch {
    export declare function list<K extends string>(
      keys: readonly K[],
      callback: ErrResCallback<typeof keys>
    ): void;

    export declare function list32<K extends string>(
      keys: readonly K[],
      callback: ErrResCallback<typeof keys>
    ): void;

    export declare function list64<K extends string>(
      keys: readonly K[],
      callback: ErrResCallback<typeof keys>
    ): void;

    export declare function createKey(
      keys: readonly string[],
      callback: ErrCallback
    ): void;

    export declare function createKey32(
      keys: readonly string[],
      callback: ErrCallback
    ): void;

    export declare function createKey64(
      keys: readonly string[],
      callback: ErrCallback
    ): void;

    export declare function deleteKey(
      keys: readonly string[],
      callback: ErrCallback
    ): void;

    export declare function deleteKey32(
      keys: readonly string[],
      callback: ErrCallback
    ): void;

    export declare function deleteKey64(
      keys: readonly string[],
      callback: ErrCallback
    ): void;

    export declare function putValue(
      map: RegistryItemPutCollection,
      callback: ErrCallback
    ): void;

    export declare function putValue32(
      map: RegistryItemPutCollection,
      callback: ErrCallback
    ): void;

    export declare function putValue64(
      map: RegistryItemPutCollection,
      callback: ErrCallback
    ): void;
  }

  export declare namespace promisified {
    export declare function list<K extends string>(
      keys: readonly K[]
    ): Promise<RegistryItemCollection<typeof keys>>;
    export declare function list<K extends string>(
      keys: readonly K[],
      architecture: Architecture
    ): Promise<RegistryItemCollection<typeof keys>>;

    export declare function createKey(keys: readonly string[]): Promise<void>;
    export declare function createKey(
      keys: readonly string[],
      architecture: Architecture
    ): Promise<void>;

    export declare function deleteKey(keys: readonly string[]): Promise<void>;
    export declare function deleteKey(
      keys: readonly string[],
      architecture: Architecture
    ): Promise<void>;

    export declare function putValue(
      map: RegistryItemPutCollection
    ): Promise<void>;
    export declare function putValue(
      map: RegistryItemPutCollection,
      architecture: Architecture
    ): Promise<void>;

    export declare namespace arch {
      export declare function list<K extends string>(
        keys: readonly K[]
      ): Promise<RegistryItemCollection<typeof keys>>;

      export declare function list32<K extends string>(
        keys: readonly K[]
      ): Promise<RegistryItemCollection<typeof keys>>;

      export declare function list64<K extends string>(
        keys: readonly K[]
      ): Promise<RegistryItemCollection<typeof keys>>;

      export declare function createKey(keys: readonly string[]): Promise<void>;

      export declare function createKey32(
        keys: readonly string[]
      ): Promise<void>;

      export declare function createKey64(
        keys: readonly string[]
      ): Promise<void>;

      export declare function deleteKey(keys: readonly string[]): Promise<void>;

      export declare function deleteKey32(
        keys: readonly string[]
      ): Promise<void>;

      export declare function deleteKey64(
        keys: readonly string[]
      ): Promise<void>;

      export declare function putValue(
        map: RegistryItemPutCollection
      ): Promise<void>;

      export declare function putValue32(
        map: RegistryItemPutCollection
      ): Promise<void>;

      export declare function putValue64(
        map: RegistryItemPutCollection
      ): Promise<void>;
    }
  }
}
