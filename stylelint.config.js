export default {
    plugins: ['stylelint-browser-compat', 'stylelint-no-unused-selectors'],
    rules: {
        "declaration-property-value-disallowed-list": {
            "/^outline/": ["none", "/^0$/"]
        },
        "plugin/no-unused-selectors": true,
        'plugin/browser-compat': [
            true,
            {
                allow: {
                    /* allow outline changes: not supported in iOS Safari 16.0, but browser default fallback is acceptable*/
                    features: ['at-rules.supports', 'properties.outline'],
                    flagged: false,
                    partialImplementation: false,
                    prefix: false,
                },
            },
        ],
    },
};
