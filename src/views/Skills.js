import React from 'react';
import PropTypes from 'prop-types';
import { 
    Grid,
    Paper,
    withStyles,
    Typography
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/Layout';
import { skills } from '../data.json';
import Rating from 'material-ui-rating'

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inlineSkill: {
		display: 'inline',
	},
});

class Skills extends React.Component {
    render(){
        const { classes } = this.props;

        return(
            <Layout title="Skills">
                <Grid container spacing={ 24 }>
                    {
                        skills.map((item, index) => 
                            <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 3 } key={index}>
                                <Paper className={ classes.paper }>
                                    <Grid container spacing={ 24 } alignContent="center" alignItems="center">
                                        <Grid item xs={ 3 }>
                                            <FontAwesomeIcon icon={["fab",item.icon]} size="4x" />
                                        </Grid>
                                        <Grid item xs={ 9 }>
                                            <Typography component="span" className={classes.inline} color="textPrimary">
                                                { item.name }
                                            </Typography>
                                            <Rating 
                                                value={ item.value }
                                                max={ 5 }
                                                readOnly={ true } />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>   
                        )
                    }
                </Grid>
            </Layout>
        );
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);