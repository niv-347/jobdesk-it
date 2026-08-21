import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\VerifikatorController::verifSop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
export const verifSop = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifSop.url(options),
    method: 'get',
})

verifSop.definition = {
    methods: ["get","head"],
    url: '/verifikator/verifsop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VerifikatorController::verifSop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
verifSop.url = (options?: RouteQueryOptions) => {
    return verifSop.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VerifikatorController::verifSop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
verifSop.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifSop.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VerifikatorController::verifSop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
verifSop.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verifSop.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VerifikatorController::approve
 * @see app/Http/Controllers/VerifikatorController.php:38
 * @route '/verifikator/verifsop/{sop}/approve'
 */
export const approve = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/verifikator/verifsop/{sop}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VerifikatorController::approve
 * @see app/Http/Controllers/VerifikatorController.php:38
 * @route '/verifikator/verifsop/{sop}/approve'
 */
approve.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return approve.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VerifikatorController::approve
 * @see app/Http/Controllers/VerifikatorController.php:38
 * @route '/verifikator/verifsop/{sop}/approve'
 */
approve.post = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VerifikatorController::reject
 * @see app/Http/Controllers/VerifikatorController.php:49
 * @route '/verifikator/verifsop/{sop}/reject'
 */
export const reject = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/verifikator/verifsop/{sop}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VerifikatorController::reject
 * @see app/Http/Controllers/VerifikatorController.php:49
 * @route '/verifikator/verifsop/{sop}/reject'
 */
reject.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return reject.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VerifikatorController::reject
 * @see app/Http/Controllers/VerifikatorController.php:49
 * @route '/verifikator/verifsop/{sop}/reject'
 */
reject.post = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VerifikatorController::prosesSop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
export const prosesSop = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: prosesSop.url(args, options),
    method: 'get',
})

prosesSop.definition = {
    methods: ["get","head"],
    url: '/verifikator/prosessop/{sop}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VerifikatorController::prosesSop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
prosesSop.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return prosesSop.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VerifikatorController::prosesSop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
prosesSop.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: prosesSop.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VerifikatorController::prosesSop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
prosesSop.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: prosesSop.url(args, options),
    method: 'head',
})
const VerifikatorController = { verifSop, approve, reject, prosesSop }

export default VerifikatorController