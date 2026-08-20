import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RadiologiController::index
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/radiologi/ekpertise',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiController::index
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiController::index
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiController::index
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RadiologiController::store
 * @see app/Http/Controllers/RadiologiController.php:41
 * @route '/radiologi/ekpertise'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/radiologi/ekpertise',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RadiologiController::store
 * @see app/Http/Controllers/RadiologiController.php:41
 * @route '/radiologi/ekpertise'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiController::store
 * @see app/Http/Controllers/RadiologiController.php:41
 * @route '/radiologi/ekpertise'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RadiologiController::update
 * @see app/Http/Controllers/RadiologiController.php:79
 * @route '/radiologi/ekpertise/{radiologi}'
 */
export const update = (args: { radiologi: string | number | { id: string | number } } | [radiologi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/radiologi/ekpertise/{radiologi}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\RadiologiController::update
 * @see app/Http/Controllers/RadiologiController.php:79
 * @route '/radiologi/ekpertise/{radiologi}'
 */
update.url = (args: { radiologi: string | number | { id: string | number } } | [radiologi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { radiologi: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { radiologi: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    radiologi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        radiologi: typeof args.radiologi === 'object'
                ? args.radiologi.id
                : args.radiologi,
                }

    return update.definition.url
            .replace('{radiologi}', parsedArgs.radiologi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiController::update
 * @see app/Http/Controllers/RadiologiController.php:79
 * @route '/radiologi/ekpertise/{radiologi}'
 */
update.put = (args: { radiologi: string | number | { id: string | number } } | [radiologi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\RadiologiController::destroy
 * @see app/Http/Controllers/RadiologiController.php:126
 * @route '/radiologi/ekpertise/{radiologi}'
 */
export const destroy = (args: { radiologi: string | number | { id: string | number } } | [radiologi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/radiologi/ekpertise/{radiologi}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\RadiologiController::destroy
 * @see app/Http/Controllers/RadiologiController.php:126
 * @route '/radiologi/ekpertise/{radiologi}'
 */
destroy.url = (args: { radiologi: string | number | { id: string | number } } | [radiologi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { radiologi: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { radiologi: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    radiologi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        radiologi: typeof args.radiologi === 'object'
                ? args.radiologi.id
                : args.radiologi,
                }

    return destroy.definition.url
            .replace('{radiologi}', parsedArgs.radiologi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiController::destroy
 * @see app/Http/Controllers/RadiologiController.php:126
 * @route '/radiologi/ekpertise/{radiologi}'
 */
destroy.delete = (args: { radiologi: string | number | { id: string | number } } | [radiologi: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const RadiologiController = { index, store, update, destroy }

export default RadiologiController