$(document).ready(function () {
    // Load JSON file with responses
    $.getJSON("responses.json", function (data) {
        // Set event listener for chat input
        $("#chatinput").keypress(function (e) {
            const El = document.getElementById('chatlog');
            setTimeout(() => {
                El.scrollTo({ top: 0, behavior: 'smooth' });
                El.scrollTo({ top: El.scrollHeight, behavior: 'smooth' });
            }, 20);
            if (e.which == 13) {
                var userInput = $("#chatinput").val();
                $("#chatlog").append("<div class='user'><p>You: " + userInput + "</p></div>");
                $("#chatinput").val("");

                // Loop through responses to find a match
                var foundResponse = false;
                for (var i = 0; i < data.responses.length; i++) {
                    var keywords = data.responses[i].keywords;
                    for (var j = 0; j < keywords.length; j++) {
                        if (userInput.toLowerCase().indexOf(keywords[j]) != -1) {
                            $("#chatlog").append("<div class='bot'><p class=''>" + data.responses[i].response + "</p></div>");
                            foundResponse = true;
                            break;
                        }
                    }
                    if (foundResponse) {
                        break;
                    }
                }

                // If no response is found
                if (!foundResponse) {
                    $("#chatlog").append("<p class='bot'>I'm sorry, I don't understand your question. Can you rephrase it or provide more information?</p>");
                }
            }
        });
    });
});

function jk() {
    const El = document.getElementById('chatlog');
    setTimeout(() => {
        El.scrollTo({ top: 0, behavior: 'smooth' });
        El.scrollTo({ top: El.scrollHeight, behavior: 'smooth' });
    }, 20);
    $.getJSON("responses.json", function (data) {
        var userInput = $("#chatinput").val();

        $("#chatlog").append("<p class='user'>You: " + userInput + "</p>");
        $("#chatinput").val("");


        // Loop through responses to find a match
        var foundResponse = false;
        for (var i = 0; i < data.responses.length; i++) {
            var keywords = data.responses[i].keywords;
            for (var j = 0; j < keywords.length; j++) {
                if (userInput.toLowerCase().indexOf(keywords[j]) != -1) {
                    
                    setTimeout(() => {
                        $("#chatlog").append("<p id='bot' class='bot' onchange='po()'>" + data.responses[i].response + "</p>");
                    }, 500);
                    iop()

                    foundResponse = true;
                    break;

                }
            }
            if (foundResponse) {
                break;
            }
        }

        // If no response is found
        if (!foundResponse) {
            $("#chatlog").append("<div class='eee'><p class='bot'>I'm sorry, I don't understand your question. Can you rephrase it or provide more information?</p></div>");
        }
    })
}