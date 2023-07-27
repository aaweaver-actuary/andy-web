import Box from './Box.component';

const UserRank = ({ name = 'Andy', rank = 1 }) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
      }}
    >
      <h2 className="ubuntu text-lg w-full text-center">{`${name}, your current rank is...`}</h2>
      <h3 className="ubuntu text-2xl font-bold w-full text-center">{`#${rank}`}</h3>
    </Box>
  );
};

export default UserRank;
