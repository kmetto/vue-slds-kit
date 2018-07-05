module.exports = {
    "extends": "airbnb-base",
    "env": {
        "jest": true,
        "browser": true,
        "node": true
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "build/doc/webpack.config.babel.js"
            }
        }
    }
};