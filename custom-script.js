/*
 * @Author: mangwu                                                             *
 * @File: custom-script.js                                                     *
 * @Date: 2023-10-27 02:02:19                                                  *
 * @LastModifiedDate: 2023-11-06 10:22:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
const CONFORMANCE = `<h2 class="no-ref no-num heading settled" id="w3c-conformance-zh"><span class="content">一致性</span><a class="self-link" href="#w3c-conformance-zh"></a></h2>
<h3 class="no-ref no-num heading settled" id="w3c-conventions-zh"><span class="content">文档规约</span><a class="self-link" href="#w3c-conventions-zh"></a></h3>
<p>一致性要求通过描述性断言和 RFC 2119术语的组合来表达。
本文件规范性部分中的关键词 <q>MUST</q> ， <q>MUST NOT</q> ， <q>REQUIRED</q> ， <q>SHALL</q> ， <q>SHALL NOT</q> ， <q>SHOULD</q> ， <q>SHOULD NOT</q> ， <q>RECOMMENDED</q> ， <q>MAY</q> 和 <q>OPTIONAL</q> 应按照 RFC 2119 中的描述进行解释。但是，为了便于阅读，
这些单词在本规范中并不是全部以大写字母出现。</p>
<p>本规范的所有文本都是规范性的，但明确标记为非规范性的部分、示例和注释除外。 <a data-link-type="biblio" href="#biblio-rfc2119" title="Key words for use in RFCs to Indicate Requirement Levels">[RFC2119]</a></p>
<p>本规范中的示例用"例如(for example)"一词引入，或用 <code>class="example"</code> 与规范性文本分开，如下所示:</p>
<div class="custom-example" data-content="例子 X" id="w3c-example-zh"> <a class="self-link" href="#w3c-example-zh"></a> 这是一个信息丰富的例子。 </div>
<p>信息性注释以单词"注意(note)"开头，并以 <code>class="Note"</code> 与规范性文本分开，如下所示:</p>
<p class="note" role="note"> 注意，这是一个信息性的注释。 </p>
<h3 class="no-ref no-num heading settled" id="w3c-conformant-algorithms-zh"><span class="content">一致性算法</span><a class="self-link" href="#w3c-conformant-algorithms-zh"></a></h3>
<p>作为算法的一部分，要求(Requirements)被分解(phrased)为命令式(如"去掉任何前导空格字符"或
"返回false并中止这些步骤")，在引入算法时，会使用关键字("必须"、"应当"、
"可以"等)的含义对要求(Requirements)进行解释。</p>
<p>被分解(phrased)的成算法或特定步骤的一致性要求(Conformance
	requirements)可以以任何方式实现，只要最终结果是等效的。
	特别地，本规范中定义的算法旨在易于理解，而不是旨在易于(计算机)运行。
	鼓励实现对算法进行优化。</p>`;

const CONFORMANCETOC = `<a href="#w3c-conformance-zh"><span class="secno"></span> <span class="content">一致性</span></a>
<ol class="toc"><li><a href="#w3c-conventions-zh"><span class="secno"></span> <span class="content">文档规约</span></a>
</li><li><a href="#w3c-conformant-algorithms-zh"><span class="secno"></span> <span class="content">一致性算法</span></a></li></ol>`;

/**
 * @description 尝试执行代码
 * @param {Function} callback 试运行的回调函数
 * @param {string} message 运行错误的打印消息
 * @param  {...any} args callback的参数
 */
function tryCatch(callback, message, ...args) {
  try {
    callback(...args);
  } catch (error) {
    console.log(message, error.message);
  }
}

/**
 * @description 查询元素
 * @param {string} selector 查询器
 * @param {HTMLElement}
 * @returns {NodeList}
 */
function getElements(selector, parent = document) {
  return parent.querySelectorAll(selector);
}
/**
 * @description 查询元素
 * @param {string} selector 查询器
 * @param {HTMLElement}
 * @returns {HTMLElement}
 */
function getElement(selector, parent = document) {
  return parent.querySelector(selector);
}
// 切换图像功能
function figureAllChange() {
  const figureChangeBoxes = getElements(".figure-change");
  for (const item of figureChangeBoxes) {
    figureChange(item);
  }
}

/**
 * @description 队单个图像添加图像切换功能
 * @param {HTMLElement} figureChangeBox 图像包裹层
 */
function figureChange(figureChangeBox) {
  const tabs = getElements(".custom-tabs-tab", figureChangeBox);
  const figures = getElements("figure", figureChangeBox);
  tabsChange(tabs, figures);
}

