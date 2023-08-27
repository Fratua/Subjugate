import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  guildContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  postalServiceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  guildTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#3f51b5',
    marginBottom: theme.spacing(2),
  },
  chatTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#3f51b5',
    marginBottom: theme.spacing(2),
  },
  postalServiceTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#3f51b5',
    marginBottom: theme.spacing(2),
  },
  guildContent: {
    fontSize: '1rem',
    color: '#000',
    marginBottom: theme.spacing(2),
  },
  chatContent: {
    fontSize: '1rem',
    color: '#000',
    marginBottom: theme.spacing(2),
  },
  postalServiceContent: {
    fontSize: '1rem',
    color: '#000',
    marginBottom: theme.spacing(2),
  },
}));