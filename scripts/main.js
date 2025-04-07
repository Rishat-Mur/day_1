
function color() {
    const button = document.getElementById('But');
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];

    var sum = document.getElementById('szt');
    var normsum = parseInt(sum.innerText)
    console.log(sum);
    normsum++
    sum.textContent = normsum;
    console.log(sum);

      
    button.addEventListener('click', function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
})
}