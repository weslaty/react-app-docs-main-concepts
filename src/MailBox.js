import React from 'react'

export default function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h4>MailBox !</h4>
            {unreadMessages.length > 0 &&
                <h5>Vous avez {unreadMessages.length} messages(s) non-lu(s)</h5>
            }
        </div>

    );
}