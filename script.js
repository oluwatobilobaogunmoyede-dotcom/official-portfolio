var msg=document.getElementById('msg'),count=document.getElementById('count');
msg.addEventListener('input',function(){count.textContent=msg.value.length+'/5000'});
document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  document.getElementById('status').textContent='Message sent. I’ll reply within 24 hours.';
  e.target.reset();count.textContent='0/5000';
});
