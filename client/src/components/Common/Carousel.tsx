import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { CAROUSEL_LIST } from 'constants/index';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Item = styled(Box)(() => ({
  // height: '12rem',
  // borderRadius: '.5rem',
}));

const Image = styled(Box)(({ theme }) => ({
  flexBasis: '50%',
  flexShrink: 0,

  '& > img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    transform: 'translateX(2rem)',
  },

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4, 0, 4, 4),

  [theme.breakpoints.down('lg')]: {
    paddingRight: theme.spacing(4),
  },

  '& > h3': {
    fontSize: '1.125rem',
    fontWeight: 500,
    marginBottom: '1rem',
    // color: theme.palette.grey[800],
  },

  '& > p': {
    fontFamily: `'Lato', sans-serif`,
    color: theme.palette.grey[600],
    lineHeight: 1.5,

    [theme.breakpoints.down('lg')]: {
      maxWidth: '75%',
    },

    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
    },
  },
}));

const Arrow = styled(Box)({
  position: 'absolute',
  top: '50%',
  zIndex: 1,

  width: '2rem',
  height: '2rem',
  borderRadius: '50%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '#4b4b4b',
  backgroundColor: '#fff',

  boxShadow: '0 3px 6px rgb(0 0 0 / 16%)',
  cursor: 'pointer',
});

const NextArrow = ({ onClick }: any) => {
  return (
    <Arrow
      onClick={onClick}
      sx={{
        transform: 'translate(50%, -50%)',
        right: 0,
      }}
    >
      <KeyboardArrowRightRoundedIcon />
    </Arrow>
  );
};

const PrevArrow = ({ onClick }: any) => {
  return (
    <Arrow
      onClick={onClick}
      sx={{
        transform: 'translate(-50%, -50%)',
        left: 0,
      }}
    >
      <KeyboardArrowLeftRoundedIcon />
    </Arrow>
  );
};

export const Carousel = () => {
  const settings = {
    dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 8000,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {CAROUSEL_LIST.map((item, index) => (
        <Item key={index}>
          <Paper
            variant="outlined"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderColor: '#EAEEF3',
            }}
          >
            <Content>
              <Typography variant="h6" component="h3">
                {item.heading}
              </Typography>

              <Typography>{item.description}</Typography>
            </Content>

            <Image>
              <img src={item.imgUrl} alt="" />
            </Image>
          </Paper>
        </Item>
      ))}
    </Slider>
  );
};
