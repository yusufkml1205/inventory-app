import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
const Controller980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {
    return Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
Controller980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
    const Controller980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/'
 */
        Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller980bb49ee7ae63891f1d891d2fbcf1c9.form = Controller980bb49ee7ae63891f1d891d2fbcf1c9Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/masterdata'
 */
const Controller2581c3b260b8764aaf391f04530f423d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller2581c3b260b8764aaf391f04530f423d.url(options),
    method: 'get',
})

Controller2581c3b260b8764aaf391f04530f423d.definition = {
    methods: ["get","head"],
    url: '/masterdata',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/masterdata'
 */
Controller2581c3b260b8764aaf391f04530f423d.url = (options?: RouteQueryOptions) => {
    return Controller2581c3b260b8764aaf391f04530f423d.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/masterdata'
 */
Controller2581c3b260b8764aaf391f04530f423d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller2581c3b260b8764aaf391f04530f423d.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/masterdata'
 */
Controller2581c3b260b8764aaf391f04530f423d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller2581c3b260b8764aaf391f04530f423d.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/masterdata'
 */
    const Controller2581c3b260b8764aaf391f04530f423dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller2581c3b260b8764aaf391f04530f423d.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/masterdata'
 */
        Controller2581c3b260b8764aaf391f04530f423dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller2581c3b260b8764aaf391f04530f423d.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/masterdata'
 */
        Controller2581c3b260b8764aaf391f04530f423dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller2581c3b260b8764aaf391f04530f423d.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller2581c3b260b8764aaf391f04530f423d.form = Controller2581c3b260b8764aaf391f04530f423dForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/transaksi'
 */
const Controller3be6b6792b74e8acb92938769c02c0a1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3be6b6792b74e8acb92938769c02c0a1.url(options),
    method: 'get',
})

Controller3be6b6792b74e8acb92938769c02c0a1.definition = {
    methods: ["get","head"],
    url: '/transaksi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/transaksi'
 */
Controller3be6b6792b74e8acb92938769c02c0a1.url = (options?: RouteQueryOptions) => {
    return Controller3be6b6792b74e8acb92938769c02c0a1.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/transaksi'
 */
Controller3be6b6792b74e8acb92938769c02c0a1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller3be6b6792b74e8acb92938769c02c0a1.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/transaksi'
 */
Controller3be6b6792b74e8acb92938769c02c0a1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller3be6b6792b74e8acb92938769c02c0a1.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/transaksi'
 */
    const Controller3be6b6792b74e8acb92938769c02c0a1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller3be6b6792b74e8acb92938769c02c0a1.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/transaksi'
 */
        Controller3be6b6792b74e8acb92938769c02c0a1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller3be6b6792b74e8acb92938769c02c0a1.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/transaksi'
 */
        Controller3be6b6792b74e8acb92938769c02c0a1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller3be6b6792b74e8acb92938769c02c0a1.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller3be6b6792b74e8acb92938769c02c0a1.form = Controller3be6b6792b74e8acb92938769c02c0a1Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/produksi'
 */
const Controller011f96a10d06cecd8c53382efac12152 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller011f96a10d06cecd8c53382efac12152.url(options),
    method: 'get',
})

Controller011f96a10d06cecd8c53382efac12152.definition = {
    methods: ["get","head"],
    url: '/produksi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/produksi'
 */
Controller011f96a10d06cecd8c53382efac12152.url = (options?: RouteQueryOptions) => {
    return Controller011f96a10d06cecd8c53382efac12152.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/produksi'
 */
Controller011f96a10d06cecd8c53382efac12152.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller011f96a10d06cecd8c53382efac12152.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/produksi'
 */
Controller011f96a10d06cecd8c53382efac12152.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller011f96a10d06cecd8c53382efac12152.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/produksi'
 */
    const Controller011f96a10d06cecd8c53382efac12152Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controller011f96a10d06cecd8c53382efac12152.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/produksi'
 */
        Controller011f96a10d06cecd8c53382efac12152Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller011f96a10d06cecd8c53382efac12152.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/produksi'
 */
        Controller011f96a10d06cecd8c53382efac12152Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controller011f96a10d06cecd8c53382efac12152.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controller011f96a10d06cecd8c53382efac12152.form = Controller011f96a10d06cecd8c53382efac12152Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/penjualan'
 */
const Controllercffc7959ce84ca7065eac6e31ecd29a2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercffc7959ce84ca7065eac6e31ecd29a2.url(options),
    method: 'get',
})

