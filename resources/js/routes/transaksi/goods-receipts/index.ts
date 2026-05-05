import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\GoodsReceiptController::index
 * @see app/Http/Controllers/GoodsReceiptController.php:21
 * @route '/transaksi/goods-receipts'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/transaksi/goods-receipts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoodsReceiptController::index
 * @see app/Http/Controllers/GoodsReceiptController.php:21
 * @route '/transaksi/goods-receipts'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoodsReceiptController::index
 * @see app/Http/Controllers/GoodsReceiptController.php:21
 * @route '/transaksi/goods-receipts'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GoodsReceiptController::index
 * @see app/Http/Controllers/GoodsReceiptController.php:21
 * @route '/transaksi/goods-receipts'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GoodsReceiptController::index
 * @see app/Http/Controllers/GoodsReceiptController.php:21
 * @route '/transaksi/goods-receipts'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GoodsReceiptController::index
 * @see app/Http/Controllers/GoodsReceiptController.php:21
 * @route '/transaksi/goods-receipts'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GoodsReceiptController::index
 * @see app/Http/Controllers/GoodsReceiptController.php:21
 * @route '/transaksi/goods-receipts'
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
* @see \App\Http\Controllers\GoodsReceiptController::create
 * @see app/Http/Controllers/GoodsReceiptController.php:46
 * @route '/transaksi/goods-receipts/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/transaksi/goods-receipts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoodsReceiptController::create
 * @see app/Http/Controllers/GoodsReceiptController.php:46
 * @route '/transaksi/goods-receipts/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoodsReceiptController::create
 * @see app/Http/Controllers/GoodsReceiptController.php:46
 * @route '/transaksi/goods-receipts/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GoodsReceiptController::create
 * @see app/Http/Controllers/GoodsReceiptController.php:46
 * @route '/transaksi/goods-receipts/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GoodsReceiptController::create
 * @see app/Http/Controllers/GoodsReceiptController.php:46
 * @route '/transaksi/goods-receipts/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GoodsReceiptController::create
 * @see app/Http/Controllers/GoodsReceiptController.php:46
 * @route '/transaksi/goods-receipts/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GoodsReceiptController::create
 * @see app/Http/Controllers/GoodsReceiptController.php:46
 * @route '/transaksi/goods-receipts/create'
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
* @see \App\Http\Controllers\GoodsReceiptController::store
 * @see app/Http/Controllers/GoodsReceiptController.php:87
 * @route '/transaksi/goods-receipts'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/transaksi/goods-receipts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GoodsReceiptController::store
 * @see app/Http/Controllers/GoodsReceiptController.php:87
 * @route '/transaksi/goods-receipts'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoodsReceiptController::store
 * @see app/Http/Controllers/GoodsReceiptController.php:87
 * @route '/transaksi/goods-receipts'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\GoodsReceiptController::store
 * @see app/Http/Controllers/GoodsReceiptController.php:87
 * @route '/transaksi/goods-receipts'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GoodsReceiptController::store
 * @see app/Http/Controllers/GoodsReceiptController.php:87
 * @route '/transaksi/goods-receipts'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\GoodsReceiptController::show
 * @see app/Http/Controllers/GoodsReceiptController.php:147
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
export const show = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/transaksi/goods-receipts/{goods_receipt}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoodsReceiptController::show
 * @see app/Http/Controllers/GoodsReceiptController.php:147
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
show.url = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { goods_receipt: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { goods_receipt: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    goods_receipt: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        goods_receipt: typeof args.goods_receipt === 'object'
                ? args.goods_receipt.id
                : args.goods_receipt,
                }

    return show.definition.url
            .replace('{goods_receipt}', parsedArgs.goods_receipt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoodsReceiptController::show
 * @see app/Http/Controllers/GoodsReceiptController.php:147
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
show.get = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GoodsReceiptController::show
 * @see app/Http/Controllers/GoodsReceiptController.php:147
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
show.head = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GoodsReceiptController::show
 * @see app/Http/Controllers/GoodsReceiptController.php:147
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
    const showForm = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GoodsReceiptController::show
 * @see app/Http/Controllers/GoodsReceiptController.php:147
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
        showForm.get = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GoodsReceiptController::show
 * @see app/Http/Controllers/GoodsReceiptController.php:147
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
        showForm.head = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\GoodsReceiptController::edit
 * @see app/Http/Controllers/GoodsReceiptController.php:180
 * @route '/transaksi/goods-receipts/{goods_receipt}/edit'
 */
export const edit = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/transaksi/goods-receipts/{goods_receipt}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GoodsReceiptController::edit
 * @see app/Http/Controllers/GoodsReceiptController.php:180
 * @route '/transaksi/goods-receipts/{goods_receipt}/edit'
 */
edit.url = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { goods_receipt: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    goods_receipt: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        goods_receipt: args.goods_receipt,
                }

    return edit.definition.url
            .replace('{goods_receipt}', parsedArgs.goods_receipt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoodsReceiptController::edit
 * @see app/Http/Controllers/GoodsReceiptController.php:180
 * @route '/transaksi/goods-receipts/{goods_receipt}/edit'
 */
edit.get = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\GoodsReceiptController::edit
 * @see app/Http/Controllers/GoodsReceiptController.php:180
 * @route '/transaksi/goods-receipts/{goods_receipt}/edit'
 */
edit.head = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\GoodsReceiptController::edit
 * @see app/Http/Controllers/GoodsReceiptController.php:180
 * @route '/transaksi/goods-receipts/{goods_receipt}/edit'
 */
    const editForm = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\GoodsReceiptController::edit
 * @see app/Http/Controllers/GoodsReceiptController.php:180
 * @route '/transaksi/goods-receipts/{goods_receipt}/edit'
 */
        editForm.get = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\GoodsReceiptController::edit
 * @see app/Http/Controllers/GoodsReceiptController.php:180
 * @route '/transaksi/goods-receipts/{goods_receipt}/edit'
 */
        editForm.head = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\GoodsReceiptController::update
 * @see app/Http/Controllers/GoodsReceiptController.php:189
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
export const update = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/transaksi/goods-receipts/{goods_receipt}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\GoodsReceiptController::update
 * @see app/Http/Controllers/GoodsReceiptController.php:189
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
update.url = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { goods_receipt: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    goods_receipt: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        goods_receipt: args.goods_receipt,
                }

    return update.definition.url
            .replace('{goods_receipt}', parsedArgs.goods_receipt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoodsReceiptController::update
 * @see app/Http/Controllers/GoodsReceiptController.php:189
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
update.put = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\GoodsReceiptController::update
 * @see app/Http/Controllers/GoodsReceiptController.php:189
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
update.patch = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\GoodsReceiptController::update
 * @see app/Http/Controllers/GoodsReceiptController.php:189
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
    const updateForm = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GoodsReceiptController::update
 * @see app/Http/Controllers/GoodsReceiptController.php:189
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
        updateForm.put = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\GoodsReceiptController::update
 * @see app/Http/Controllers/GoodsReceiptController.php:189
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
        updateForm.patch = (args: { goods_receipt: string | number } | [goods_receipt: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\GoodsReceiptController::destroy
 * @see app/Http/Controllers/GoodsReceiptController.php:198
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
export const destroy = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/transaksi/goods-receipts/{goods_receipt}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GoodsReceiptController::destroy
 * @see app/Http/Controllers/GoodsReceiptController.php:198
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
destroy.url = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { goods_receipt: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { goods_receipt: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    goods_receipt: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        goods_receipt: typeof args.goods_receipt === 'object'
                ? args.goods_receipt.id
                : args.goods_receipt,
                }

    return destroy.definition.url
            .replace('{goods_receipt}', parsedArgs.goods_receipt.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GoodsReceiptController::destroy
 * @see app/Http/Controllers/GoodsReceiptController.php:198
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
destroy.delete = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\GoodsReceiptController::destroy
 * @see app/Http/Controllers/GoodsReceiptController.php:198
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
    const destroyForm = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\GoodsReceiptController::destroy
 * @see app/Http/Controllers/GoodsReceiptController.php:198
 * @route '/transaksi/goods-receipts/{goods_receipt}'
 */
        destroyForm.delete = (args: { goods_receipt: number | { id: number } } | [goods_receipt: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const goodsReceipts = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default goodsReceipts