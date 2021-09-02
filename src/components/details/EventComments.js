import React from "react";
const comments = {
    comment: [
        {
            user: "raffagrassetti",
            text: "Woah dude, this is awesome! 🔥",
            id: 1,
        },
        {
            user: "Samia",
            text: "Great job",
            id: 2,
        },
        {
            user: "Maroua",
            text: "Bravo",
            id: 3,
        },
        {
            user: "raffagrassetti",
            text: "Great !!",
            id: 4,
        },
        {
            user: "raffa",
            text: "oooh !!",
            id: 5,
        },
        {
            user: "assetti",
            text: "Thanks for you effort !!",
            id: 6,
        },
    ]
};
function EventComments() {
    return (
        <ul className="scroll__comment">
        <div>
            {
            comments.comment.map(comments => (
            <div key={comments.id} className="commentContainer">
                <div className="accountName">{comments.user}</div>
                <div className="comment">{comments.text}</div>
            </div>
            )
            )
         }
    </div> 
        </ul>
    );
  }
  
  export default EventComments;
  