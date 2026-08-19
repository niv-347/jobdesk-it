import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\VisumController::index
 * @see app/Http/Controllers/VisumController.php:15
 * @route '/visum'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/visum',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisumController::index
 * @see app/Http/Controllers/VisumController.php:15
 * @route '/visum'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisumController::index
 * @see app/Http/Controllers/VisumController.php:15
 * @route '/visum'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VisumController::index
 * @see app/Http/Controllers/VisumController.php:15
 * @route '/visum'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VisumController::index
 * @see app/Http/Controllers/VisumController.php:15
 * @route '/visum'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VisumController::index
 * @see app/Http/Controllers/VisumController.php:15
 * @route '/visum'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VisumController::index
 * @see app/Http/Controllers/VisumController.php:15
 * @route '/visum'
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
* @see \App\Http\Controllers\VisumController::store
 * @see app/Http/Controllers/VisumController.php:64
 * @route '/visum'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/visum',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VisumController::store
 * @see app/Http/Controllers/VisumController.php:64
 * @route '/visum'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisumController::store
 * @see app/Http/Controllers/VisumController.php:64
 * @route '/visum'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VisumController::store
 * @see app/Http/Controllers/VisumController.php:64
 * @route '/visum'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VisumController::store
 * @see app/Http/Controllers/VisumController.php:64
 * @route '/visum'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\VisumController::update
 * @see app/Http/Controllers/VisumController.php:89
 * @route '/visum/{visum}'
 */
export const update = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/visum/{visum}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\VisumController::update
 * @see app/Http/Controllers/VisumController.php:89
 * @route '/visum/{visum}'
 */
update.url = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visum: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { visum: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    visum: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        visum: typeof args.visum === 'object'
                ? args.visum.id
                : args.visum,
                }

    return update.definition.url
            .replace('{visum}', parsedArgs.visum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisumController::update
 * @see app/Http/Controllers/VisumController.php:89
 * @route '/visum/{visum}'
 */
update.put = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\VisumController::update
 * @see app/Http/Controllers/VisumController.php:89
 * @route '/visum/{visum}'
 */
    const updateForm = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VisumController::update
 * @see app/Http/Controllers/VisumController.php:89
 * @route '/visum/{visum}'
 */
        updateForm.put = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\VisumController::destroy
 * @see app/Http/Controllers/VisumController.php:120
 * @route '/visum/{visum}'
 */
export const destroy = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/visum/{visum}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\VisumController::destroy
 * @see app/Http/Controllers/VisumController.php:120
 * @route '/visum/{visum}'
 */
destroy.url = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visum: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { visum: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    visum: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        visum: typeof args.visum === 'object'
                ? args.visum.id
                : args.visum,
                }

    return destroy.definition.url
            .replace('{visum}', parsedArgs.visum.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisumController::destroy
 * @see app/Http/Controllers/VisumController.php:120
 * @route '/visum/{visum}'
 */
destroy.delete = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\VisumController::destroy
 * @see app/Http/Controllers/VisumController.php:120
 * @route '/visum/{visum}'
 */
    const destroyForm = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VisumController::destroy
 * @see app/Http/Controllers/VisumController.php:120
 * @route '/visum/{visum}'
 */
        destroyForm.delete = (args: { visum: number | { id: number } } | [visum: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\VisumController::cetak
 * @see app/Http/Controllers/VisumController.php:135
 * @route '/visum/cetak'
 */
export const cetak = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetak.url(options),
    method: 'get',
})

cetak.definition = {
    methods: ["get","head"],
    url: '/visum/cetak',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisumController::cetak
 * @see app/Http/Controllers/VisumController.php:135
 * @route '/visum/cetak'
 */
cetak.url = (options?: RouteQueryOptions) => {
    return cetak.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisumController::cetak
 * @see app/Http/Controllers/VisumController.php:135
 * @route '/visum/cetak'
 */
cetak.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetak.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VisumController::cetak
 * @see app/Http/Controllers/VisumController.php:135
 * @route '/visum/cetak'
 */
cetak.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cetak.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VisumController::cetak
 * @see app/Http/Controllers/VisumController.php:135
 * @route '/visum/cetak'
 */
    const cetakForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cetak.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VisumController::cetak
 * @see app/Http/Controllers/VisumController.php:135
 * @route '/visum/cetak'
 */
        cetakForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cetak.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VisumController::cetak
 * @see app/Http/Controllers/VisumController.php:135
 * @route '/visum/cetak'
 */
        cetakForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cetak.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cetak.form = cetakForm
const visum = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
cetak: Object.assign(cetak, cetak),
}

export default visum