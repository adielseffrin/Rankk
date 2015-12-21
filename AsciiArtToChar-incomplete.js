function decifraLetra(conteudo, altura, inicio){
	var iniciado = false;
	var posicao = 0;
	var elemento = '';
	var novoInicio = 0;
	
	for(var linha = 0; linha < altura; linha++){
		
		for(var coluna = inicio; coluna < inicio+9; coluna++){
			
			posicao = linha*conteudo.length/altura + coluna;
			
			if(conteudo[posicao] == "#"){
				iniciado = true;
				novoInicio = Math.max(novoInicio, coluna);
				elemento += '1';
			}else{
				elemento += '0';
			}
		}
	}
	console.log('-'+elemento+'-');
	return seqToLetra(elemento);
	
}

function seqToLetra(seq){
	switch(seq){
		case "000000000000000000001111000000001100001111100011001100001111100000000000":
			return 'a';
			break;
		case "011100000001100000001100000001111100001100110001100110011111100000000000":
			return 'b';
			break;
		case "000000000000000000001111000011001100011000000011001100001111000000000000":
			return 'c';
			break;
		case "000011100000001100000001100001111100011001100011001100001111110000000000":
			return 'd';
			break;
		case "000000000000000000001111000011001100011111100011000000001111100000000000":
			return 'e';
			break;
		case "000111000001101100000100000011110000001100000001100000011110000000000000":
			return 'f';
			break;
		case "000000000000000000001110110011001100011001100001111100000001100011111000":
			return 'g';
			break;
		case "011100000001100000001100000001111100001100110001100110011100110000000000":
			return 'h';
			break;
		case "000110000000000000001110000000110000000110000000110000001111000000000000":
			return 'i';
			break;
		case "000001100000000000000011100000001100000001100011001100011001100001111000":
			return 'j';
			break;
		case "011100000001100000001100110001101100001111000001101100001100110000000000":
			return 'k';
			break;
		case "001110000000110000000110000000110000000110000000110000001111000000000000":
			return 'l';
			break;
		case "000000000000000000011001100011111110011010110011000110011000110000000000":
			return 'm';
			break;
		case "000000000000000000011111000011001100011001100011001100011001100000000000":
			return 'n';
			break;
		case "000000000000000000001111000011001100011001100011001100001111000000000000":
			return 'o';
			break;

		case "000000000000000000011111100001100110001100000001100000011110000000000000":
			return 'r';
			break;
		case "000000000000000000001111100011000000001111100000000110011111100000000000":
			return 's';
			break;
		
		case "000110000000110000001111100000110000000110000000110110000011100000000000":
			return 't';
			break;
		case "000000000000000000011001100011001100011001100011001100001111110000000000":
			return 'u';
			break;
		case "000000000000000000011001100011001100011001100001111000000110000000000000":
			return 'v';
			break;
		case "000000000000000000011000110011010110011111110011111110001101100000000000":
			return 'w';
			break;
		case "000000000000000000011001100001111000000110000001111000011001100000000000":
			return 'x';
			break;
		case "000000000000000000011001100011001100011001100001111100000001100011111000":
			return 'y';
			break;
		
		
		case "001111000011001100011011100011111100011101100011001100001111000000000000":
			return '0';
			break;
		case "000110000001110000000110000000110000000110000000110000011111100000000000":
			return '1';
			break;
			
		case "001111000011001100000001100000111000000001100011001100001111000000000000":
			return '3';
			break;
		case "000011100000111100001101100011001100011111110000001100000001100000000000":
			return '4';
			break;
		case "011111100011001100000001100000011000000110000000110000000110000000000000":
			return '7';
			break;
			
		case "001111000011001100011001100001111000011001100011001100001111000000000000":
			return '8';
			break;
		case "001111000011001100011001100001111100000001100000011000001110000000000000":
			return '9';
			break;
		default:
			return '@';
			break;
	
	}
}

var iframe = document.getElementsByTagName('iframe')[0];
var content = iframe.contentDocument.getElementsByTagName('pre')[0].innerHTML;
var height = 8;
var lineSize = content.length/height;
var letra = '';
var envia = true;
for(var i = 0; i < lineSize-1; i += 9){
	resultado = decifraLetra(content,height, i);
	if(resultado == '@') envia = false;
	letra += resultado;

}
if(envia) window.location.href = 'http://www.rankk.org/challenges/ascii-art.py?solution='+letra
