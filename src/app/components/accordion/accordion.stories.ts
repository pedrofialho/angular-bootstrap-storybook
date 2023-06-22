import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from 'src/app/components/accordion/accordion';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<AccordionComponent> = {
  title: 'Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  render: (args: AccordionComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<AccordionComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {};
