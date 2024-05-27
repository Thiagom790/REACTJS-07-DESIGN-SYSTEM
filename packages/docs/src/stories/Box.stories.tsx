import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@thiagom790-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <span>Teste o elemento box</span>,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
