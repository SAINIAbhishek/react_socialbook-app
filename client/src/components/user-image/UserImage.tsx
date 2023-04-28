import { Box } from '@mui/material';
import { ENV } from '../../environments/Environment';

type Props = {
  image: string;
  size?: string;
};

const UserImage = ({ image, size = '60px' }: Props) => {
  return (
    <>
      {!!image && (
        <Box width={size} height={size}>
          <img
            style={{ objectFit: 'cover', borderRadius: '50%' }}
            width={size}
            height={size}
            alt="user"
            src={`${ENV.ASSETS_URL}/${image}`}
          />
        </Box>
      )}
    </>
  );
};

export default UserImage;
