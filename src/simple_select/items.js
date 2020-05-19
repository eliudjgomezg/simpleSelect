import React from 'react'
import { Checkbox } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import styles from "./multi_select_styles.module.css"
import produce from "immer"

const items = (props) => {
    const { setOptionSelected, optionsFilteredByWordAndStatus, handleClose, setQuery } = props

    const selectOption = (option) => {
        setOptionSelected(option)
        setQuery('')
        handleClose()
    }

    return (
        <div className={styles.scrollDiv}>
            <List selection verticalAlign='middle'>
                {optionsFilteredByWordAndStatus.map((option, key) => {
                    return (
                        <List.Item onClick={() => selectOption(option._id)}>
                            <List.Content>
                                <List.Header>{option.name}</List.Header>
                            </List.Content>
                        </List.Item>
                    )
                })}
            </List>
        </div>
    )
}
export default items

  

