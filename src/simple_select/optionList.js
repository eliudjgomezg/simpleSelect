import React from 'react'
import Items from './items'
import Footer from './footer'
import { Divider, Checkbox, Segment, List } from 'semantic-ui-react'

const OptionList = (props) => {
    const {
        title,
        inactiveOptions,
        showIncludeInactiveOption,
        handleClose,
        setOptionSelected,
        setQuery,
        optionsFilteredByWordAndStatus,
        setInactiveOptions} = props

    const checkAllOptions = () => {
        setOptionSelected('all')
        handleClose()
        setQuery('')
    }
    const includeInactive = () => {
        setInactiveOptions(!inactiveOptions)
        setOptionSelected([])
    }
    return (
        <Segment basic style={{ width: '500px', height: '210px', padding: '10px 10px 0px 10px', margin: '0' }}>
            {showIncludeInactiveOption && (
                <Checkbox
                    style={{ padding: '0px', margin: '0px' }}
                    as='h4' label={'Include inactive'}
                    onClick={includeInactive}
                    checked={inactiveOptions}
                />
            )}
            <List selection verticalAlign='middle' style={{ padding: '0px', margin: '10px 0 0 0' }}>
                <List.Item onClick={checkAllOptions}>
                    <List.Content>
                        <List.Header>{`All ${title}`}</List.Header>
                    </List.Content>
                </List.Item>
            </List>

            <Divider style={{ margin: '10px 0 0 0' }} />

            <Items
                optionsFilteredByWordAndStatus={optionsFilteredByWordAndStatus}
                setOptionSelected={setOptionSelected}
                setQuery={setQuery}
                handleClose={handleClose}
            />
            <Divider style={{ margin: '0 0 10px 0' }} />

            <Footer
                title={title}
                optionsFilteredByWordAndStatus={optionsFilteredByWordAndStatus}
            />
        </Segment>
    )
}
export default OptionList