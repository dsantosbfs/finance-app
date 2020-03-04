import { storiesOf } from '@storybook/angular';
import { text, boolean, select, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { ContainerComponent } from './container.component';
import readme from './README.md';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: ContainerComponent,
  moduleMetadata: {
    declarations: [ContainerComponent],
  },
  props: {
    disabled: boolean('Is Disabled', false),
  },
  template: `
    <lib-container
      [disabled]="disabled"
    >
      Container Example
    </lib-container>
    `
}),
{
  notes: { markdown: readme },
});
