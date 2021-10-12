# @nuxt/bridge config error repro

## Steps to reproduce
1. Clone this repository
2. `npm ci`
3. Open `nuxt.config.ts` in VSCode with TypeScript LS enabled, to see error on line 9:
`Type of property 'head' circularly references itself in mapped type 'DeepPartial<ConfigSchema>'.ts(2615)`
