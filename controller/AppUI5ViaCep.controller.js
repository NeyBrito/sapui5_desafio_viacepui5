
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Context"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        
        return Controller.extend("treinaui5.sapui5viacep.controller.AppUI5ViaCep", {
            
            onInit: function () {

            },
            onAfterRendering() {
                var panel2 = this.byId("panel2");
                var panel3 = this.byId("panel3");
                var btn1   = this.byId("_IDGenButton1");
                panel2.setVisible(false);
                panel3.setVisible(false);
                btn1.setVisible(false);
            },
            pesquisarCep: function (event, _z) {
                var panel1     = this.byId("panel1");
                var panel2     = this.byId("panel2");
                var panel3     = this.byId("panel3");
                var btn1       = this.byId("_IDGenButton1");
                var cidade     = this.byId("cidade");
                var logradouro = this.byId("logradouro");
                var bairro     = this.byId("bairro");
                var cep        = this.byId("cep");
                var estado     = this.byId("estado");
                var getCep = event.getSource().getValue();

                if (getCep !== '') {
                    var urlReq = "https://viacep.com.br/ws/" + getCep + "/json";
                    $.ajax({
                        type: "GET",
                        crossDomain: true,
                        url: urlReq,
                        success: function (res, status, xhr) {
                            var erro = res.erro;
                            console.log(erro);
                            if (erro == true) {
                                panel2.setVisible(false);
                                panel3.setVisible(false);
                                btn1.setVisible(false);
                                alert("O CEP " + getCep + " não existe!");
                                return;
                            }
                            console.log(res);
                            
                            panel1.setVisible(false);
                            panel2.setVisible(true);
                            panel3.setVisible(true);
                            btn1.setVisible(true);

                            cidade.setValue(res.localidade);
                            cep.setValue(res.cep);
                            logradouro.setValue(res.logradouro);
                            estado.setValue(res.uf);
                            bairro.setValue(res.cep);
                            
                        },
                        error: function (data) {
                            console.log(data);
                        }
                    });
                }
                else{
                    alert("Precisa digitar o CEP");
                    return;
                }
            },

            limparEndereco: function (_oEvent, _y, _z) {
                var panel1 = this.byId("panel1");
                var panel2 = this.byId("panel2");
                var panel3 = this.byId("panel3");
                var btn1 = this.byId("_IDGenButton1");
                var cidade     = this.byId("cidade");
                var logradouro = this.byId("logradouro");
                var bairro     = this.byId("bairro");
                var cep        = this.byId("cep");
                var estado     = this.byId("estado");

                cidade.setValue("");
                cep.setValue("");
                logradouro.setValue("");
                estado.setValue("");
                bairro.setValue("");

                panel1.setVisible(true);
                panel2.setVisible(false);
                panel3.setVisible(false);
                btn1.setVisible(false);
            },

        });
    });
