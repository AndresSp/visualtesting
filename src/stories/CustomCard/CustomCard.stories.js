import React from 'react';
import CustomCard from 'components/CustomCard';

export default {
  title: 'Components/CustomCard',
  component: CustomCard,
  argTypes: {},
};

const Template = (args) => <div style={{maxWidth: 350}}>
    <CustomCard {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  body: 'Body',
  image: 'https://via.placeholder.com/200.png/008800'
};

