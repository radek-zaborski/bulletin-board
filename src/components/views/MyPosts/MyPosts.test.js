import React from 'react';
import { shallow } from 'enzyme';
import { MyPostsComponent } from './MyPosts';

describe('Component MyPosts', () => {
  it('should render without crashing', () => {
    const component = shallow(<div />);
    expect(component).toBeTruthy();
  });
});
