import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useAppDispatch } from 'app/hooks';
import { Images } from 'constants/index';
import { SignupPayload } from 'models';
import { Link } from 'react-router-dom';
import { signup } from '../authSlice';
import RegisterForm from '../components/RegisterForm';
import SocialList from '../components/SocialList';

const ArtworkImage = styled('div')(({ theme }) => ({
  width: 480,
  flexShrink: 0,

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },

  '& > img': {
    height: '100%',
    objectFit: 'cover',
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  padding: theme.spacing(5),
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  color: '#555',
}));

const ArtBy = styled(Typography)(({ theme }) => ({
  color: '#555',
  position: 'fixed',
  left: 180,
  bottom: 16,
  fontSize: '.875rem',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

function RegisterPage() {
  const dispatch = useAppDispatch();

  const handleSubmit = (formValues: SignupPayload) => {
    const action = signup(formValues);
    dispatch(action);
  };

  return (
    <Stack direction='row' minHeight='100vh'>
      <ArtworkImage>
        <img src={Images.SIGNUP_ARTWORK} alt='signup-artwork' />
      </ArtworkImage>

      <FormContainer>
        <Box>
          <Typography
            component='h1'
            fontSize='1.5rem'
            fontWeight={700}
            fontFamily={`'Raleway', sans-serif`}
          >
            Sign up to Web Practice
          </Typography>

          <SocialList isRegisterMode />

          <Divider sx={{ color: 'text.secondary', mb: 2 }}>Or</Divider>

          <RegisterForm onSubmit={handleSubmit} />
        </Box>
      </FormContainer>

      <Typography position='fixed' right={32} top={24} fontSize='.875rem'>
        Already a member? <Link to='/login'>Sign In</Link>
      </Typography>

      <Box position='fixed' left={16} top={24}>
        <LinkStyled to='/'>
          <Button
            color='inherit'
            size='small'
            startIcon={<KeyboardBackspaceRoundedIcon />}
          >
            Home page
          </Button>
        </LinkStyled>
      </Box>

      <ArtBy>
        Art by <a href='https://dribbble.com/'>Dribbble</a>
      </ArtBy>
    </Stack>
  );
}

export default RegisterPage;
