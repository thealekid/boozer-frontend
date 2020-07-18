import React from 'react';
import { Item, List } from 'semantic-ui-react';

const InfoPanel = (props) => {
    // let proportions = props.cocktailinfo.proportions.map(cockprop => <div>

    // </div>)
    return (
    <div className="info-panel">
        {props.cocktailinfo.name === undefined ? null : 
        <Item>
            <Item.Content> 
            <Item.Header size="big"><h1>{`${props.cocktailinfo.name}`}</h1></Item.Header>
            <Item.Description>{`${props.cocktailinfo.description}`}</Item.Description>
            <Item.Description>{`${props.cocktailinfo.instructions}`}</Item.Description>
        <List bulleted>
        
        {props.cocktailinfo.proportions && props.cocktailinfo.proportions.map(cockprop => <List.Item>
                <b>{cockprop.amount}</b> {cockprop.ingredient_name}
            </List.Item>)}
        

        </List>    
            <Item.Extra>{`${props.cocktailinfo.source}`}</Item.Extra>
        </Item.Content>
        </Item>
}
        
        
        
        
       
        
        
    </div>
    )
}

export default InfoPanel