Controllercffc7959ce84ca7065eac6e31ecd29a2.definition = {
    methods: ["get","head"],
    url: '/penjualan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/penjualan'
 */
Controllercffc7959ce84ca7065eac6e31ecd29a2.url = (options?: RouteQueryOptions) => {
    return Controllercffc7959ce84ca7065eac6e31ecd29a2.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/penjualan'
 */
Controllercffc7959ce84ca7065eac6e31ecd29a2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllercffc7959ce84ca7065eac6e31ecd29a2.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/penjualan'
 */
Controllercffc7959ce84ca7065eac6e31ecd29a2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllercffc7959ce84ca7065eac6e31ecd29a2.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/penjualan'
 */
    const Controllercffc7959ce84ca7065eac6e31ecd29a2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllercffc7959ce84ca7065eac6e31ecd29a2.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/penjualan'
 */
        Controllercffc7959ce84ca7065eac6e31ecd29a2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllercffc7959ce84ca7065eac6e31ecd29a2.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/penjualan'
 */
        Controllercffc7959ce84ca7065eac6e31ecd29a2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllercffc7959ce84ca7065eac6e31ecd29a2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllercffc7959ce84ca7065eac6e31ecd29a2.form = Controllercffc7959ce84ca7065eac6e31ecd29a2Form
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
const Controlleraa40b76d95e9a485d3db1f7094792d8f = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controlleraa40b76d95e9a485d3db1f7094792d8f.url(options),
    method: 'get',
})

Controlleraa40b76d95e9a485d3db1f7094792d8f.definition = {
    methods: ["get","head"],
    url: '/laporan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
Controlleraa40b76d95e9a485d3db1f7094792d8f.url = (options?: RouteQueryOptions) => {
    return Controlleraa40b76d95e9a485d3db1f7094792d8f.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
Controlleraa40b76d95e9a485d3db1f7094792d8f.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controlleraa40b76d95e9a485d3db1f7094792d8f.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
Controlleraa40b76d95e9a485d3db1f7094792d8f.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controlleraa40b76d95e9a485d3db1f7094792d8f.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
    const Controlleraa40b76d95e9a485d3db1f7094792d8fForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controlleraa40b76d95e9a485d3db1f7094792d8f.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
        Controlleraa40b76d95e9a485d3db1f7094792d8fForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controlleraa40b76d95e9a485d3db1f7094792d8f.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
        Controlleraa40b76d95e9a485d3db1f7094792d8fForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controlleraa40b76d95e9a485d3db1f7094792d8f.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controlleraa40b76d95e9a485d3db1f7094792d8f.form = Controlleraa40b76d95e9a485d3db1f7094792d8fForm
    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
const Controllere19ee86e9cf603ce1a59a1ec5d21dec5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})

Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition = {
    methods: ["get","head"],
    url: '/settings/appearance',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url = (options?: RouteQueryOptions) => {
    return Controllere19ee86e9cf603ce1a59a1ec5d21dec5.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
Controllere19ee86e9cf603ce1a59a1ec5d21dec5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
    const Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/settings/appearance'
 */
        Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Controllere19ee86e9cf603ce1a59a1ec5d21dec5.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Controllere19ee86e9cf603ce1a59a1ec5d21dec5.form = Controllere19ee86e9cf603ce1a59a1ec5d21dec5Form

const Controller = {
    '/': Controller980bb49ee7ae63891f1d891d2fbcf1c9,
    '/masterdata': Controller2581c3b260b8764aaf391f04530f423d,
    '/transaksi': Controller3be6b6792b74e8acb92938769c02c0a1,
    '/produksi': Controller011f96a10d06cecd8c53382efac12152,
    '/penjualan': Controllercffc7959ce84ca7065eac6e31ecd29a2,
    '/laporan': Controlleraa40b76d95e9a485d3db1f7094792d8f,
    '/settings/appearance': Controllere19ee86e9cf603ce1a59a1ec5d21dec5,
}

export default Controller