/**
 * @description 添加监听器
 * @param {NodeList} tabs
 */
function tabsChange(tabs, figures) {
  const tab1 = tabs[0];
  const tab2 = tabs[1];
  const figure1 = figures[0];
  const figure2 = figures[1];

  tab1.addEventListener("click", () => {
    const classList = tab1.classList;
    if (classList.length === 1) {
      classList.add("custom-tabs-tab-active");
      tab2.classList.remove("custom-tabs-tab-active");
      figure1.classList.remove("figure-hidden");
      figure2.classList.add("figure-hidden");
    }
  });
  tab2.addEventListener("click", () => {
    const classList = tab2.classList;
    if (classList.length === 1) {
      classList.add("custom-tabs-tab-active");
      tab1.classList.remove("custom-tabs-tab-active");
      figure2.classList.remove("figure-hidden");
      figure1.classList.add("figure-hidden");
    }
  });
}

/**
 * @description 翻译所有引用面板中的Reference in:
 */
function translatePanels() {
  const dfns = getElements(".dfn-panel");
  for (const dfn of dfns) {
    translatePanel(dfn);
  }
}

/**
 * @description 翻译一个引用面板中的Reference in:
 * @param {HTMLElement} dfn
 */
function translatePanel(dfn) {
  const b = dfn.querySelector("p b");
  if (b) {
    b.textContent = "引用列表: ";
  }
}

/**
 * @description 翻译目录英文部分
 */
function translateToc() {
  // const tocTitle = getElement("#contents");
  // tocTitle.textContent = "目录";
  const tocJump = getElement("#toc-jump > span + span");
  tocJump.textContent = "跳转到目录";
  const tocNav = getElement("#toc-nav");
  const tocToggle = getElement("#toc-toggle > span + span");
  setToggleContentTranlation(tocToggle);
  const mutationObserver = new MutationObserver((mutations) => {
    outer: for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (setToggleContentTranlation(node)) {
          break outer;
        }
      }
    }
  });
  mutationObserver.observe(tocNav, { childList: true, subtree: true });
}

/**
 * @description 翻译触发器内部文本
 * @param {Node} node
 * @returns {boolean}
 */
function setToggleContentTranlation(node) {
  if (node.textContent === "Pop Out Sidebar") {
    node.textContent = "弹出侧边栏";
    return true;
  } else if (node.textContent === "Collapse Sidebar") {
    node.textContent = "折叠侧边栏";
    return true;
  }
  return false;
}
/**
 * @description 翻译所有Dfn中的类型英文文本
 */
function translateDfnTypes() {
  const originDfns = getElements(".origin-dfn");
  for (const od of originDfns) {
    translateDfnType(od);
  }
}
/**
 * @description 翻译一个Dfn中的类型英文文本
 * @param {HTMLElement} originDfn
 */
function translateDfnType(originDfn) {
  const customDfn = originDfn.nextElementSibling;
  if (customDfn && customDfn.className == "custom-dfn") {
    const replacement = getElement(".replacement", customDfn);
    const span = getElement("span + span", originDfn);
    const idlNameLink = getElement("a", span);
    const copy1 = idlNameLink.cloneNode(true);
    const copy2 = replacement.cloneNode(true);
    span.replaceChildren(copy1, copy2);
    span.previousSibling.nodeValue = "，"; // 可修改英文逗号为中文逗号
  }
}
/**
 * @description 翻译标题
 */
function translateTitle() {
  // 一致性标题
  const element = getElement("#x2-conformance");
  if (element && element.childNodes.length > 1) {
    element.childNodes[1].textContent = "一致性";
  }
  // 一致性目录标题
  const tocxref = getElement("#toc > ol > li:nth-child(4) > a");
  console.log(tocxref);
  if (tocxref && tocxref.childNodes.length > 1) {
    tocxref.childNodes[1].textContent = "一致性";
    console.log(tocxref.childNodes[1]);
  }
  // 引用标题
  let normativeReferences = getElement("#generatedID");
  normativeReferences.id = "normative-references";
  let selfLink = getElement("#normative-references > div > a");
  selfLink.setAttribute("href", "#normative-references");
  normativeReferences = getElement("#generatedID");
  normativeReferences.id = "informative-references";
  selfLink = getElement("#informative-references > div > a");
  selfLink.setAttribute("href", "#informative-references");
  // 引用目录标题
  const c1 = getElement(
    "#toc > ol > li:nth-child(15) > ol > li:nth-child(1) > a"
  );
  c1.setAttribute("href", "#normative-references");
  const c2 = getElement(
    "#toc > ol > li:nth-child(15) > ol > li:nth-child(2) > a"
  );
  c2.setAttribute("href", "#informative-references");
}

