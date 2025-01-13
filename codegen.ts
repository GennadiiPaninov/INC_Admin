import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: ['./entities/queries/**/*.ts'], // путь к файлу где лежат запросы и мутации
  generates: {
    'entities/': {
      config: {
        withHooks: true,
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
        extension: '.types.tsx',
      },
    },
    'entities/types.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true,
  schema: 'https://inctagram.org/api/v1/graphql',
}

export default config
