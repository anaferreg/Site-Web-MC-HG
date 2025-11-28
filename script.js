   // Número de telefone da empresa (SUBSTITUA AQUI PELO REAL)
    const phoneData = "5511948402764"; 

    // Toggle Menu Mobile
    function toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    }

    // Scroll Suave para Contato
    function scrollToContact() {
        document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
    }

    // Abrir WhatsApp direto
    function openWhatsApp() {
        window.open(`https://wa.me/${phoneData}?text=Olá, gostaria de um orçamento para MC & HG.`, '_blank');
    }

    // Enviar formulário para o WhatsApp
    function sendToWhatsapp(e) {
        e.preventDefault();
            
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        const text = `Olá, vim pelo site! %0A%0A*Nome:* ${name}%0A*Telefone:* ${phone}%0A*Serviço:* ${service}%0A*Mensagem:* ${message}`;
            
        window.open(`https://wa.me/${phoneData}?text=${text}`, '_blank');
    }
