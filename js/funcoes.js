 function gerar_numeros() {
     var x = Math.floor((Math.random() * 10) + 1);
     document.getElementById("numero01").innerHTML = x;
     var x = Math.floor((Math.random() * 10) + 1);
     document.getElementById("numero02").innerHTML = x;
 }


 $("#form_cadastro").submit(function(event) {
     event.preventDefault();

     let validacaoCampos = true;
     let nome = $('#nome').val();
     let email = $('#email').val()
     let telefone = $('#telefone').val()

     if (nome.length == 0) {
         $('#nome').addClass('is-invalid');
         validacaoCampos = false
     } else {
         $('#nome').removeClass('is-invalid');
     }

     if (email.length == 0) {
         $('#email').addClass('is-invalid');
         validacaoCampos = false
     } else {
         $('#email').removeClass('is-invalid');
     }

     if (telefone.length == 0) {
         $('#telefone').addClass('is-invalid');
         validacaoCampos = false
     } else {
         $('#telefone').removeClass('is-invalid');
     }


     if (validacaoConta() == true && validacaoCampos == true) {
         document.getElementById("msg_validacao").style.display = "none";
         document.getElementById("validacao").style.border = "none";
         $("#resultado").html("Carregando...");
         let formulario = $("#form_cadastro").serialize();
         localStorage.setItem('Minha Loja', 'Nome: ' + nome + ', email: ' + email + ',telefone: ' + telefone);
         $("#resultado").html("Obrigado pela sua inscrição!!");
     } else {

         document.getElementById("msg_validacao").style.display = "block";
         document.getElementById("validacao").style.border = "3px dashed black";
     }

 });


 function validacaoConta() {

     var resultado = true;
     var n1 = parseInt($('#numero01').text());
     var n2 = parseInt($('#numero02').text());
     var n3 = parseInt($('#validacao').val());

     if (n1 + n2 != n3) {
         resultado = false;

     }

     return resultado;

 }