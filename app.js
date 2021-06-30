document.querySelector('button').addEventListener('click', function(){
    // const newColor = rgb(0, 0, 0);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('h1').innerText = newColor;
})