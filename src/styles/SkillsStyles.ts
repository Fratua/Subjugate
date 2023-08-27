import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  skillTree: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2),
  },
  skillNode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },
  skillIcon: {
    width: '50px',
    height: '50px',
    margin: theme.spacing(1),
  },
  skillName: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    margin: theme.spacing(1),
  },
  skillDescription: {
    fontSize: '1em',
    margin: theme.spacing(1),
  },
  craftingArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2),
  },
  craftingItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
  },
  craftingIcon: {
    width: '50px',
    height: '50px',
    margin: theme.spacing(1),
  },
  craftingName: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    margin: theme.spacing(1),
  },
  craftingDescription: {
    fontSize: '1em',
    margin: theme.spacing(1),
  },
}));