document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    const q3 = document.querySelector('input[name="q3"]:checked').value;
    const q4 = document.querySelector('input[name="q4"]:checked').value;
    const q5 = document.querySelector('input[name="q5"]:checked').value;

    let recomendacao = "";
    let explicacao = "";

    if (q1 === "atendimento") {
        recomendacao = "ManyChat integrado com IA";
        explicacao = "Como o seu maior problema é a demora no atendimento, automatizar as respostas do seu Instagram e WhatsApp com um robô inteligente garantirá que nenhum cliente fique sem resposta, salvando vendas preciosas na madrugada ou horários de pico.";
    } else if (q1 === "dados") {
        recomendacao = "Copilot IA integrado ao Excel / Google Sheets";
        explicacao = "Para arrumar a gestão e estoque, use ferramentas integradas de IA em planilhas. Você pode simplesmente colar seus dados brutos de faturamento e pedir via texto para a IA calcular margens de lucro e produtos parados de forma instantânea.";
    } else if (q3 === "imagem") {
        recomendacao = "Canva (Magic Design com IA)";
        explicacao = "Sua preferência por artes visuais pede o Canva IA. Com a ferramenta Magic Design, você digita o segmento da sua loja (ex: 'Loja de Roupas Femininas') e a IA monta automaticamente layouts profissionais prontos para postar.";
    } else if (q3 === "video") {
        recomendacao = "CapCut Online (Gerador de Vídeos IA)";
        explicacao = "Para explodir as vendas por vídeos, use a IA do CapCut. Ela consegue legendar seus vídeos automaticamente, remover ruídos de fundo da sua loja e até aplicar vozes narradoras comerciais que prendem a atenção do cliente.";
    } else {
        recomendacao = "ChatGPT / Gemini (IAs de Texto)";
        explicacao = "A melhor porta de entrada gratuita para o seu negócio são as IAs conversacionais. Use-as para criar todas as mensagens de cobrança, roteiros de abordagem de clientes e legendas chamativas de vendas para postar diariamente.";
    }

    document.getElementById('resultado-texto').innerHTML = `<strong>🏆 ${recomendacao}</strong><br><br>${explicacao}`;
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });
});

function reiniciarQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('resultado').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}