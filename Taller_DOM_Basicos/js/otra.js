function calcularPresupuesto() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    const invitados = parseFloat(inputs[0].value);
    const costoComida = parseFloat(inputs[1].value) || 0;
    const costoBebida = parseFloat(inputs[2].value) || 0;
    const costoDecoracion = parseFloat(inputs[3].value) || 0;
    const costoMusica = parseFloat(inputs[4].value) || 0;
    const porcentajePropina = parseFloat(inputs[5].value) || 0;

    if (!inputs[0].value || invitados <= 0) {
        alert("Por favor, introduce un número de invitados válido mayor a 0.");
        return;
    }

   
    const comidaTotal = invitados * costoComida;
    const bebidaTotal = invitados * costoBebida;
    const subtotal = comidaTotal + bebidaTotal + costoDecoracion + costoMusica;
    const propina = subtotal * (porcentajePropina / 100);
    const totalGeneral = subtotal + propina;
    const costoPorInvitado = totalGeneral / invitados;

   
    const valoresCalculados = [
        comidaTotal,
        bebidaTotal,
        costoDecoracion,
        costoMusica,
        subtotal,
        propina,
        totalGeneral,
        costoPorInvitado
    ];

   
    const filasTabla = document.querySelectorAll('tbody tr');

    filasTabla.forEach((fila, indice) => {
       
        const celdaValor = fila.children[1];
        
        if (celdaValor && valoresCalculados[indice] !== undefined) {
            const valor = valoresCalculados[indice];
            
           
            celdaValor.textContent = valor.toLocaleString('es-CO', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
    });
}