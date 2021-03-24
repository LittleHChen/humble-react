import { configure } from '@storybook/react';
import '../src/asset/normalize.css';
configure(
    [
        require.context('../src/components', true, /\.stories\.js$/),
    ],
    module
);