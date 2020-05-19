import React from 'react'
import { Button } from 'semantic-ui-react'

const Footer = (props) => {
    const { title, optionsFilteredByWordAndStatus } = props

    return (
        <div style={{ textAlign: 'center'}} >
            <h4 style={{ float: 'right', marginBottom: '10px', color:'#1678C2' }}>
                {`Choose 1 of the ${optionsFilteredByWordAndStatus.length} ${title} avalibles`}
            </h4>
        </div>
    )
}
export default Footer