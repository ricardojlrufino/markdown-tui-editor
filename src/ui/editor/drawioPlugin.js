import mermaid from 'https://unpkg.com/mermaid@9/dist/mermaid.esm.min.mjs';

// Step 1: Define the user plugin function
function drawioPlugin() {
    const toHTMLRenderers = {
      drawio(node) {
        
        //    const generator = new latexjs.HtmlGenerator({ hyphenate: false });
        //const { body } = latexjs.parse(node.literal, { generator }).htmlDocument();

        const body = {innerHTML : "fake"};

        return [
          { type: 'openTag', tagName: 'div', outerNewLine: true },
          { type: 'html', content: body.innerHTML },
          { type: 'closeTag', tagName: 'div', outerNewLine: true }
        ];
      },

      // Demo https://mermaid.live/edit
      mermaid(node) {


        // se possivel usar esse timer do typescript
        // https://github.com/nhn/tui.editor/blob/master/plugins/chart/src/index.ts#L332

        // TODO: existe uma chance desse metodo ser chamado mais de uma vez (para cada diagrama).
        setTimeout(()=>{
          mermaid.init();
          console.log("mermaid.init()");
        }, 200);
        
        return [
          { type: 'openTag', tagName: 'pre', outerNewLine: true , attributes: { 'class': "mermaid" }},
          { type: 'html', content: node.literal },
          { type: 'closeTag', tagName: 'pre', outerNewLine: true }
        ];
      },


      plantuml(node) {

        return [];
        
        //    const generator = new latexjs.HtmlGenerator({ hyphenate: false });
        //const { body } = latexjs.parse(node.literal, { generator }).htmlDocument();

        // Exemplo:
        // http://www.plantuml.com/plantuml/uml/Aov9B2hXil98pSd9LoZFByf9iUOgBial0000

        // testar
        // https://plantuml.com/code-javascript-synchronous

        // const b64 = zip_deflate(node);

        // console.log(b64);

        // const src = "https://www.plantuml.com/plantuml/svg/" + b64;

        // const body = `<img src="${src}" />`;

        // return [
        //   { type: 'openTag', tagName: 'div', outerNewLine: true },
        //   { type: 'html', content: body },
        //   { type: 'closeTag', tagName: 'div', outerNewLine: true }
        // ];
      },
    }

    return { toHTMLRenderers }
  }

  export {drawioPlugin};