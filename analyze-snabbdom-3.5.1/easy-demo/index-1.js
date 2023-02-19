import {init, classModule, propsModule, styleModule, eventListenersModule, thunk, h} from "../build";

const patch = init([// Init patch function with chosen modules
    classModule,            // makes it easy to toggle classes
    propsModule,            // for setting properties on DOM elements
    styleModule,            // handles styling on elements with support for animations
    eventListenersModule    // attaches event listeners
]);

const container = document.getElementById("container");

function numberView(n) {
    const children = [h('span#b', {style: {color: 'red'}}, "Number is: "), n]
    return h("span#a", {style: {border: '1px solid red', display: 'inline-block'}}, children);
}

function render(state) {
    return thunk("span#a", numberView, [state.number]);
}

const one = render({number: 1})
patch(container, one);

setTimeout(() => {
    console.log('---diff---')
    const two = render({number: 1});
    patch(one, two);
}, 1 * 1000)

