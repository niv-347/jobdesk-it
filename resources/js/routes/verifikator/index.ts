import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\VerifikatorController::verifsop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
export const verifsop = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifsop.url(options),
    method: 'get',
})

verifsop.definition = {
    methods: ["get","head"],
    url: '/verifikator/verifsop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VerifikatorController::verifsop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
verifsop.url = (options?: RouteQueryOptions) => {
    return verifsop.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VerifikatorController::verifsop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
verifsop.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verifsop.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VerifikatorController::verifsop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
verifsop.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verifsop.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VerifikatorController::verifsop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
    const verifsopForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: verifsop.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VerifikatorController::verifsop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
        verifsopForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: verifsop.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VerifikatorController::verifsop
 * @see app/Http/Controllers/VerifikatorController.php:12
 * @route '/verifikator/verifsop'
 */
        verifsopForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: verifsop.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    verifsop.form = verifsopForm
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
* @see \App\Http\Controllers\VerifikatorController::approve
 * @see app/Http/Controllers/VerifikatorController.php:38
 * @route '/verifikator/verifsop/{sop}/approve'
 */
    const approveForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VerifikatorController::approve
 * @see app/Http/Controllers/VerifikatorController.php:38
 * @route '/verifikator/verifsop/{sop}/approve'
 */
        approveForm.post = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
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
* @see \App\Http\Controllers\VerifikatorController::reject
 * @see app/Http/Controllers/VerifikatorController.php:49
 * @route '/verifikator/verifsop/{sop}/reject'
 */
    const rejectForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VerifikatorController::reject
 * @see app/Http/Controllers/VerifikatorController.php:49
 * @route '/verifikator/verifsop/{sop}/reject'
 */
        rejectForm.post = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
/**
* @see \App\Http\Controllers\VerifikatorController::prosessop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
export const prosessop = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: prosessop.url(args, options),
    method: 'get',
})

prosessop.definition = {
    methods: ["get","head"],
    url: '/verifikator/prosessop/{sop}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VerifikatorController::prosessop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
prosessop.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return prosessop.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VerifikatorController::prosessop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
prosessop.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: prosessop.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VerifikatorController::prosessop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
prosessop.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: prosessop.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VerifikatorController::prosessop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
    const prosessopForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: prosessop.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VerifikatorController::prosessop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
        prosessopForm.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: prosessop.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VerifikatorController::prosessop
 * @see app/Http/Controllers/VerifikatorController.php:60
 * @route '/verifikator/prosessop/{sop}'
 */
        prosessopForm.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: prosessop.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    prosessop.form = prosessopForm
const verifikator = {
    verifsop: Object.assign(verifsop, verifsop),
approve: Object.assign(approve, approve),
reject: Object.assign(reject, reject),
prosessop: Object.assign(prosessop, prosessop),
}

export default verifikator