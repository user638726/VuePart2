import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  { name: 'app/files-to-lint', files: ['**/*.{ts,mts,tsx,vue}'] },
  { name: 'app/files-to-ignore', ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'] },
  ...pluginVue.configs['flat/essential'],
  { rules: { 'vue/multi-word-component-names': 0 } },
  ...defineConfigWithVueTs(),
  vueTsConfigs,
  skipFormatting,
]
