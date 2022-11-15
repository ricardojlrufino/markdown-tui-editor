const { Editor } = toastui;
const { codeSyntaxHighlight } = Editor.plugin;
import LocalFileService from "../../services/LocalFileService";
import { drawioPlugin } from "./drawioPlugin";



export default class LocalEditor {

  editor;
  localFileService;

  constructor() {

    // Force VITE to reload on change this.
    if (import.meta.hot) {
      import.meta.hot.accept((newModule) => {
        if (newModule) {
          window.location.reload();
        } 
      });
    }

    this.localFileService = new LocalFileService();

    this.editor = new toastui.Editor({
      el: document.querySelector('#editor'),
      height: '100%',
      initialValue: "...",
      initialEditType: 'wysiwyg',
      usageStatistics: true,
      toolbarItems: this.initToolbar(),
      plugins : [codeSyntaxHighlight, drawioPlugin]
      // hooks: 
      //   { // https://github.com/nhn/tui.editor/issues/2199
      //     "addImageBlobHook" : function(blob,  callback){ 
      //         alert("pasted");
      //     }
      //   }
      
    });
  }

  openFile(){

    this.localFileService.open()
    .then((data) => {

      debugger;
      this.editor.setMarkdown(data);

    });

  }

  initToolbar(){

    var _this =  this;

    function createLastButton() {

      const button = document.createElement('button');

      button.className = 'toastui-editor-toolbar-icons';
      button.style.backgroundImage = 'none';
      button.style.margin = '0';
      button.innerHTML = `Open`;
      button.addEventListener('click', () => {
        //editor.exec('bold');
        _this.openFile();
      });

      return button;
    }

    return [
      [{
        el: createLastButton(),
        command: 'open',
        tooltip: 'Open File'
      }],
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      
    ]
  }

  getMarkdown() {
    return this.editor.getMarkdown();
  }

  
}