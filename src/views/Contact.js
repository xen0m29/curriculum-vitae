import React from 'react';
import { 
    ListItemIcon, 
    List, 
    ListItem, 
    ListItemText
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import red from '@material-ui/core/colors/red';
import Layout from '../components/Layout';
import { contact } from '../data.json';
import { validate as Validator } from 'email-validator';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
          color: red[800],
        },
    },
});

class Contact extends React.Component {
    render(){
        return(
            <Layout title="Contact">
                <List className={styles.root}>
                    {
                        contact.map((item, index) => 
                        <ListItem key={index} alignItems="flex-start">
                            <ListItemIcon>
                                {
                                    (item.name === "E-mail") ?
                                    <FontAwesomeIcon icon={item.icon} size="lg" /> :
                                    <FontAwesomeIcon icon={['fab', item.icon]} size="lg" />
                                }
                            </ListItemIcon>
                            <ListItemText
                            primary={ item.name }
                            secondary={
                                <a href={ Validator(item.link) ? "mailto:" + item.link : item.link }>
                                    { item.link }
                                </a>
                            }
                            />
                        </ListItem>
                        )
                    }
                </List>
            </Layout>
        );
    }
}

export default Contact;