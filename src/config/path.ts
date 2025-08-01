export const paths = {
    home: {
        path: "/",
        getHref: () => "/",
    },
    login: {
        path: "/login",
        getHref: () => "/login",
    },
    forgotpassword: {
        path: "/forgot-password",
        getHref: () => "/forgot-password",
    },
    signup: {
        path: "/sign-up",
        getHref: () => "/sign-up",
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
