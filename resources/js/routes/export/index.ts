import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ExportController::users
 * @see app/Http/Controllers/ExportController.php:14
 * @route '/export/users'
 */
export const users = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(options),
    method: 'get',
})

users.definition = {
    methods: ["get","head"],
    url: '/export/users',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExportController::users
 * @see app/Http/Controllers/ExportController.php:14
 * @route '/export/users'
 */
users.url = (options?: RouteQueryOptions) => {
    return users.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExportController::users
 * @see app/Http/Controllers/ExportController.php:14
 * @route '/export/users'
 */
users.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: users.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ExportController::users
 * @see app/Http/Controllers/ExportController.php:14
 * @route '/export/users'
 */
users.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: users.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExportController::sops
 * @see app/Http/Controllers/ExportController.php:29
 * @route '/export/sops'
 */
export const sops = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sops.url(options),
    method: 'get',
})

sops.definition = {
    methods: ["get","head"],
    url: '/export/sops',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExportController::sops
 * @see app/Http/Controllers/ExportController.php:29
 * @route '/export/sops'
 */
sops.url = (options?: RouteQueryOptions) => {
    return sops.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExportController::sops
 * @see app/Http/Controllers/ExportController.php:29
 * @route '/export/sops'
 */
sops.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sops.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ExportController::sops
 * @see app/Http/Controllers/ExportController.php:29
 * @route '/export/sops'
 */
sops.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sops.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExportController::troubleshoots
 * @see app/Http/Controllers/ExportController.php:44
 * @route '/export/troubleshoots'
 */
export const troubleshoots = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: troubleshoots.url(options),
    method: 'get',
})

troubleshoots.definition = {
    methods: ["get","head"],
    url: '/export/troubleshoots',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExportController::troubleshoots
 * @see app/Http/Controllers/ExportController.php:44
 * @route '/export/troubleshoots'
 */
troubleshoots.url = (options?: RouteQueryOptions) => {
    return troubleshoots.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExportController::troubleshoots
 * @see app/Http/Controllers/ExportController.php:44
 * @route '/export/troubleshoots'
 */
troubleshoots.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: troubleshoots.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ExportController::troubleshoots
 * @see app/Http/Controllers/ExportController.php:44
 * @route '/export/troubleshoots'
 */
troubleshoots.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: troubleshoots.url(options),
    method: 'head',
})
const exportMethod = {
    users: Object.assign(users, users),
sops: Object.assign(sops, sops),
troubleshoots: Object.assign(troubleshoots, troubleshoots),
}

export default exportMethod