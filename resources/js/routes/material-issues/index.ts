import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\MaterialIssueController::index
 * @see app/Http/Controllers/MaterialIssueController.php:19
 * @route '/produksi/material-issues'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/produksi/material-issues',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaterialIssueController::index
 * @see app/Http/Controllers/MaterialIssueController.php:19
 * @route '/produksi/material-issues'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialIssueController::index
 * @see app/Http/Controllers/MaterialIssueController.php:19
 * @route '/produksi/material-issues'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MaterialIssueController::index
 * @see app/Http/Controllers/MaterialIssueController.php:19
 * @route '/produksi/material-issues'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MaterialIssueController::index
 * @see app/Http/Controllers/MaterialIssueController.php:19
 * @route '/produksi/material-issues'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MaterialIssueController::index
 * @see app/Http/Controllers/MaterialIssueController.php:19
 * @route '/produksi/material-issues'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MaterialIssueController::index
 * @see app/Http/Controllers/MaterialIssueController.php:19
 * @route '/produksi/material-issues'
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
* @see \App\Http\Controllers\MaterialIssueController::create
 * @see app/Http/Controllers/MaterialIssueController.php:44
 * @route '/produksi/material-issues/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/produksi/material-issues/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaterialIssueController::create
 * @see app/Http/Controllers/MaterialIssueController.php:44
 * @route '/produksi/material-issues/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialIssueController::create
 * @see app/Http/Controllers/MaterialIssueController.php:44
 * @route '/produksi/material-issues/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MaterialIssueController::create
 * @see app/Http/Controllers/MaterialIssueController.php:44
 * @route '/produksi/material-issues/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MaterialIssueController::create
 * @see app/Http/Controllers/MaterialIssueController.php:44
 * @route '/produksi/material-issues/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MaterialIssueController::create
 * @see app/Http/Controllers/MaterialIssueController.php:44
 * @route '/produksi/material-issues/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MaterialIssueController::create
 * @see app/Http/Controllers/MaterialIssueController.php:44
 * @route '/produksi/material-issues/create'
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
* @see \App\Http\Controllers\MaterialIssueController::store
 * @see app/Http/Controllers/MaterialIssueController.php:75
 * @route '/produksi/material-issues'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/produksi/material-issues',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MaterialIssueController::store
 * @see app/Http/Controllers/MaterialIssueController.php:75
 * @route '/produksi/material-issues'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialIssueController::store
 * @see app/Http/Controllers/MaterialIssueController.php:75
 * @route '/produksi/material-issues'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MaterialIssueController::store
 * @see app/Http/Controllers/MaterialIssueController.php:75
 * @route '/produksi/material-issues'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MaterialIssueController::store
 * @see app/Http/Controllers/MaterialIssueController.php:75
 * @route '/produksi/material-issues'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MaterialIssueController::show
 * @see app/Http/Controllers/MaterialIssueController.php:114
 * @route '/produksi/material-issues/{material_issue}'
 */
export const show = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/produksi/material-issues/{material_issue}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaterialIssueController::show
 * @see app/Http/Controllers/MaterialIssueController.php:114
 * @route '/produksi/material-issues/{material_issue}'
 */
show.url = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { material_issue: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { material_issue: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    material_issue: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        material_issue: typeof args.material_issue === 'object'
                ? args.material_issue.id
                : args.material_issue,
                }

    return show.definition.url
            .replace('{material_issue}', parsedArgs.material_issue.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialIssueController::show
 * @see app/Http/Controllers/MaterialIssueController.php:114
 * @route '/produksi/material-issues/{material_issue}'
 */
show.get = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MaterialIssueController::show
 * @see app/Http/Controllers/MaterialIssueController.php:114
 * @route '/produksi/material-issues/{material_issue}'
 */
show.head = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MaterialIssueController::show
 * @see app/Http/Controllers/MaterialIssueController.php:114
 * @route '/produksi/material-issues/{material_issue}'
 */
    const showForm = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MaterialIssueController::show
 * @see app/Http/Controllers/MaterialIssueController.php:114
 * @route '/produksi/material-issues/{material_issue}'
 */
        showForm.get = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MaterialIssueController::show
 * @see app/Http/Controllers/MaterialIssueController.php:114
 * @route '/produksi/material-issues/{material_issue}'
 */
        showForm.head = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MaterialIssueController::destroy
 * @see app/Http/Controllers/MaterialIssueController.php:145
 * @route '/produksi/material-issues/{material_issue}'
 */
export const destroy = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/produksi/material-issues/{material_issue}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MaterialIssueController::destroy
 * @see app/Http/Controllers/MaterialIssueController.php:145
 * @route '/produksi/material-issues/{material_issue}'
 */
destroy.url = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { material_issue: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { material_issue: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    material_issue: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        material_issue: typeof args.material_issue === 'object'
                ? args.material_issue.id
                : args.material_issue,
                }

    return destroy.definition.url
            .replace('{material_issue}', parsedArgs.material_issue.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialIssueController::destroy
 * @see app/Http/Controllers/MaterialIssueController.php:145
 * @route '/produksi/material-issues/{material_issue}'
 */
destroy.delete = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MaterialIssueController::destroy
 * @see app/Http/Controllers/MaterialIssueController.php:145
 * @route '/produksi/material-issues/{material_issue}'
 */
    const destroyForm = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MaterialIssueController::destroy
 * @see app/Http/Controllers/MaterialIssueController.php:145
 * @route '/produksi/material-issues/{material_issue}'
 */
        destroyForm.delete = (args: { material_issue: number | { id: number } } | [material_issue: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const materialIssues = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
destroy: Object.assign(destroy, destroy),
}

export default materialIssues