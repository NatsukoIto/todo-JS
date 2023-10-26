import "./styles.css";


// 追加ボタンイベント
// テキストボックスの値を取得し、初期化
const onClicklAdd = () =>{
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
}

//  未完了リストから指定の要素を削除(関数化)
const deleteFromIncompleteList = (target) => { 
  document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加する関数(関数化)
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");
  li.className = "input-line";
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";
  // pタグ生成
  const p = document.createElement("p");
  p.innerText = text;
  p.className = "input-text";
  // 完了butttonタグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText  = "完了";
  
  // 完了buttonのイベント
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ（li）を未完了リストから削除
     const deleteTargetChild = completeButton.parentNode;
     deleteFromIncompleteList(deleteTargetChild.parentNode);
    // 完了リストに追加する要素
    const addTargetchild = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTargetchild.firstElementChild.innerText;
    // li以下を初期化
    const addTarget = addTargetchild.parentNode;
    addTarget.textContent = null;
     // divタグ生成
     const div = document.createElement("div");
     div.className = "list-row";
     // pタグ生成
     const p = document.createElement("p");
     p.innerText = text;
     p.className = "input-text";
    // buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（li）を完了リストから削除
      const deleteTargetChild = backButton.parentNode;
      const deleteTarget = deleteTargetChild.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    })

    // liタグの子要素に各要素を設定
    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  

  // 削除butttonタグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText  = "削除";
  // 削除 buttonのイベント
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    const deleteTargetChild = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTargetChild.parentNode);
  });
  


  // liタグの子要素に各要素を指定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
 
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);

}

document
.getElementById("add-button")
.addEventListener("click",() => onClicklAdd());

