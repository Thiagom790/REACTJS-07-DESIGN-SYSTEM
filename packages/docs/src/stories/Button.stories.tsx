import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

// Args são propriedades que são enviadas para os components
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
