// Global access from client-side JavaScript

var Dispatcher = require('./Dispatcher');

if (typeof(window) === 'object') {
    window.Experiments = {
        activate: function(experimentName) {
            Dispatcher.dispatch({
                actionType: 'experiment-activate',
                experiment: experimentName
            });
        },

        deactivate: function(experimentName) {
            Dispatcher.dispatch({
                actionType: 'experiment-deactivate',
                experiment: experimentName
            });
        }
    };
}
