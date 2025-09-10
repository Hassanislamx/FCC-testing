const { Server } = require("mongodb/lib/core");

module.exports =Server;
$(document).ready(function () {
    /*global io*/
    let socket = io('https://58f2ea97-babf-4132-94ae-eda665c5adc5-00-4v3k906fk3lz.sisko.replit.dev/');

    socket.on('user', data => {
        $('#num-users').text(data.currentUsers + ' users online');
        let message =
            data.username +
            (data.connected ? ' has joined the chat.' : ' has left the chat.');
        $('#messages').append($('<li>').html('<b>' + message + '</b>'));
    });

    socket.on('chat message', data => {
        console.log('socket.on 1')
        $('#messages').append($('<li>').text(`${data.username}: ${data.message}`));
    })

    // Form submittion with new message in field with id 'm'
    $('form').submit(function () {
        let messageToSend = $('#m').val();
        //send message to server here?
        socket.emit('chat message', messageToSend);
        $('#m').val('');
        return false; // prevent form submit from refreshing page
    });
});