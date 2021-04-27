var findModule = (item) => Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}}, [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default[item]!==void 0).exports.default;
var FluxDispatcher = findModule('_currentDispatchActionType')
let deleted = []
var styleMessage = async ({ id }) => {
  let messageElem = document.getElementById(`chat-messages-${id}`);
  if (!messageElem) return false;

  if (messageElem.classList.contains('deleted-message')) return;

  messageElem.classList.add('deleted-message');
  messageElem.style.backgroundColor = 'rgba(240, 71, 71, 0.1)';
};
var run = () => {
  Array.from(document.querySelector('[data-list-id="chat-messages"]').children).forEach(thing => {
    var id = thing.id.slice(14)
    var obj = deleted.find(m => m.id == id)
    if(obj) styleMessage(obj)
  })
};
index = FluxDispatcher._orderedActionHandlers.MESSAGE_DELETE.indexOf(FluxDispatcher._orderedActionHandlers.MESSAGE_DELETE.find((x) => x.actionHandler.toString().includes('revealedMessageId')));
interval = setInterval(run, 300);
FluxDispatcher._orderedActionHandlers.MESSAGE_DELETE[index].actionHandler = (handler => (e) => {
    const thing = styleMessage(e)
    deleted.push(e)
})(this.oldHandle = FluxDispatcher._orderedActionHandlers.MESSAGE_DELETE[index].actionHandler) 
