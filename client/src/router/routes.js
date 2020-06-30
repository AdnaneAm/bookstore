// importing components
import homePage from '../pages/homePage'
import booksPage from '../pages/booksPage'
import bookPage from '../pages/bookPage'
export default[
    {
        path:'/',
        component:homePage
    },
    {
        path:'/books',
        component:booksPage
    },
    {
        path:'/books/:id',
        component:bookPage
    },
]