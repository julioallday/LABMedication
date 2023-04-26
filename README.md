<p align="center">
  <img src="https://user-images.githubusercontent.com/109560993/234654307-e0a53465-b625-472a-8304-7fa34ff3582b.png" alt="Logo" width="300" height="200" />
</p>

<h1 align="center"> ⭐ LABMedication </h1>

<p align="center">
  <b> ⭐ By: Julio Furtado </b></br>
  <sub> ⭐ Um software que promete trazer mais performance, segurança e praticidade para hospitais e clínicas através da gestão de administração de medicamentos em pacientes.
  <sub>
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhorias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<a id="Introdução"></a>
## 🧩 Introdução 

  ⭐ ***O software de gestão de medicação em ambiente hospitalar resolve o problema relacionado à administração de medicamentos em grandes hospitais e clínicas. Ele ajuda os profissionais de saúde a gerenciar e acompanhar a administração de medicamentos, garantindo que cada paciente receba a dose correta no momento correto e minimizando os erros de medicação. O software também reduz o tempo gasto na administração de medicamentos, fornecendo informações em tempo real sobre as dosagens e horários de medicação de cada paciente. Com o uso do `LABMedication`, os hospitais e clínicas podem melhorar a segurança dos pacientes, reduzir o risco de erros de medicação e garantir a conformidade com as regulamentações de segurança e saúde.***

<br/>


<a id="Resultados"></a>
## 🚀 Resultados 
  >Eu criei a página de login que incluiu todos os componentes necessários, implementei a autenticação com redirecionamento adequado, configurei alertas para exibir avisos e falhas, e ainda adicionei um recurso de guard para redirecionar o usuário para a página inicial caso já esteja autenticado.
<br/><br/> 
  >Implementei o template com um menu lateral e uma barra de ferramentas, incluindo todas as funcionalidades exigidas, juntamente com um recurso de guard que restringe o acesso apenas a usuários autenticados.
<br/><br/>  
  >Criei a página inicial que apresenta estatísticas, uma lista de pacientes e recursos para pesquisar informações mais detalhadas, editar e excluir registros.
<br/><br/> 
  >Implementei a página de cadastro de pacientes funcional, incluindo validações necessárias, consulta à API viaCEP para auto complete de endereço, armazenamento de registros no localStorage e recursos para edição e exclusão de registros.
<br/><br/> 
  >Criei a página de cadastro com todas as validações funcionando corretamente, armazenando as informações no localStorage de acordo com as regras de negócio e exibindo uma mensagem de conclusão para o usuário.
<br/><br/> 
  >Implementei a página de detalhes do medicamento do paciente, atendendo a todas as especificações solicitadas na documentação e garantindo que a funcionalidade esteja totalmente operacional.
<br/><br/> 
  
  <br/> 

</summary>

 ### ***⠀⠀⠀⠀⭐ Aqui vão algumas imagens do projeto em funcionamento***

<br />   


### 🤳🏻 Mobile

<br />   






⭐ Login | ⭐ Cadastro | ⭐ Home | ⭐ Histórico |
|---|---|---|---|
![Screenshot_151](https://user-images.githubusercontent.com/109560993/234651539-8347f111-cf91-407a-8bb5-9e8d44f5e76e.png) | ![Screenshot_153](https://user-images.githubusercontent.com/109560993/234651907-f3b482a1-aca8-431f-aa75-c099f568bd1f.png) | ![Screenshot_152](https://user-images.githubusercontent.com/109560993/234651972-7f6d1d0e-aa8a-4878-8e75-ca139b6b593f.png) | ![Screenshot_154](https://user-images.githubusercontent.com/109560993/234652058-9f0006d8-432c-4ed6-b266-cca81a0dd7c0.png)
  
  
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)



### 💻 Desktop 
  


 ⭐ Login | ⭐ Cadastro | ⭐ Home |
