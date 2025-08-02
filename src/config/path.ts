export const paths = {
    home: {
        path: "/",
        getHref: () => "/",
    },
    aboutus: {
        path: "/about-us",
        getHref: () => "/about-us",
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
    contactus: {
        path: "/contact-us",
        getHref: () => "/contact-us",
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
