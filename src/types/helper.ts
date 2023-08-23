import { ABI, ABIFunction, ABIStruct, ABIEnum } from '.';

export function extractFunctionFromRawAbi(abi: ABI, functions: ABIFunction[]) {
  // Considering any here because it can be any of types.
  let lFunctions = [...functions];
  abi?.forEach((item: any) => {
    if (typeof item === 'object' && item.type && item.type === 'function') {
      lFunctions = [...lFunctions, item];
    }
    // As per specifications, only interface can have functions inside them other then root level abi with key `items`
    if (
      typeof item === 'object' &&
      item.type &&
      item.type === 'interface' &&
      item.items &&
      Array.isArray(item.items)
    ) {
      lFunctions = [...lFunctions, ...item.items];
    }
  });
  return lFunctions;
}

type ReturnFunctions = {
  externalFunctions: ABIFunction[];
  viewFunctions: ABIFunction[];
};

export function segregateViewAndExternalFunctions(
  functions: ABIFunction[]
): ReturnFunctions {
  const viewFunctions: ABIFunction[] = [];
  const externalFunctions: ABIFunction[] = [];

  if (Array.isArray(functions)) {
    functions.forEach((fn) => {
      if (fn && typeof fn === 'object' && fn.state_mutability === 'view') {
        viewFunctions.push(fn);
      }
      if (fn && typeof fn === 'object' && fn.state_mutability === 'external') {
        externalFunctions.push(fn);
      }
    });
  }

  return {
    viewFunctions,
    externalFunctions,
  };
}

export function extractStructFromABI(abi: ABI) {
  const structs: ABIStruct[] = [];
  abi?.forEach((item: any) => {
    if (typeof item === 'object' && item.type && item.type === 'struct') {
      structs.push(item);
    }
  });
  return structs;
}

export function extractEnumsFromABI(abi: ABI) {
  const enums: ABIEnum[] = [];
  abi?.forEach((item: any) => {
    if (typeof item === 'object' && item.type && item.type === 'enum') {
      enums.push(item);
    }
  });
  return enums;
}

type ReturnExtractedSubTypes = {
  contains: boolean;
  types?: string[];
};

export function hasSubTypes(type: string): boolean {
  const regex = /<[^<>]*>/g;
  if (type && typeof type === 'string') {
    return regex.test(type);
  }
  return false;
}

export function hasArrayOfSubType(type: string): boolean {
  const regex = /^core::array/g;
  if (type && typeof type === 'string') {
    return regex.test(type);
  }
  return false;
}

export function extractSubTypesFromType(type: string): ReturnExtractedSubTypes {
  const regex = /<[^<>]*>/g;
  if (type && typeof type === 'string') {
    if (hasSubTypes(type)) {
      const matches = type.match(regex) || [];
      const finalMatch = matches.map((lType) =>
        lType.substring(1, lType.length - 1)
      );
      return {
        contains: true,
        types: finalMatch,
      };
    }
  }
  return {
    contains: false,
  };
}
