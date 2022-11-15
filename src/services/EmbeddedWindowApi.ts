import LocalEditor from "../ui/editor/Editor";
import { FileService } from "./FileService";
import GitlabService from "./GitlabService";

export default class EmbeddedWindowApi  {

  fileService: GitlabService;

  constructor(private editor: LocalEditor) {
    this.fileService = new GitlabService();
  }

  init() {

    // Handle CTRL + S
    document.addEventListener('keydown', e => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        console.log('CTRL + S');
        window.opener.postMessage({event : "save", data : this.editor.getMarkdown()}, "*");
      }
    });

    window.addEventListener('message', evt => {
      
      if (evt.data["action"] && evt.source == window.opener) {

        var msg = evt.data;
    
        // Received if the editor is ready
        if (msg.action == 'load') {

          const file =  msg.data;
          // const file = await ask({title: "Nome do Arquivo", default: "./DEMO.md", cancel : true});
      
          console.log("Selected file: " + file);
      
          this.fileService.open(file, (data)=>{
              this.editor.setMarkdown(data, false);
          });

        }

      }
  
      // ...
    },false);

    window.opener.postMessage({event : "init", data : "from-editor"}, "*");

  };

}