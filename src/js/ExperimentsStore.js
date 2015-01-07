var BaseStore = require('./BaseStore.js');
var Dispatcher = require('./Dispatcher');
Object.assign = require('object-assign');

var ExperimentsStore = Object.assign({}, BaseStore, {

    experiments: {
        'primary-button': false
    },

    isActive: function(experimentName) {
        return !!this.experiments[experimentName];
    },

    activate: function(experimentName) {
        this.experiments[experimentName] = true;
    },

    deactivate: function(experimentName) {
        this.experiments[experimentName] = false;
    },

    getExperiments: function() {
        return this.experiments;
    }
});

Dispatcher.register(function (payload) {
    if (payload.actionType === 'experiment-activate') {
        ExperimentsStore.activate(payload.experiment);
        ExperimentsStore.emitChange();
    } else if (payload.actionType === 'experiment-deactivate') {
        ExperimentsStore.deactivate(payload.experiment);
        ExperimentsStore.emitChange();
    }
});

module.exports = ExperimentsStore;
