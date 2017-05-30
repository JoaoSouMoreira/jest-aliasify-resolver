import React from 'react';
import SimpleText from "simple";
import renderer from 'react-test-renderer';

test('Simple text component renders properly', () => {
    const component = renderer.create(<SimpleText />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});