export const products = [
    {
        id: 1,
        name: 'Gorro De Lana The Search',
        price: 5000,
        img: 'https://ripcurl.cl/media/catalog/product/6/g/6g257-mi24lisomilitary-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=800&width=600&canvas=600:800', 
        description: 'Gorro de lana abrigador para el invierno.',
        stock: 3,
        size: 'Talla Única',
        category: 'gorros'
    },
    {
        id: 2,
        name: 'Camisa Lino - Navy Blazer',
        price: 7000,
        img: 'https://f.fcdn.app/imgs/c00db1/jackjones.cl/jackch/2130/webp/catalogo/12248579_4375018_1/400x600/camisa-lino-navy-blazer.jpg', 
        description: 'Camisa azul de alta calidad.',
        stock: 7,
        size: ['XL'],
        category: 'camisas'
    },
    {
        id: 3,
        name: 'Zapatilla Puma Urbana Graphic',
        price: 40000,
        img: 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw25f3c975/images/imagenes-productos/667/744924-0001-001.jpg?sw=300', 
        description: 'Zapatillas cómodas para uso diario.',
        stock: 7,
        size: ['40'],
        category: 'zapatillas'
    },
    {
        id: 4,
        name: 'Pantalón executive Business',
        price: 20000,
        img: 'https://tworldstore.cl/5516-superlarge_default/pantalon-executive-business-hombre.jpg', 
        description: 'Pantalones de tela muy comoda',
        stock: 10,
        size: ['S'], 
        category: 'pantalones'
    },
    {
        id: 5,
        name: 'Camiseta de fútbol de la selección chilena 2024',
        price: 70000,
        img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b7c7dbd6f804dcf9388e2133ca1b639_9366/Camiseta_Local_Chile_2024_Rojo_IP8455_01_laydown.jpg', 
        description: 'Camiseta de fútbol de chile 2024 adidas de alta calidad.',
        stock: 12,
        size: ['M'],
        category: 'camiseta'
    },
    {
        id: 6,
        name: 'Jockey Adidas',
        price: 9000,
        img: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c18068fd2b8140d6bbd3afc2010cc521_9366/jockey-metal-badge-lightweight-baseball.jpg',
        description: 'Jockey adidas ajustable y cómodo.',
        stock: 8,
        size: 'Ajustable a la cabeza',
        category: 'gorro'
    }
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};