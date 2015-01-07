var React = require('react'),
    ExperimentsMixin = require('./ExperimentsMixin'),
    ControlPanel = require('./ControlPanel'),
    DisplayText = require('./DisplayText');

module.exports = React.createClass({
    displayName: 'DemoPage',

    mixins: [ExperimentsMixin],

    btn: function(className) {
        var primaryButtonText;

        if (this.isActive('different-primary-button-text')) {
            primaryButtonText = 'Make it So';
        } else {
            primaryButtonText = 'Make it Happen';
        }

        return (
            <button className={'btn center-block ' + className}>
                {primaryButtonText}
            </button>
        );
    },

    render: function() {
        return (
            <div className="container">
                <h1>Hello, Feature Flags!</h1>
                <div className="row">
                    <div className="col-md-6">
                        <DisplayText />
                    </div>
                </div>
                <div className="row" style={{ 'paddingTop': '10px' }}>
                    {this.whenActive('warning-primary-button',
                                     this.btn('btn-warning'),
                                     this.btn('btn-primary'))}
                </div>
                <ControlPanel />
            </div>
        );
    }
});
