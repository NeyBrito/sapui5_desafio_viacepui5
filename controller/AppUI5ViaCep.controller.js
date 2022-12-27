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

            onInit: function() {
                
            },
            onAfterRendering(){
                var panel1 = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--panel1");
                var panel2 = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--panel2");
                var panel3 = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--panel3");
                var btn1   = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--_IDGenButton1");
                panel2.hide();
                panel3.hide();
                btn1.hide();
            },
            pesquisarCep: function (event, _z){
                var panel1 = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--panel1");
                var panel2 = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--panel2");
                var panel3 = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--panel3");
                var btn1   = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--_IDGenButton1");

                var getCep = event.getSource().getValue();
                var urlReq = "https://viacep.com.br/ws/" + getCep + "/json";
                
                $.ajax({
                    type: "GET",
                    crossDomain: true,
                    url: urlReq,
                    success: function (res, status, xhr) {
                        console.log(res);
                        console.log(status);
                        console.log(xhr);

                        var erro = res.erro;
                        console.log(erro);
                        if (erro == true){
                            alert("O CEP " + getCep + " não existe!" );
                            panel1.show();
                            panel2.hide();
                            panel3.hide();
                            btn1.hide();
                            return;
                        }

                        $("input[name='logradouro']").val(res.logradouro);
                        $("input[name='bairro']").val(res.bairro);
                        $("input[name='estado']").val(res.uf);
                        $("input[name='cidade']").val(res.localidade);
                        $("input[name='cep']").val(res.cep);
                        panel1.hide();
                        panel2.show();
                        panel3.show();
                        btn1.show();
                        
                    },
                    error: function(data){
                        console.log(data);
                    }
                });       
            },
            
		    limparEndereco: function (_oEvent, _y, _z){
                var panel1 = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--panel1");
                var panel2 = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--panel2");
                var panel3 = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--panel3");
                var btn1   = $("#application-treinaui5sapui5viacep-display-component---AppUI5ViaCep--_IDGenButton1");
                $("input[name='logradouro']").val("");
                $("input[name='bairro']").val("");
                $("input[name='estado']").val("");
                $("input[name='cidade']").val("");
                $("input[name='cep']").val("");
                panel1.show();
                panel2.hide();
                panel3.hide();
                btn1.hide();
            },

        });
    });
