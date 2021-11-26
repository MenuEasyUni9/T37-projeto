(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\" *ngIf=\"firebase.config\">\n          <ion-list-header [style.color]=\"firebase.config.color\">{{firebase?.config?.nome}}</ion-list-header>\n          <ion-note  style=\"margin-bottom: 30px;\">{{firebase?.config?.whatsapp}}</ion-note>\n\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item routerDirection=\"root\" routerLink=\"/inicio\" lines=\"none\" detail=\"false\">\n              <ion-icon [style.color]=\"firebase.config.color\" slot=\"start\" name=\"clipboard-outline\"></ion-icon>\n              <ion-label [style.color]=\"firebase.config.color\" style=\"font-size: 16px;\">Cardápio</ion-label>\n            </ion-item>\n\n            <ion-item (click)=\"carrinho()\" lines=\"none\" detail=\"false\">\n              <ion-icon [style.color]=\"firebase.config.color\" slot=\"start\" name=\"cart-outline\"></ion-icon>\n              <ion-label [style.color]=\"firebase.config.color\" style=\"font-size: 16px;\">Carrinho</ion-label>\n            </ion-item>\n\n            <ion-item (click)=\"pedidos()\" lines=\"none\" detail=\"false\">\n              <ion-icon [style.color]=\"firebase.config.color\" slot=\"start\" name=\"checkmark-outline\"></ion-icon>\n              <ion-label [style.color]=\"firebase.config.color\" style=\"font-size: 16px;\">Meus pedidos</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n \n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCarrinhoCarrinhoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Header -->\n<ion-header [translucent]=\"false\" collapse=\"undefined\" mode=\"ios\" [style.background-color]=\"firebase.config.color\">\n  <ion-toolbar [style.background-color]=\"firebase.config.color\">\n    <ion-buttons slot=\"start\" (click)=\"fechar()\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"   [style.color]=\"firebase.config.color\">  </ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title size=\"large\" style=\"text-align: center; font-size: 18px; \"   [style.color]=\"firebase.config.color\">\n      Carrinho\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Content -->\n<ion-content [fullscreen]=\"true\" >\n  <div id=\"container\" *ngIf=\"step == 0\">\n    <ion-list style=\"margin-top: 20px;\" mode=\"ios\">\n      <ion-list-header style=\"margin-bottom: 15px; color: #fff\" [style.background-color]=\"firebase.config.color\">\n        Seus itens\n      </ion-list-header>\n\n      <!-- Produtos -->\n      <ion-item *ngFor=\"let p of firebase.carrinho; let i = index\" lines='none'>\n        <ion-row style=\"width: 100%;\">\n          <ion-col size=\"4\">\n            <div class=\"produtoImagem\" [style.background]=\"'url(' + p.imagem + ')'\"></div>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-label style=\"overflow:visible !important; color: rgb(61, 61, 61); font-size: 15px;\">{{p.titulo}} <ion-icon (click)=\"remover(i)\" name=\"trash-outline\" style=\"color: red; margin-left: 10px; font-size: 13px\"></ion-icon></ion-label>\n            <p style=\"color: rgb(85, 85, 85); font-size: 11px; margin-top: 0px; margin-bottom: 0px; width: 100%;\">{{p.descricao}}</p>\n            <p  [style.color]=\"firebase.config.color\" style=\"font-size: 10px; position: relative; top: -5px\"><ion-badge color=\"primary\"  style=\"font-size: 10px; position: relative; top:4px;margin-right: 10px;\" [style.background-color]=\"firebase.config.color\">{{p.quantidade}}x</ion-badge> R${{p.preco}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div id=\"container\" *ngIf=\"step == 1\">\n    <ion-list style=\"margin-top: 20px;\" mode=\"ios\">\n      <ion-list-header style=\"margin-bottom: 15px; color: #fff\" [style.background-color]=\"firebase.config.color\">\n        Seus dados\n      </ion-list-header>\n\n      <!-- Dados -->\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\">Nome</ion-label>\n            <ion-input [(ngModel)]=\"cliente.nome\"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\">CEP</ion-label>\n            <ion-input (ionChange)=\"calcularCep()\" [(ngModel)]=\"cliente.cep\" type=\"tel\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\">Rua</ion-label>\n            <ion-input disabled [(ngModel)]=\"cliente.rua\"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-label position=\"stacked\">Bairro</ion-label>\n            <ion-input disabled [(ngModel)]=\"cliente.bairro\"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-label position=\"stacked\">Cidade</ion-label>\n            <ion-input disabled [(ngModel)]=\"cliente.cidade\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\">Número</ion-label>\n            <ion-input [(ngModel)]=\"cliente.numero\" type=\"tel\"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-label position=\"stacked\">Complemento</ion-label>\n            <ion-input  [(ngModel)]=\"cliente.complemento\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n    \n    </ion-list>\n\n     <!-- Método de pagamento -->\n     <ion-list mode=\"ios\" style=\"margin-top: 20px;\" lines=\"none\">\n      <ion-list-header style=\"margin-bottom: 15px; color: #fff\" [style.background-color]=\"firebase.config.color\">\n        Como você quer pagar?\n      </ion-list-header>\n\n      <ion-item *ngFor=\"let opcao of cliente.pagamentos; let i = index\" (click)=\"deixarApenasUmMarcado(i)\">\n        <ion-label style=\"font-size: 14px;\">{{opcao.titulo}}</ion-label>\n        <ion-checkbox slot=\"end\" color=\"success\" [(ngModel)]=\"opcao.checked\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n    <ion-row *ngIf=\"cliente.pagamentos[0].checked == true\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"stacked\">Troco para:</ion-label>\n          <ion-input  type=\"tel\" [(ngModel)]=\"cliente.troco\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-footer (click)=\"enviar()\" *ngIf=\"step == 1\"  mode=\"ios\">\n  <ion-toolbar >\n    <div class=\"footerDiv\" [style.background-color]=\"firebase.config.color\">\n      <ion-title style=\"color: #fff; font-size: 14px;\">Enviar pedido por R${{total}}</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n<ion-footer (click)=\"finalizar()\" *ngIf=\"step == 0\"  mode=\"ios\">\n  <ion-toolbar >\n    <div class=\"footerDiv\" [style.background-color]=\"firebase.config.color\">\n      <ion-title style=\"color: #fff; font-size: 14px;\">Finalizar pedido por R${{total}}</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/historico/historico.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/historico/historico.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHistoricoHistoricoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Header -->\n<ion-header [translucent]=\"false\" collapse=\"undefined\" mode=\"ios\" [style.background-color]=\"firebase.config.color\">\n  <ion-toolbar [style.background-color]=\"firebase.config.color\">\n    <ion-buttons slot=\"start\" (click)=\"fechar()\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"  [style.color]=\"firebase.config.color\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title size=\"large\" style=\"text-align: center; font-size: 18px;\"  [style.color]=\"firebase.config.color\">\n      Histórico de pedidos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Content -->\n<ion-content [fullscreen]=\"true\">\n  <div id=\"container\">\n\n    <!-- Categorias -->\n    <ion-list style=\"margin-top: 20px;\" mode=\"ios\">\n      <ion-list-header style=\"margin-bottom: 15px; color: #fff\" [style.background-color]=\"firebase.config.color\">\n        Pedidos\n      </ion-list-header>\n\n      <!-- Produtos -->\n      <ion-item *ngFor=\"let p of pedidos\" >\n        <ion-row style=\"width: 100%;\">\n          <ion-col size=\"12\">\n            <ion-label style=\"overflow:visible !important; color: rgb(61, 61, 61); font-size: 15px;\">{{p.data.toDate() | date:'dd/MM/yyyy HH:mm'}}</ion-label>\n            <ion-label style=\"overflow:visible !important; color: rgb(61, 61, 61); font-size: 13px; font-weight: 700;\">R${{p.total}}</ion-label>\n            <ion-badge color=\"primary\"  style=\"font-size: 10px; position: relative; top:4px;margin-right: 10px; margin-bottom: 15px;\" [style.background-color]=\"firebase.config.color\">{{p.status}}</ion-badge>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n\n    \n    </ion-list>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }, {
        path: 'inicio',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | inicio-inicio-module */
          [__webpack_require__.e("default~inicio-inicio-module~modal-modal-module"), __webpack_require__.e("inicio-inicio-module")]).then(__webpack_require__.bind(null,
          /*! ./inicio/inicio.module */
          "./src/app/inicio/inicio.module.ts")).then(function (m) {
            return m.InicioPageModule;
          });
        }
      }, {
        path: 'carrinho',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | carrinho-carrinho-module */
          "carrinho-carrinho-module").then(__webpack_require__.bind(null,
          /*! ./carrinho/carrinho.module */
          "./src/app/carrinho/carrinho.module.ts")).then(function (m) {
            return m.CarrinhoPageModule;
          });
        }
      }, {
        path: 'modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | modal-modal-module */
          [__webpack_require__.e("default~inicio-inicio-module~modal-modal-module"), __webpack_require__.e("modal-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./modal/modal.module */
          "./src/app/modal/modal.module.ts")).then(function (m) {
            return m.ModalPageModule;
          });
        }
      }, {
        path: 'historico',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | historico-historico-module */
          "historico-historico-module").then(__webpack_require__.bind(null,
          /*! ./historico/historico.module */
          "./src/app/historico/historico.module.ts")).then(function (m) {
            return m.HistoricoPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background:#fff !important ;\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-content {\n  --background: #fff !important ;\n}\n\nion-item {\n  --background: transparent !important ;\n}\n\nion-list {\n  --background: transparent !important;\n  background: transparent !important;\n  --ion-background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRjs7QUFTQTtFQUNFLDhCQUFBO0FBTkY7O0FBU0E7RUFDRSxxQ0FBQTtBQU5GOztBQVFBO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDhDQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDojZmZmICFpbXBvcnRhbnRcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudFxufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudFxufVxuaW9uLWxpc3Qge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _providers_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../providers/firebase */
      "./src/providers/firebase.ts");
      /* harmony import */


      var _carrinho_carrinho_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./carrinho/carrinho.page */
      "./src/app/carrinho/carrinho.page.ts");
      /* harmony import */


      var _historico_historico_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./historico/historico.page */
      "./src/app/historico/historico.page.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, firebase, modalController) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.firebase = firebase;
          this.modalController = modalController;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "carrinho",
          value: function carrinho() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _carrinho_carrinho_page__WEBPACK_IMPORTED_MODULE_6__["CarrinhoPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "pedidos",
          value: function pedidos() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _historico_historico_page__WEBPACK_IMPORTED_MODULE_7__["HistoricoPage"]
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _providers_firebase__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _providers_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../providers/firebase */
      "./src/providers/firebase.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); //Env
      //Firebase
      //HTTP


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]],
        providers: [_providers_firebase__WEBPACK_IMPORTED_MODULE_12__["FirebaseService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/carrinho/carrinho.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/carrinho/carrinho.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCarrinhoCarrinhoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  padding: 30px;\n}\n\n.promoCard {\n  width: 100%;\n  height: 100px;\n  background: #6b6969;\n  border-radius: 5px;\n  background-size: cover !important;\n  background-position-x: center !important;\n  background-position-y: center !important;\n}\n\n.logo {\n  width: 60px;\n}\n\nion-menu-button {\n  --color: white !important;\n  color: white !important;\n}\n\nion-menu-buttons {\n  --color: white !important;\n  color: white !important;\n}\n\n.header-translucent-ios ion-toolbar {\n  --opacity: 0 !important;\n}\n\nion-item {\n  --padding-start: 0px;\n  margin-bottom: 15px;\n}\n\nion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  padding: 0px 10px;\n  align-items: center;\n  font-size: 16px;\n  border-radius: 5px;\n}\n\nion-col {\n  padding: 0px;\n}\n\n.produtoImagem {\n  width: 70px;\n  height: 70px;\n  background-size: cover !important;\n  background-position-x: center !important;\n  background-position-y: center !important;\n  border-radius: 100px;\n}\n\n.imagemProduto {\n  background-size: cover !important;\n  background-position-x: center !important;\n  background-position-y: center !important;\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n}\n\n.containerProduto {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n}\n\n.descProduto {\n  text-align: justify;\n  text-justify: inter-word;\n  font-size: 14px;\n  color: #666666;\n}\n\n.footerDiv {\n  width: 100%;\n  height: 50px;\n}\n\nion-input {\n  font-size: 13px;\n}\n\nion-content {\n  --background: #fff !important;\n}\n\nion-item {\n  --background: transparent !important;\n}\n\nion-list {\n  --background: transparent !important;\n  background: transparent !important;\n  --ion-background-color: transparent !important;\n}\n\nion-label {\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FycmluaG8vY2FycmluaG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7VUFBQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsOENBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXJyaW5oby9jYXJyaW5oby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ucHJvbW9DYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigxMDcsIDEwNSwgMTA1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiA2MHB4O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICAgIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LWJ1dHRvbnMge1xuICAgIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItdHJhbnNsdWNlbnQtaW9zIGlvbi10b29sYmFyIHtcbiAgICAtLW9wYWNpdHk6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLnByb2R1dG9JbWFnZW0ge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uaW1hZ2VtUHJvZHV0byB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cblxuLmNvbnRhaW5lclByb2R1dG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGVzY1Byb2R1dG8ge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpO1xufVxuXG4uZm9vdGVyRGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/carrinho/carrinho.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/carrinho/carrinho.page.ts ***!
      \*******************************************/

    /*! exports provided: CarrinhoPage */

    /***/
    function srcAppCarrinhoCarrinhoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarrinhoPage", function () {
        return CarrinhoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _providers_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../providers/firebase */
      "./src/providers/firebase.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var CarrinhoPage = /*#__PURE__*/function () {
        function CarrinhoPage(modalController, firebase, toastController, alertController, http, loadingController) {
          var _this2 = this;

          _classCallCheck(this, CarrinhoPage);

          this.modalController = modalController;
          this.firebase = firebase;
          this.toastController = toastController;
          this.alertController = alertController;
          this.http = http;
          this.loadingController = loadingController;
          this.total = 0;
          this.step = 0;
          this.cliente = {
            nome: null,
            cep: null,
            rua: null,
            bairro: null,
            cidade: null,
            complemento: "",
            numero: null,
            troco: "",
            pagamentos: [{
              "titulo": 'Dinheiro',
              "checked": false
            }, {
              "titulo": 'Débito',
              "checked": false
            }, {
              "titulo": 'Crédito',
              "checked": false
            }]
          }; //Total

          this.firebase.carrinho.forEach(function (item) {
            _this2.total = _this2.total + item.preco * item.quantidade;
          });
        }

        _createClass(CarrinhoPage, [{
          key: "deixarApenasUmMarcado",
          value: function deixarApenasUmMarcado(index) {
            var i = 0;

            for (i; i < this.cliente.pagamentos.length; i++) {
              if (i != index) {
                this.cliente.pagamentos[i].checked = false;
              }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "fechar",
          value: function fechar() {
            if (this.step > 0) {
              this.step = 0;
            } else {
              this.modalController.dismiss();
            }
          }
        }, {
          key: "remover",
          value: function remover(i) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Quer mesmo remover esse item?',
                        message: 'Essa ação não pode ser desfeita.',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {}
                        }, {
                          text: 'Remover',
                          handler: function handler() {
                            _this3.firebase.carrinho.splice(i, 1); //Atualizar total


                            _this3.firebase.carrinho.forEach(function (item) {
                              _this3.total = _this3.total + item.preco * item.quantidade;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "finalizar",
          value: function finalizar() {
            this.step = 1;
          }
        }, {
          key: "calcularCep",
          value: function calcularCep() {
            var _this4 = this;

            if (this.cliente.cep.length > 7) {
              this.http.get('https://viacep.com.br/ws/' + this.cliente.cep + '/json/').subscribe(function (r) {
                console.log(r);
                _this4.cliente.bairro = r['bairro'];
                _this4.cliente.rua = r['logradouro'];
                _this4.cliente.cidade = r['localidade'];
              });
            }
          } //Finalizar pedido

        }, {
          key: "enviar",
          value: function enviar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this5 = this;

              var pedido, alert, _alert;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!(this.cliente.nome && this.cliente.cep)) {
                        _context7.next = 9;
                        break;
                      }

                      pedido = {
                        cliente: this.cliente,
                        itens: this.firebase.carrinho,
                        status: 'aguardando',
                        data: new Date(),
                        total: this.total
                      };
                      _context7.next = 4;
                      return this.alertController.create({
                        header: 'Deseja finalizar o pedido?',
                        message: 'O estabelecimento receberá sua solicitação.',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {}
                        }, {
                          text: 'Fazer pedido',
                          handler: function handler() {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                              var _this6 = this;

                              var loading;
                              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                while (1) {
                                  switch (_context6.prev = _context6.next) {
                                    case 0:
                                      _context6.next = 2;
                                      return this.loadingController.create({
                                        message: 'Finalizando...'
                                      });

                                    case 2:
                                      loading = _context6.sent;
                                      _context6.next = 5;
                                      return loading.present();

                                    case 5:
                                      //Enviar para o firebase
                                      this.firebase.pedir(pedido).then(function (id) {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                          var historicoPedidos, toast;
                                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                            while (1) {
                                              switch (_context4.prev = _context4.next) {
                                                case 0:
                                                  //Adicionar no localstorage
                                                  historicoPedidos = JSON.parse(localStorage.getItem('historicoPedidos'));

                                                  if (!historicoPedidos) {
                                                    historicoPedidos = [];
                                                    historicoPedidos.push(id);
                                                    localStorage.setItem('historicoPedidos', JSON.stringify(historicoPedidos));
                                                  } else {
                                                    historicoPedidos.push(id);
                                                    localStorage.setItem('historicoPedidos', JSON.stringify(historicoPedidos));
                                                  }

                                                  _context4.next = 4;
                                                  return this.toastController.create({
                                                    message: 'Tudo certo! Você pode acompanhar tudo na aba Meus Pedidos',
                                                    duration: 2000
                                                  });

                                                case 4:
                                                  toast = _context4.sent;
                                                  toast.present(); //Voltar para home

                                                  _context4.next = 8;
                                                  return loading.dismiss();

                                                case 8:
                                                  this.firebase.carrinho = [];
                                                  this.step = 0;
                                                  this.fechar();

                                                case 11:
                                                case "end":
                                                  return _context4.stop();
                                              }
                                            }
                                          }, _callee4, this);
                                        }));
                                      })["catch"](function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                          var alert;
                                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                            while (1) {
                                              switch (_context5.prev = _context5.next) {
                                                case 0:
                                                  _context5.next = 2;
                                                  return loading.dismiss();

                                                case 2:
                                                  _context5.next = 4;
                                                  return this.alertController.create({
                                                    header: 'Ops!',
                                                    message: 'Algo deu errado. Por favor, tente novamente.',
                                                    buttons: [{
                                                      text: 'Voltar',
                                                      role: 'cancel',
                                                      handler: function handler() {}
                                                    }]
                                                  });

                                                case 4:
                                                  alert = _context5.sent;
                                                  _context5.next = 7;
                                                  return alert.present();

                                                case 7:
                                                case "end":
                                                  return _context5.stop();
                                              }
                                            }
                                          }, _callee5, this);
                                        }));
                                      });

                                    case 6:
                                    case "end":
                                      return _context6.stop();
                                  }
                                }
                              }, _callee6, this);
                            }));
                          }
                        }]
                      });

                    case 4:
                      alert = _context7.sent;
                      _context7.next = 7;
                      return alert.present();

                    case 7:
                      _context7.next = 14;
                      break;

                    case 9:
                      _context7.next = 11;
                      return this.alertController.create({
                        header: 'Ops!',
                        message: 'Por favor, preencha todos os campos.',
                        buttons: [{
                          text: 'Entendi',
                          role: 'cancel',
                          handler: function handler() {}
                        }]
                      });

                    case 11:
                      _alert = _context7.sent;
                      _context7.next = 14;
                      return _alert.present();

                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return CarrinhoPage;
      }();

      CarrinhoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _providers_firebase__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }];
      };

      CarrinhoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carrinho',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./carrinho.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/carrinho/carrinho.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./carrinho.page.scss */
        "./src/app/carrinho/carrinho.page.scss"))["default"]]
      })], CarrinhoPage);
      /***/
    },

    /***/
    "./src/app/historico/historico.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/historico/historico.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppHistoricoHistoricoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  padding: 30px;\n}\n\n.promoCard {\n  width: 100%;\n  height: 100px;\n  background: #6b6969;\n  border-radius: 5px;\n  background-size: cover !important;\n  background-position-x: center !important;\n  background-position-y: center !important;\n}\n\n.logo {\n  width: 60px;\n}\n\nion-menu-button {\n  --color: white !important;\n  color: white !important;\n}\n\nion-menu-buttons {\n  --color: white !important;\n  color: white !important;\n}\n\n.header-translucent-ios ion-toolbar {\n  --opacity: 0 !important;\n}\n\nion-item {\n  --padding-start: 0px;\n  margin-bottom: 15px;\n}\n\nion-list-header {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  padding: 0px 10px;\n  align-items: center;\n  font-size: 16px;\n  border-radius: 5px;\n}\n\nion-col {\n  padding: 0px;\n}\n\n.produtoImagem {\n  width: 70px;\n  height: 70px;\n  background-size: cover !important;\n  background-position-x: center !important;\n  background-position-y: center !important;\n  border-radius: 100px;\n}\n\n.imagemProduto {\n  background-size: cover !important;\n  background-position-x: center !important;\n  background-position-y: center !important;\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n}\n\n.containerProduto {\n  width: 100%;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n}\n\n.descProduto {\n  text-align: justify;\n  text-justify: inter-word;\n  font-size: 14px;\n  color: #666666;\n}\n\n.footerDiv {\n  width: 100%;\n  height: 50px;\n}\n\n.iconDiv {\n  border-radius: 5px;\n  text-align: center;\n  width: 90%;\n  margin-left: 5%;\n}\n\nion-content {\n  --background: #fff !important ;\n}\n\nion-item {\n  --background: transparent !important ;\n}\n\nion-list {\n  --background: transparent !important;\n  background: transparent !important;\n  --ion-background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yaWNvL2hpc3Rvcmljby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtVQUFBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNGLHdCQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQ0FBQTtBQUFKOztBQUdFO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDhDQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3JpY28vaGlzdG9yaWNvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5wcm9tb0NhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDEwNywgMTA1LCAxMDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDYwcHg7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLW1lbnUtYnV0dG9ucyB7XG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci10cmFuc2x1Y2VudC1pb3MgaW9uLXRvb2xiYXIge1xuICAgIC0tb3BhY2l0eTogMCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ucHJvZHV0b0ltYWdlbSB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5pbWFnZW1Qcm9kdXRvIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uY29udGFpbmVyUHJvZHV0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kZXNjUHJvZHV0byB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmdiKDEwMiwgMTAyLCAxMDIpXG59ICAgXG5cbi5mb290ZXJEaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmljb25EaXYge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnRcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/historico/historico.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/historico/historico.page.ts ***!
      \*********************************************/

    /*! exports provided: HistoricoPage */

    /***/
    function srcAppHistoricoHistoricoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistoricoPage", function () {
        return HistoricoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _providers_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../providers/firebase */
      "./src/providers/firebase.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var HistoricoPage = /*#__PURE__*/function () {
        function HistoricoPage(firebase, modalController) {
          _classCallCheck(this, HistoricoPage);

          this.firebase = firebase;
          this.modalController = modalController;
          this.pedidos = [];
        }

        _createClass(HistoricoPage, [{
          key: "fechar",
          value: function fechar() {
            this.modalController.dismiss();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this7 = this;

              var items;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      //Recuperar detalhes dos pedidos
                      items = JSON.parse(localStorage.getItem('historicoPedidos'));

                      if (items) {
                        items.forEach(function (item) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                            var _this8 = this;

                            return regeneratorRuntime.wrap(function _callee8$(_context8) {
                              while (1) {
                                switch (_context8.prev = _context8.next) {
                                  case 0:
                                    this.firebase.pedido(item).then(function (r) {
                                      _this8.pedidos.push(r);
                                    });

                                  case 1:
                                  case "end":
                                    return _context8.stop();
                                }
                              }
                            }, _callee8, this);
                          }));
                        });
                      }

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));
          }
        }]);

        return HistoricoPage;
      }();

      HistoricoPage.ctorParameters = function () {
        return [{
          type: _providers_firebase__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      HistoricoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historico',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./historico.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/historico/historico.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./historico.page.scss */
        "./src/app/historico/historico.page.scss"))["default"]]
      })], HistoricoPage);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyDQbbdAFv_DjYOcYSiJaSPnEEbwnIr5M4I",
          authDomain: "uni9-cardapio-digital.firebaseapp.com",
          projectId: "uni9-cardapio-digital",
          storageBucket: "uni9-cardapio-digital.appspot.com",
          messagingSenderId: "118034337805",
          appId: "1:118034337805:web:883cf950676cf016708544"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "./src/providers/firebase.ts":
    /*!***********************************!*\
      !*** ./src/providers/firebase.ts ***!
      \***********************************/

    /*! exports provided: FirebaseService */

    /***/
    function srcProvidersFirebaseTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
        return FirebaseService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

      var FirebaseService = /*#__PURE__*/function () {
        function FirebaseService(afs, afAuth) {
          _classCallCheck(this, FirebaseService);

          this.afs = afs;
          this.afAuth = afAuth;
          this.carrinho = [];
        }

        _createClass(FirebaseService, [{
          key: "iniciar",
          value: function iniciar() {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              //Login anonimo
              _this9.afAuth.signInAnonymously().then(function () {
                //Recuperar configurações
                _this9.afs.firestore.collection('config').doc('config').get().then(function (r) {
                  //Atribuir a variavel global (para recuperarmos de outras paginas)
                  _this9.config = r.data();
                  resolve(_this9.config);
                });
              });
            });
          }
        }, {
          key: "categorias",
          value: function categorias() {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              //Recuperar categorias
              _this10.afs.firestore.collection('categorias').get().then(function (lista) {
                var array = [];
                lista.forEach(function (item) {
                  //Formatar dado
                  var obj = item.data();
                  obj['id'] = item.id;
                  array.push(obj);
                });
                resolve(array);
              });
            });
          }
        }, {
          key: "produtosPorCategoria",
          value: function produtosPorCategoria(categoriaId) {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              //Recuperar categorias
              _this11.afs.firestore.collection('produtos').where('categoria', '==', categoriaId).get().then(function (lista) {
                var array = [];
                lista.forEach(function (item) {
                  //Formatar dado
                  var obj = item.data();
                  obj['id'] = item.id;
                  array.push(obj);
                });
                resolve(array);
              });
            });
          }
        }, {
          key: "pedir",
          value: function pedir(pedido) {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
              //Recuperar categorias
              _this12.afs.firestore.collection('pedidos').add(pedido).then(function (r) {
                resolve(r.id);
              })["catch"](function (e) {
                reject(e);
              });
            });
          }
        }, {
          key: "pedido",
          value: function pedido(id) {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
              //Recuperar categorias
              _this13.afs.firestore.collection('pedidos').doc(id).get().then(function (r) {
                resolve(r.data());
              })["catch"](function (e) {
                reject(e);
              });
            });
          }
        }]);

        return FirebaseService;
      }();

      FirebaseService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }];
      };

      FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FirebaseService);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\vivil\OneDrive\Área de Trabalho\app-cardapio-digital-master\app-cardapio-digital-master\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map