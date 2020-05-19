import React, { useEffect } from 'react'
import { Icon, Divider } from 'semantic-ui-react'
import OptionList from './optionList'

const SimpleSelectBody = (props) => {
    const { options, 
        title, 
        query, 
        inactiveOptions, 
        optionSelected, 
        showIncludeInactiveOption,
        optionsFilteredByWordAndStatus, 
        handleClose, 
        setOptionSelected, 
        setQuery, 
        setInactiveOptions} = props

    const handleChange = (e) => {
        const query = e.target.value
        setQuery(query)
    }

    useEffect(() => {
        if (query.length > 0) {
            setOptionSelected([])
        }
    }, [query])

    return (
        <>
            <div style={{ display: 'flex' }}>
                <input onChange={handleChange} value={query} placeholder={`Search for ${title}`}
                    style={{ outline: 'none', border: 'none', focus: 'white', paddingLeft: '10px', height: '40px', width: '100%' }} />
                <Icon name='search' style={{ marginTop: '10px', float: 'right' }} disabled />
            </div>
            <Divider style={{ margin: 0, padding: 0 }} />

            <OptionList
                options={options}
                optionSelected={optionSelected}
                title={title}
                query={query}
                inactiveOptions={inactiveOptions}
                showIncludeInactiveOption={showIncludeInactiveOption}
                optionsFilteredByWordAndStatus={optionsFilteredByWordAndStatus}
                handleClose={handleClose}
                setInactiveOptions={setInactiveOptions}
                setOptionSelected={setOptionSelected}
                setQuery={setQuery}
            />
        </>
    )
}
export default SimpleSelectBody

