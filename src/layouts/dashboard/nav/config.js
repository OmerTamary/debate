// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/home',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Explore',
    path: '/dashboard/explore',
    icon: icon('ic_user'),
  },
  {
    title: 'Create Room',
    path: '/dashboard/createRoom',
    icon: icon('ic_cart'),
  },
  {
    title: 'Room',
    path: '/dashboard/room',
    icon: icon('ic_blog'),
  },
  {
    title: 'Conversation',
    path: '/dashboard/conversation',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