|---|---|---|
![Screenshot_155](https://user-images.githubusercontent.com/109560993/234653355-7f8bb80e-9f7c-447c-b0d1-3ae8a6d32e69.png) | ![Screenshot_156](https://user-images.githubusercontent.com/109560993/234653408-387729f3-8d21-4b5b-86b8-9d405752c393.png) | ![Screenshot_157](https://user-images.githubusercontent.com/109560993/234653489-5a0d0820-6554-4246-995f-9a663fffb635.png)


<br/>

<a id="Dependências"></a>
## 🧪 Dependências

### Pré-requisitos

#### Antes de prosseguir com a instalação, verifique se o seguinte software está instalado em sua máquina:

Node.js (versão 14.x ou superior)
npm
Para verificar se o Node.js e o npm estão instalados, abra o terminal e execute os seguintes comandos:
node -v
npm -v

#### Passo a passo
Clone este repositório em sua máquina local usando o seguinte comando: </br>
git clone https://github.com/seu-usuario/seu-projeto.git

Navegue até o diretório do projeto:
</br>
cd seu-projeto

Instale as dependências do projeto:
</br>
npm install

Inicie o servidor de desenvolvimento:

</br>
ng serve

Abra o navegador e acesse http://localhost:4200/ para visualizar o projeto em execução.
</br>
#### Compilando o projeto
Para compilar o projeto, execute o seguinte comando:
</br>
ng build

O resultado da compilação estará no diretório dist/.

#### Mais ajuda
Para obter mais ajuda sobre o Angular CLI, use ng help ou consulte a página Angular CLI Overview and Command Reference.


<br />   


## `📖 Scripts` 

```JSON
  "scripts": {
    "ng": "ng",
    "start": "ng serve --host 0.0.0.0",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },

```
  

## `📖 Dependencies` 

```JSON
 "dependencies": {
    "@angular/animations": "^15.2.0",
    "@angular/common": "^15.2.0",
    "@angular/compiler": "^15.2.0",
    "@angular/core": "^15.2.0",
    "@angular/forms": "^15.2.0",
    "@angular/platform-browser": "^15.2.0",
    "@angular/platform-browser-dynamic": "^15.2.0",
    "@angular/router": "^15.2.0",
    "bootstrap": "^5.2.3",
    "primeflex": "^3.3.0",
    "primeicons": "^6.0.1",
    "primeng": "^15.4.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "uuid": "^9.0.0",
    "zone.js": "~0.12.0"
  },

```

<br /> 

## `📖 devDependencies` 


```JSON
     "devDependencies": {
    "@angular-devkit/build-angular": "^15.2.2",
    "@angular/cli": "~15.2.2",
    "@angular/compiler-cli": "^15.2.0",
    "@types/jasmine": "~4.3.0",
    "@types/uuid": "^9.0.1",
    "jasmine-core": "~4.5.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typescript": "~4.9.4"
  }

```


<a id="Ideias"></a>
## 💡 Possíveis Melhorias
<br />

- [ ] ***- Adicionar novas estatísticas.*** 
- [ ] ***- Migrar todos os inputs para a biblioteca primeNG.*** 
- [ ] ***- Corrigir tamanhos de inputs.*** 
- [ ] ***- Melhorar a usabilidade na página de cadastro de medicamentos.*** 
- [ ] ***- Testar toda a aplicação.*** 
- [ ] ***- Adicionar modo noturno.*** 
- [ ] ***- Integração com backend para maior segurança de informações.*** 
- [ ] ***- Entre outras..*** 

<br /> 

<a id="Creditos"></a>
## 🏆 Créditos

<div > 

| [<img src="https://user-images.githubusercontent.com/109560993/234617803-ddfabe56-e242-4125-b3a6-2345aa8017bc.jpg" width=300><br><sub> Julio Furtado </sub>](https://www.linkedin.com/in/julio-furtado-tech/) | ***Olá, tudo bem? Se você está lendo esta mensagem, imagino que tenha gostado do projeto que desenvolvi. Se for esse o caso, seria interessante conversarmos um pouco sobre ele. Se quiser, você pode entrar em contato comigo pelo LinkedIn. Estou à disposição para qualquer dúvida ou comentário que possa ter. Obrigado pelo interesse!*** | 
|---|---|


</div> 


