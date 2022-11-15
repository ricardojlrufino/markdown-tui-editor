import { useState , useEffect} from 'preact/hooks'

import GitlabService from './services/GitlabService';
import EmbeddedWindowApi from './services/EmbeddedWindowApi';

import LocalEditor from './ui/editor/Editor';

export function App() {
  const [count, setCount] = useState(0);

  const init = () => {

    const text = "...";

    const editor = new LocalEditor();

    const urlParams = new URLSearchParams(window.location.search);
    const embed = urlParams.get('embed');

    if(embed === "1"){

      new EmbeddedWindowApi(editor).init();
      
    }

  }

  useEffect(() => {
    init(); // this will fire only on first render
  }, []);


  return (
    <>
      <div class="box">
        <div class="row header">
          <p>header (sized to content) </p>
        </div>
        <div class="row content">
          <div id="editor"></div>
        </div>
        <div class="row footer">
          <p>footer (fixed height)</p>
        </div>
      </div>
    </>
  )
}
