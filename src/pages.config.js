

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import hk24 from './pages/hk24';
import hkgo from './pages/hkgo';
import finoo from './pages/finoo';
import finoogo from './pages/finoogo';
import hamsa from './pages/hamsa';
import hamsago from './pages/hamsago';
import Portal from './pages/Portal.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import beau10 from './pages/beau10';
import MedhalJazeera from './pages/medhal-jazeera';
import SafetySideOffer from './pages/safetysideoffer';
import HamsaBitrix24 from './pages/hamsa-bitrix24';
import MutahedDesignOffer from './pages/MutahedDesignOffer';
import __Layout from './Layout.jsx';

export const PAGES = {
    About,
    Contact,
    Home,
    Services,
    Blog,
    hk24,
    hkgo,
    finoo,
    finoogo,
    hamsa,
    hamsago,
    'hamsa-go': hamsago,
    Portal,
    portal: Portal,
    PrivacyPolicy,
    TermsOfService,
    beau10,
    MedhalJazeera,
    SafetySideOffer,
    HamsaBitrix24,
    'hamsa-bitrix24': HamsaBitrix24,
    safetysideoffer: SafetySideOffer,
    'medhal-jazeera': MedhalJazeera,
    'privacy-policy': PrivacyPolicy,
    'terms-of-service': TermsOfService,
    MutahedDesignOffer,
    'mutahed-design-offer': MutahedDesignOffer,
};

export const pagesConfig = {
    mainPage: 'Home',
    Pages: PAGES,
    Layout: __Layout,
};
