import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\StockAdjustmentController::index
 * @see app/Http/Controllers/StockAdjustmentController.php:20
 * @route '/adjust'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/adjust',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockAdjustmentController::index
 * @see app/Http/Controllers/StockAdjustmentController.php:20
 * @route '/adjust'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockAdjustmentController::index
 * @see app/Http/Controllers/StockAdjustmentController.php:20
 * @route '/adjust'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockAdjustmentController::index
 * @see app/Http/Controllers/StockAdjustmentController.php:20
 * @route '/adjust'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockAdjustmentController::index
 * @see app/Http/Controllers/StockAdjustmentController.php:20
 * @route '/adjust'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockAdjustmentController::index
 * @see app/Http/Controllers/StockAdjustmentController.php:20
 * @route '/adjust'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockAdjustmentController::index
 * @see app/Http/Controllers/StockAdjustmentController.php:20
 * @route '/adjust'
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
* @see \App\Http\Controllers\StockAdjustmentController::create
 * @see app/Http/Controllers/StockAdjustmentController.php:47
 * @route '/adjust/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/adjust/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockAdjustmentController::create
 * @see app/Http/Controllers/StockAdjustmentController.php:47
 * @route '/adjust/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockAdjustmentController::create
 * @see app/Http/Controllers/StockAdjustmentController.php:47
 * @route '/adjust/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockAdjustmentController::create
 * @see app/Http/Controllers/StockAdjustmentController.php:47
 * @route '/adjust/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockAdjustmentController::create
 * @see app/Http/Controllers/StockAdjustmentController.php:47
 * @route '/adjust/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockAdjustmentController::create
 * @see app/Http/Controllers/StockAdjustmentController.php:47
 * @route '/adjust/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockAdjustmentController::create
 * @see app/Http/Controllers/StockAdjustmentController.php:47
 * @route '/adjust/create'
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
* @see \App\Http\Controllers\StockAdjustmentController::store
 * @see app/Http/Controllers/StockAdjustmentController.php:66
 * @route '/adjust'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/adjust',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\StockAdjustmentController::store
 * @see app/Http/Controllers/StockAdjustmentController.php:66
 * @route '/adjust'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockAdjustmentController::store
 * @see app/Http/Controllers/StockAdjustmentController.php:66
 * @route '/adjust'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\StockAdjustmentController::store
 * @see app/Http/Controllers/StockAdjustmentController.php:66
 * @route '/adjust'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StockAdjustmentController::store
 * @see app/Http/Controllers/StockAdjustmentController.php:66
 * @route '/adjust'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\StockAdjustmentController::show
 * @see app/Http/Controllers/StockAdjustmentController.php:114
 * @route '/adjust/{stockAdjustment}'
 */
