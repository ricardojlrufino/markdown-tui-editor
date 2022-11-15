
const URL = "http://localhost:5173";
const response = document.getElementById('gitlab-editor');


function getFileData(source, callback){
  callback("./DEMO.md");
}


function onSaveFile(source, data){

  window.localStorage.setItem('lastFile', data);

}

function onMessageFromEditor(evt, source){

  response.innerText = JSON.stringify(evt.data);

  debugger;

  if (evt.data["event"] && evt.source == source.drawIoWindow) {
    //var msg = JSON.parse(evt.data);
    var msg = evt.data;

    console.log('Received event:' + msg.event, msg);

    // Received if the editor is ready
    if (msg.event == 'init') {

      getFileData(source, (data) => {

        source.drawIoWindow.postMessage({ action: 'load', data: data }, '*');

      });
      
    }

    // Received if the user clicks save
    else if (msg.event == 'save') {

      // Closes the editor
      window.removeEventListener('message', onMessageFromEditor);
      source.drawIoWindow.close();
      source.drawIoWindow = null;

      setTimeout(()=>{
        onSaveFile(source, msg.data);
      },100);
   
    }
  }
  
}


	function startEditing(source){
		var url = URL + '/?embed=1&proto=json';

		if (source.drawIoWindow == null || source.drawIoWindow.closed) {
			// Add message communication with draw.io tab 
			window.addEventListener('message', (evt) => onMessageFromEditor(evt, source));
			source.drawIoWindow = window.open(url);
		}
		else{
			// Shows existing editor window
			source.drawIoWindow.focus();
		}
	}


var source = document.getElementById("gitlab-editor");
startEditing(source);


source.innerHTML = localStorage.getItem('lastFile');


// close child window
window.addEventListener('beforeunload', (event) => {
  source.drawIoWindow.close();
});

