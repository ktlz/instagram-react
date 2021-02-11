import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({username, caption, imageUrl, avatarUrl}) {
    return (
        <div className="post">
            
            <div className="post__header">
                <Avatar
                    className="post__headerAvatar"
                    alt=""
                    src={ avatarUrl }
                />
                <h4>{ username }</h4>
            </div>

            <img 
                src={ imageUrl }
                className="post__image"
            />

            

        <h4 className="post__text"><strong>username</strong> { caption }</h4>

        </div>

    )
}

export default Post
