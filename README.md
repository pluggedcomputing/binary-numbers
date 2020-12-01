# plugged-computing-binary-numbers

<p align="center">
  <img src="https://play-lh.googleusercontent.com/Lz2tlMmdJHHHKnd3DxKaSWwJpGp4uuSWVT5X0r6MjAHYZITiJqoB9BHY6JsP2eZIEJI=s180-rw" height="150" width="150" alt="logo" />
</p>

<h3 align="center">
  Frontend da aplicação Plugged Computing, desenvolvido em React Native. Aplicativo Contando os pontos - Números Binários. Para saber mais, acesse: <a href="https://sites.google.com/view/computacaoplugada/">https://sites.google.com/view/computacaoplugada/</a>
</h3>

<div align="center">

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

</div>

## Overview

<p align="center">
  <img alt="main" src=".github/images/main.png" height="500" width="250">
  <img alt="ls" src=".github/images/level_selection.png" height="500" width="250" >
  <img alt="l1" src=".github/images/level_one.png"height="500" width="250">
</p>
<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.pluggedcomputing.mobile"><img height="151" width="390" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"></img></a>
</p>

## Tecnologias

- ### React Native
  [React Native](https://reactnative.dev/) é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa

Obs: Usamos as integrações Eslint, Prettier, editorconfig e Airbnb Style Guide como um formatador de código automático. Faça download dos plug-ins em seu editor.

1. [ESLint](https://github.com/Microsoft/vscode-eslint)
2. [Prettier](https://github.com/prettier/prettier-vscode)
3. [Editor config](https://github.com/editorconfig/editorconfig-vscode)

> Certifique-se de formatos mais bonitos ao salvar. Insira `" editor.formatOnSave ": true` em suas Configurações do usuário se você usar VSCode.

## Contributing

Obrigado por estar interessado em tornar este projeto melhor. Encorajamos todos a ajudar a melhorar este projeto com alguns novos recursos, correções de bugs e problemas de desempenho. Dedique um pouco do seu tempo para ler nossos guias, para que este processo seja mais rápido e fácil.

### Contribution Guidelines

Reserve um momento para ler sobre nossas [Diretrizes de contribuição](/.github/CONTRIBUTING.md) para que você possa entender como enviar um problema, confirmar e criar solicitações pull.

## Code of Conduct

Esperamos que você siga nosso [Código de Conduta](/.github/CODE_OF_CONDUCT.md). Você pode lê-lo para entender que tipo de comportamento será ou não tolerado.

## Gerando versões

### Versão de produção:

`yarn release`

### Versão de desenvolvimento:

`yarn pre-release`

> Lembre-se de conferir o CHANGELOG.md

## Gerando APK

1. Vá para o diretório do projeto e execute este comando no terminal

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

2. Acesse o diretório do Android: `cd android`

3. No caminho do Android, execute este comando: `./gradlew assembleDebug`

4. Vá para esta pasta e verifique o arquivo apk.

```
your_project-> android-> app-> build-> outputs-> apk-> debug-> app-debug.apk
```

## Modificar valor do versionCode (# = novo valor)

```
your_project -> android -> app -> build.gradle

 defaultConfig {
   ...,
    versionCode #
 }
```
