import { pushScopeId, popScopeId, openBlock, createBlock, toDisplayString, withScopeId } from 'vue';

var script = {
  name: 'TestComponent',
  setup: function setup() {
    var message = "hello world";
    return {
      message: message
    };
  }
};

const _withId = /*#__PURE__*/withScopeId("data-v-07bdddea");

pushScopeId("data-v-07bdddea");
const _hoisted_1 = { class: "test" };
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock("div", _hoisted_1, "test " + toDisplayString($setup.message), 1 /* TEXT */))
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".test[data-v-07bdddea] {\n  color: red;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-07bdddea";
script.__file = "src/Test.vue";

function index (Vue) {
  Vue.component(script.name, script);
}

export default index;
