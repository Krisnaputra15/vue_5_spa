import AllBooks from './AllBooks.vue'
import AddBook from './AddBook.vue'
import EditBook from './EditBook.vue'

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllBooks
    },
    {
        name: 'add',
        path: '/add',
        component: AddBook        
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditBook
    }
];
