import React from 'react';
import { getByTestId, queryByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default as CustomCard } from './../stories/CustomCard/CustomCard.stories';

it('Title is equal to alt', () => {
  render(<CustomCard {...CustomCard.args} />);

  const title = screen.getByTestId('title').textContent
  const alt = screen.getByTestId('alt').title

  expect(title).toStrictEqual(alt)
});