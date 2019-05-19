import React from 'react';
import { 
	Grid,
    Paper,
	Typography,
	withStyles
} from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import Layout from '../components/Layout';
import { certifications } from '../data.json';

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
	inline: {
		display: 'inline',
	},
	paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
});

class Certification extends React.Component {
    render(){
		const { classes } = this.props;

        return(
            <Layout title="Certification">
				<Grid container spacing={ 24 } alignItems="center">
                    {
                        certifications.map((item, index) => 
                            <Grid item xs={ 12 } sm={ 4 } lg={ 3 } key={index}>
                                <Paper className={ classes.paper }>
									<Typography align="left" color="textPrimary">
										{ item.name }
									</Typography>
									<Typography align="left" color="textSecondary">
										By { item.company }
									</Typography>
									<Typography style={{ marginBottom: 0 }} align="left" variant="body1" paragraph={true}>
										{ "Valid from " + item.start + " to " + item.end }
									</Typography>
                                </Paper>
                            </Grid>   
                        )
                    }
                </Grid>
            </Layout>
        );
    }
}

export default withStyles(styles)(Certification);