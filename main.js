var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var EventEmitter = require('events').EventEmitter;
var tree;
var rootNode;

var ev = new EventEmitter();
ev.on("plus", function(){
    state.count++;
    update();
});
var state = {
    count: 0
}

function render(){
    var counter = state.count === 0 ? "Click me!" : state.count;
    
    return h('div', {
        style: {
            textAlign: 'center',
            lineHeight: (100 + state.count) + 'px',
            border: '1px solid red',
            width: (100 + state.count) + 'px',
            height: (100 + state.count) + 'px'
        },
        onclick: function(e){
            ev.emit("plus");
        }
    }, [String(counter)]);
}

function update(){
    var newTree = render(state);
    var patches = diff(tree, newTree);
    rootNode = patch(rootNode, patches);
    tree = newTree;
}

function init(){
    tree = render(state);
    rootNode = createElement(tree);
    document.body.appendChild(rootNode);
}

init();

