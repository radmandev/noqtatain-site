

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import hk24 from './pages/hk24';
import Portal from './pages/Portal.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import __Layout from './Layout.jsx';

export const PAGES = {
    About,
    Contact,
    Home,
    Services,
    hk24,
    Portal,
    portal: Portal,
    PrivacyPolicy,
    TermsOfService,
    'privacy-policy': PrivacyPolicy,
    'terms-of-service': TermsOfService,
};

export const pagesConfig = {
    mainPage: 'Home',
    Pages: PAGES,
    Layout: __Layout,
};
