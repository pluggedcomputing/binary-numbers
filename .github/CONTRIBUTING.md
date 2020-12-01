# Primeiras Contribuições

É difícil. É sempre difícil fazer algo pela primeira vez. Especialmente quando se está colaborando, cometer erros não é algo agradável. Mas _open source_ (código aberto) se trata de colaboração e de trabalharmos juntos. Queremos simplificar a forma com que novos colaboradores _open source_ aprendem e contribuem pela primeira vez.

Ler artigos e ver tutoriais pode ajudar, mas o que é melhor do que realmente pôr a mão na massa em um ambiente prático? Este projeto visa guiar e simplificar a forma com que os novatos fazem a sua primeira contribuição. Se quiser fazer a sua primeira contribuição, siga os passos abaixo.

#### _Se você não se sente confortável com linha de comando, [aqui estão alguns tutoriais de ferramentas gráficas.](#Tutoriais-usando-outras-ferramentas)_

#### _Ler em [outros idiomas](../translations/Translations.md)_

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork deste repositório" />

Se não possui o git em sua máquina, [instale-o aqui](https://help.github.com/articles/set-up-git/).

## Faça um Fork deste repositório

Faça um Fork clicando no botão "Fork" no topo desta página. Isto irá criar uma cópia deste repositório na sua conta.

## Clone o repositório

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clonar este repositório" />

Agora clone este repositório para a sua máquina. Clique no botão "Clone or download" e, em seguida, clique no ícone "Copy to clipboard" para copiar a URL.

Abra seu terminal e execute o seguinte comando do git:

```
git clone "url que copiou"
```

onde "url que copiou" (sem as aspas) é a URL deste repositório. Consulte as etapas anteriores para obter a URL.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copiar URL" />

Por exemplo:

```
git clone https://github.com/seu-usuario/first-contributions.git
```

onde "seu-usuário" é o seu usuário do GitHub. Aqui você está copiando o conteúdo do repositório first-contributions para o seu computador.

## Crie um Branch

Vá para o diretório do repositório no seu computador (caso você não esteja lá):

```
cd binary-numbers
```

Agora crie um Branch usando o comando `git checkout`:

```
git checkout -b <add-seu-nome>
```

O nome do branch deve seguir o seguinte padrão `label/#Issue_ID`

Por exemplo:

```
git checkout -b enhancement/#1
```

ou

```
git checkout -b bug/#2
```

## Efetue as alterações necessárias e faça um Commit

<img align="right" width="450" src="https://firstcontributions.github.io/assets/Readme/git-status.png" alt="git status" />

Se você for para o diretório do projeto e executar o comando `git status`, verá que há alterações. Adicione essas alterações ao Branch que você acabou de criar utilizando o comando `git add`:

```
git add .
```

Agora faça um Commit dessas alterações utilizando o comando `git commit`:

```
git commit -m "<type>(<context>): <subject>"
```

`<type>` Deve ser uma das opções abaixo:

- **chore**: Uma mudança que não corrige um bug nem adiciona um recurso;
- **ci**: Uma mudança de CI;
- **docs**: uma alteração ou correção na documentação;
- **feat**: um novo recurso;
- **fix**: uma correção de bug;
- **test**: Uma mudança relacionada ao teste.

`<context>` é o ID da sua issue.

`<subject>` é a mensagem que descreve a mudança feita:

- Deve ser minúsculo;
- Deve ser limitado a 50 caracteres ou menos;
- Deve omitir qualquer pontuação final.
  Exemplo de uma mensagem de confirmação:

`feat (# 1): guia de estilo de mensagem de confirmação para Git`

[Veja mais sobre commitlint](https://github.com/conventional-changelog/commitlint)

## Faça um Push das alterações para o GitHub

Faça um Push utilizando o comando `git push`:

```
git push origin <add-seu-ramo>
```

substituindo `<add-seu-ramo>` pelo nome do Branch que você criou anteriormente.

## Envie suas alterações para serem revisadas

Se você for para o seu repositório no GitHub, verá um botão `Compare & pull request`. Clique nesse botão.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="Crie um Pull Request" />

Agora envie um Pull Request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="Envie o Pull Request" />

Logo estarei mesclando ('mergeando') as suas mudanças no Branch principal (master) deste projeto. Você receberá um e-mail de notificação quando as alterações forem mescladas.
