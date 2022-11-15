export default class LocalFileService {

  #fileHandle;

  constructor() {
    
  }

  async open(){

    const pickerOpts = {
      types: [
        {
          description: 'Markdown',
          accept: {
            'text/*': ['.md']
          }
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false
    };

    // open file picker
    let fileHandle;
    [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    this.#fileHandle = fileHandle;

    if (fileHandle.kind === 'file') {
      
      const file = await fileHandle.getFile();
      const content = await file.text();
      return content;

    } else {
      throw Error("Please select a markdown file");
    }

  }
}