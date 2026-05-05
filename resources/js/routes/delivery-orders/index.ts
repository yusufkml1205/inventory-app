import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DeliveryOrderController::index
 * @see app/Http/Controllers/DeliveryOrderController.php:21
 * @route '/penjualan/delivery-orders'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/penjualan/delivery-orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeliveryOrderController::index
 * @see app/Http/Controllers/DeliveryOrderController.php:21
 * @route '/penjualan/delivery-orders'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeliveryOrderController::index
 * @see app/Http/Controllers/DeliveryOrderController.php:21
 * @route '/penjualan/delivery-orders'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeliveryOrderController::index
 * @see app/Http/Controllers/DeliveryOrderController.php:21
 * @route '/penjualan/delivery-orders'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeliveryOrderController::index
 * @see app/Http/Controllers/DeliveryOrderController.php:21
 * @route '/penjualan/delivery-orders'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeliveryOrderController::index
 * @see app/Http/Controllers/DeliveryOrderController.php:21
 * @route '/penjualan/delivery-orders'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeliveryOrderController::index
 * @see app/Http/Controllers/DeliveryOrderController.php:21
 * @route '/penjualan/delivery-orders'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\DeliveryOrderController::create
 * @see app/Http/Controllers/DeliveryOrderController.php:46
 * @route '/penjualan/delivery-orders/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/penjualan/delivery-orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeliveryOrderController::create
 * @see app/Http/Controllers/DeliveryOrderController.php:46
 * @route '/penjualan/delivery-orders/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeliveryOrderController::create
 * @see app/Http/Controllers/DeliveryOrderController.php:46
 * @route '/penjualan/delivery-orders/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeliveryOrderController::create
 * @see app/Http/Controllers/DeliveryOrderController.php:46
 * @route '/penjualan/delivery-orders/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeliveryOrderController::create
 * @see app/Http/Controllers/DeliveryOrderController.php:46
 * @route '/penjualan/delivery-orders/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeliveryOrderController::create
 * @see app/Http/Controllers/DeliveryOrderController.php:46
 * @route '/penjualan/delivery-orders/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeliveryOrderController::create
 * @see app/Http/Controllers/DeliveryOrderController.php:46
 * @route '/penjualan/delivery-orders/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\DeliveryOrderController::store
 * @see app/Http/Controllers/DeliveryOrderController.php:81
 * @route '/penjualan/delivery-orders'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/penjualan/delivery-orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DeliveryOrderController::store
 * @see app/Http/Controllers/DeliveryOrderController.php:81
 * @route '/penjualan/delivery-orders'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeliveryOrderController::store
 * @see app/Http/Controllers/DeliveryOrderController.php:81
 * @route '/penjualan/delivery-orders'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\DeliveryOrderController::store
 * @see app/Http/Controllers/DeliveryOrderController.php:81
 * @route '/penjualan/delivery-orders'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeliveryOrderController::store
 * @see app/Http/Controllers/DeliveryOrderController.php:81
 * @route '/penjualan/delivery-orders'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\DeliveryOrderController::show
 * @see app/Http/Controllers/DeliveryOrderController.php:153
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
export const show = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/penjualan/delivery-orders/{delivery_order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeliveryOrderController::show
 * @see app/Http/Controllers/DeliveryOrderController.php:153
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
show.url = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { delivery_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    delivery_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        delivery_order: typeof args.delivery_order === 'object'
                ? args.delivery_order.id
                : args.delivery_order,
                }

    return show.definition.url
            .replace('{delivery_order}', parsedArgs.delivery_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeliveryOrderController::show
 * @see app/Http/Controllers/DeliveryOrderController.php:153
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
show.get = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeliveryOrderController::show
 * @see app/Http/Controllers/DeliveryOrderController.php:153
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
show.head = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeliveryOrderController::show
 * @see app/Http/Controllers/DeliveryOrderController.php:153
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
    const showForm = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeliveryOrderController::show
 * @see app/Http/Controllers/DeliveryOrderController.php:153
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
        showForm.get = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeliveryOrderController::show
 * @see app/Http/Controllers/DeliveryOrderController.php:153
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
        showForm.head = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\DeliveryOrderController::edit
 * @see app/Http/Controllers/DeliveryOrderController.php:208
 * @route '/penjualan/delivery-orders/{delivery_order}/edit'
 */
export const edit = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/penjualan/delivery-orders/{delivery_order}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeliveryOrderController::edit
 * @see app/Http/Controllers/DeliveryOrderController.php:208
 * @route '/penjualan/delivery-orders/{delivery_order}/edit'
 */
edit.url = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { delivery_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    delivery_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        delivery_order: typeof args.delivery_order === 'object'
                ? args.delivery_order.id
                : args.delivery_order,
                }

    return edit.definition.url
            .replace('{delivery_order}', parsedArgs.delivery_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeliveryOrderController::edit
 * @see app/Http/Controllers/DeliveryOrderController.php:208
 * @route '/penjualan/delivery-orders/{delivery_order}/edit'
 */
edit.get = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeliveryOrderController::edit
 * @see app/Http/Controllers/DeliveryOrderController.php:208
 * @route '/penjualan/delivery-orders/{delivery_order}/edit'
 */
edit.head = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeliveryOrderController::edit
 * @see app/Http/Controllers/DeliveryOrderController.php:208
 * @route '/penjualan/delivery-orders/{delivery_order}/edit'
 */
    const editForm = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeliveryOrderController::edit
 * @see app/Http/Controllers/DeliveryOrderController.php:208
 * @route '/penjualan/delivery-orders/{delivery_order}/edit'
 */
        editForm.get = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeliveryOrderController::edit
 * @see app/Http/Controllers/DeliveryOrderController.php:208
 * @route '/penjualan/delivery-orders/{delivery_order}/edit'
 */
        editForm.head = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\DeliveryOrderController::update
 * @see app/Http/Controllers/DeliveryOrderController.php:238
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
export const update = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/penjualan/delivery-orders/{delivery_order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DeliveryOrderController::update
 * @see app/Http/Controllers/DeliveryOrderController.php:238
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
update.url = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { delivery_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    delivery_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        delivery_order: typeof args.delivery_order === 'object'
                ? args.delivery_order.id
                : args.delivery_order,
                }

    return update.definition.url
            .replace('{delivery_order}', parsedArgs.delivery_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeliveryOrderController::update
 * @see app/Http/Controllers/DeliveryOrderController.php:238
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
update.put = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\DeliveryOrderController::update
 * @see app/Http/Controllers/DeliveryOrderController.php:238
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
update.patch = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\DeliveryOrderController::update
 * @see app/Http/Controllers/DeliveryOrderController.php:238
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
    const updateForm = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeliveryOrderController::update
 * @see app/Http/Controllers/DeliveryOrderController.php:238
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
        updateForm.put = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\DeliveryOrderController::update
 * @see app/Http/Controllers/DeliveryOrderController.php:238
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
        updateForm.patch = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\DeliveryOrderController::destroy
 * @see app/Http/Controllers/DeliveryOrderController.php:256
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
export const destroy = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/penjualan/delivery-orders/{delivery_order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DeliveryOrderController::destroy
 * @see app/Http/Controllers/DeliveryOrderController.php:256
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
destroy.url = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { delivery_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { delivery_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    delivery_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        delivery_order: typeof args.delivery_order === 'object'
                ? args.delivery_order.id
                : args.delivery_order,
                }

    return destroy.definition.url
            .replace('{delivery_order}', parsedArgs.delivery_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeliveryOrderController::destroy
 * @see app/Http/Controllers/DeliveryOrderController.php:256
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
destroy.delete = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\DeliveryOrderController::destroy
 * @see app/Http/Controllers/DeliveryOrderController.php:256
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
    const destroyForm = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\DeliveryOrderController::destroy
 * @see app/Http/Controllers/DeliveryOrderController.php:256
 * @route '/penjualan/delivery-orders/{delivery_order}'
 */
        destroyForm.delete = (args: { delivery_order: number | { id: number } } | [delivery_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\DeliveryOrderController::pdf
 * @see app/Http/Controllers/DeliveryOrderController.php:282
 * @route '/penjualan/delivery-orders/{deliveryOrder}/pdf'
 */
export const pdf = (args: { deliveryOrder: number | { id: number } } | [deliveryOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(args, options),
    method: 'get',
})

pdf.definition = {
    methods: ["get","head"],
    url: '/penjualan/delivery-orders/{deliveryOrder}/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DeliveryOrderController::pdf
 * @see app/Http/Controllers/DeliveryOrderController.php:282
 * @route '/penjualan/delivery-orders/{deliveryOrder}/pdf'
 */
pdf.url = (args: { deliveryOrder: number | { id: number } } | [deliveryOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { deliveryOrder: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { deliveryOrder: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    deliveryOrder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        deliveryOrder: typeof args.deliveryOrder === 'object'
                ? args.deliveryOrder.id
                : args.deliveryOrder,
                }

    return pdf.definition.url
            .replace('{deliveryOrder}', parsedArgs.deliveryOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DeliveryOrderController::pdf
 * @see app/Http/Controllers/DeliveryOrderController.php:282
 * @route '/penjualan/delivery-orders/{deliveryOrder}/pdf'
 */
pdf.get = (args: { deliveryOrder: number | { id: number } } | [deliveryOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DeliveryOrderController::pdf
 * @see app/Http/Controllers/DeliveryOrderController.php:282
 * @route '/penjualan/delivery-orders/{deliveryOrder}/pdf'
 */
pdf.head = (args: { deliveryOrder: number | { id: number } } | [deliveryOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DeliveryOrderController::pdf
 * @see app/Http/Controllers/DeliveryOrderController.php:282
 * @route '/penjualan/delivery-orders/{deliveryOrder}/pdf'
 */
    const pdfForm = (args: { deliveryOrder: number | { id: number } } | [deliveryOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\DeliveryOrderController::pdf
 * @see app/Http/Controllers/DeliveryOrderController.php:282
 * @route '/penjualan/delivery-orders/{deliveryOrder}/pdf'
 */
        pdfForm.get = (args: { deliveryOrder: number | { id: number } } | [deliveryOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\DeliveryOrderController::pdf
 * @see app/Http/Controllers/DeliveryOrderController.php:282
 * @route '/penjualan/delivery-orders/{deliveryOrder}/pdf'
 */
        pdfForm.head = (args: { deliveryOrder: number | { id: number } } | [deliveryOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pdf.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pdf.form = pdfForm
const deliveryOrders = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
pdf: Object.assign(pdf, pdf),
}

export default deliveryOrders