document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capturando as respostas do formulário
    const q1 = document.querySelector('radio[name="q1"]:checked').value;
    const q2 = document.querySelector('radio[name="q2"]:checked').value;
    const q3 = document.querySelector('radio[name="q3"]:checked').value;
    const q4 = document.querySelector('radio[name="q4"]:checked').value;
    const q5 = document.querySelector('radio[name="q5"]:checked').value;

    let recomendacao = "";
    let explicacao = "";

    // Lógica do Algoritmo de Escolha baseado em árvore de decisão
    if (q5 === "esp-s3") {
        recomendacao = "ESP32-S3";
        explicacao = "Seu projeto necessita de Inteligência Artificial, processamento de imagem ou visão computacional. O ESP32-S3 é a placa ideal do mercado para lidar com essa carga de processamento e possui suporte nativo para câmeras (ESP32-CAM R2).";
    } else if (q2 === "esp-moderno") {
        recomendacao = "ESP32-C6";
        explicacao = "A sua necessidade de conexão em protocolos de ponta (Wi-Fi 6, Zigbee ou Thread) aponta diretamente para o novíssimo ESP32-C6. Perfeito para ecossistemas de automação de automação residencial avançada.";
    } else if (q2 === "esp-wifi" || q1 === "esp-avancado") {
        recomendacao = "ESP32 Dev Module (Clássico)";
        explicacao = "Para projetos que demandam poder de processamento dual-core e conectividade Wi-Fi/Bluetooth padrão para mandar dados para nuvens ou servidores, o ESP32 clássico trará o melhor custo-benefício.";
    } else if (q4 === "arduino-mega") {
        recomendacao = "Arduino Mega 2560";
        explicacao = "Como o seu projeto é offline mas exige o uso massivo de pinos (muitos sensores, atuadores e relés simultâneos), o Arduino Mega oferece a estabilidade e a quantidade exata de conexões que você precisa.";
    } else if (q4 === "arduino-nano" && q3 === "esp-bateria") {
        recomendacao = "Arduino Nano";
        explicacao = "Seu projeto é básico, compacto e vai rodar fora da tomada. O Arduino Nano possui as dimensões perfeitas para caber em cases pequenos consumindo pouca energia rodando de forma offline.";
    } else {
        recomendacao = "Arduino UNO R3";
        explicacao = "Para um projeto focado em componentes padrão, offline e nível iniciante a intermediário, o clássico Arduino UNO R3 é a escolha ideal pela facilidade de conexão de cabos e proteção contra erros de bancada.";
    }

    // Exibindo o resultado na tela
    document.getElementById('resultado-texto').innerHTML = `<strong>Recomendamos o: ${recomendacao}</strong><br><br>${explicacao}`;
    document.getElementById('resultado').classList.remove('hidden');
    
    // Rola a página suavemente até o resultado
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
});

function reiniciarQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('resultado').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}