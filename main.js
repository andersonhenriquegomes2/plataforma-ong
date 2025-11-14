// Máscaras simples
document.addEventListener("DOMContentLoaded", () => {
  const cpf = document.getElementById("cpf");
  const tel = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  function mask(input, fn) {
    input.addEventListener("input", () => input.value = fn(input.value));
  }

  mask(cpf, v => v.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2'));
  mask(tel, v => v.replace(/\D/g,'').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2'));
  mask(cep, v => v.replace(/\D/g,'').replace(/(\d{5})(\d)/, '$1-$2'));
});
