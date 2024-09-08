function sendMail(){
    let parms = {
        name : document.getElementById("name").value
    }
    
    emailjs.send("service_62kd1bm", "template_81x58di", parms).then(function(response) {
                console.log('Email enviado com sucesso!', response.status, response.text);
                alert("Confirmação enviada com sucesso!");
            }, function(error) {
                console.log('Erro ao enviar o email:', error);
                alert("Erro ao enviar confirmação.");
            });
};
