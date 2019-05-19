import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import { Typography, withStyles, Chip, Avatar } from '@material-ui/core';
import { specialization } from '../data.json';
import initials from 'initials';

const styles = theme => ({
    chipMargin: {
        marginRight: theme.spacing.unit,
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
});

class About extends React.Component {
    render(){
        const { classes } = this.props;

        return(
            <Layout title="About">
                <Typography paragraph={true} variant="h5">
                    I always feel interested in an opportunity and challenge that can make me better in this industry. 
                    Professional career that I have through made me able to grow in a dynamic work environment.
                    <br/><br/>
                    As someone who likes new things, I really enjoy being a developer where I can pay attention to small details but remain open to different solutions to the problems that occur.
                </Typography>
                {
                        specialization.map((item, index) => 
                            <Chip
                                key={index}
                                avatar={<Avatar>{ initials(item.name) }</Avatar>}
                                label={ item.name }
                                className={classes.chipMargin}
                                color="primary" />
                        )
                    }
            </Layout>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);