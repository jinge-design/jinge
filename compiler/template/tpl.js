const TEXT_CONST = `(() => {
  const el = createTextNode_$ID$($VAL$);
  component[ROOT_NODES_$ID$].push(el);
  return el;
})()`;

const EMPTY = `function(component) {
  const el = createComment_$ID$(STR_EMPTY_$ID$);
  component[ROOT_NODES_$ID$].push(el);
  return [el];
}`;

const PUSH_ROOT_ELE = 'component[ROOT_NODES_$ID$].push(el);';
const PUSH_COM_ELE = 'component[NON_ROOT_COMPONENT_NODES_$ID$].push(el);';
const SET_REF_ELE = 'vm_0[SET_REF_NODE_$ID$](\'$NAME$\', el, component)';

const TEXT_EXPR = `(() => {
  const el = createTextNode_$ID$('');
  const fn = () => setText_$ID$(el, $EXPR$);
$WATCH$
  fn();
  $PUSH_ELE$
  return el;
})()`;

const PARAMETER = `...(() => {
  const vm_0_ac = vm_0[ARG_COMPONENTS_$ID$];
  const renderFn = vm_0_ac ? vm_0_ac['$ARG_USE$'] : $DEFAULT$;
  const attrs = wrapViewModel_$ID$({
    $VM_PASS_INIT$
    [ARG_COMPONENTS_$ID$]: {
      [STR_DEFAULT_$ID$]: renderFn || ${EMPTY}
    }
  });
$VM_PASS_SET$
  const el = new Component_$ID$(attrs);
$VM_PASS_WATCH$
  return el[RENDER_$ID$]()
})()`;

const ERROR = `function(component) {
  const el = createElement_$ID$('span', {style: 'color: red !important;'});
  el.textContent = 'template parsing failed! please check webpack log.';
  component[ROOT_NODES_$ID$].push(el);
  return [el];
}`;

module.exports = {
  SET_REF_ELE,
  PUSH_ROOT_ELE,
  PUSH_COM_ELE,
  TEXT_CONST,
  TEXT_EXPR,
  EMPTY,
  ERROR,
  PARAMETER
};
