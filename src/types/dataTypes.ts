import { BigNumber } from 'bignumber.js';
import * as Yup from 'yup';

export const CoreTypes = [
  'core::felt252',
  'core::bool',
  'core::integer::u8',
  'core::integer::u16',
  'core::integer::u32',
  'core::integer::u64',
  'core::integer::u128',
  //   'core::integer::u256',
  'core::starknet::contract_address::ContractAddress',
];

export const isACoreType = (type: string): boolean => {
  if (type && typeof type === 'string') {
    return CoreTypes.includes(type);
  }

  return false;
};

function validateCoreType(type: string, val: string): boolean {
  const value = BigNumber(val);
  switch (type) {
    case 'core::bool':
      return value.lte(1);
    case 'core::integer::u8':
      return value.lte(2 ** 8 - 1);
    case 'core::integer::u16':
      return value.lte(2 ** 16 - 1);
    case 'core::integer::u32':
      return value.lte(2 ** 32 - 1);
    case 'core::integer::u64':
      return value.lte(2 ** 64 - 1);
    case 'core::integer::u128':
      return value.lte('340282366920938463463374607431768211455');
    case 'core::felt252':
      return value.lte(
        '3618502788666131213697322783095070105623107215331596699973092056135872020480'
      );
    case 'core::starknet::contract_address::ContractAddress':
      // TODO: Add Proper Validation for address here.
      return true;
    default:
      return false;
  }
}

// Add Methods here
// @ts-ignore
Yup.addMethod(Yup.string, 'validate_core_type', function (type: string) {
  return this.test('check inputs', type, function (val) {
    const { createError } = this;
    if (val !== undefined) {
      try {
        const isValid = validateCoreType(type, val);
        if (!isValid) {
          return createError(
            new Yup.ValidationError(
              `${val} is not correct value for type ${type}`
            )
          );
        }
        return true;
      } catch (e: any) {
        return createError(new Yup.ValidationError(e?.message || e));
      }
    }
    return createError(new Yup.ValidationError('value is required'));
  });
});
