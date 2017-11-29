---
author: Jeff Lowery
authorTwitter: https://twitter.com/jmlowery
authorFacebook: https://facebook.com/10209080625586279
title: "Writing a chess microservice using Node.js and Seneca, Part 2"
subTitle: "Handling new requirements without refactoring"
coverSrc: https://cdn-images-1.medium.com/max/1600/1*kKyKqEjIfVK--SJT2-SoXQ.jpeg
url: https://medium.freecodecamp.org/follow-the-rules-with-seneca-ii-c22074debac
id: follow-the-rules-with-seneca-ii-c22074debac
date: 2017-06-14T19:44:26.861Z
tags: [
  "JavaScript",
  "Chess",
  "Tech",
  "Microservices",
  "Programming"
]
---
# Writing a chess microservice using Node.js and Seneca, Part 2

## Handling new requirements without refactoring



![](https://cdn-images-1.medium.com/max/1600/1*kKyKqEjIfVK--SJT2-SoXQ.jpeg)



[Part 1](https://medium.freecodecamp.com/follow-the-rules-with-seneca-b3cf3d08fe5d) of this series talked about defining and calling microservices using Seneca. A handful of services were created to return all legal moves of a lone chess piece on a chessboard. The series continues in [Part 3](https://medium.com/@jefflowery/writing-a-chess-microservice-using-node-js-and-seneca-part-3-ab38b8ef9b0a).

#### A quick review:

*   Seneca services are identified by a pattern consisting of `role` and `cmd` properties. Additional properties can be added to the pattern as well.

<pre name="e4a5" id="e4a5" class="graf graf--pre graf-after--li">this.add({  
        role: "movement",  
        cmd: "legalMoves"   //, otherProp: value, ...  
    }, (msg, reply) => {...}</pre>

*   Services also have an implementation that takes a `msg` object and a reply callback. The`msg` object contains the pattern properties in addition to all other data sent to the service.
*   `Seneca.act()`is used to indirectly invoke a service. The `act` method takes an object and a callback function. The object contains the `role`, `cmd`, and other properties that comprise the message to the service.

<pre name="275c" id="275c" class="graf graf--pre graf-after--li">seneca.act({  
            role: "movement",  
            cmd: "legalMoves",  
            piece: p,  
            board: board  
        }, (err, msg) => {</pre>

*   When an action could be handled by more than one service that matches the pattern, the service with the [most specific pattern match](http://senecajs.org/getting-started/#how-patterns-work) will be invoked.

There were a handful of services defined in the [first part](https://medium.freecodecamp.com/follow-the-rules-with-seneca-b3cf3d08fe5d) of this series. One of three`rawMoves` services took a piece and its position as parameters and returned 15 x 15 movement mask. These were truncated to an 8 x 8 board using a`legalSquares` service. The result was that the services together can return all the legal moves of any piece on any legal square of the otherwise empty chessboard.

### Microservices and Technical Debt

One of the motivations for microservices is to [reduce technical debt](http://www.infoworld.com/article/2878659/application-development/reducing-technical-debt-with-microservices.html). Every project has deadlines and, as they loom larger, expediency often trumps quality. FIXME and TODO comments litter the source code after a while. Those comments identify technical debt that “someday” will be taken care of.

#### Someday never comes

Microservices focus on functional decomposition and loose coupling. Neither of those are new ideas, but it is a rethinking about how to implement those concepts. A microservice should be small, single-purposed, and extensible. Extending a service can happen with few or no side-effects. A new service can extend an existing service, and neither the old service nor the client that once called it will know the service implementation changed. Less refactoring of classes, methods, method signatures, process flow… all this makes it easier to deal with dreaded TD.

### Back to the game in progress…

Moving a single chess piece around a lonely board is not really all that entertaining. In a real chess game the chessboard is shared with friendly and hostile pieces, and these impact each other’s movement.

Right now I have a`legalSquares` service which can be the basis of a more complete`legalMoves`service. If you recall, the `legalSquares` service would invoke a `rawMoves`service, then remove all the ‘bad’ squares that didn’t belong on a chessboard.

The new `legalMoves` service will take into account other pieces, something that `legalSquares` didn’t. This requires an extra parameter, one called `board`. The `board` is just going to be an array of **ChessPiece** instances, and will assume that the pieces on the board have already been checked for validity. For instance, two pieces don’t occupy the same square, pawns aren’t on the first rank, kings aren’t be next to each other, and so forth.

The following pattern will identify the service:

<pre name="6338" id="6338" class="graf graf--pre graf-after--p">'role: movement;cmd: legalMoves'</pre>

This pattern is a stringified version of JSON called **jsonic**; you can use a regular JSON object if you prefer. The message to the service will contain the pattern. It will also contain a ChessPiece instance that has a piece type such as ‘K’ing, ‘Q’ueen, ‘R’ook and board position (see algebraic notation). Later I’ll add to this class a piece color (White or Black) so that the service can tell friend from foe. But for now the service will assume all pieces are friendly.

Since a friendly piece cannot be captured, it will restrict movement of other friendly pieces. Determining those restrictions is a bit of work. I made it harder for myself in the implementation of the `rawMoves` service… which brings me to:

### Microservices are not a Panacea

If you design a service that retrieves or calculates information and **doesn’t** pass that data on up the chain, some service upstream may have to redo that work later. In my example, `rawMoves` returned an array of move objects (file and rank positions on the board). Let’s take the method that generates diagonal moves for a piece using the `rawMoves` service:

<pre name="60d4" id="60d4" class="graf graf--pre graf-after--p">module.exports = function diagonal(position, range = 7) {  
    var moves = [];  
    const cFile = position.file.charCodeAt()  
    const cRank = position.rank.charCodeAt();</pre>

<pre name="8b95" id="8b95" class="graf graf--pre graf-after--pre">for (var i = 1; i < range + 1; i++) {  
        moves.push({  
            file: String.fromCharCode(cFile - i),  
            rank: String.fromCharCode(cRank - i)  
        });  
        moves.push({  
            file: String.fromCharCode(cFile + i),  
            rank: String.fromCharCode(cRank + i)  
        });  
        moves.push({  
            file: String.fromCharCode(cFile - i),  
            rank: String.fromCharCode(cRank + i)  
        });  
        moves.push({  
            file: String.fromCharCode(cFile + i),  
            rank: String.fromCharCode(cRank - i)  
        });  
    }  
    return moves;  
}</pre>

At first glance, there’s nothing wrong with this. But, those four`move.push` operations actually operate along **movement vectors**.I could have constructed four movement vectors, then returned a list of moves by concatenating them, like so:

<pre name="a75e" id="a75e" class="graf graf--pre graf-after--p">function diagonalMoves(position, range) {  
    var vectors = [[], [], [], []];  
    const cFile = position.file.charCodeAt()  
    const cRank = position.rank.charCodeAt();  

    for (var i = 1; i < range + 1; i++) {  
        vectors[0].push({  
            file: String.fromCharCode(cFile - i),  
            rank: String.fromCharCode(cRank - i)  
        });  
        vectors[1].push({  
            file: String.fromCharCode(cFile + i),  
            rank: String.fromCharCode(cRank + i)  
        });  
        vectors[2].push({  
            file: String.fromCharCode(cFile - i),  
            rank: String.fromCharCode(cRank + i)  
        });  
        vectors[3].push({  
            file: String.fromCharCode(cFile + i),  
            rank: String.fromCharCode(cRank - i)  
        });  
    }  

    const moves = Array.prototype.concat(...vectors)  
    return moves;  
}</pre>

As it stood, there was no point in doing this. But later on those vectors would have come in handy for truncating movements along diagonals (or ranks or files) when a friendly piece is in the way. Instead, I had to decompose the move list along vectors in services upstream — more work and inefficiency which you will see later.

The real flaw, though, was that I returned an array, rather than a data object. Data objects have properties that are extendable, not so arrays. As a consequence, all my upstream services depend on receiving a movement array,and **only** a movement array. No flexibility. I can’t now add a list of movement vectors **in addition**to a move list. But I could if I had returned an object from this method and the service that called it instead.

Lesson learned? Consider returning data objects from your services. Have your upstream services work on parts of the data, but pass all data they receive back upstream. Exceptions to this rule will abound, of course.

### With Friends like These…

In Part 1, there was a service under the pattern:

`role:"movement",cmd:"legalSquares"`

It returned all moves of an unimpeded piece. Since this will be the base service for determining legal moves on a populated chessboard, I’ll rename the `cmd`to `legalMoves`. Now I want to extend that to take into account friendly pieces that might be blocking a path of my chosen piece.

#### The extended service

The service that extends `role:"movement",cmd:"legalMoves"` is… `role:"movement",cmd:"legalMoves"` !

Yep, it has the same service pattern as the service it calls. You may recall that services are identified by pattern, and so how it this going to work? When the program acts on `role:"movement",cmd:"legalMoves"`, it will use the most recently defined service. But the new service has to call the former`legalMoves` service. That can be solved easily:

<pre name="09ca" id="09ca" class="graf graf--pre graf-after--p">this.add({  
        role: "movement",  
        cmd: "legalMoves"  
    }, (msg, reply) => {//returns unimpeded moves}</pre>

<pre name="6545" id="6545" class="graf graf--pre graf-after--pre">this.add('role:movement,cmd:legalMoves', function (msg, reply) {  
        this.**prior**(msg, function (err, moves) {  
            if (msg.board) {  
                const boardMoves = legalMovesWithBoard(msg, moves);  
                reply(err, boardMoves);  
                return;  
            }  
            reply(err, moves);  
        });  
    });</pre>

This new service is able to call the former service by using the `prior()` method in Seneca. If no `board` parameter is supplied in the incoming `msg` object, then this service will just act as a pass-thru to the former service. But what if there is a board?

I’m not going to show a complete code listing here (see link below), but the gist of it is:

<pre name="7eb6" id="7eb6" class="graf graf--pre graf-after--p">module.exports = function (msg, moves) {  
    if (!msg.board) return moves;</pre>

<pre name="efb1" id="efb1" class="graf graf--pre graf-after--pre">const blockers = moves.filter(m => {  
        return (msg.board.pieceAt(m))  
    })</pre>

<pre name="2a76" id="2a76" class="graf graf--pre graf-after--pre">var newMoves = [];  
    const pp = msg.piece.position;</pre>

<pre name="acb5" id="acb5" class="graf graf--pre graf-after--pre">const rangeChecks = {  
        B: diagonalChecks,  
        R: rankAndFileChecks,  
        K: panopticonChecks,  
        Q: panopticonChecks,  
        P: pawnChecks,  
        N: knightChecks  
    };</pre>

<pre name="d8c3" id="d8c3" class="graf graf--pre graf-after--pre">var rangeCheck = rangeChecks[msg.piece.piece];  
    // console.error(msg.piece.piece, rangeCheck.name)  
    newMoves = moves.filter(m => {  
        return rangeCheck(m, blockers, pp);  
    })  
    return newMoves;  
}</pre>

Remember our old friend `diagonalMoves` from the `rawMoves` service? In order to do a range check on diagonals without handy vectors, the new `legalMoves` service calls this:





<iframe width="700" height="250" src="https://medium.freecodecamp.org/media/48ce9f34f745acce70377b08003f8494?postId=c22074debac" data-media-id="48ce9f34f745acce70377b08003f8494" data-thumbnail="https://i.embed.ly/1/image?url=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F3497069%3Fv%3D3%26s%3D400&amp;key=a19fcc184b9711e1b4764040d3dc5c07" allowfullscreen="" frameborder="0"></iframe>





Ugly, no? I’d be happy if some algorithmically-inclined reader reduced this to two lines in the comments section. Three, even.

So that takes care of friendly pieces. The next installment will deal with hostile pieces, which can be captured.

Full source code for this article can be found at [GitHub](https://github.com/JeffML/ms-chess2).