/**
 * @description 替换文本
 * @param {string} seletor 选择器
 * @param {string} translateZh 翻译文本
 * @param {HTMLElement} parent 查询父节点
 */
function tranlateIndexBySeletor(seletor, translateZh = "", parent = document) {
  const element = getElement(seletor, parent);
  if (element) {
    // 找到就进行翻译
    element.textContent = translateZh;
  }
}

/**
 * @description 翻译引用
 */
function tranlateReferences() {
  // 目录
  tranlateIndexBySeletor("a[href='#references'] .content", "引用");
  tranlateIndexBySeletor("a[href='#normative'] .content", "规范性引用");
  tranlateIndexBySeletor("a[href='#informative'] .content", "资料性引用");

  // 标题
  tranlateIndexBySeletor("#references .content", "引用");
  tranlateIndexBySeletor("#normative .content", "规范性引用");
  tranlateIndexBySeletor("#informative .content", "资料性引用");
}

/**
 * @description 添加一致性翻译
 */
function addZhComformance() {
  // 添加中文一致性条目
  const div = document.createElement("div");
  div.setAttribute("data-fill-with", "conformance-zh");
  div.innerHTML = CONFORMANCE;
  const originConformance = getElement("div[data-fill-with='conformance']");
  if (originConformance) {
    document.body.insertBefore(div, originConformance);
  } else {
    throw new Error("originConformance 不存在，添加一致性内容失败");
  }

  // 添加到目录中
  const toc = document.createElement("li");
  toc.innerHTML = CONFORMANCETOC;
  const originConformanceToc = getElement(
    "a[href='#w3c-conformance']"
  )?.parentElement;
  const navOl = getElement("ol[role='directory']");
  if (originConformance) {
    navOl.insertBefore(toc, originConformanceToc);
    originConformanceToc.style.display = "none";
  } else {
    throw new Error("originConformanceToc 不存在，添加一致性目录失败");
  }
}

/**
 * @description 添加中文的文档翻译时间
 */
function addZhTime() {
  const timeEle = document.querySelector("time.dt-updated");
  if (timeEle) {
    const date = new Date(timeEle.dateTime);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    timeEle.textContent = `${year}年${month}月${day}日`;
  }
}

function translateMetaData() {
  tranlateIndexBySeletor("details > summary", "有关此文档的更多详细信息");
  // tranlateIndexBySeletor("details > div > dl dt:nth-child(1)", "本版本: ");
  // tranlateIndexBySeletor(
  //   "details > div > dl dt:nth-child(3)",
  //   "最新发布版本: "
  // );
}

const dfnMap = new Map([
  ["touch point", "触摸点"],
  ["active touch point", "活跃触摸点"],
  // ["identifier", "标识符"],
]);
function translateInternalDFN() {
  const links = document.querySelectorAll("a.internalDFN");
  links.forEach((v) => {
    if (v.classList.length === 1) {
      if (v.children.length) {
        // 有非文本节点的子元素
        const enKey = v.children[0].textContent;
        if (dfnMap.has(enKey)) v.children[0].textContent = dfnMap.get(enKey);
      } else {
        // 直接的文本节点
        v.textContent = dfnMap.get(v.textContent) || v.textContent;
      }
    }
  });
}

window.addEventListener("load", () => {
  // 监听<head>
  const head = document.querySelector("head");
  const mutationObserver = new MutationObserver((mutations, observer) => {
    outer: for (const mutation of mutations) {
      for (const removeNode of mutation.removedNodes) {
        if (removeNode.id === "fixuphook") {
          tryCatch(figureAllChange, "figureAllChange方法执行错误:");
          tryCatch(translatePanels, "translatePanels方法执行错误:");
          tryCatch(translateToc, "translateToc方法执行错误:");
          tryCatch(translateMetaData, "translateMetaData方法执行错误:");
          tryCatch(translateTitle, "translateTitle方法执行错误:");
          tryCatch(translateInternalDFN, "translateInternalDFN方法执行错误:");
          observer.disconnect();
          break outer;
        }
      }
    }
  });
  mutationObserver.observe(head, { childList: true });
});
