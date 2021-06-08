//On God... I have no fucking idea what this does
//But i saw it in a youtube video and this is apparently what makes it work
//https://www.youtube.com/watch?v=NwyQONeqRXA&t=631s

require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')