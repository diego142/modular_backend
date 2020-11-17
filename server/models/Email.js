const nodemailer = require('nodemailer');
module.exports = class Email {

    static newAccount(user, req) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'foroqci@gmail.com',
                pass: 'adminqci123'
            }
        });

        const mailOptions = {
            from: 'ForoQci',
            to: user.email,
            subject: 'Bienvenido al foro Qci',
            html: `
            <div style="font-family:Consolas;">
                <h1 style="color: rgb(55, 59, 92)">Hola <i>${user.name} ${user.lastName}</i>, felicidades has creado tú cuenta en ForoQci.</h1>
                <h2 style="color: darkblue">Ya puedes iniciar sesión con el e-mail: <i style="color: cadetblue">${user.email}.</i></h2>
                <h2 style="color: darkblue">No olvides llenar todos tus datos en tu perfil.</h2>
                <u>No responder a este correo.</u>
            </div>
            `
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return err;
            } else {
                return info;
            }
        });
    }

    static passRecovery(user) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'foroqci@gmail.com',
                pass: 'adminqci123'
            }
        });

        const mailOptions = {
            from: 'ForoQci',
            to: user.email,
            subject: 'Recuperar contraseña',
            html: `
            <div style="font-family:Consolas;">
                <h2 style="color: rgb(55, 59, 92)">Hola <i>${user.name} ${user.lastName}</i>, recupera tu contraseña.</h2>
                <h2 style="color: darkblue">Tu contraseña es: <i style="color: cadetblue; font-size: 24px">'${user.password}'.</i></h2>
                <u>No responder a este correo.</u>
            </div>
            `
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return err;
            } else {
                return info;
            }
        });
    }


};