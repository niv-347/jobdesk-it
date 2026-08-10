import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import permissions7d3099 from './permissions'
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::permissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
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
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
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
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
permissions.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: permissions.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::permissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
permissions.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: permissions.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::permissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
    const permissionsForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: permissions.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::permissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
        permissionsForm.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: permissions.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::permissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
        permissionsForm.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: permissions.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    permissions.form = permissionsForm
const role = {
    permissions: Object.assign(permissions, permissions7d3099),
}

export default role