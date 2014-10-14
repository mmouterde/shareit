angular.module("app").service('ThreadService', function ($q) {
  var service= {};
  service.getThread =  function (id) {
      //TODO call backend
    var deferred = $q.defer();
    setTimeout(function() {
        deferred.resolve(
          {
            id:id,
            //the message interface version
            version: 1,
            //The Thread Title
            title: "What is your best programmer joke ?",
            subtitle : "ever...",
            //The list of Thread Tag
            tag: ["Joke"],
            //The list of tribe that are listening for this thread
            tribe: [
              {id: 12}
            ],
            //The list of message in the thread (first is the question / or published content)
            messages: [
              {
                //The message id
                id:586,
                //the message interface version
                version: 1,
                //The type of thread
                type:"QUESTION_TYPE",
                //The author minimal information (see links to get complete information)
                author: {id: 123, displayName: "Alain Aladeux"},
                //The message content
                content: {
                  //The formatted content
                  data: 'Here is my favorite :<br/><code>Q: Why do programmers always mix up Halloween and Christmas<br/>A: Because Oct 31 == Dec 25!</code>',
                  //The content interface version
                  version: 1,
                  //the content format
                  format:"html"
                },
                //the current +1 sum
                notation: 8,
                //the publishing date
                date: 1233454354,
                //The list of comments
                comments: [
                  {
                    //The comment interface version
                    version:1,
                    //The author minimal information
                    author: {id: 123, displayName: "Adam Lapomme"},
                    //the publishing date
                    date: 1233454354,
                    //The content of comment
                    content: {
                      //The formatted content
                      data :'hahaha I understand now Octal 31 is equal to Decimal 25',
                      //The content interface version
                      version : 1,
                      //the content format
                      format : "html"
                    },
                    //Hateaos for comments
                    links: [
                      {rel: "author", href: "/member/123"}
                    ]
                  }
                ],
                //Hateaos for messgae
                links: [
                  //If exist that allow the current user to vote (post = +1, delete = -1). If no, voting is not allowed
                  {rel: "vote", href: "/api/vote/586"},
                  //If exist that allow to add subscrib to notification on this thread
                  {rel: "watch", href: "/api/watch/586"},
                  //A link to the author page
                  {rel: "author", href: "/page/member/123"}
                ]
              },
              {
                id:57,
                version: 1,
                author: {id: 124, displayName: "Sarah Croche"},
                content: {
                  data: 'nice, but here is mine : <br/><code><span>Q: how many programmers does it take to change a light bulb ?</span><br/><span>A: none, that\'s a hardware problem</span></code>',
                  version: 1,
                  format:"html"
                },
                notation: 2,
                date: 1233454357,
                links: [
                  {rel: "favorite", href: "/favorite/57"},
                  {rel: "author", href: "/member/124"},
                  {rel: "watch", href: "/watch/57"}
                ]
              }
            ]
          }
        );
    }, 200);
    return deferred.promise;
    };
  return service;
});
