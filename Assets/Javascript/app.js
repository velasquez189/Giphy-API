$(document).ready(function () {



    var topics = ["spiderman", "spongebob", "dodge", "dog", "owl"];

    addTopics()

    $("#submitBtn").on("click", function () {
        var userInput = $(".userInput").val()
        topics.push(userInput)
        console.log(topics)
        addTopics()
        $(".userInput").val("")
    })

    function addTopics() {
        $(".topicBtns").empty()
        for (var i = 0; i < topics.length; i++) {
            var btn = $("<button>")
            //<button></button>
            btn.addClass("topic")
            //<button class="topic"></button>
            btn.text(topics[i])
            //<button class="topic">spiderman</button>
            $(".topicBtns").append(btn)
        }
    }
    $(document).on("click", ".topic", function () {
        var topic = $(this).text();
        console.log(topic);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=kKXqyS0LuBks5xVJnZbbTLgJF9DSLxay&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response)
            $(".images").empty();
            for (var i = 0; i< response.data.length; i++){
               var image = response.data[i].images.downsized.url;
               console.log(image)
               $(".images").append("<img src=" + image + ">")
            }
        }).catch(function(error){
            console.log(error)

        })
    })






})