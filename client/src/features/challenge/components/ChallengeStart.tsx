import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { TOKEN } from 'constants/index';
import { useHistory } from 'react-router-dom';

const List = styled('ul')(({ theme }) => ({
  listStyleType: 'none',
  fontFamily: `'Lato', sans-serif`,
  marginBottom: theme.spacing(2),
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  textTransform: 'capitalize',
}));

const Image = styled('img')(({ theme }) => ({
  width: '1rem',
  height: '1rem',
  objectFit: 'cover',
  borderRadius: '4px',
}));

const FigmaIcon = () => (
  <Image src="/figma.png" alt="figma logo" loading="lazy" />
);

export interface ChallengeStartProps {
  designId: string;
  resourceId: string;
  isNew: boolean;
  isSubmitted: boolean;
  onStartDownload: (event: any) => void;
  onSubmitClick: () => void;
  solutionId: string;
}

function ChallengeStart({
  isSubmitted,
  isNew,
  designId,
  resourceId,
  onStartDownload,
  onSubmitClick,
  solutionId,
}: ChallengeStartProps) {
  const isLoggedIn = Boolean(localStorage.getItem(TOKEN));
  const history = useHistory();

  return (
    <Paper variant="outlined" sx={{ p: 2.5 }}>
      <Typography fontWeight={500} mb={1.5}>
        How to start
      </Typography>

      <List>
        <li>1. Read the challenge's details</li>
        <li>
          2. Start the challenge and download the resources{' '}
          {!isSubmitted && !isNew && (
            <IconButton
              color="primary"
              // href={`https://github.com/C1SE-21/${resourceId}/archive/refs/heads/main.zip`}
              href="https://github.com/C1SE-21/cat-wiki/archive/refs/heads/main.zip"
            >
              <DownloadRoundedIcon fontSize="small" />
            </IconButton>
          )}
        </li>
        <li>3. Check designs on Figma</li>
        <li>4. Have fun coding!</li>
      </List>

      {!isLoggedIn && (
        <Typography
          fontSize=".75rem"
          color="grey.600"
          mb={1}
          fontStyle="italic"
        >
          Please login to start
        </Typography>
      )}

      {isNew && (
        <ButtonStyled
          variant={isLoggedIn ? 'contained' : 'outlined'}
          color="warning"
          disableElevation
          fullWidth
          disabled={!isLoggedIn}
          startIcon={<DownloadRoundedIcon fontSize="small" />}
          onClick={onStartDownload}
          href={`https://github.com/C1SE-21/${resourceId}/archive/refs/heads/main.zip`}
        >
          Start and download
        </ButtonStyled>
      )}

      {!isNew && (
        <Stack spacing={1}>
          <a
            href={`https://www.figma.com/file/${designId}`}
            target="_blank"
            rel="noreferrer"
          >
            <ButtonStyled
              fullWidth
              variant="contained"
              color="inherit"
              disableElevation
              startIcon={<FigmaIcon />}
              sx={{ color: 'text.primary' }}
            >
              Design
            </ButtonStyled>
          </a>

          {!isSubmitted ? (
            <ButtonStyled
              variant="contained"
              disableElevation
              color="info"
              onClick={onSubmitClick}
            >
              Submit solution
            </ButtonStyled>
          ) : (
            <ButtonStyled
              variant="contained"
              disableElevation
              color="success"
              onClick={() => history.push(`/solutions/${solutionId}`)}
            >
              View solution
            </ButtonStyled>
          )}
        </Stack>
      )}
    </Paper>
  );
}

export default ChallengeStart;
