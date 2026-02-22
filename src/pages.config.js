

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import hk24 from './pages/hk24';
import finoo from './pages/finoo';
import finoogo from './pages/finoogo';
import hamsa from './pages/hamsa';
import Portal from './pages/Portal.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import beau10 from './pages/beau10';
import __Layout from './Layout.jsx';

export const PAGES = {
    About,
    Contact,
    Home,
    Services,
    Blog,
    hk24,
    finoo,
    finoogo,
    hamsa,
    Portal,
    portal: Portal,
    PrivacyPolicy,
    TermsOfService,
    beau10,
    'privacy-policy': PrivacyPolicy,
    'terms-of-service': TermsOfService,
};

export const pagesConfig = {
    mainPage: 'Home',
    Pages: PAGES,
    Layout: __Layout,
};
