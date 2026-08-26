import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
import permissions7d3099 from './permissions'
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::permissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:125
 * @route '/konfigurasi/role/permissions/{user}'
 */
export const permissions = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: permissions.url(args, options),
    method: 'get',
})

permissions.definition = {
    methods: ["get","head"],
    url: '/konfigurasi/role/permissions/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::permissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:125
 * @route '/konfigurasi/role/permissions/{user}'
 */
permissions.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return permissions.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::permissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:125
 * @route '/konfigurasi/role/permissions/{user}'
 */
permissions.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: permissions.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::permissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:125
 * @route '/konfigurasi/role/permissions/{user}'
 */
permissions.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: permissions.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::storeUser
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:196
 * @route '/konfigurasi/role/store-user'
 */
export const storeUser = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeUser.url(options),
    method: 'post',
})

storeUser.definition = {
    methods: ["post"],
    url: '/konfigurasi/role/store-user',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::storeUser
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:196
 * @route '/konfigurasi/role/store-user'
 */
storeUser.url = (options?: RouteQueryOptions) => {
    return storeUser.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::storeUser
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:196
 * @route '/konfigurasi/role/store-user'
 */
storeUser.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeUser.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:245
 * @route '/konfigurasi/role/store'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/konfigurasi/role/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:245
 * @route '/konfigurasi/role/store'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:245
 * @route '/konfigurasi/role/store'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})
const role = {
    permissions: Object.assign(permissions, permissions7d3099),
storeUser: Object.assign(storeUser, storeUser),
store: Object.assign(store, store),
}

export default role