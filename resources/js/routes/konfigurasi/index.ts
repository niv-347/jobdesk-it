import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
import pengguna1a0678 from './pengguna'
import role51742c from './role'
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::pengguna
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
export const pengguna = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pengguna.url(options),
    method: 'get',
})

pengguna.definition = {
    methods: ["get","head"],
    url: '/konfigurasi/pengguna',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::pengguna
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
pengguna.url = (options?: RouteQueryOptions) => {
    return pengguna.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::pengguna
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
pengguna.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pengguna.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::pengguna
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
pengguna.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pengguna.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::role
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
export const role = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: role.url(options),
    method: 'get',
})

role.definition = {
    methods: ["get","head"],
    url: '/konfigurasi/role',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::role
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
role.url = (options?: RouteQueryOptions) => {
    return role.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::role
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
role.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: role.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::role
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
role.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: role.url(options),
    method: 'head',
})
const konfigurasi = {
    pengguna: Object.assign(pengguna, pengguna1a0678),
role: Object.assign(role, role51742c),
}

export default konfigurasi