export const show = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/adjust/{stockAdjustment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockAdjustmentController::show
 * @see app/Http/Controllers/StockAdjustmentController.php:114
 * @route '/adjust/{stockAdjustment}'
 */
show.url = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stockAdjustment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { stockAdjustment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    stockAdjustment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stockAdjustment: typeof args.stockAdjustment === 'object'
                ? args.stockAdjustment.id
                : args.stockAdjustment,
                }

    return show.definition.url
            .replace('{stockAdjustment}', parsedArgs.stockAdjustment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockAdjustmentController::show
 * @see app/Http/Controllers/StockAdjustmentController.php:114
 * @route '/adjust/{stockAdjustment}'
 */
show.get = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockAdjustmentController::show
 * @see app/Http/Controllers/StockAdjustmentController.php:114
 * @route '/adjust/{stockAdjustment}'
 */
show.head = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockAdjustmentController::show
 * @see app/Http/Controllers/StockAdjustmentController.php:114
 * @route '/adjust/{stockAdjustment}'
 */
    const showForm = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockAdjustmentController::show
 * @see app/Http/Controllers/StockAdjustmentController.php:114
 * @route '/adjust/{stockAdjustment}'
 */
        showForm.get = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockAdjustmentController::show
 * @see app/Http/Controllers/StockAdjustmentController.php:114
 * @route '/adjust/{stockAdjustment}'
 */
        showForm.head = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StockAdjustmentController::edit
 * @see app/Http/Controllers/StockAdjustmentController.php:145
 * @route '/adjust/{stockAdjustment}/edit'
 */
export const edit = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/adjust/{stockAdjustment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\StockAdjustmentController::edit
 * @see app/Http/Controllers/StockAdjustmentController.php:145
 * @route '/adjust/{stockAdjustment}/edit'
 */
edit.url = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stockAdjustment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { stockAdjustment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    stockAdjustment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stockAdjustment: typeof args.stockAdjustment === 'object'
                ? args.stockAdjustment.id
                : args.stockAdjustment,
                }

    return edit.definition.url
            .replace('{stockAdjustment}', parsedArgs.stockAdjustment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockAdjustmentController::edit
 * @see app/Http/Controllers/StockAdjustmentController.php:145
 * @route '/adjust/{stockAdjustment}/edit'
 */
edit.get = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\StockAdjustmentController::edit
 * @see app/Http/Controllers/StockAdjustmentController.php:145
 * @route '/adjust/{stockAdjustment}/edit'
 */
edit.head = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\StockAdjustmentController::edit
 * @see app/Http/Controllers/StockAdjustmentController.php:145
 * @route '/adjust/{stockAdjustment}/edit'
 */
    const editForm = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\StockAdjustmentController::edit
 * @see app/Http/Controllers/StockAdjustmentController.php:145
 * @route '/adjust/{stockAdjustment}/edit'
 */
        editForm.get = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\StockAdjustmentController::edit
 * @see app/Http/Controllers/StockAdjustmentController.php:145
 * @route '/adjust/{stockAdjustment}/edit'
 */
        editForm.head = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\StockAdjustmentController::update
 * @see app/Http/Controllers/StockAdjustmentController.php:176
 * @route '/adjust/{stockAdjustment}'
 */
export const update = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/adjust/{stockAdjustment}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\StockAdjustmentController::update
 * @see app/Http/Controllers/StockAdjustmentController.php:176
 * @route '/adjust/{stockAdjustment}'
 */
update.url = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stockAdjustment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { stockAdjustment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    stockAdjustment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stockAdjustment: typeof args.stockAdjustment === 'object'
                ? args.stockAdjustment.id
                : args.stockAdjustment,
                }

    return update.definition.url
            .replace('{stockAdjustment}', parsedArgs.stockAdjustment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockAdjustmentController::update
 * @see app/Http/Controllers/StockAdjustmentController.php:176
 * @route '/adjust/{stockAdjustment}'
 */
update.put = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\StockAdjustmentController::update
 * @see app/Http/Controllers/StockAdjustmentController.php:176
 * @route '/adjust/{stockAdjustment}'
 */
    const updateForm = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StockAdjustmentController::update
 * @see app/Http/Controllers/StockAdjustmentController.php:176
 * @route '/adjust/{stockAdjustment}'
 */
        updateForm.put = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\StockAdjustmentController::destroy
 * @see app/Http/Controllers/StockAdjustmentController.php:225
 * @route '/adjust/{stockAdjustment}'
 */
export const destroy = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/adjust/{stockAdjustment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\StockAdjustmentController::destroy
 * @see app/Http/Controllers/StockAdjustmentController.php:225
 * @route '/adjust/{stockAdjustment}'
 */
destroy.url = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { stockAdjustment: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { stockAdjustment: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    stockAdjustment: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        stockAdjustment: typeof args.stockAdjustment === 'object'
                ? args.stockAdjustment.id
                : args.stockAdjustment,
                }

    return destroy.definition.url
            .replace('{stockAdjustment}', parsedArgs.stockAdjustment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\StockAdjustmentController::destroy
 * @see app/Http/Controllers/StockAdjustmentController.php:225
 * @route '/adjust/{stockAdjustment}'
 */
destroy.delete = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\StockAdjustmentController::destroy
 * @see app/Http/Controllers/StockAdjustmentController.php:225
 * @route '/adjust/{stockAdjustment}'
 */
    const destroyForm = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\StockAdjustmentController::destroy
 * @see app/Http/Controllers/StockAdjustmentController.php:225
 * @route '/adjust/{stockAdjustment}'
 */
        destroyForm.delete = (args: { stockAdjustment: number | { id: number } } | [stockAdjustment: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const StockAdjustmentController = { index, create, store, show, edit, update, destroy }

export default StockAdjustmentController