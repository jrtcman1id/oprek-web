module.exports = {
    presets: [
        '@babel/preset-env',
        [ '@babel/preset-react', {
            "throwIfNamespace": false, // defaults to true
            runtime: 'automatic',
            importSource: '@bawailmu'
        } ]
    ],
    plugins: []
}