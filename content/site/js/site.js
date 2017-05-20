// open tabs 

function openInfo(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    $('#' + tabName).css("display", "block");
    // evt.currentTarget.className += " active";
}

// close tabs


// PERFIL
function startperfil(formulario, divedit = 0) {
    // openInfo('event', 'pessoa');
    // showlabels(formulario);
    // $('#' + formulario).find('#edit').show();
    $('#' + formulario).find('#save').hide();
    $('#' + formulario).find('#cancel').hide();
    $('#' + formulario).find('#' + divedit).hide();
    $('#' + formulario).validate({ errorClass: 'text-errors' });
}

function showlabels(form) {
    $(form).find("strong").show();
    $(form).find("input").hide();
}

function showtexts(form) {
    $(form).find("strong").hide();
    $(form).find("input").show();
}

function editpeople(formulario) {
    // var id = $(formulario).find('#Id').val();

    // if (id == 0) {
    //     $(formulario).find('#warning').text('Selecione uma opção.');
    //     return false;
    // }
    // else {
    //     $(formulario).find('#warning').text('');
    // }

    // showtexts(formulario);
    $('#' + formulario).find('input').attr('readonly', false);
    $('#' + formulario).find('#edit').hide();
    $('#' + formulario).find('#cancel').show();
    $('#' + formulario).find('#save').show();
}

function edititempeople(formulario, divedit = 0) {

     var id = $('#' + formulario).find('#Id').val();

    if (id == 0) {
        $('#' + formulario).find('#warning').text('Selecione uma opção para editar.');
        return false;
    }
    else {
        $('#' + formulario).find('#warning').text('');
    }

    // showtexts(formulario);
    $('#' + formulario).find('input').attr('readonly', false);
    $('#' + formulario).find('#' + divedit).show();    
    $('#' + formulario).find('#edit').hide();
    $('#' + formulario).find('#cancel').show();
    $('#' + formulario).find('#save').show();
}

function canceleditpeople(formulario) {
    // showlabels(formulario);
    $('#' + formulario).find('input').attr('readonly', true);    
    $('#' + formulario).find('#edit').show();
    $('#' + formulario).find('#cancel').hide();
    $('#' + formulario).find('#save').hide();
}

function canceledititempeople(formulario, divedit = 0) {
    // showlabels(formulario);
    $('#' + formulario).find('input').attr('readonly', true);
    $('#' + formulario).find('select').val('0').change();
    $('#' + formulario).find('#' + divedit).hide();  
    $('#' + formulario).find('#edit').show();
    $('#' + formulario).find('#cancel').hide();
    $('#' + formulario).find('#save').hide();
}

function savepeople(formulario, divedit = 0) {
    // showtexts(formulario);
    $('#' + formulario).find('#' + divedit).show();
    $('#' + formulario).find('input').attr('readonly', false);
    $('#' + formulario).find('#edit').hide();
    $('#' + formulario).find('#cancel').show();
    $('#' + formulario).find('#save').show();
    $('#' + formulario).find('#txtpeoplenome').val('');
    $('#' + formulario).find('#Id').val('');
}

// FIM PERFIL

// cpfcnpj EVENTO

function ValidateCPFCNPJ(str) {

    str = str.replace('.', '').replace('.', '').replace('-', '').replace('/', '');


    if (str.length == 0) {
        document.getElementById("txtCPF").innerHTML = "";
        return;
    } else if (str.length >= 11) {
        postPartialView('login/ValidarCpfCnpj/' + str, 'txtCPF');
    }

}

// cpfcnpj NAVEGACAO


// INSERIR PESSOA


function SubmitPartialForm(form, elementId) {


    // form.validate({errorClass: 'text-errors'});

     if(!form.valid()) 
        return false;

        form.find('#botao').attr('name', 'save');
        form.find('#botao').val('Salvar');

        postForm(form, elementId, '', '');        
}

// FIM INSERIR PESSOA

// PERFIL 

function ChangeEmail(id) {
    if(id != 0) postPartialView('pessoa/email/' + id, 'retornoEmail');
    else canceledititempeople('email', 'divedit');    
}

function ChangeTelefone(id) {
    if(id != 0) postPartialView('pessoa/telefone/' + id, 'retornoTelefone');
    else  canceledititempeople('telefone', 'divedit');
}

// FIM


// VALIDAR LOGIN EXISTENTE


 function showLogin(str) {
    if (str.length == 0) {
        document.getElementById("txtlogin").innerHTML = "";
        return;
    } else {
        postPartialView('login/Validar/' + str, 'txtlogin');
    }

}


// FIM VALIDAR LOGIN EXISTENTE


// cadastra pet


 function CadastrarPet(form) {

    form.validate({errorClass: 'text-errors'});
    
    if(!form.valid()) 
        return false;

                
        postForm(form,'txtretorno', 'result','login');
        $("#descricao").val('');
        $("#nome").val('');
}

// fim cadastra pet


// contar len text area


function countChar(val, label){
     var len = val.value.length;
     if (len >= 501) {
              val.value = val.value.substring(0, 500);
     } else {
              $('#' + label).text(500 - len);
     }
};

// fim contar