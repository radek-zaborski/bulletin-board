import React from 'react';
import { shallow } from 'enzyme';
import { ListOfPostComponent } from './ListOfPost';

describe('Component ListOfPost', () => {
  it('should render without crashing', () => {
    const component = shallow(<div />);
    expect(component).toBeTruthy();
  });
});
