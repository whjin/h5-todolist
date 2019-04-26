let addEvent = document.querySelector('.add_icon');
let addInput = document.querySelector('.add_input');
let wait = document.querySelector('.wait');
let done = document.querySelector('.done');
let controlModify = true;

addEvent.onclick = function () {
  let addContent = addInput.value.trim();
  if (addContent === "") {
    alert("请输入待办事项")
  } else {
    addWaitItem(addContent);
    addInput.value = "";
  }
};

function addWaitItem(content) {
  let waitItem = document.createElement('div');
  let waitItemText = document.createElement('div');
  let waitItemIcons = document.createElement('div');
  let waitItemIconsModify = document.createElement('div');
  let waitItemIconsTrash = document.createElement('div');
  let waitItemIconsDone = document.createElement('div');

  waitItem.className = "wait_item";
  waitItemText.className = "wait_item_text";
  waitItemIcons.className = "wait_item_icons";
  waitItemIconsModify.className = "wait_item_icons_modify";
  waitItemIconsTrash.className = "wait_item_icons_trash";
  waitItemIconsDone.className = "wait_item_icons_done";

  //添加待办事项
  waitItemText.innerHTML = content;

  //添加icon
  waitItemIconsModify.innerHTML = `<i class="fa fa-pencil"></i>`;
  waitItemIconsTrash.innerHTML = `<i class="fa fa-trash"></i>`;
  waitItemIconsDone.innerHTML = `<i class="fa fa-check-circle"></i>`;

  //添加元素，形成父子关系
  waitItemIcons.appendChild(waitItemIconsModify);
  waitItemIcons.appendChild(waitItemIconsTrash);
  waitItemIcons.appendChild(waitItemIconsDone);
  waitItem.appendChild(waitItemText);
  waitItem.appendChild(waitItemIcons);

  //添加到页面上
  wait.appendChild(waitItem);

  //增加修改方法
  waitItemIconsModify.onclick = function (event) {
    if (controlModify === true) {
      controlModify = false;
      let waitItemBefore = waitItemText.innerHTML;
      let waitItemTextInput = document.querySelector('.wait_item_text_input');
      waitItemText.innerHTML = `<input type="text" class="wait_item_text_input">`;
      waitItemTextInput.value = waitItemBefore;
      waitItemTextInput.focus();
      event = window.event || event;
      event.stopPropagation() ? event.stopPropagation() : event.cancelBubble = true;
      document.onclick = function () {
        waitItemText.innerHTML = waitItemTextInput.value;
        controlModify = true;
      }
    }
  };

  //添加删除方法
  waitItemIconsTrash.onclick = function () {
    waitItem.parentNode.removeChild(waitItem);
  };

  //添加完成方法
  waitItemIconsDone.onclick = function () {
    if (controlModify === true) {
      addDoneItem(waitItemText.innerHTML);
      waitItem.parentNode.removeChild(waitItem);
    }
  };

  function addDoneItem(doneContent) {
    let doneItem = document.createElement("div");
    let doneItemText = document.createElement("div");
    let doneItemIcons = document.createElement("div");
    let doneItemIconsTrash = document.createElement("div");
    let doneItemIconsDone = document.createElement("div");

    //添加class
    doneItem.className = "done_item";
    doneItemText.className = "done_item_text";
    doneItemIcons.className = "done_item_icons";
    doneItemIconsTrash.className = "done_item_icons_trash";
    doneItemIconsDone.className = "done_item_icons_done";

    //添加完成事项内容
    doneItemText.innerHTML = doneContent;

    //添加icon
    doneItemIconsTrash.innerHTML = `<i class="fa fa-trash"></i>`;
    doneItemIconsDone.innerHTML = `<i class="fa fa-check-circle"></i>`;

    //添加元素，形成父子关系
    doneItemIcons.appendChild(doneItemIconsTrash);
    doneItemIcons.appendChild(doneItemIconsDone);
    doneItem.appendChild(doneItemText);
    doneItem.appendChild(doneItemIcons);

    //添加到页面上
    done.appendChild(doneItem);

    //添加删除方法
    doneItemIconsTrash.onclick = function () {
      doneItem.parentNode.removeChild(doneItem);
    };

    //添加未完成方法
    doneItemIconsDone.onclick = function () {
      addWaitItem(doneItemText.innerHTML);
      doneItem.parentNode.removeChild(doneItem);
    }
  }
}























