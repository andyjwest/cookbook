const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        // '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/preset-scss'
    ],
}