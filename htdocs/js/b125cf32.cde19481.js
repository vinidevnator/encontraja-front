(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["b125cf32"],{"1e5b":function(a,e,t){"use strict";var i=t("23e6"),o=t.n(i);o.a},"23e6":function(a,e,t){},"572a":function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"flex flex-center"},[1==a.cadastrado?t("div",{staticClass:"ajeitarEspaco"},[t("q-avatar",{staticClass:"ajeitarEspacoImagem",attrs:{rounded:""}},[t("q-img",{attrs:{src:a.imagemAtual}},[t("q-icon",{attrs:{name:"close",color:"red",size:"25px"},on:{click:a.removerImagemAtualDePerfil}}),t("div",{staticClass:"absolute-bottom text-center q-pa-xs",on:{click:function(e){a.enviarImagemDialogo=!0}}},[t("q-icon",{attrs:{name:"edit",size:"25px"}})],1)],1)],1)],1):a._e(),t("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:a.enviarImagemDialogo,callback:function(e){a.enviarImagemDialogo=e},expression:"enviarImagemDialogo"}},[t("q-card",{staticClass:"bg-primary text-white"},[t("q-bar",[t("q-space"),t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[t("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[a._v("Fechar")])],1)],1),t("q-card-section",[t("div",{staticClass:"text-h5"},[a._v("Alterar imagem de perfil")])]),t("q-card-section",[t("q-uploader",{staticStyle:{width:"100%"},attrs:{label:"Selecione a imagem de perfil",accept:".jpg, .png, .jpeg, .gif, image/*",align:"center"},on:{added:a.adicionarImagem,removed:a.removerImagem},scopedSlots:a._u([{key:"header",fn:function(e){return[t("div",{staticClass:"row no-wrap items-center q-pa-sm q-gutter-xs"},[e.isUploading?t("q-spinner",{staticClass:"q-uploader__spinner"}):a._e(),t("div",{staticClass:"col"},[t("div",{staticClass:"q-uploader__title"},[a._v("Imagem de perfil")]),t("div",{staticClass:"q-uploader__subtitle"},[a._v(a._s(e.uploadSizeLabel))])]),e.queuedFiles.length>0?t("q-btn",{attrs:{icon:"clear_all",round:"",dense:"",flat:""},on:{click:e.removeQueuedFiles}},[t("q-tooltip",[a._v("Limpar tudo")])],1):a._e(),e.canAddFiles?t("q-btn",{attrs:{type:"a",icon:"add_box",round:"",dense:"",flat:""}},[t("q-uploader-add-trigger"),t("q-tooltip",[a._v("Escolha a imagem")])],1):a._e()],1)]}}])})],1),a.imagemNova.length>0?t("q-btn",{staticClass:"bg-white text-primary",attrs:{label:"Alterar"},on:{click:a.enviarImagem}}):a._e()],1)],1),a.cadastrado?a._e():t("span",[a._v("Você precisa estar logado, para alterar uma\n     imagem!\n   ")])],1)},o=[],r=t("bc3a"),n=t.n(r),s={data:function(){return{token:null,imagemNova:[],imagemAtual:null,enviarImagemDialogo:!1,cadastrado:!1}},created:function(){this.token=localStorage.getItem("token"),this.token&&(this.cadastrado=!0,this.carregarImagemDePerfil())},methods:{carregarImagemDePerfil:function(){var a=this;n.a.get("http://localhost:8799/api/mostrarImagemAlteracaoDePerfil/".concat(this.token)).then((function(e){a.imagemAtual=e.data})).catch((function(a){console.log(a)}))},enviarImagem:function(){var a=this;n.a.post("http://localhost:8799/api/guardarImagem",{token:this.token,imagem:this.imagemNova}).then((function(e){e.data.erro&&console.log("erro"),a.enviarImagemDialogo=!1,a.imagemAtual=a.imagemNova[0].base64}))},adicionarImagem:function(a){var e=this;a.forEach((function(a){e.imagemNova.push({base64:a.__img.src,tipo:"perfil"})}))},removerImagem:function(a){this.imagemNova=[]},removerImagemAtualDePerfil:function(){var a=this;n.a.get("http://localhost:8799/api/excluirImagemDePerfil/".concat(this.token)).then((function(e){200===e.data.Status&&a.$router.push("/")})).catch((function(a){console.log(a)}))}}},c=s,l=(t("1e5b"),t("2877")),m=Object(l["a"])(c,i,o,!1,null,null,null);e["default"]=m.exports}}]);