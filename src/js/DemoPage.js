var React = require('react'),
    ExperimentsMixin = require('./ExperimentsMixin'),
    ControlPanel = require('./ControlPanel');

module.exports = React.createClass({
    displayName: 'DemoPage',

    mixins: [ExperimentsMixin],

    btn: function(className) {
        return <button className={'btn ' + className}>Make it Happen</button>;
    },

    render: function() {
        return (
            <div>
                <h1>Hello, Feature Flags!</h1>
                {this.whenActive('primary-button',
                                 this.btn('btn-warning'),
                                 this.btn('btn-danger'))}
                <ControlPanel />
            </div>
        );
    }
});
