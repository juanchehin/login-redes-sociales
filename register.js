var config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
firebase.initializeApp(config);
firebase.analytics();

var auth = firebase.auth();
document.getElementById('btnloging').addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(function(result) {
            var user = result.user;
            console.log(result.user.providerData[0].displayName); //user_nom
            console.log(result.user.providerData[0].email); //user_correo
            console.log(result.user.providerData[0].photoURL);

            $.post("controller/usuario.php?op=registro", { usu_nom: result.user.providerData[0].displayName, usu_correo: result.user.providerData[0].email, usu_pass: 123456 }, function(data) {
                if (data == 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Aceptado!',
                        text: 'Registro Correcto',
                        confirmButtonText: `Ok`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.open('http://localhost/login-redes-sociales/view/home/', '_self');
                        }
                    });
                } else {
                    Swal.fire(
                        'Observacion!',
                        'Correo ya existe',
                        'question'
                    );
                }
            });

        }).catch(function(error) {
            console.log(error);
        });
});

document.getElementById('btnloginf').addEventListener('click', function() {
    var provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(function(result) {
            var user = result.user;
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

            $.post("controller/usuario.php?op=registro", { usu_nom: result.user.providerData[0].displayName, usu_correo: result.user.providerData[0].email, usu_pass: 123456 }, function(data) {
                if (data == 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Aceptado!',
                        text: 'Registro Correcto',
                        confirmButtonText: `Ok`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.open('http://localhost/login-redes-sociales/view/home/', '_self');
                        }
                    });
                } else {
                    Swal.fire(
                        'Observacion!',
                        'Correo ya existe',
                        'question'
                    );
                }
            });

        }).catch(function(error) {
            console.log(error);
        });
});

document.getElementById('btnloginh').addEventListener('click', function() {
    var provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider)
        .then(function(result) {
            var user = result.user;
            console.log(result.user.providerData[0].displayName);
            console.log(result.user.providerData[0].email);
            console.log(result.user.providerData[0].photoURL);

            $.post("controller/usuario.php?op=registro", { usu_nom: result.user.providerData[0].displayName, usu_correo: result.user.providerData[0].email, usu_pass: 123456 }, function(data) {
                if (data == 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Aceptado!',
                        text: 'Registro Correcto',
                        confirmButtonText: `Ok`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.open('http://localhost/login-redes-sociales/view/home/', '_self');
                        }
                    });
                } else {
                    Swal.fire(
                        'Observacion!',
                        'Correo ya existe',
                        'question'
                    );
                }
            });

        }).catch(function(error) {
            console.log(error);
        });
});

function init() {

}

$(document).ready(function() {

});

$(document).on("click", "#btnregistrar", function() {
    var usu_nom = $('#usu_nom').val();
    var usu_correo = $('#usu_correo').val();
    var usu_pass = $('#usu_pass').val();
    var usu_pass1 = $('#usu_pass1').val();

    if (usu_nom == '' || usu_correo == '' || usu_pass == '' || usu_pass1 == '') {
        Swal.fire(
            'Error!',
            'Campos Vacios',
            'error'
        );
    } else {
        if (usu_pass == usu_pass1) {
            $.post("controller/usuario.php?op=registro", { usu_nom: usu_nom, usu_correo: usu_correo, usu_pass: usu_pass }, function(data) {
                if (data == 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Aceptado!',
                        text: 'Registro Correcto',
                        confirmButtonText: `Ok`,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.open('http://localhost/login-redes-sociales/view/home/', '_self');
                        }
                    });
                } else {
                    Swal.fire(
                        'Observacion!',
                        'Correo ya existe',
                        'question'
                    );
                }
            });
        } else {
            Swal.fire(
                'Error!',
                'Contraseñas Incorrectas',
                'error'
            );
        }
    }
});