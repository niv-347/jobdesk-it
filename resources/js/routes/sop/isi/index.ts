import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Sop\SopController::store
 * @see app/Http/Controllers/Sop/SopController.php:60
 * @route '/sop/{sop}/isisop'
 */
export const store = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: store.url(args, options),
    method: 'put',
})

store.definition = {
    methods: ["put"],
    url: '/sop/{sop}/isisop',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Sop\SopController::store
 * @see app/Http/Controllers/Sop/SopController.php:60
 * @route '/sop/{sop}/isisop'
 */
store.url = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sop: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { sop: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    sop: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        sop: typeof args.sop === 'object'
                ? args.sop.id
                : args.sop,
                }

    return store.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::store
 * @see app/Http/Controllers/Sop/SopController.php:60
 * @route '/sop/{sop}/isisop'
 */
store.put = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: store.url(args, options),
    method: 'put',
})
const isi = {
    store: Object.assign(store, store),
}

export default isi