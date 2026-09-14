
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
menu?.addEventListener('click', () => {
  links.style.display = links.style.display === 'flex' ? '' : 'flex';
  if (links.style.display === 'flex') {
    links.style.position='absolute'; links.style.top='78px'; links.style.left='0'; links.style.right='0';
    links.style.padding='18px 24px'; links.style.background='rgba(243,240,232,.98)';
    links.style.borderBottom='1px solid #d9d4c8'; links.style.flexDirection='column'; links.style.gap='15px';
  }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<=900) links.style.display='none'}));
