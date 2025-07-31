export const paths = {
    home: {
        path: "/",
        getHref: () => "/",
    },
    product: {
        path: "/product",
        getHref: () => "/product",

        details: {
            path: "/product/:id",
            getHref: (id: string) => `/product/${id}`,
        },
    }

} as const;
