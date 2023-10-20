95% de armazenamento usado … Caso atinja o limite de armazenamento, não será possível criar, editar ou fazer upload de arquivos. Aproveite 100 GB de armazenamento por R$ 6,99 R$ 1,69 por mês, durante 3 meses.
function calcularMargem() {
  const precoCompra = parseFloat(document.getElementById('precoCompra').value);
  const precoVendaUnitario = parseFloat(document.getElementById('precoVendaUnitario').value);
  const quantidade = parseFloat(document.getElementById('quantidade').value);

  if (isNaN(precoCompra) || isNaN(precoVendaUnitario) || isNaN(quantidade)) {
      alert('Por favor, insira números válidos.');
      return;
  }

  const precoVendaTotal = precoVendaUnitario * quantidade;
  const margemAbsoluta = precoVendaTotal - (precoCompra * quantidade);
  const margemPercentual = ((precoVendaTotal - (precoCompra * quantidade)) / precoVendaTotal) * 100;
  

  const resultMargemAbs = document.getElementById('resultMargemAbs');
  const resultMargemPercentual = document.getElementById('resultMargemPercentual');
  

  resultMargemAbs.innerHTML = `Margem Absoluta: R$${margemAbsoluta.toFixed(2)}`;
  resultMargemPercentual.innerHTML = `Margem Percentual: ${margemPercentual.toFixed(2)}%`;
  
}


function calcularMarkup() {
  const ttvMarkup = parseFloat(document.getElementById('precoVendaUnitarioMarkup').value);
  const ttcMarkup = parseFloat(document.getElementById('ttc').value);

  if (isNaN(ttvMarkup) || isNaN(ttcMarkup) || ttcMarkup <= ttvMarkup) {
      alert('Por favor, insira números válidos. O TTC deve ser maior que o TTV.');
      return;
  }

  const markup = ((ttcMarkup / ttvMarkup) - 1) * 100;

  const resultMarkup = document.getElementById('resultMarkup');
  resultMarkup.innerText = `Markup: ${markup.toFixed(2)}%`;
}

function calcularTTCDesejado() {
  const ttv = parseFloat(document.getElementById('precoVendaUnitarioTTCDesejado').value);
  const markup = parseFloat(document.getElementById('markupTTC').value);

  const markupDecimal = markup / 100;
  const ttcDesejado = ttv * (1 + markupDecimal);

  const resultTTCDesejado = document.getElementById('resultTTCDesejado');
  resultTTCDesejado.innerText = `TTC Desejado: R$${ttcDesejado.toFixed(2)}`;
}

function converterParaHectolitros() {
  const litros = parseFloat(document.getElementById('litros').value);
  const unidadesPorCaixa = parseFloat(document.getElementById('unidadesPorCaixa').value);
  const caixas = parseFloat(document.getElementById('caixas').value);

  const hectolitros = (litros / 100000) * unidadesPorCaixa * caixas;

  const resultadoHectolitros = document.getElementById('resultadoHectolitros');
  resultadoHectolitros.innerHTML = `Equivalente em hectolitros: ${hectolitros.toFixed(2)} hL`;
}

function calcularQuantidadeCaixas() {
  const hectolitros = parseFloat(document.getElementById('hectolitros').value);
  const ML_Unidade = parseFloat(document.getElementById('mlunidade').value);
  const unidadesPorCaixa = parseFloat(document.getElementById('unidadesPorCaixaReverse').value);

  if (isNaN(hectolitros) || isNaN(ML_Unidade) || isNaN(unidadesPorCaixa) || hectolitros < 0 || ML_Unidade < 0 || unidadesPorCaixa < 0) {
      alert('Por favor, insira números válidos. Hectolitros, mililitros por unidade e unidades por caixa devem ser valores positivos.');
      return;
  }

  const quantidadeCaixas = Math.round(hectolitros / ((ML_Unidade/100000) * unidadesPorCaixa));

  const resultCaixas = document.getElementById('resultCaixas');
  resultCaixas.innerHTML = `Quantidade de caixas: ${quantidadeCaixas}`;
}

function calcularRE() {
  // Obter os valores dos elementos do formulário
  const RE = parseFloat(document.getElementById("porcentagemRE").value);
  const DiaSem = document.getElementById("diaSemana").value === "true";
  const PDVs = parseInt(document.getElementById("totalVisitas").value);
  const RotaMIN = parseInt(document.getElementById("visitasMinimas").value) || 0;

  // Calcular o tempo necessário com base nos valores fornecidos
  const tempoNecessario = DiaSem ? 280 * (RE / 100) : 168 * (RE / 100);
  const tempoMedioPorVisita = tempoNecessario / PDVs;
  const tempoMedioExcluindoRotaMinima = (tempoNecessario - 2 * RotaMIN) / (PDVs - RotaMIN);

  // Obter o elemento onde exibiremos o resultado
  const resultado = document.getElementById("resultado");

  // Atualizar o HTML do elemento resultado com mensagens claras

  resultado.innerHTML = `
  <div style="background-color: #00BFFF; padding: 10px; margin-bottom: 10px;">
    <p style="color: black;">Calculadora de Rota Efetiva</p>
    <p style="color: black;">Tempo médio por visita: ${tempoMedioPorVisita.toFixed(2)} minutos</p>
  </div>
  <div style="background-color: #87CEEB; padding: 10px; margin-bottom: 10px;">
    <p>Quantidade de PDVs com visitas de tempo mínimo: ${RotaMIN} PDVs</p>
    <p>Tempo médio por visita excluindo PDVs de tempo mínimo: ${tempoMedioExcluindoRotaMinima.toFixed(2)} minutos</p>
  </div>
`;
}


function formatMinutesToTime(mins) {
  const minutes = Math.floor(mins);
  const seconds = Math.round((mins - minutes) * 60);
  return `${minutes} minutos e ${seconds} segundos`;
}



function toggleCalculator(calculatorId) {
  const calculadoras = document.querySelectorAll('.calculadora');
  calculadoras.forEach(calculadora => {
      calculadora.classList.remove('visible');
  });

  const calculadoraSelecionada = document.getElementById(calculatorId);
  calculadoraSelecionada.classList.add('visible');
}
