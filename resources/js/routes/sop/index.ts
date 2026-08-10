import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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
* @see \App\Http\Controllers\Sop\SopController::buatsop
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
    const buatsopForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: buatsop.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::buatsop
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
        buatsopForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: buatsop.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Sop\SopController::buatsop
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
        buatsopForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: buatsop.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    buatsop.form = buatsopForm
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
* @see \App\Http\Controllers\Sop\SopController::store
 * @see app/Http/Controllers/Sop/SopController.php:39
 * @route '/sop'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::store
 * @see app/Http/Controllers/Sop/SopController.php:39
 * @route '/sop'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Sop\SopController::isi
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
export const isi = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
isi.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
isi.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: isi.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Sop\SopController::isi
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
isi.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: isi.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::isi
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
    const isiForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: isi.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::isi
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
        isiForm.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: isi.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Sop\SopController::isi
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
        isiForm.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: isi.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    isi.form = isiForm
/**
* @see \App\Http\Controllers\Sop\SopController::cetak
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
export const cetak = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
cetak.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
cetak.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetak.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Sop\SopController::cetak
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
cetak.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cetak.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::cetak
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
    const cetakForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cetak.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::cetak
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
        cetakForm.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cetak.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Sop\SopController::cetak
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
        cetakForm.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cetak.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cetak.form = cetakForm
/**
* @see \App\Http\Controllers\Sop\SopController::update
 * @see app/Http/Controllers/Sop/SopController.php:83
 * @route '/sop/{sop}'
 */
export const update = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
update.put = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::update
 * @see app/Http/Controllers/Sop/SopController.php:83
 * @route '/sop/{sop}'
 */
    const updateForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::update
 * @see app/Http/Controllers/Sop/SopController.php:83
 * @route '/sop/{sop}'
 */
        updateForm.put = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Sop\SopController::destroy
 * @see app/Http/Controllers/Sop/SopController.php:102
 * @route '/sop/{sop}'
 */
export const destroy = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::destroy
 * @see app/Http/Controllers/Sop/SopController.php:102
 * @route '/sop/{sop}'
 */
    const destroyForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::destroy
 * @see app/Http/Controllers/Sop/SopController.php:102
 * @route '/sop/{sop}'
 */
        destroyForm.delete = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Sop\SopController::approve
 * @see app/Http/Controllers/Sop/SopController.php:113
 * @route '/sop/{sop}/approve'
 */
export const approve = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Sop\SopController::approve
 * @see app/Http/Controllers/Sop/SopController.php:113
 * @route '/sop/{sop}/approve'
 */
approve.post = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::approve
 * @see app/Http/Controllers/Sop/SopController.php:113
 * @route '/sop/{sop}/approve'
 */
    const approveForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: approve.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::approve
 * @see app/Http/Controllers/Sop/SopController.php:113
 * @route '/sop/{sop}/approve'
 */
        approveForm.post = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: approve.url(args, options),
            method: 'post',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\Sop\SopController::reject
 * @see app/Http/Controllers/Sop/SopController.php:124
 * @route '/sop/{sop}/reject'
 */
export const reject = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Sop\SopController::reject
 * @see app/Http/Controllers/Sop/SopController.php:124
 * @route '/sop/{sop}/reject'
 */
reject.post = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::reject
 * @see app/Http/Controllers/Sop/SopController.php:124
 * @route '/sop/{sop}/reject'
 */
    const rejectForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: reject.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::reject
 * @see app/Http/Controllers/Sop/SopController.php:124
 * @route '/sop/{sop}/reject'
 */
        rejectForm.post = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: reject.url(args, options),
            method: 'post',
        })
    
    reject.form = rejectForm
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