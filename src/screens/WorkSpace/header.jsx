import React from 'react';
import { Button } from 'react-bootstrap';

const Header = ({handleShow, name, id}) => {
    return(
        <div className="main-header">

        <div className="info">
            <div className="photo">
                <img src="" alt="" />
            </div>
        <p className="name">{name}</p>
        </div>

        <Button variant="dark" onClick={handleShow}>
            New Post
    </Button>
    </div>
    )
}

export default React.memo(Header);