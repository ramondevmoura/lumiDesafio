
// Função para extrair informações de uma linha específica de um PDF parseado para string
export function extrairInfo(textoPdf: string, textoReferencia: string, linhaReferente: number, indice: number): string {
    const lines = textoPdf.split('\n'); // Divide o texto em linhas
    const linha = lines.findIndex((line: string) => line.includes(textoReferencia)); // Procura a linha que contém o texto de referência
    if (linha !== -1) {
      const linhaInfo = lines[linha + linhaReferente]; // Pega a linha referente à linha de referência
      return linhaInfo.trim().split(/\s+/)[indice]; // Divide a linha, joga em um array e retorna a informação na posição do índice
    } else {
      return ''; // Se a linha não for encontrada, retorna vazio
    }
  }
  
  // Função para tratar valores numéricos
  export function trataValor(valor: string): number {
    return parseFloat(valor.replace('.', '').replace(',', '.')); // Trata o separador de milhares e converte o separador decimal para ponto
  }
  