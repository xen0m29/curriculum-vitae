import React from 'react';
import { 
    List, 
    ListItemIcon, 
    ListItemText, 
    withStyles, 
    ListItem ,
    Divider
} from '@material-ui/core';
import {
    // Home as HomeIcon,
    TrendingUp as TrendingUpIcon,
    // ViewModule as ViewModuleIcon,
    Poll as PollIcon,
    School as SchoolIcon,
    HowToReg as CertificationIcon,
    Email as EmailIcon,
    Assignment as AssignmentIcon,
    Person as PersonIcon
} from '@material-ui/icons';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    toolbar: theme.mixins.toolbar,
});

const ListItemLink = props => {
    return <ListItem button component="a" {...props} />;
}

const menus = [
    {
        title: "About",
        to: "#/",
        icon: <PersonIcon />
    },
    // {
    //     title: "Home",
    //     to: "#/",
    //     icon: <HomeIcon />
    // },
    {
        title: "Experience",
        to: "#/experience",
        icon: <TrendingUpIcon />
    },
    // {
    //     title: "Projects",
    //     to: "#/projects",
    //     icon: <ViewModuleIcon />
    // },
    {
        title: "Skills",
        to: "#/skills",
        icon: <PollIcon />
    },
    {
        title: "Education",
        to: "#/education",
        icon: <SchoolIcon />
    },
    {
        title: "Certification",
        to: "#/certification",
        icon: <CertificationIcon />
    },
    {
        title: "Contact",
        to: "#/contact",
        icon: <EmailIcon />
    },
    {
        title: "Resume",
        to: "",
        icon: <AssignmentIcon />
    }
];

class Sidebar extends React.Component {
    
    render(){
        const { classes } = this.props;
        return (
            <div>
                <div className={ classes.toolbar }>
                    <Divider />     
                    <List component="nav">
                        {
                            menus.map((item, index) => 
                                <ListItemLink key={index} href={ item.to }>
                                    <ListItemIcon>
                                        { item.icon }
                                    </ListItemIcon>
                                    <ListItemText primary={ item.title } />
                                </ListItemLink>    
                            )
                        }
                    </List> 
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Sidebar);