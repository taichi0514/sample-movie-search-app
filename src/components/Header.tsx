import React from "react";

interface Props {
  text: string
}

 const Header: React.FC<Props> = ({text}) => {
    return (
        <header className='header'>
            <h2>{text}</h2>
        </header>
    )
}
export default Header;