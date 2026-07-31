
let editing=false;
const editBtn=document.getElementById('toggle-edit');
if(editBtn){
  editBtn.addEventListener('click',()=>{
    editing=!editing;
    document.querySelectorAll('[data-editable]').forEach(el=>el.contentEditable=editing?'true':'false');
    editBtn.textContent=editing?'Bloquear edición':'Editar textos';
  });
}
const printBtn=document.getElementById('print-doc');
if(printBtn) printBtn.addEventListener('click',()=>window.print());
const downloadBtn=document.getElementById('download-html');
if(downloadBtn){
  downloadBtn.addEventListener('click',()=>{
    const copy=document.documentElement.cloneNode(true);
    copy.querySelectorAll('[contenteditable]').forEach(el=>el.removeAttribute('contenteditable'));
    const blob=new Blob(['<!doctype html>\n'+copy.outerHTML],{type:'text/html;charset=utf-8'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download='F01_uso_sede_editado.html';
    a.click();
    URL.revokeObjectURL(a.href);
  });
}
