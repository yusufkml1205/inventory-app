import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import inventoryEd84cf from './inventory'
import salesF8b092 from './sales'
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/laporan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Inertia\Controller::__invoke
 * @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
 * @route '/laporan'
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
* @see \App\Http\Controllers\LaporanController::inventory
 * @see app/Http/Controllers/LaporanController.php:19
 * @route '/laporan/inventory'
 */
export const inventory = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inventory.url(options),
    method: 'get',
})

inventory.definition = {
    methods: ["get","head"],
    url: '/laporan/inventory',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LaporanController::inventory
 * @see app/Http/Controllers/LaporanController.php:19
 * @route '/laporan/inventory'
 */
inventory.url = (options?: RouteQueryOptions) => {
    return inventory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LaporanController::inventory
 * @see app/Http/Controllers/LaporanController.php:19
 * @route '/laporan/inventory'
 */
inventory.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inventory.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LaporanController::inventory
 * @see app/Http/Controllers/LaporanController.php:19
 * @route '/laporan/inventory'
 */
inventory.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inventory.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LaporanController::inventory
 * @see app/Http/Controllers/LaporanController.php:19
 * @route '/laporan/inventory'
 */
    const inventoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: inventory.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LaporanController::inventory
 * @see app/Http/Controllers/LaporanController.php:19
 * @route '/laporan/inventory'
 */
        inventoryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inventory.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LaporanController::inventory
 * @see app/Http/Controllers/LaporanController.php:19
 * @route '/laporan/inventory'
 */
        inventoryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: inventory.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    inventory.form = inventoryForm
/**
* @see \App\Http\Controllers\LaporanController::purchases
 * @see app/Http/Controllers/LaporanController.php:50
 * @route '/laporan/purchases'
 */
export const purchases = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: purchases.url(options),
    method: 'get',
})

purchases.definition = {
    methods: ["get","head"],
    url: '/laporan/purchases',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LaporanController::purchases
 * @see app/Http/Controllers/LaporanController.php:50
 * @route '/laporan/purchases'
 */
purchases.url = (options?: RouteQueryOptions) => {
    return purchases.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LaporanController::purchases
 * @see app/Http/Controllers/LaporanController.php:50
 * @route '/laporan/purchases'
 */
purchases.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: purchases.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LaporanController::purchases
 * @see app/Http/Controllers/LaporanController.php:50
 * @route '/laporan/purchases'
 */
purchases.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: purchases.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LaporanController::purchases
 * @see app/Http/Controllers/LaporanController.php:50
 * @route '/laporan/purchases'
 */
    const purchasesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: purchases.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LaporanController::purchases
 * @see app/Http/Controllers/LaporanController.php:50
 * @route '/laporan/purchases'
 */
        purchasesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: purchases.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LaporanController::purchases
 * @see app/Http/Controllers/LaporanController.php:50
 * @route '/laporan/purchases'
 */
        purchasesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: purchases.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    purchases.form = purchasesForm
/**
* @see \App\Http\Controllers\LaporanController::production
 * @see app/Http/Controllers/LaporanController.php:84
 * @route '/laporan/production'
 */
export const production = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: production.url(options),
    method: 'get',
})

production.definition = {
    methods: ["get","head"],
    url: '/laporan/production',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LaporanController::production
 * @see app/Http/Controllers/LaporanController.php:84
 * @route '/laporan/production'
 */
production.url = (options?: RouteQueryOptions) => {
    return production.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LaporanController::production
 * @see app/Http/Controllers/LaporanController.php:84
 * @route '/laporan/production'
 */
production.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: production.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LaporanController::production
 * @see app/Http/Controllers/LaporanController.php:84
 * @route '/laporan/production'
 */
production.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: production.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LaporanController::production
 * @see app/Http/Controllers/LaporanController.php:84
 * @route '/laporan/production'
 */
    const productionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: production.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LaporanController::production
 * @see app/Http/Controllers/LaporanController.php:84
 * @route '/laporan/production'
 */
        productionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: production.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LaporanController::production
 * @see app/Http/Controllers/LaporanController.php:84
 * @route '/laporan/production'
 */
        productionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: production.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    production.form = productionForm
/**
* @see \App\Http\Controllers\LaporanController::sales
 * @see app/Http/Controllers/LaporanController.php:124
 * @route '/laporan/sales'
 */
export const sales = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sales.url(options),
    method: 'get',
})

sales.definition = {
    methods: ["get","head"],
    url: '/laporan/sales',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LaporanController::sales
 * @see app/Http/Controllers/LaporanController.php:124
 * @route '/laporan/sales'
 */
sales.url = (options?: RouteQueryOptions) => {
    return sales.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LaporanController::sales
 * @see app/Http/Controllers/LaporanController.php:124
 * @route '/laporan/sales'
 */
sales.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sales.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LaporanController::sales
 * @see app/Http/Controllers/LaporanController.php:124
 * @route '/laporan/sales'
 */
sales.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sales.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LaporanController::sales
 * @see app/Http/Controllers/LaporanController.php:124
 * @route '/laporan/sales'
 */
    const salesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sales.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LaporanController::sales
 * @see app/Http/Controllers/LaporanController.php:124
 * @route '/laporan/sales'
 */
        salesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sales.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LaporanController::sales
 * @see app/Http/Controllers/LaporanController.php:124
 * @route '/laporan/sales'
 */
        salesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sales.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sales.form = salesForm
/**
* @see \App\Http\Controllers\LaporanController::profit
 * @see app/Http/Controllers/LaporanController.php:161
 * @route '/laporan/profit'
 */
export const profit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profit.url(options),
    method: 'get',
})

profit.definition = {
    methods: ["get","head"],
    url: '/laporan/profit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LaporanController::profit
 * @see app/Http/Controllers/LaporanController.php:161
 * @route '/laporan/profit'
 */
profit.url = (options?: RouteQueryOptions) => {
    return profit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LaporanController::profit
 * @see app/Http/Controllers/LaporanController.php:161
 * @route '/laporan/profit'
 */
profit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LaporanController::profit
 * @see app/Http/Controllers/LaporanController.php:161
 * @route '/laporan/profit'
 */
profit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profit.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LaporanController::profit
 * @see app/Http/Controllers/LaporanController.php:161
 * @route '/laporan/profit'
 */
    const profitForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profit.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LaporanController::profit
 * @see app/Http/Controllers/LaporanController.php:161
 * @route '/laporan/profit'
 */
        profitForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profit.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LaporanController::profit
 * @see app/Http/Controllers/LaporanController.php:161
 * @route '/laporan/profit'
 */
        profitForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profit.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profit.form = profitForm
const laporan = {
    index: Object.assign(index, index),
inventory: Object.assign(inventory, inventoryEd84cf),
purchases: Object.assign(purchases, purchases),
production: Object.assign(production, production),
sales: Object.assign(sales, salesF8b092),
profit: Object.assign(profit, profit),
}

export default laporan