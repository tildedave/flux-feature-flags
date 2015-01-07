var EventEmitter = require('events').EventEmitter;
Object.assign = require('object-assign');

var CHANGE_EVENT = 'change';

var BaseStore = Object.assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

module.exports = BaseStore;
