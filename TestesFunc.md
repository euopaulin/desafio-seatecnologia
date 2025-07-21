## Testes de funcionalidades

A página fornecida para o teste se trata de um site para gerenciamento e cadastro de novos funcionarios.

De incio comecei testando o botão "Adicionar novo funcionario" e ocorreu tudo certo, esse botão funciona de acordo como o do prototipo.

---

## 👷 Testando cadastrar novo funcionario:

<p align="center">
  <img src="Images/image-1.png" alt="Adicionar novo funcionario" width="800"/>
</p>

Após isso a página nos redireciou para outra tela onde devemos preencher os campos necessários para cadastrar um novo funcionário. Foi testado o campo do CPF e ao digitar mais do que 11 dígitos ele fornece um erro, então o campo do CPF está funcionando bem em questão de número máximo de dígitos. Também testei a limitação de dígitos mínimos e ao digitar menos que 11 é mostrado uma mensagem para que o usuário se atente ao número de caracteres mínimos.

<p align="center">
  <img src="Images/Pasted image 20250719102034.png" alt="Mensagem caracteres CPF" width="700"/>
</p>

A imagem abaixo mostrar um erro no Cypress, pois no código coloquei para ele digitar um número maior do que o permito para o campo do CPF. Fiz isso para confirmar que o limite de caracteres no CPF está funcionando corretamente.

<p align="center">
  <img src="Images/Captura de tela 2025-07-19 093615.png" alt="Erro CPF" width="800"/>
</p>

Porém no cadastro de CPF é possivel notar uma falha. Sabemos que CPF são somente números e no campo do CPF é possivel digitar letras, algo que foge do padrão do CPF. Esse erro possivelmente está associado com o JS da página que provavelmente não está habilitado para que o campo do CPF seja permitido apenas números.
Esse mesmo erro também acontece com o campo do RG.

Abaixo segue a imagem do teste automatizado utilizando caracteres alfabéticos.

<p align="center">
  <img src="Images/cpf letras.png" alt="Letras CPF" width="800"/>
</p>

Agora no campo do RG é possível encontrar um erro de limite de caracteres. Normalmente um RG tem entre 7 e 9 dígitos, porém na página o campo do RG permite digitar um número infinito de dígitos. Dessa forma, é bem provavel que o código JS também não está especificado o limite de caracteres para esse campo. Se esse for o caso, é bem provavel que o comando **"maxlength="** resolva o problema do limite de caracteres.

<p align="center">
  <img src="Images/Pasted image 20250719100229.png" alt="Letras RG" width="470"/>
</p>

No campo de data de nascimento é possível notar há uma falha que faz com que o usuário possa escolher a data de nascimento no futuro. Por exemplo, é possível colocar a data de nascimento no dia 27/10/2027 sendo que estamos em 2025, algo que não faz sentido. Para resolver esse problema os Devs deve limitar a data para até um certo ano que seja o limite mínimo de idade para os cargos.

<p align="center">
  <img src="Images/Pasted image 20250719102124.png" alt="Data" width="300">
</p>

<p align="center">
  <img src="Images/Pasted image 20250719101400.png" alt="Data2" width="300">
</p>

Algo que diferente do protótipo é que no campo de data de nascimento é possível notar que existe somente o campo onde será inserido a data, não é possível selecionar o calendário. Talvez nesse quesito o site de testes seja até mais completo, porém não funciona, visto que existem falhas.
Imagem de referência do protótipo:

<p align="center">
  <img src="Images/Pasted image 20250719101549.png" alt="Data3" width="400">
</p>

O campo de alteração de sexo parece funcionar bem, não indentifiquei nenhum problema.

<p align="center">
  <img src="Images/Pasted image 20250719100650.png" alt="Sexo" width="350">
</p>

No campo onde selecionamos as EPIs em que o trabalhador usará nas atividades, é possível notar que há um erro quando é informado o CA, o campo não possui limite de caracteres, semelhante a falha encontrada nos campos de RG e CPF, anteriormente.

<p align="center">
  <img src="Images/Pasted image 20250719101034.png" alt="EPI" width="600">
</p>

Também notei que não é possivel adionar a EPI 🔨. O botão de "Adicionar EPI" na versão de testes não funciona e também possui o Layout diferente do mesmo botão no protótipo.

Abaixo está uma comparação entre os dois:

## Protótipo: ##

<p align="center">
  <img src="Images/Pasted image 20250719103517.png" alt="Protótipo" width="800">
</p>

## Teste: ##

<p align="center">
  <img src="Images/Pasted image 20250719104624.png" alt="Teste" width="800">
</p>

---

Na página inicial na parte onde é listada os funcionários, não consigo excluir os que criei, simplesmente o botão onde aparece a funcionalidade de excluir ou modificar não aparece.

<p align="center">
  <img src="Images/Captura de tela 2025-07-19 104811.png" alt="Excluir" width="570">
</p>

Era para aparecer algo assim, como no protótipo:

<p align="center">
  <img src="Images/Captura de tela 2025-07-19 105029.png" alt="Excluir" width="570">
</p>

Ao inspesionar o site com o ChromeDevTools e verificar a aba de "Conexão" é possivel notar que há uma fonte que não foi carregada, é fornecido o erro "400 Bad Request".

<p align="center">
  <img src="Images/Pasted image 20250721080904.png" alt="Erro" width="600">
</p>

Esse erro da falha de carregamento da fonte acontece devido a um erro de sintaxe na url da fonte. faltou o "&" antes do "display=swap"

Ao copiar e corrigir o link da fonte pesquisar é possível notar que o link existe e a fonte está no ar, como a imagem abaixo mostra:

<p align="center">
  <img src="Images/Pasted image 20250721081348.png" alt="Fonte" width="600">
</p>

Esse é um erro que pode ser facilmente corrigido no código onde o link da fonte está vinculada.

Há um erro em relação ao filtro de funcionários ativos. Quando filtrado apenas por funcionários ativos é possível notar que mesmo o funcionário "Sea Teste" que está como "Ativid 2" acaba sumindo quando ativado o filtro, algo que não era para acontecer.

Antes de ativar o filtro:

![Before Filter](<Images/Pasted image 20250721081923.png>)

Após ativar o filtro para apenas funcionários ativos:

![after Filter](<Images/Pasted image 20250721082126.png>)

É possível notar que o funcionário "Sea Teste" sumiu.

O campo de adicionar documento parece estar funcionando bem, consegui anexar um documento sem problemas.

![Docs](<Images/Pasted image 20250721082738.png>)

O menu do quanto esquerdo não está funcionando, quando seleciono alguma opção que não seja a que já estamos, nada acontece.

![Left Menu](<Images/Pasted image 20250721082908.png>)

E por fim, o ultimo erro que percebi foi que ao marca como etapa concluída e clicar em próximo, nada acontece. No protótipo quando fazemos esse procedimento, é nos enviado para outra etapa.

![Prox](<Images/Pasted image 20250721083144.png>)

---

Os testes realizados, tantos os automatizados e os manuais de forma encontraram os erros descritos acima. Ao meu ver o site possui muitas desconformidades em relação ao protótipo, o que inviabilizaria o uso em um cenário real.