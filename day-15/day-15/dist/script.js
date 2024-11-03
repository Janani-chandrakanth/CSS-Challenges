document.addEventListener('DOMContentLoaded',function(){
var droppedFiles=false;
var filename='';
var dropzone=document.querySelector('.dropzone');
var button=document.querySelector('.upload-btn');
var syncing=document.querySelector('.syncing');
var done=document.querySelector('.done');
var bar=document.querySelector('.bar');
var input=document.querySelector('.input[type="file"]');
var uploading=false;
var timeoutID;

dropzone.addEventListener('dragover',function(e){
e.preventDefault();
e.stopPropagation();
dropzone.classList.add('is-dragover');

});
dropzone.addEventListener('dragleave',function(e){
	e.preventDefault();
	e.stopPropation();
	dropzone.classList.remove('is-dragover');
});
dropzone.addEventListener('drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove('is-dragover');
    droppedFiles = e.dataTransfer.files;
    fileName = droppedFiles[0].name;
    document.querySelector('.filename').textContent = fileName;
    document.querySelector('.dropzone .upload').style.display = 'none';
  });

  button.addEventListener('click', function() {
    startUpload();
  });

  input.addEventListener('change', function() {
    fileName = this.files[0].name;
    document.querySelector('.filename').textContent = fileName;
    document.querySelector('.dropzone .upload').style.display = 'none';
  });

  function startUpload() {
    if (!uploading && fileName !== '') {
      uploading = true;
      button.textContent = 'Uploading...';
      dropzone.style.display = 'none';
      syncing.classList.add('active');
      done.classList.add('active');
      bar.classList.add('active');
      timeoutID = setTimeout(showDone, 3200);
    }
  }

  function showDone() {
    button.textContent = 'Done';
  }
});