(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0db1e8"],{"6f02":function(a,e,o){"use strict";o.r(e);var s=function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("q-page",{staticClass:"flex flex-center"},[o("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"400px"}},[o("q-form",{staticClass:"q-gutter-md",on:{submit:a.enviar}},[o("q-input",{attrs:{filled:"",label:"Nome *",hint:"Nome e sobrenome","lazy-rules":"",rules:[function(a){return a&&a.length>0||"Escreva seu nome."}]},model:{value:a.nomePessoa,callback:function(e){a.nomePessoa=e},expression:"nomePessoa"}}),o("q-input",{attrs:{filled:"",label:"E-mail *",hint:"Digite seu e-mail","lazy-rules":"",rules:[function(a){return a&&a.length>0||"Sem E-mail? Sem cookies."}]},model:{value:a.email,callback:function(e){a.email=e},expression:"email"}}),o("q-field",{attrs:{filled:"",label:"Selecione a data do seu aniversário","stack-label":""},scopedSlots:a._u([{key:"control",fn:function(){return[o("q-date",{staticClass:"q-mt-sm full-width",attrs:{minimal:""},model:{value:a.dataNascimento,callback:function(e){a.dataNascimento=e},expression:"dataNascimento"}})]},proxy:!0}])}),o("q-select",{attrs:{filled:"",options:a.opcoesSexo,label:"Selecionar o sexo","transition-show":"flip-up","transition-hide":"flip-down"},model:{value:a.sexo,callback:function(e){a.sexo=e},expression:"sexo"}}),o("q-input",{attrs:{filled:"",type:"textarea",label:"Descrição",hint:"Fale sobre você e suas qualidades como profissional"},model:{value:a.descricao,callback:function(e){a.descricao=e},expression:"descricao"}}),o("q-separator"),o("q-toggle",{attrs:{label:"Eu aceito os termos e licença de uso."},model:{value:a.aceitatermos,callback:function(e){a.aceitatermos=e},expression:"aceitatermos"}}),o("q-banner",{staticClass:"bg-primary text-white",scopedSlots:a._u([{key:"action",fn:function(){return[o("q-btn",{attrs:{flat:"",color:"white",label:"Ler"},on:{click:function(e){a.abrirTermos=!0}}})]},proxy:!0}])},[a._v('\n      Para ler os termos de uso, privacidade e outros. Toque no botão "Ler".\n      Você será redirecionado.\n      ')]),o("q-dialog",{attrs:{"transition-show":"flip-up","transition-hide":"flip-down"},model:{value:a.abrirTermos,callback:function(e){a.abrirTermos=e},expression:"abrirTermos"}},[o("q-card",[o("q-card-section",[o("div",{staticClass:"text-h5"},[a._v("Termos")])]),o("q-card-section",[o("strong",[a._v("Uso")]),o("p",[a._v("O EncontraJa foi construído com base de que trabalhadores autónomos (independentes)\n            possam divulgar seus serviços prestados\n            em relação regional estadual do atendimento.\n          ")]),o("p",[a._v("Qualquer pessoa pode acessar e encontrar os anúncios ativos\n            e divulgados pelo sistema.")]),o("p",[a._v("Algumas regras de uso são aplicadas para o bem-estar da comunidade que\n            realiza o acesso na plataforma.")]),o("p",[a._v("1.É proibido a criação de usuários falsos.Em caso de óbito de usuário cadastrado,\n            familiares deverão enviar e-mail para\n            suporte@mg.encontraja.com.br com documentos comprobatórios\n            para que sua conta e anúncios sejam desativados.")]),o("p",[a._v("2.É proibido o anúncio de empresas de grande porte.")]),o("p",[a._v("3.É proibido a utilização de emails temporários na criação de contas.")]),o("p",[a._v("4.Qualquer desrespeito (racismo, xenofobia, homofobia e outros)\n            realizado na plataforma será excluído sem aviso prévio.")]),o("p",[a._v("5.Não é permitido o anúncio de itens e produtos onde serão excluídos\n            caso ocorra detecção de irregularidade.\n            Somente será permitido anúncio de serviços.")]),o("p",[a._v("6.As imagens envidas a plataforma não devem\n            possuir direitos autorais não autorizados.")]),o("strong",[a._v("Condições")]),o("p",[a._v("As condições explicitas podem variar de cada caso abordado,\n            podendo ser respondidas por contato ao email suporte@mg.encontraja.com.br.")]),o("p",[a._v("1.Exclusão de conta: O usuário deve entrar em contato via\n            suporte@mg.encontraja.com.br solicitando que sua conta seja desativada.")]),o("p",[a._v("2.Exclusão de anúncio: O anuncio pode ser desativado pelo painel\n            de anúncio no botão respectivo a um ícone de X.")]),o("strong",[a._v("Privacidade")]),o("p",[a._v("Todas as informações geradas e acessadas na plataforma são registradas e\n            asseguradas de acordo com a lei de proteção de dados (LGPDP - Lei nº 13.709/2018)\n            e ficarão armazenadas por até 5 anos.*")]),o("p",[a._v("* Informações pessoais que serão solicitadas ao decorrer do uso da plataforma:\n            nome, e-mail e data de nascimento. Sendo destas apenas ficando visível a qualquer\n            pessoa: nome e e-mail (quando informado no contato de um anuncio).")]),o("strong",[a._v("Cookies")]),o("br"),o("p",[a._v("A plataforma utiliza um sistema de analise dos acessos referente ao Google Analytics,\n            onde possui cookies de armazenamento sendo suas funções como distinguir usuários\n            e outros descritos no link\n            "),o("a",{attrs:{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=pt-br"}},[a._v("oficial")]),a._v(".\n            Caso o usuário não deseja esse tipo de rastreamento,\n            deverá não realizar o uso da plataforma.")])]),o("q-card-actions",{attrs:{align:"center"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Fechar",color:"primary"}})],1)],1)],1),o("div",[o("q-btn",{attrs:{label:"Cadastrar",type:"submit",color:"primary"}})],1)],1)],1)])},i=[],r=o("bc3a"),t=o.n(r),n={data:function(){return{sexo:"",aceitatermos:!1,nomePessoa:null,dataNascimento:null,email:null,descricao:null,opcoesSexo:["Masculino","Feminino"],abrirTermos:!1}},methods:{enviar:function(){var a=this,e=0;e="Masculino"===this.sexo?0:1,t.a.post("http://localhost:8799/api/enviarUsuario",{nomePessoa:this.nomePessoa,email:this.email,dataNascimento:this.dataNascimento,sexo:e,descricao:this.descricao,aceitatermos:this.aceitatermos}).then((function(e){var o=e.data;200===o.status?(a.mostrarNotificacaoSucesso(),a.$router.push("/")):o.erro&&a.mostrarNotificacaoErro(o.erro)})).catch((function(e){a.mostrarNotificacaoErro(null)}))},mostrarNotificacaoSucesso:function(){this.$q.notify({color:"green",message:"Usuário criado com sucesso! Entre em sua conta com a senha enviado ao seu e-mail cadastrado."})},mostrarNotificacaoErro:function(a){var e=a;e||(e="Erro durante a operação de cadastro do usuário, verifique os campos preenchidos!"),this.$q.notify({color:"red",message:e})}}},c=n,l=o("2877"),d=Object(l["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports}}]);