import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:46
 * @route '/asset/dataasset'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/asset/dataasset',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:46
 * @route '/asset/dataasset'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:46
 * @route '/asset/dataasset'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:46
 * @route '/asset/dataasset'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetController::store
 * @see app/Http/Controllers/AssetController.php:46
 * @route '/asset/dataasset'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:76
 * @route '/asset/dataasset/{asset}'
 */
export const update = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/asset/dataasset/{asset}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:76
 * @route '/asset/dataasset/{asset}'
 */
update.url = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { asset: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset: typeof args.asset === 'object'
                ? args.asset.id
                : args.asset,
                }

    return update.definition.url
            .replace('{asset}', parsedArgs.asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:76
 * @route '/asset/dataasset/{asset}'
 */
update.put = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:76
 * @route '/asset/dataasset/{asset}'
 */
    const updateForm = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetController::update
 * @see app/Http/Controllers/AssetController.php:76
 * @route '/asset/dataasset/{asset}'
 */
        updateForm.put = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:112
 * @route '/asset/dataasset/{asset}'
 */
export const destroy = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/asset/dataasset/{asset}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:112
 * @route '/asset/dataasset/{asset}'
 */
destroy.url = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { asset: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { asset: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    asset: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        asset: typeof args.asset === 'object'
                ? args.asset.id
                : args.asset,
                }

    return destroy.definition.url
            .replace('{asset}', parsedArgs.asset.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:112
 * @route '/asset/dataasset/{asset}'
 */
destroy.delete = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:112
 * @route '/asset/dataasset/{asset}'
 */
    const destroyForm = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AssetController::destroy
 * @see app/Http/Controllers/AssetController.php:112
 * @route '/asset/dataasset/{asset}'
 */
        destroyForm.delete = (args: { asset: number | { id: number } } | [asset: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const dataasset = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default dataasset