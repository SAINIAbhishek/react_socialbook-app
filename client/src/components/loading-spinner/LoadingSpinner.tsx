import CircularProgress from '@mui/material/CircularProgress';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
      }}>
      <CircularProgress />
    </div>
  );
};

export default LoadingSpinner;
