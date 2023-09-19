export default [
  {
    type: 'struct',
    name: 'core::starknet::account::Call',
    members: [
      {
        name: 'to',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'selector',
        type: 'core::felt252',
      },
      {
        name: 'calldata',
        type: 'core::array::Array::<core::felt252>',
      },
    ],
  },
  {
    type: 'function',
    name: '__validate__',
    inputs: [
      {
        name: 'calls',
        type: 'core::array::Array::<core::starknet::account::Call>',
      },
    ],
    outputs: [
      {
        type: 'core::felt252',
      },
    ],
    state_mutability: 'external',
  },
  {
    type: 'struct',
    name: 'core::array::Span::<core::felt252>',
    members: [
      {
        name: 'snapshot',
        type: '@core::array::Array::<core::felt252>',
      },
    ],
  },
  {
    type: 'function',
    name: '__execute__',
    inputs: [
      {
        name: 'calls',
        type: 'core::array::Array::<core::starknet::account::Call>',
      },
    ],
    outputs: [
      {
        type: 'core::array::Array::<core::array::Span::<core::felt252>>',
      },
    ],
    state_mutability: 'external',
  },
  {
    type: 'function',
    name: 'is_valid_signature',
    inputs: [
      {
        name: 'hash',
        type: 'core::felt252',
      },
      {
        name: 'signature',
        type: 'core::array::Array::<core::felt252>',
      },
    ],
    outputs: [
      {
        type: 'core::felt252',
      },
    ],
    state_mutability: 'view',
  },
  {
    type: 'impl',
    name: 'ExecuteFromOutsideImpl',
    interface_name: 'lib::outside_execution::IOutsideExecution',
  },
  {
    type: 'struct',
    name: 'lib::outside_execution::OutsideExecution',
    members: [
      {
        name: 'caller',
        type: 'core::starknet::contract_address::ContractAddress',
      },
      {
        name: 'nonce',
        type: 'core::felt252',
      },
      {
        name: 'execute_after',
        type: 'core::integer::u64',
      },
      {
        name: 'execute_before',
        type: 'core::integer::u64',
      },
      {
        name: 'calls',
        type: 'core::array::Span::<core::starknet::account::Call>',
      },
    ],
  },
  {
    type: 'enum',
    name: 'core::bool',
    variants: [
      {
        name: 'False',
        type: '()',
      },
      {
        name: 'True',
        type: '()',
      },
    ],
  },
  {
    type: 'interface',
    name: 'lib::outside_execution::IOutsideExecution',
    items: [
      {
        type: 'function',
        name: 'execute_from_outside',
        inputs: [
          {
            name: 'outside_execution',
            type: 'lib::outside_execution::OutsideExecution',
          },
          {
            name: 'signature',
            type: 'core::array::Array::<core::felt252>',
          },
        ],
        outputs: [
          {
            type: 'core::array::Array::<core::array::Span::<core::felt252>>',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'is_valid_outside_execution_nonce',
        inputs: [
          {
            name: 'nonce',
            type: 'core::felt252',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_outside_execution_message_hash',
        inputs: [
          {
            name: 'outside_execution',
            type: 'lib::outside_execution::OutsideExecution',
          },
        ],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'impl',
    name: 'UpgradeableImpl',
    interface_name: 'lib::upgrade::IUpgradeable',
  },
  {
    type: 'interface',
    name: 'lib::upgrade::IUpgradeable',
    items: [
      {
        type: 'function',
        name: 'upgrade',
        inputs: [
          {
            name: 'new_implementation',
            type: 'core::starknet::class_hash::ClassHash',
          },
          {
            name: 'calldata',
            type: 'core::array::Array::<core::felt252>',
          },
        ],
        outputs: [
          {
            type: 'core::array::Array::<core::felt252>',
          },
        ],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'execute_after_upgrade',
        inputs: [
          {
            name: 'data',
            type: 'core::array::Array::<core::felt252>',
          },
        ],
        outputs: [
          {
            type: 'core::array::Array::<core::felt252>',
          },
        ],
        state_mutability: 'external',
      },
    ],
  },
  {
    type: 'impl',
    name: 'ArgentAccountImpl',
    interface_name: 'account::interface::IArgentAccount',
  },
  {
    type: 'struct',
    name: 'account::escape::Escape',
    members: [
      {
        name: 'ready_at',
        type: 'core::integer::u64',
      },
      {
        name: 'escape_type',
        type: 'core::felt252',
      },
      {
        name: 'new_signer',
        type: 'core::felt252',
      },
    ],
  },
  {
    type: 'struct',
    name: 'lib::version::Version',
    members: [
      {
        name: 'major',
        type: 'core::integer::u8',
      },
      {
        name: 'minor',
        type: 'core::integer::u8',
      },
      {
        name: 'patch',
        type: 'core::integer::u8',
      },
    ],
  },
  {
    type: 'enum',
    name: 'account::escape::EscapeStatus',
    variants: [
      {
        name: 'None',
        type: '()',
      },
      {
        name: 'NotReady',
        type: '()',
      },
      {
        name: 'Ready',
        type: '()',
      },
      {
        name: 'Expired',
        type: '()',
      },
    ],
  },
  {
    type: 'interface',
    name: 'account::interface::IArgentAccount',
    items: [
      {
        type: 'function',
        name: '__validate_declare__',
        inputs: [
          {
            name: 'class_hash',
            type: 'core::felt252',
          },
        ],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: '__validate_deploy__',
        inputs: [
          {
            name: 'class_hash',
            type: 'core::felt252',
          },
          {
            name: 'contract_address_salt',
            type: 'core::felt252',
          },
          {
            name: 'owner',
            type: 'core::felt252',
          },
          {
            name: 'guardian',
            type: 'core::felt252',
          },
        ],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'change_owner',
        inputs: [
          {
            name: 'new_owner',
            type: 'core::felt252',
          },
          {
            name: 'signature_r',
            type: 'core::felt252',
          },
          {
            name: 'signature_s',
            type: 'core::felt252',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'change_guardian',
        inputs: [
          {
            name: 'new_guardian',
            type: 'core::felt252',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'change_guardian_backup',
        inputs: [
          {
            name: 'new_guardian_backup',
            type: 'core::felt252',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'trigger_escape_owner',
        inputs: [
          {
            name: 'new_owner',
            type: 'core::felt252',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'trigger_escape_guardian',
        inputs: [
          {
            name: 'new_guardian',
            type: 'core::felt252',
          },
        ],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'escape_owner',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'escape_guardian',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'cancel_escape',
        inputs: [],
        outputs: [],
        state_mutability: 'external',
      },
      {
        type: 'function',
        name: 'get_owner',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_guardian',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_guardian_backup',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_escape',
        inputs: [],
        outputs: [
          {
            type: 'account::escape::Escape',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_version',
        inputs: [],
        outputs: [
          {
            type: 'lib::version::Version',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_name',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_guardian_escape_attempts',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u32',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_owner_escape_attempts',
        inputs: [],
        outputs: [
          {
            type: 'core::integer::u32',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'get_escape_and_status',
        inputs: [],
        outputs: [
          {
            type: '(account::escape::Escape, account::escape::EscapeStatus)',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'impl',
    name: 'Erc165Impl',
    interface_name: 'lib::erc165::IErc165',
  },
  {
    type: 'interface',
    name: 'lib::erc165::IErc165',
    items: [
      {
        type: 'function',
        name: 'supports_interface',
        inputs: [
          {
            name: 'interface_id',
            type: 'core::felt252',
          },
        ],
        outputs: [
          {
            type: 'core::bool',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'impl',
    name: 'OldArgentAccountImpl',
    interface_name: 'account::interface::IDeprecatedArgentAccount',
  },
  {
    type: 'interface',
    name: 'account::interface::IDeprecatedArgentAccount',
    items: [
      {
        type: 'function',
        name: 'getVersion',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'getName',
        inputs: [],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'supportsInterface',
        inputs: [
          {
            name: 'interface_id',
            type: 'core::felt252',
          },
        ],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
      {
        type: 'function',
        name: 'isValidSignature',
        inputs: [
          {
            name: 'hash',
            type: 'core::felt252',
          },
          {
            name: 'signatures',
            type: 'core::array::Array::<core::felt252>',
          },
        ],
        outputs: [
          {
            type: 'core::felt252',
          },
        ],
        state_mutability: 'view',
      },
    ],
  },
  {
    type: 'constructor',
    name: 'constructor',
    inputs: [
      {
        name: 'owner',
        type: 'core::felt252',
      },
      {
        name: 'guardian',
        type: 'core::felt252',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::AccountCreated',
    kind: 'struct',
    members: [
      {
        name: 'owner',
        type: 'core::felt252',
        kind: 'key',
      },
      {
        name: 'guardian',
        type: 'core::felt252',
        kind: 'data',
      },
    ],
  },
  {
    type: 'struct',
    name: 'core::array::Span::<core::array::Span::<core::felt252>>',
    members: [
      {
        name: 'snapshot',
        type: '@core::array::Array::<core::array::Span::<core::felt252>>',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::TransactionExecuted',
    kind: 'struct',
    members: [
      {
        name: 'hash',
        type: 'core::felt252',
        kind: 'key',
      },
      {
        name: 'response',
        type: 'core::array::Span::<core::array::Span::<core::felt252>>',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::EscapeOwnerTriggered',
    kind: 'struct',
    members: [
      {
        name: 'ready_at',
        type: 'core::integer::u64',
        kind: 'data',
      },
      {
        name: 'new_owner',
        type: 'core::felt252',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::EscapeGuardianTriggered',
    kind: 'struct',
    members: [
      {
        name: 'ready_at',
        type: 'core::integer::u64',
        kind: 'data',
      },
      {
        name: 'new_guardian',
        type: 'core::felt252',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::OwnerEscaped',
    kind: 'struct',
    members: [
      {
        name: 'new_owner',
        type: 'core::felt252',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::GuardianEscaped',
    kind: 'struct',
    members: [
      {
        name: 'new_guardian',
        type: 'core::felt252',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::EscapeCanceled',
    kind: 'struct',
    members: [],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::OwnerChanged',
    kind: 'struct',
    members: [
      {
        name: 'new_owner',
        type: 'core::felt252',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::GuardianChanged',
    kind: 'struct',
    members: [
      {
        name: 'new_guardian',
        type: 'core::felt252',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::GuardianBackupChanged',
    kind: 'struct',
    members: [
      {
        name: 'new_guardian_backup',
        type: 'core::felt252',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::AccountUpgraded',
    kind: 'struct',
    members: [
      {
        name: 'new_implementation',
        type: 'core::starknet::class_hash::ClassHash',
        kind: 'data',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::OwnerAdded',
    kind: 'struct',
    members: [
      {
        name: 'new_owner_guid',
        type: 'core::felt252',
        kind: 'key',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::OwnerRemoved',
    kind: 'struct',
    members: [
      {
        name: 'removed_owner_guid',
        type: 'core::felt252',
        kind: 'key',
      },
    ],
  },
  {
    type: 'event',
    name: 'account::argent_account::ArgentAccount::Event',
    kind: 'enum',
    variants: [
      {
        name: 'AccountCreated',
        type: 'account::argent_account::ArgentAccount::AccountCreated',
        kind: 'nested',
      },
      {
        name: 'TransactionExecuted',
        type: 'account::argent_account::ArgentAccount::TransactionExecuted',
        kind: 'nested',
      },
      {
        name: 'EscapeOwnerTriggered',
        type: 'account::argent_account::ArgentAccount::EscapeOwnerTriggered',
        kind: 'nested',
      },
      {
        name: 'EscapeGuardianTriggered',
        type: 'account::argent_account::ArgentAccount::EscapeGuardianTriggered',
        kind: 'nested',
      },
      {
        name: 'OwnerEscaped',
        type: 'account::argent_account::ArgentAccount::OwnerEscaped',
        kind: 'nested',
      },
      {
        name: 'GuardianEscaped',
        type: 'account::argent_account::ArgentAccount::GuardianEscaped',
        kind: 'nested',
      },
      {
        name: 'EscapeCanceled',
        type: 'account::argent_account::ArgentAccount::EscapeCanceled',
        kind: 'nested',
      },
      {
        name: 'OwnerChanged',
        type: 'account::argent_account::ArgentAccount::OwnerChanged',
        kind: 'nested',
      },
      {
        name: 'GuardianChanged',
        type: 'account::argent_account::ArgentAccount::GuardianChanged',
        kind: 'nested',
      },
      {
        name: 'GuardianBackupChanged',
        type: 'account::argent_account::ArgentAccount::GuardianBackupChanged',
        kind: 'nested',
      },
      {
        name: 'AccountUpgraded',
        type: 'account::argent_account::ArgentAccount::AccountUpgraded',
        kind: 'nested',
      },
      {
        name: 'OwnerAdded',
        type: 'account::argent_account::ArgentAccount::OwnerAdded',
        kind: 'nested',
      },
      {
        name: 'OwnerRemoved',
        type: 'account::argent_account::ArgentAccount::OwnerRemoved',
        kind: 'nested',
      },
    ],
  },
];
