require('./ExperimentsStore');

require('./experiments');

var DemoPage = require('./DemoPage');

var React = require('react');
window.onload = function() {
    React.render(<DemoPage />, document.body);
};
