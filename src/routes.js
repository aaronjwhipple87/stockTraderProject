//ToDo: Import Home Component
import Home from './components/Home.vue';
//ToDo: Import portfolio/Portfolio Component
import Portfolio from './components/portfolio/Portfolio.vue';
//ToDo: Import stocks/Stocks Component
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
    //ToDo: Create Route for Home Component with root (/) path
    {
        path: '/', name: 'home', components: {
            default: Home
        }
    },
    //ToDo: Create Route for Portfolio Component
    {
        path: '/portfolio', name: 'portfolio', components:{
            default: Portfolio
        }
    },
    //ToDo: Create Route for Stocks Component
    {
        path: '/stocks', name: 'stocks', components: {
            default: Stocks
        }
    }
];