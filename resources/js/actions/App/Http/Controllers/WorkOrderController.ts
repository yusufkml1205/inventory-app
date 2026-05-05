import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\WorkOrderController::index
 * @see app/Http/Controllers/WorkOrderController.php:19
 * @route '/produksi/work-orders'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/produksi/work-orders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkOrderController::index
 * @see app/Http/Controllers/WorkOrderController.php:19
 * @route '/produksi/work-orders'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkOrderController::index
 * @see app/Http/Controllers/WorkOrderController.php:19
 * @route '/produksi/work-orders'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\WorkOrderController::index
 * @see app/Http/Controllers/WorkOrderController.php:19
 * @route '/produksi/work-orders'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\WorkOrderController::index
 * @see app/Http/Controllers/WorkOrderController.php:19
 * @route '/produksi/work-orders'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\WorkOrderController::index
 * @see app/Http/Controllers/WorkOrderController.php:19
 * @route '/produksi/work-orders'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\WorkOrderController::index
 * @see app/Http/Controllers/WorkOrderController.php:19
 * @route '/produksi/work-orders'
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
* @see \App\Http\Controllers\WorkOrderController::create
 * @see app/Http/Controllers/WorkOrderController.php:45
 * @route '/produksi/work-orders/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/produksi/work-orders/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkOrderController::create
 * @see app/Http/Controllers/WorkOrderController.php:45
 * @route '/produksi/work-orders/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkOrderController::create
 * @see app/Http/Controllers/WorkOrderController.php:45
 * @route '/produksi/work-orders/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\WorkOrderController::create
 * @see app/Http/Controllers/WorkOrderController.php:45
 * @route '/produksi/work-orders/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\WorkOrderController::create
 * @see app/Http/Controllers/WorkOrderController.php:45
 * @route '/produksi/work-orders/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\WorkOrderController::create
 * @see app/Http/Controllers/WorkOrderController.php:45
 * @route '/produksi/work-orders/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\WorkOrderController::create
 * @see app/Http/Controllers/WorkOrderController.php:45
 * @route '/produksi/work-orders/create'
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
* @see \App\Http\Controllers\WorkOrderController::store
 * @see app/Http/Controllers/WorkOrderController.php:57
 * @route '/produksi/work-orders'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/produksi/work-orders',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\WorkOrderController::store
 * @see app/Http/Controllers/WorkOrderController.php:57
 * @route '/produksi/work-orders'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkOrderController::store
 * @see app/Http/Controllers/WorkOrderController.php:57
 * @route '/produksi/work-orders'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\WorkOrderController::store
 * @see app/Http/Controllers/WorkOrderController.php:57
 * @route '/produksi/work-orders'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\WorkOrderController::store
 * @see app/Http/Controllers/WorkOrderController.php:57
 * @route '/produksi/work-orders'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\WorkOrderController::show
 * @see app/Http/Controllers/WorkOrderController.php:86
 * @route '/produksi/work-orders/{work_order}'
 */
export const show = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/produksi/work-orders/{work_order}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkOrderController::show
 * @see app/Http/Controllers/WorkOrderController.php:86
 * @route '/produksi/work-orders/{work_order}'
 */
