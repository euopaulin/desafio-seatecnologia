## 🎨 Testes no UI (desing) do site

Nessa documentação irei relatar todas as observações e falhas que encontrei na observação dos componentes gráficos do site de testes em comparação com o protótipo. Foi analisado elementos como imagens desalinhadas, fontes incorretas e botões com padrões de cores diferentes do protótipo.

Para a analise desses elementos foi feito uso de teste manual do site.

## 🏠 Testes página inicial

Logo de inicio na página inicial é possivel notar descordancias em relação ao protótipo. Como por exemplo, a marca da água que representa uma pessoa, é possivel notar que essa imagem está fora da div principal, fugindo das margens.

## Testes:
<P align="center">
    <img src="Images/image.png" Alt="marca" height="320">
</p>

## Prototipo:
<p align="center">
    <img src="Images/image4.png" Alt="marca2" height="350">
</p>

## Menu Superior

Outra observação de falha possivel reparar logo de cara quando entramos no site é em relação ao menu superior que faz referência ao passo a passo de cadastro de um novo funcionário.

Aqui no site de testes esse menu está com a enumeração errada, todos estão como "Item 1", enquanto que no prototipo estão númerados de 1 a 9. Também é possivel notar que todos os itens estão na cor azul como se todos os passos já houvessem sido concluídos mesmo que não tenham sido concluídos. No Teste também é possivel notar que os Itens estão em caixa alta. Uma outra falha é que no site prototipo a caixa desses icones possuem contornos na cor preta, enquanto que no de testes não.

## Testes:
<p align="center">
    <img src="Images/image2.png" Alt="menu" height="100">
</p>

## Prototipo:
<p align="center">
    <img src="Images/image3.png" Alt="menu2" height="100">
</p>

## 🔻 Opções no inferior

Outra falha encontra é em relação a uma decoração de fundo na parte inferior da direita. No site prototipo existe essa decoração:

<p align="center">
    <img src="Images/image5.png" Alt="fundo" height="120">
</p>

Enquanto que no de testes não possui essa decoração:

<p align="center"> 
    <img src="Images/image6.png" Alt="fundo2" height="120">
</p>

Nas imagens que mostrei acima também é possivel notar que as cores no botão de "Próximo passo" também estão desconfigurados, no prototipo o botão fica em cinza enquanto não marcamos a opção de "A etapa está concluída?", somente após marcar como concluida é que o botão fica em azul.

Já no de testes o botão permance em azul a todo momento, mesmo que ainda não tenhamos marcado como etapa concluida.

Há uma grande diferença em como as cores dos botões então configuradas nos dois sites, enquanto que no de testes os botões como "Ver apenas ativos" quando selecionado, fica com o fundo completamente em azul, no prototipo quando selecionado esse mesmo botão, fica com o fundo em branco e o contorno das letras e botão em azul.

## Testes:
<p align="center">
    <img src="Images/image7.png" Alt="botton" height="95">
</p>

## Prototipo:
<p align="center">
    <img src="Images/image8.png" Alt="botton2" height="100">
</p>

Outro erro possivel notar é no texto da página inicial. O texto é quase semelhante entre os dois sites, a unica diferença é em uma palavra. Enquanto que no de Testes uma palavra presente no texto é "rhoncus", no prototipo essa mesma palavra na verdade é "thoncus".

## 📝 Tela de cadastro de novo funcionário

Uma falha de texto bastante perceptiva presente no site é na parte de "Atividades" do funcionário. No prototipo vemos escrito, como: "Atividades 1", "Atividades 2" e etc. Porém, no de testes esses mesmo textos estão incompletos, como pode ver na imagem abaixo:

<p align="center">
    <img src="Images/image9.png" Alt="Ativ" height="400">
</p>

## ✅ Conclusões dos testes manuais feitos:

Após realizado os testes ficou claro que o site possui varios erros de front-end no que diz respeito a harmonia dos elementos gráficos, sendo facilmente corrido em alteração do código. Acredito que todos esses erros não faça com que o site se torne inutilizavel, um usuário conseguirá se orientar nele, porém ele não terá uma experiência muito satisfatoria.

Uma sugestão minha para é que fosse desenvolvida um modo de alterancia entre o modo claro e escuro para o site, pois assim o usuário poderia se adaptadar melhor de acordo com sua preferência.