module.exports = {
  scripts: {
    default: {
      script:
        'cross-env NODE_ENV=production ts-node -T -r tsconfig-paths/register src/app.ts',
      description: 'Running API in production mode.',
    },
    dev: {
      script: 'nodemon --exec ts-node -T -r tsconfig-paths/register src/app.ts',
      description: 'Running API in development mode.',
    },
    test: {
      script: 'npx jest --detectOpenHandles --forceExit',
      description: 'Run an automated testing on a set of prepared test.'
    },
    lint: {
      run: {
        script: 'eslint . --ext .ts --max-warnings=0',
        description: 'Linting project.',
      },
      fix: {
        script:
          'prettier --config .prettierrc "src/**/*.ts" --write . && eslint . --ext .ts --fix --max-warnings=0',
        description: 'Fix linting error(s) in the project.',
      },
    },
  },
};