show.url = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { work_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { work_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    work_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        work_order: typeof args.work_order === 'object'
                ? args.work_order.id
                : args.work_order,
                }

    return show.definition.url
            .replace('{work_order}', parsedArgs.work_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkOrderController::show
 * @see app/Http/Controllers/WorkOrderController.php:86
 * @route '/produksi/work-orders/{work_order}'
 */
show.get = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\WorkOrderController::show
 * @see app/Http/Controllers/WorkOrderController.php:86
 * @route '/produksi/work-orders/{work_order}'
 */
show.head = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\WorkOrderController::show
 * @see app/Http/Controllers/WorkOrderController.php:86
 * @route '/produksi/work-orders/{work_order}'
 */
    const showForm = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\WorkOrderController::show
 * @see app/Http/Controllers/WorkOrderController.php:86
 * @route '/produksi/work-orders/{work_order}'
 */
        showForm.get = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\WorkOrderController::show
 * @see app/Http/Controllers/WorkOrderController.php:86
 * @route '/produksi/work-orders/{work_order}'
 */
        showForm.head = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\WorkOrderController::edit
 * @see app/Http/Controllers/WorkOrderController.php:139
 * @route '/produksi/work-orders/{work_order}/edit'
 */
export const edit = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/produksi/work-orders/{work_order}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkOrderController::edit
 * @see app/Http/Controllers/WorkOrderController.php:139
 * @route '/produksi/work-orders/{work_order}/edit'
 */
edit.url = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { work_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { work_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    work_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        work_order: typeof args.work_order === 'object'
                ? args.work_order.id
                : args.work_order,
                }

    return edit.definition.url
            .replace('{work_order}', parsedArgs.work_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkOrderController::edit
 * @see app/Http/Controllers/WorkOrderController.php:139
 * @route '/produksi/work-orders/{work_order}/edit'
 */
edit.get = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\WorkOrderController::edit
 * @see app/Http/Controllers/WorkOrderController.php:139
 * @route '/produksi/work-orders/{work_order}/edit'
 */
edit.head = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\WorkOrderController::edit
 * @see app/Http/Controllers/WorkOrderController.php:139
 * @route '/produksi/work-orders/{work_order}/edit'
 */
    const editForm = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\WorkOrderController::edit
 * @see app/Http/Controllers/WorkOrderController.php:139
 * @route '/produksi/work-orders/{work_order}/edit'
 */
        editForm.get = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\WorkOrderController::edit
 * @see app/Http/Controllers/WorkOrderController.php:139
 * @route '/produksi/work-orders/{work_order}/edit'
 */
        editForm.head = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\WorkOrderController::update
 * @see app/Http/Controllers/WorkOrderController.php:163
 * @route '/produksi/work-orders/{work_order}'
 */
export const update = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/produksi/work-orders/{work_order}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\WorkOrderController::update
 * @see app/Http/Controllers/WorkOrderController.php:163
 * @route '/produksi/work-orders/{work_order}'
 */
update.url = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { work_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { work_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    work_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        work_order: typeof args.work_order === 'object'
                ? args.work_order.id
                : args.work_order,
                }

    return update.definition.url
            .replace('{work_order}', parsedArgs.work_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkOrderController::update
 * @see app/Http/Controllers/WorkOrderController.php:163
 * @route '/produksi/work-orders/{work_order}'
 */
update.put = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\WorkOrderController::update
 * @see app/Http/Controllers/WorkOrderController.php:163
 * @route '/produksi/work-orders/{work_order}'
 */
update.patch = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\WorkOrderController::update
 * @see app/Http/Controllers/WorkOrderController.php:163
 * @route '/produksi/work-orders/{work_order}'
 */
    const updateForm = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\WorkOrderController::update
 * @see app/Http/Controllers/WorkOrderController.php:163
 * @route '/produksi/work-orders/{work_order}'
 */
        updateForm.put = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\WorkOrderController::update
 * @see app/Http/Controllers/WorkOrderController.php:163
 * @route '/produksi/work-orders/{work_order}'
 */
        updateForm.patch = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\WorkOrderController::destroy
 * @see app/Http/Controllers/WorkOrderController.php:174
 * @route '/produksi/work-orders/{work_order}'
 */
export const destroy = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/produksi/work-orders/{work_order}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\WorkOrderController::destroy
 * @see app/Http/Controllers/WorkOrderController.php:174
 * @route '/produksi/work-orders/{work_order}'
 */
destroy.url = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { work_order: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { work_order: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    work_order: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        work_order: typeof args.work_order === 'object'
                ? args.work_order.id
                : args.work_order,
                }

    return destroy.definition.url
            .replace('{work_order}', parsedArgs.work_order.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkOrderController::destroy
 * @see app/Http/Controllers/WorkOrderController.php:174
 * @route '/produksi/work-orders/{work_order}'
 */
destroy.delete = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\WorkOrderController::destroy
 * @see app/Http/Controllers/WorkOrderController.php:174
 * @route '/produksi/work-orders/{work_order}'
 */
    const destroyForm = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\WorkOrderController::destroy
 * @see app/Http/Controllers/WorkOrderController.php:174
 * @route '/produksi/work-orders/{work_order}'
 */
        destroyForm.delete = (args: { work_order: number | { id: number } } | [work_order: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const WorkOrderController = { index, create, store, show, edit, update, destroy }

export default WorkOrderController