import React from 'react';
import PropTypes from 'prop-types';
import { 
    Paper,
    withStyles,
    Typography
} from '@material-ui/core';
import Layout from '../components/Layout';
import { education } from '../data.json';

const styles = theme => ({
    paper: {
        width: '100%',
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing.unit,
    }
});

class Education extends React.Component {
    render(){
        const { classes } = this.props;

        return(
            <Layout title="Education">
                {
                    education.map((item, index) => 
                    <Paper className={ classes.paper } key={index}>
                        <Typography align="left" variant="title" component="span" className={classes.inline} color="textPrimary">
                            { item.name }
                        </Typography>
                        <Typography align="left" variant="subtitle1" component="span" className={classes.inline} color="textSecondary">
                            { item.level } @ { item.school } - { item.start } to { item.end }
                        </Typography>
                    </Paper> 
                    )
                }
            </Layout>
        );
    }
}

Education.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Education);