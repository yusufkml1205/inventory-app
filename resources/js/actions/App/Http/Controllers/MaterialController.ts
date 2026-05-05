import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MaterialController::index
 * @see app/Http/Controllers/MaterialController.php:17
 * @route '/masterdata/materials'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/masterdata/materials',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaterialController::index
 * @see app/Http/Controllers/MaterialController.php:17
 * @route '/masterdata/materials'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialController::index
 * @see app/Http/Controllers/MaterialController.php:17
 * @route '/masterdata/materials'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MaterialController::index
 * @see app/Http/Controllers/MaterialController.php:17
 * @route '/masterdata/materials'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MaterialController::index
 * @see app/Http/Controllers/MaterialController.php:17
 * @route '/masterdata/materials'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MaterialController::index
 * @see app/Http/Controllers/MaterialController.php:17
 * @route '/masterdata/materials'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MaterialController::index
 * @see app/Http/Controllers/MaterialController.php:17
 * @route '/masterdata/materials'
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
* @see \App\Http\Controllers\MaterialController::create
 * @see app/Http/Controllers/MaterialController.php:46
 * @route '/masterdata/materials/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/masterdata/materials/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaterialController::create
 * @see app/Http/Controllers/MaterialController.php:46
 * @route '/masterdata/materials/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialController::create
 * @see app/Http/Controllers/MaterialController.php:46
 * @route '/masterdata/materials/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MaterialController::create
 * @see app/Http/Controllers/MaterialController.php:46
 * @route '/masterdata/materials/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MaterialController::create
 * @see app/Http/Controllers/MaterialController.php:46
 * @route '/masterdata/materials/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MaterialController::create
 * @see app/Http/Controllers/MaterialController.php:46
 * @route '/masterdata/materials/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MaterialController::create
 * @see app/Http/Controllers/MaterialController.php:46
 * @route '/masterdata/materials/create'
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
* @see \App\Http\Controllers\MaterialController::store
 * @see app/Http/Controllers/MaterialController.php:62
 * @route '/masterdata/materials'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/masterdata/materials',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MaterialController::store
 * @see app/Http/Controllers/MaterialController.php:62
 * @route '/masterdata/materials'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialController::store
 * @see app/Http/Controllers/MaterialController.php:62
 * @route '/masterdata/materials'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\MaterialController::store
 * @see app/Http/Controllers/MaterialController.php:62
 * @route '/masterdata/materials'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MaterialController::store
 * @see app/Http/Controllers/MaterialController.php:62
 * @route '/masterdata/materials'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\MaterialController::show
 * @see app/Http/Controllers/MaterialController.php:73
 * @route '/masterdata/materials/{material}'
 */
export const show = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/masterdata/materials/{material}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaterialController::show
 * @see app/Http/Controllers/MaterialController.php:73
 * @route '/masterdata/materials/{material}'
 */
show.url = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { material: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { material: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    material: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        material: typeof args.material === 'object'
                ? args.material.id
                : args.material,
                }

    return show.definition.url
            .replace('{material}', parsedArgs.material.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialController::show
 * @see app/Http/Controllers/MaterialController.php:73
 * @route '/masterdata/materials/{material}'
 */
show.get = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MaterialController::show
 * @see app/Http/Controllers/MaterialController.php:73
 * @route '/masterdata/materials/{material}'
 */
show.head = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MaterialController::show
 * @see app/Http/Controllers/MaterialController.php:73
 * @route '/masterdata/materials/{material}'
 */
    const showForm = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MaterialController::show
 * @see app/Http/Controllers/MaterialController.php:73
 * @route '/masterdata/materials/{material}'
 */
        showForm.get = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MaterialController::show
 * @see app/Http/Controllers/MaterialController.php:73
 * @route '/masterdata/materials/{material}'
 */
        showForm.head = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MaterialController::edit
 * @see app/Http/Controllers/MaterialController.php:97
 * @route '/masterdata/materials/{material}/edit'
 */
export const edit = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/masterdata/materials/{material}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaterialController::edit
 * @see app/Http/Controllers/MaterialController.php:97
 * @route '/masterdata/materials/{material}/edit'
 */
edit.url = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { material: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { material: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    material: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        material: typeof args.material === 'object'
                ? args.material.id
                : args.material,
                }

    return edit.definition.url
            .replace('{material}', parsedArgs.material.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialController::edit
 * @see app/Http/Controllers/MaterialController.php:97
 * @route '/masterdata/materials/{material}/edit'
 */
edit.get = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MaterialController::edit
 * @see app/Http/Controllers/MaterialController.php:97
 * @route '/masterdata/materials/{material}/edit'
 */
edit.head = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MaterialController::edit
 * @see app/Http/Controllers/MaterialController.php:97
 * @route '/masterdata/materials/{material}/edit'
 */
    const editForm = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MaterialController::edit
 * @see app/Http/Controllers/MaterialController.php:97
 * @route '/masterdata/materials/{material}/edit'
 */
        editForm.get = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MaterialController::edit
 * @see app/Http/Controllers/MaterialController.php:97
 * @route '/masterdata/materials/{material}/edit'
 */
        editForm.head = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MaterialController::update
 * @see app/Http/Controllers/MaterialController.php:125
 * @route '/masterdata/materials/{material}'
 */
export const update = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/masterdata/materials/{material}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MaterialController::update
 * @see app/Http/Controllers/MaterialController.php:125
 * @route '/masterdata/materials/{material}'
 */
update.url = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { material: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { material: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    material: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        material: typeof args.material === 'object'
                ? args.material.id
                : args.material,
                }

    return update.definition.url
            .replace('{material}', parsedArgs.material.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialController::update
 * @see app/Http/Controllers/MaterialController.php:125
 * @route '/masterdata/materials/{material}'
 */
update.put = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\MaterialController::update
 * @see app/Http/Controllers/MaterialController.php:125
 * @route '/masterdata/materials/{material}'
 */
update.patch = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\MaterialController::update
 * @see app/Http/Controllers/MaterialController.php:125
 * @route '/masterdata/materials/{material}'
 */
    const updateForm = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MaterialController::update
 * @see app/Http/Controllers/MaterialController.php:125
 * @route '/masterdata/materials/{material}'
 */
        updateForm.put = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\MaterialController::update
 * @see app/Http/Controllers/MaterialController.php:125
 * @route '/masterdata/materials/{material}'
 */
        updateForm.patch = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MaterialController::destroy
 * @see app/Http/Controllers/MaterialController.php:136
 * @route '/masterdata/materials/{material}'
 */
export const destroy = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/masterdata/materials/{material}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MaterialController::destroy
 * @see app/Http/Controllers/MaterialController.php:136
 * @route '/masterdata/materials/{material}'
 */
destroy.url = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { material: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { material: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    material: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        material: typeof args.material === 'object'
                ? args.material.id
                : args.material,
                }

    return destroy.definition.url
            .replace('{material}', parsedArgs.material.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaterialController::destroy
 * @see app/Http/Controllers/MaterialController.php:136
 * @route '/masterdata/materials/{material}'
 */
destroy.delete = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\MaterialController::destroy
 * @see app/Http/Controllers/MaterialController.php:136
 * @route '/masterdata/materials/{material}'
 */
    const destroyForm = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\MaterialController::destroy
 * @see app/Http/Controllers/MaterialController.php:136
 * @route '/masterdata/materials/{material}'
 */
        destroyForm.delete = (args: { material: number | { id: number } } | [material: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const MaterialController = { index, create, store, show, edit, update, destroy }

export default MaterialController