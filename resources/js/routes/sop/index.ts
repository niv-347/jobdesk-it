import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
import isiAb5ca5 from './isi'
/**
* @see \App\Http\Controllers\Sop\SopController::buatsop
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
export const buatsop = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: buatsop.url(options),
    method: 'get',
})

buatsop.definition = {
    methods: ["get","head"],
    url: '/sop/buatsop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Sop\SopController::buatsop
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
buatsop.url = (options?: RouteQueryOptions) => {
    return buatsop.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::buatsop
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
buatsop.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: buatsop.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Sop\SopController::buatsop
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
buatsop.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: buatsop.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Sop\SopController::store
 * @see app/Http/Controllers/Sop/SopController.php:39
 * @route '/sop'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/sop',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Sop\SopController::store
 * @see app/Http/Controllers/Sop/SopController.php:39
 * @route '/sop'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::store
 * @see app/Http/Controllers/Sop/SopController.php:39
 * @route '/sop'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Sop\SopController::isi
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
export const isi = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: isi.url(args, options),
    method: 'get',
})

isi.definition = {
    methods: ["get","head"],
    url: '/sop/{sop}/isisop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Sop\SopController::isi
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
isi.url = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return isi.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::isi
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
isi.get = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: isi.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Sop\SopController::isi
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
isi.head = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: isi.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Sop\SopController::cetak
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
export const cetak = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetak.url(args, options),
    method: 'get',
})

cetak.definition = {
    methods: ["get","head"],
    url: '/sop/{sop}/cetak',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Sop\SopController::cetak
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
cetak.url = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return cetak.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::cetak
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
cetak.get = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetak.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Sop\SopController::cetak
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
cetak.head = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cetak.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Sop\SopController::update
 * @see app/Http/Controllers/Sop/SopController.php:83
 * @route '/sop/{sop}'
 */
export const update = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/sop/{sop}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Sop\SopController::update
 * @see app/Http/Controllers/Sop/SopController.php:83
 * @route '/sop/{sop}'
 */
update.url = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::update
 * @see app/Http/Controllers/Sop/SopController.php:83
 * @route '/sop/{sop}'
 */
update.put = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Sop\SopController::destroy
 * @see app/Http/Controllers/Sop/SopController.php:102
 * @route '/sop/{sop}'
 */
export const destroy = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/sop/{sop}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Sop\SopController::destroy
 * @see app/Http/Controllers/Sop/SopController.php:102
 * @route '/sop/{sop}'
 */
destroy.url = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::destroy
 * @see app/Http/Controllers/Sop/SopController.php:102
 * @route '/sop/{sop}'
 */
destroy.delete = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Sop\SopController::approve
 * @see app/Http/Controllers/Sop/SopController.php:113
 * @route '/sop/{sop}/approve'
 */
export const approve = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/sop/{sop}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Sop\SopController::approve
 * @see app/Http/Controllers/Sop/SopController.php:113
 * @route '/sop/{sop}/approve'
 */
approve.url = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
* @see \App\Http\Controllers\Sop\SopController::approve
 * @see app/Http/Controllers/Sop/SopController.php:113
 * @route '/sop/{sop}/approve'
 */
approve.post = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Sop\SopController::reject
 * @see app/Http/Controllers/Sop/SopController.php:124
 * @route '/sop/{sop}/reject'
 */
export const reject = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/sop/{sop}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Sop\SopController::reject
 * @see app/Http/Controllers/Sop/SopController.php:124
 * @route '/sop/{sop}/reject'
 */
reject.url = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
* @see \App\Http\Controllers\Sop\SopController::reject
 * @see app/Http/Controllers/Sop/SopController.php:124
 * @route '/sop/{sop}/reject'
 */
reject.post = (args: { sop: string | number | { id: string | number } } | [sop: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})
const sop = {
    buatsop: Object.assign(buatsop, buatsop),
store: Object.assign(store, store),
isi: Object.assign(isi, isiAb5ca5),
cetak: Object.assign(cetak, cetak),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
approve: Object.assign(approve, approve),
reject: Object.assign(reject, reject),
}

export default sop