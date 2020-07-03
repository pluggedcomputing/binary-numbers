# plugged-computing-binary-numbers

Frontend da aplicação Plugged Computing, desenvolvido em React Native. Contando os pontos - Números Binários Para ter acesso ao guia de configuração e uso do projeto, acesse: https://pluggedcomputing.gitlab.io/ https://pluggedcomputing.gitlab.io/

## Tecnologias

- ### React Native
  React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa
- ### Expo
  Migrar Expo para ReactNative CLI: https://pluggedcomputing.gitlab.io/post/20200703_migrate_to_cli/

## Padrão de commits

De modo geral, o padrão é da seguinte forma:

`type(scope): subject`

Para mais informações, acesse: https://pluggedcomputing.gitlab.io/post/20200123_commit_lint/

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
