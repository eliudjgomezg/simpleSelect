import React, { useState, useEffect } from 'react'
import { Button, Popup, Icon } from 'semantic-ui-react'
import SimpleSelectBody from './simple_select_body'

const SimpleSelect = (props) => {
    const { options, 
        selectedOptions, 
        title, isFetching, 
        inactiveOptions, 
        generateIsloading,
        showIncludeInactiveOption, 
        setOptions, 
        setInactiveOptions} = props

    const [optionSelected, setOptionSelected] = useState(selectedOptions)
    const [isOpen, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    const optionName = options.find(item => item._id === optionSelected)
    const simpleSelectTitle = (optionSelected.length === 0 ? title : optionSelected === 'all' ? 'All selected' : `${optionName.name}`)

    const optionsFilteredByWordAndStatus = options.filter(item =>
        item.name.toLowerCase().replace(/ /g, '')
            .indexOf(query.toLowerCase().replace(/ /g, '')) >= 0)
        .filter(item => {
            return inactiveOptions ? true : ['on', 'true', true, 'active'].includes(item.status)
        })

    const handleOpen = () => {
        setOpen( !isOpen)
    }
    const handleClose = () => {
        setOpen(!isOpen)
        setOptions(optionSelected)
        setQuery('')
    }

    useEffect(() => {
        setOptionSelected(selectedOptions)
    }, [selectedOptions])

    return (
        <Popup
            hideOnScroll={false}
            pinned
            //basic
            style={{ margin: 0, padding: 0 }}
            flowing
            // hoverable
            trigger={
                isFetching || generateIsloading ?
                    <Button
                        style={{ minWidth: 130, maxWidth: 230, cursor: 'pointer', textAlign: 'center' }}
                        loading={isFetching}
                        disabled={isFetching || generateIsloading}
                    />

                    :

                    <Button
                        style={{ minWidth: 130, maxWidth: 230, cursor: 'pointer', textAlign: 'center' }}
                        loading={isFetching}
                        disabled={isFetching || generateIsloading}
                        basic
                    >
                        {`${simpleSelectTitle} `}
                        <Icon name='dropdown' />
                    </Button>


            }
            open={isOpen}
            onOpen={handleOpen}
            onClose={handleOpen}
            on='click'
            position='bottom left'
        >
            <SimpleSelectBody
                options={options}
                optionSelected={optionSelected}
                title={title}
                query={query}
                inactiveOptions={inactiveOptions}
                showIncludeInactiveOption={showIncludeInactiveOption}
                optionsFilteredByWordAndStatus={optionsFilteredByWordAndStatus}
                handleClose={handleClose}
                setInactiveOptions={setInactiveOptions}
                setQuery={(item) => {
                    setQuery(item)
                }}
                setOptionSelected={(item => {
                    setOptionSelected(item)
                })}
            />
        </Popup>
    )
}

export default SimpleSelect


