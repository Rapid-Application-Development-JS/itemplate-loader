var languages = require('languages'),
    IncrementalDOM = require('incremental-dom/dist/incremental-dom');

window.onload = function() {
    var data = {
        title: 'Supplies',
        languages: ['Basic', 'HTML', 'Perl', 'PHP', 'Java', 'JavaScript']
    };

    IncrementalDOM.patch(document.querySelector('#container'), function() {
        languages(data, IncrementalDOM/*, helpers*/);
    });
};