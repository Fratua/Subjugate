import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  technicalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  serverStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(1),
  },
  databaseStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(1),
  },
  securityStatus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: theme.spacing(1),
  },
  statusIndicator: {
    height: '10px',
    width: '10px',
    borderRadius: '50%',
  },
  statusText: {
    marginLeft: theme.spacing(1),
  },
}));