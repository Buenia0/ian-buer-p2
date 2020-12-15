var messages = [];

var messageType =
{
    sender: 'sender-message',
    replier: 'replier-message',
    unknown: 'unknown-message',
};

var data = [
    {
        type: messageType.sender,
        user: "Hideku",
        message: "What's up, Rize?"
    }
];

function ChatMessage(type, user, message)
{
    this.type = type;
    this.user = user;
    this.message = message;
}

function createChatMessageElement(message)
{
    var messageText = document.createTextNode(message.user + ": " + message.message);

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addChatMessageHandler(event)
{
    var user, type;

    var messageInput = document.getElementById("user-input");
    var messagesContainerEl = document.getElementById("message-container");

    switch (event.target.id)
    {
        case 'send-button':
            user = "Hideku";
            type = messageType.sender;
            break;
        case 'reply-button':
            user = "RizeGaming";
            type = messageType.replier;
            break;
        default:
            user = "unknown";
            type = messageType.unknown;
            break;
    }

    if (messageType.value != '')
    {
        var message = new ChatMessage(type, user, messageInput.value);
        messages.push(message);

        var el = createChatMessageElement(message);
        messagesContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

function loadSeedData()
{
    for (var i = 0; i < data.length; i++)
    {
        var message = new ChatMessage(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    var messagesContainerEl = document.getElementById("message-container");

    for (var i = 0; i < messages.length; i++)
    {
        var message = messages[i];
        var el = createChatMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
}

var init = function()
{
    document.getElementById('send-button').onclick = addChatMessageHandler;
    document.getElementById('reply-button').onclick = addChatMessageHandler;

    loadSeedData();
}

init();