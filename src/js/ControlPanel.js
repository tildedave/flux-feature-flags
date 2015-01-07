var React = require('react'),
    Dispatcher = require('./Dispatcher'),
    ExperimentsStore = require('./ExperimentsStore');

module.exports = React.createClass({
    displayName: 'ControlPanel',

    toggleExperiment: function(experiment) {
        return function(e) {
            // More idiomatic Flux would put these into the 'actions' but introducing
            // those is a little elaborate for an admin control panel
            if (e.target.checked) {
                Dispatcher.dispatch({
                    actionType: 'experiment-activate',
                    experiment: experiment
                });
            } else {
                Dispatcher.dispatch({
                    actionType: 'experiment-deactivate',
                    experiment: experiment
                });
            }
        }
    },

    checkbox: function(experiment) {
        return (
            <span className="checkbox">
               <label>
                   <input type="checkbox"
                          name={experiment}
                          onClick={this.toggleExperiment(experiment)}>
                       {experiment}
                   </input>
               </label>
            </span>
        );
    },

    render: function() {
        var style = {
            position: 'fixed',
            backgroundColor: '#faebe4',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50px'
        };

        return (
            <div style={style}>
              {Object.keys(ExperimentsStore.getExperiments()).map(function (experiment) {
                  return this.checkbox(experiment);
              }, this)}
            </div>
        );
    }
});
