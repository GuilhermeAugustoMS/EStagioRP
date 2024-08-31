
function contarAs(frase) {
  const fraseMinuscula = frase.toLowerCase();

  const ocorrencias = [...fraseMinuscula.matchAll(/a/g)];
  const contagem = ocorrencias.length;

  if (contagem > 0) {
    console.log(`A letra 'a' aparece ${contagem} vezes na frase.`);
  } else {
    console.log("A letra 'a' não foi encontrada na frase.");
  }
}

const frase = "Avenida JOAO maneiro da silva chaves.";
contarAs(frase);
