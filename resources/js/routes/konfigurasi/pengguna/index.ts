import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:39
 * @route '/konfigurasi/pengguna'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/konfigurasi/pengguna',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:39
 * @route '/konfigurasi/pengguna'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:39
 * @route '/konfigurasi/pengguna'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::update
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:60
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
export const update = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/konfigurasi/pengguna/{pengguna}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::update
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:60
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
update.url = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengguna: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { pengguna: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pengguna: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengguna: typeof args.pengguna === 'object'
                ? args.pengguna.id
                : args.pengguna,
                }

    return update.definition.url
            .replace('{pengguna}', parsedArgs.pengguna.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::update
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:60
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
update.put = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::destroy
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:84
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
export const destroy = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/konfigurasi/pengguna/{pengguna}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::destroy
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:84
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
destroy.url = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengguna: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { pengguna: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pengguna: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengguna: typeof args.pengguna === 'object'
                ? args.pengguna.id
                : args.pengguna,
                }

    return destroy.definition.url
            .replace('{pengguna}', parsedArgs.pengguna.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::destroy
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:84
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
destroy.delete = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const pengguna = {
    store: Object.assign(store, store),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default pengguna