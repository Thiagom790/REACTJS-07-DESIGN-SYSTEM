import { themes } from '@storybook/theming'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    addons: ['@storybook/addon-essentials'],
    docs: {
      themes: themes.dark,
    },
  },
}

export default preview
