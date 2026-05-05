import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FinishedGoodController::index
 * @see app/Http/Controllers/FinishedGoodController.php:18
 * @route '/produksi/finished-goods'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/produksi/finished-goods',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FinishedGoodController::index
 * @see app/Http/Controllers/FinishedGoodController.php:18
 * @route '/produksi/finished-goods'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FinishedGoodController::index
 * @see app/Http/Controllers/FinishedGoodController.php:18
 * @route '/produksi/finished-goods'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FinishedGoodController::index
 * @see app/Http/Controllers/FinishedGoodController.php:18
 * @route '/produksi/finished-goods'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FinishedGoodController::index
 * @see app/Http/Controllers/FinishedGoodController.php:18
 * @route '/produksi/finished-goods'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FinishedGoodController::index
 * @see app/Http/Controllers/FinishedGoodController.php:18
 * @route '/produksi/finished-goods'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FinishedGoodController::index
 * @see app/Http/Controllers/FinishedGoodController.php:18
 * @route '/produksi/finished-goods'
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
* @see \App\Http\Controllers\FinishedGoodController::create
 * @see app/Http/Controllers/FinishedGoodController.php:44
 * @route '/produksi/finished-goods/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/produksi/finished-goods/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FinishedGoodController::create
 * @see app/Http/Controllers/FinishedGoodController.php:44
 * @route '/produksi/finished-goods/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FinishedGoodController::create
 * @see app/Http/Controllers/FinishedGoodController.php:44
 * @route '/produksi/finished-goods/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FinishedGoodController::create
 * @see app/Http/Controllers/FinishedGoodController.php:44
 * @route '/produksi/finished-goods/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FinishedGoodController::create
 * @see app/Http/Controllers/FinishedGoodController.php:44
 * @route '/produksi/finished-goods/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FinishedGoodController::create
 * @see app/Http/Controllers/FinishedGoodController.php:44
 * @route '/produksi/finished-goods/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FinishedGoodController::create
 * @see app/Http/Controllers/FinishedGoodController.php:44
 * @route '/produksi/finished-goods/create'
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
* @see \App\Http\Controllers\FinishedGoodController::store
 * @see app/Http/Controllers/FinishedGoodController.php:76
 * @route '/produksi/finished-goods'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/produksi/finished-goods',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FinishedGoodController::store
 * @see app/Http/Controllers/FinishedGoodController.php:76
 * @route '/produksi/finished-goods'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FinishedGoodController::store
 * @see app/Http/Controllers/FinishedGoodController.php:76
 * @route '/produksi/finished-goods'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\FinishedGoodController::store
 * @see app/Http/Controllers/FinishedGoodController.php:76
 * @route '/produksi/finished-goods'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FinishedGoodController::store
 * @see app/Http/Controllers/FinishedGoodController.php:76
 * @route '/produksi/finished-goods'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\FinishedGoodController::show
 * @see app/Http/Controllers/FinishedGoodController.php:120
 * @route '/produksi/finished-goods/{finished_good}'
 */
export const show = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/produksi/finished-goods/{finished_good}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FinishedGoodController::show
 * @see app/Http/Controllers/FinishedGoodController.php:120
 * @route '/produksi/finished-goods/{finished_good}'
 */
show.url = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { finished_good: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { finished_good: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    finished_good: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        finished_good: typeof args.finished_good === 'object'
                ? args.finished_good.id
                : args.finished_good,
                }

    return show.definition.url
            .replace('{finished_good}', parsedArgs.finished_good.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FinishedGoodController::show
 * @see app/Http/Controllers/FinishedGoodController.php:120
 * @route '/produksi/finished-goods/{finished_good}'
 */
show.get = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FinishedGoodController::show
 * @see app/Http/Controllers/FinishedGoodController.php:120
 * @route '/produksi/finished-goods/{finished_good}'
 */
show.head = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\FinishedGoodController::show
 * @see app/Http/Controllers/FinishedGoodController.php:120
 * @route '/produksi/finished-goods/{finished_good}'
 */
    const showForm = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\FinishedGoodController::show
 * @see app/Http/Controllers/FinishedGoodController.php:120
 * @route '/produksi/finished-goods/{finished_good}'
 */
        showForm.get = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\FinishedGoodController::show
 * @see app/Http/Controllers/FinishedGoodController.php:120
 * @route '/produksi/finished-goods/{finished_good}'
 */
        showForm.head = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\FinishedGoodController::destroy
 * @see app/Http/Controllers/FinishedGoodController.php:149
 * @route '/produksi/finished-goods/{finished_good}'
 */
export const destroy = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/produksi/finished-goods/{finished_good}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FinishedGoodController::destroy
 * @see app/Http/Controllers/FinishedGoodController.php:149
 * @route '/produksi/finished-goods/{finished_good}'
 */
destroy.url = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { finished_good: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { finished_good: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    finished_good: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        finished_good: typeof args.finished_good === 'object'
                ? args.finished_good.id
                : args.finished_good,
                }

    return destroy.definition.url
            .replace('{finished_good}', parsedArgs.finished_good.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FinishedGoodController::destroy
 * @see app/Http/Controllers/FinishedGoodController.php:149
 * @route '/produksi/finished-goods/{finished_good}'
 */
destroy.delete = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\FinishedGoodController::destroy
 * @see app/Http/Controllers/FinishedGoodController.php:149
 * @route '/produksi/finished-goods/{finished_good}'
 */
    const destroyForm = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FinishedGoodController::destroy
 * @see app/Http/Controllers/FinishedGoodController.php:149
 * @route '/produksi/finished-goods/{finished_good}'
 */
        destroyForm.delete = (args: { finished_good: number | { id: number } } | [finished_good: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const FinishedGoodController = { index, create, store, show, destroy }

export default FinishedGoodController