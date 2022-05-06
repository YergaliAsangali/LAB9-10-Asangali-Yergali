import React from 'react'
import "./../Navb.css";
class Navb extends React.Component {
    render() {
        return <nav className='nav'>
                {/* eslint-disable-next-line react/prop-types */}
                <a href="#">{this.props.name}</a>
        </nav>
    }
}
export default Navb;