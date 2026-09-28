document.getElementById("caixa 1").addEventListener("click", function() {
    this.style.border = "2px solid green";
});
document.getElementById("caixa 2").addEventListener("click", function() {
    this.style.border = "2px solid green";
});
document.getElementById("caixa 3").addEventListener("click", function() {
    this.style.border = "2px solid green";
});
document.getElementById('primario').addEventListener('click', function() {
            var caixas = document.querySelectorAll('.caixa');
            caixas.forEach(function(caixa) {
                caixa.style.borderColor = 'blue';
            });
        });