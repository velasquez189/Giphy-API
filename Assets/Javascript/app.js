$(document).ready(function() {

var topics= ["spiderman", "spongebob", "dodge", "dog", "owl"];

addTopics()

$("#submitBtn").on("click", function(){
    var userInput = $(".userInput").val() 
    topics.push(userInput)
    console.log(topics)
    addTopics()
    $(".userInput").val("")
})
function addTopics (){
    $(".topicBtns").empty()
    for (var i=0; i <topics.length; i++){
        var btn=  $("<button>")
          //<button></button>
          btn.addClass("topic")
          //<button class="topic"></button>
          btn.text(topics[i])
          //<button class="topic">spiderman</button>
          $(".topicBtns").append(btn)
    }      
}








})