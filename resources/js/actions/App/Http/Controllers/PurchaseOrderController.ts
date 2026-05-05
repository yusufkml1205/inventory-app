import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PurchaseOrderController::index
 * @see app/Http/Controllers/PurchaseOrderController.php:21
 * @route '/transaksi/purchase-orders'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/transaksi/purchase-orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PurchaseOrderController::index
 * @see app/Http/Controllers/PurchaseOrderController.php:21
 * @route '/transaksi/purchase-orders'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PurchaseOrderController::index
 * @see app/Http/Controllers/PurchaseOrderController.php:21
 * @route '/transaksi/purchase-orders'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PurchaseOrderController::index
 * @see app/Http/Controllers/PurchaseOrderController.php:21
 * @route '/transaksi/purchase-orders'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PurchaseOrderController::index
 * @see app/Http/Controllers/PurchaseOrderController.php:21
 * @route '/transaksi/purchase-orders'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PurchaseOrderController::index
 * @see app/Http/Controllers/PurchaseOrderController.php:21
 * @route '/transaksi/purchase-orders'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PurchaseOrderController::index
 * @see app/Http/Controllers/PurchaseOrderController.php:21
 * @route '/transaksi/purchase-orders'
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
* @see \App\Http\Controllers\PurchaseOrderController::create
 * @see app/Http/Controllers/PurchaseOrderController.php:46
 * @route '/transaksi/purchase-orders/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/transaksi/purchase-orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PurchaseOrderController::create
 * @see app/Http/Controllers/PurchaseOrderController.php:46
 * @route '/transaksi/purchase-orders/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PurchaseOrderController::create
 * @see app/Http/Controllers/PurchaseOrderController.php:46
 * @route '/transaksi/purchase-orders/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PurchaseOrderController::create
 * @see app/Http/Controllers/PurchaseOrderController.php:46
 * @route '/transaksi/purchase-orders/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PurchaseOrderController::create
 * @see app/Http/Controllers/PurchaseOrderController.php:46
 * @route '/transaksi/purchase-orders/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PurchaseOrderController::create
 * @see app/Http/Controllers/PurchaseOrderController.php:46
 * @route '/transaksi/purchase-orders/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PurchaseOrderController::create
 * @see app/Http/Controllers/PurchaseOrderController.php:46
 * @route '/transaksi/purchase-orders/create'
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
* @see \App\Http\Controllers\PurchaseOrderController::store
 * @see app/Http/Controllers/PurchaseOrderController.php:68
 * @route '/transaksi/purchase-orders'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/transaksi/purchase-orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PurchaseOrderController::store
 * @see app/Http/Controllers/PurchaseOrderController.php:68
 * @route '/transaksi/purchase-orders'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PurchaseOrderController::store
 * @see app/Http/Controllers/PurchaseOrderController.php:68
 * @route '/transaksi/purchase-orders'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PurchaseOrderController::store
 * @see app/Http/Controllers/PurchaseOrderController.php:68
 * @route '/transaksi/purchase-orders'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PurchaseOrderController::store
 * @see app/Http/Controllers/PurchaseOrderController.php:68
 * @route '/transaksi/purchase-orders'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PurchaseOrderController::show
 * @see app/Http/Controllers/PurchaseOrderController.php:117
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
export const show = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/transaksi/purchase-orders/{purchase_order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PurchaseOrderController::show
 * @see app/Http/Controllers/PurchaseOrderController.php:117
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
show.url = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { purchase_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { purchase_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    purchase_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        purchase_order: typeof args.purchase_order === 'object'
                ? args.purchase_order.id
                : args.purchase_order,
                }

    return show.definition.url
            .replace('{purchase_order}', parsedArgs.purchase_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PurchaseOrderController::show
 * @see app/Http/Controllers/PurchaseOrderController.php:117
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
show.get = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PurchaseOrderController::show
 * @see app/Http/Controllers/PurchaseOrderController.php:117
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
show.head = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PurchaseOrderController::show
 * @see app/Http/Controllers/PurchaseOrderController.php:117
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
    const showForm = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PurchaseOrderController::show
 * @see app/Http/Controllers/PurchaseOrderController.php:117
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
        showForm.get = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PurchaseOrderController::show
 * @see app/Http/Controllers/PurchaseOrderController.php:117
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
        showForm.head = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PurchaseOrderController::edit
 * @see app/Http/Controllers/PurchaseOrderController.php:167
 * @route '/transaksi/purchase-orders/{purchase_order}/edit'
 */
export const edit = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/transaksi/purchase-orders/{purchase_order}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PurchaseOrderController::edit
 * @see app/Http/Controllers/PurchaseOrderController.php:167
 * @route '/transaksi/purchase-orders/{purchase_order}/edit'
 */
edit.url = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { purchase_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { purchase_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    purchase_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        purchase_order: typeof args.purchase_order === 'object'
                ? args.purchase_order.id
                : args.purchase_order,
                }

    return edit.definition.url
            .replace('{purchase_order}', parsedArgs.purchase_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PurchaseOrderController::edit
 * @see app/Http/Controllers/PurchaseOrderController.php:167
 * @route '/transaksi/purchase-orders/{purchase_order}/edit'
 */
edit.get = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PurchaseOrderController::edit
 * @see app/Http/Controllers/PurchaseOrderController.php:167
 * @route '/transaksi/purchase-orders/{purchase_order}/edit'
 */
edit.head = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PurchaseOrderController::edit
 * @see app/Http/Controllers/PurchaseOrderController.php:167
 * @route '/transaksi/purchase-orders/{purchase_order}/edit'
 */
    const editForm = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PurchaseOrderController::edit
 * @see app/Http/Controllers/PurchaseOrderController.php:167
 * @route '/transaksi/purchase-orders/{purchase_order}/edit'
 */
        editForm.get = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PurchaseOrderController::edit
 * @see app/Http/Controllers/PurchaseOrderController.php:167
 * @route '/transaksi/purchase-orders/{purchase_order}/edit'
 */
        editForm.head = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PurchaseOrderController::update
 * @see app/Http/Controllers/PurchaseOrderController.php:207
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
export const update = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/transaksi/purchase-orders/{purchase_order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PurchaseOrderController::update
 * @see app/Http/Controllers/PurchaseOrderController.php:207
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
update.url = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { purchase_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { purchase_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    purchase_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        purchase_order: typeof args.purchase_order === 'object'
                ? args.purchase_order.id
                : args.purchase_order,
                }

    return update.definition.url
            .replace('{purchase_order}', parsedArgs.purchase_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PurchaseOrderController::update
 * @see app/Http/Controllers/PurchaseOrderController.php:207
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
update.put = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PurchaseOrderController::update
 * @see app/Http/Controllers/PurchaseOrderController.php:207
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
update.patch = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PurchaseOrderController::update
 * @see app/Http/Controllers/PurchaseOrderController.php:207
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
    const updateForm = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PurchaseOrderController::update
 * @see app/Http/Controllers/PurchaseOrderController.php:207
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
        updateForm.put = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PurchaseOrderController::update
 * @see app/Http/Controllers/PurchaseOrderController.php:207
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
        updateForm.patch = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PurchaseOrderController::destroy
 * @see app/Http/Controllers/PurchaseOrderController.php:251
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
export const destroy = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/transaksi/purchase-orders/{purchase_order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PurchaseOrderController::destroy
 * @see app/Http/Controllers/PurchaseOrderController.php:251
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
destroy.url = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { purchase_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { purchase_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    purchase_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        purchase_order: typeof args.purchase_order === 'object'
                ? args.purchase_order.id
                : args.purchase_order,
                }

    return destroy.definition.url
            .replace('{purchase_order}', parsedArgs.purchase_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PurchaseOrderController::destroy
 * @see app/Http/Controllers/PurchaseOrderController.php:251
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
destroy.delete = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PurchaseOrderController::destroy
 * @see app/Http/Controllers/PurchaseOrderController.php:251
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
    const destroyForm = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PurchaseOrderController::destroy
 * @see app/Http/Controllers/PurchaseOrderController.php:251
 * @route '/transaksi/purchase-orders/{purchase_order}'
 */
        destroyForm.delete = (args: { purchase_order: number | { id: number } } | [purchase_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PurchaseOrderController::generatePdf
 * @see app/Http/Controllers/PurchaseOrderController.php:262
 * @route '/transaksi/purchase-orders/{purchaseOrder}/pdf'
 */
export const generatePdf = (args: { purchaseOrder: number | { id: number } } | [purchaseOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generatePdf.url(args, options),
    method: 'get',
})

generatePdf.definition = {
    methods: ["get","head"],
    url: '/transaksi/purchase-orders/{purchaseOrder}/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PurchaseOrderController::generatePdf
 * @see app/Http/Controllers/PurchaseOrderController.php:262
 * @route '/transaksi/purchase-orders/{purchaseOrder}/pdf'
 */
generatePdf.url = (args: { purchaseOrder: number | { id: number } } | [purchaseOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { purchaseOrder: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { purchaseOrder: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    purchaseOrder: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        purchaseOrder: typeof args.purchaseOrder === 'object'
                ? args.purchaseOrder.id
                : args.purchaseOrder,
                }

    return generatePdf.definition.url
            .replace('{purchaseOrder}', parsedArgs.purchaseOrder.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PurchaseOrderController::generatePdf
 * @see app/Http/Controllers/PurchaseOrderController.php:262
 * @route '/transaksi/purchase-orders/{purchaseOrder}/pdf'
 */
generatePdf.get = (args: { purchaseOrder: number | { id: number } } | [purchaseOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: generatePdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PurchaseOrderController::generatePdf
 * @see app/Http/Controllers/PurchaseOrderController.php:262
 * @route '/transaksi/purchase-orders/{purchaseOrder}/pdf'
 */
generatePdf.head = (args: { purchaseOrder: number | { id: number } } | [purchaseOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: generatePdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PurchaseOrderController::generatePdf
 * @see app/Http/Controllers/PurchaseOrderController.php:262
 * @route '/transaksi/purchase-orders/{purchaseOrder}/pdf'
 */
    const generatePdfForm = (args: { purchaseOrder: number | { id: number } } | [purchaseOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: generatePdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PurchaseOrderController::generatePdf
 * @see app/Http/Controllers/PurchaseOrderController.php:262
 * @route '/transaksi/purchase-orders/{purchaseOrder}/pdf'
 */
        generatePdfForm.get = (args: { purchaseOrder: number | { id: number } } | [purchaseOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generatePdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PurchaseOrderController::generatePdf
 * @see app/Http/Controllers/PurchaseOrderController.php:262
 * @route '/transaksi/purchase-orders/{purchaseOrder}/pdf'
 */
        generatePdfForm.head = (args: { purchaseOrder: number | { id: number } } | [purchaseOrder: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: generatePdf.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    generatePdf.form = generatePdfForm
const PurchaseOrderController = { index, create, store, show, edit, update, destroy, generatePdf }

export default PurchaseOrderController