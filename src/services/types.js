export default class Types {
    static routing = [
        { id: 0, key: 'location', path: '/' },
        { id: 1, key: 'login', path: '/sign-in' },
        { id: 3, key: 'registration', path: '/registration' },
        { id: 4, key: 'addProperty', path: '/add-property/' },
        { id: 5, key: 'cars', path: '/cars/:id' },
        { id: 6, key: 'addItem', path: '/add-item' },
        { id: 7, key: 'details', path: '/details/' },
    ];

    static routingMap = Types.routing.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());

    static appSizes = [
        { id: 1, key: 'tablet', size: 768 },
        { id: 2, key: 'desktop', size: 1152 },
    ];

    static appSizesMap = Types.appSizes.reduce((acc, item) => acc.set(item.key, { ...item }), new Map());
}
