import Home from 'pages/home';
import NotFound from 'pages/not-found';

const routes = [
  {
    'path': '/',
    'name': 'Home',
    'component': Home
  },
  {
    'path': '/*',
    'name': 'Not Found',
    'component': NotFound
  }
];

export default routes;
