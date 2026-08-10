import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop'
 */
const index7403e87bfb6d6db58085ad9668b739d2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7403e87bfb6d6db58085ad9668b739d2.url(options),
    method: 'get',
})

index7403e87bfb6d6db58085ad9668b739d2.definition = {
    methods: ["get","head"],
    url: '/sop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop'
 */
index7403e87bfb6d6db58085ad9668b739d2.url = (options?: RouteQueryOptions) => {
    return index7403e87bfb6d6db58085ad9668b739d2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop'
 */
index7403e87bfb6d6db58085ad9668b739d2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7403e87bfb6d6db58085ad9668b739d2.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop'
 */
index7403e87bfb6d6db58085ad9668b739d2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index7403e87bfb6d6db58085ad9668b739d2.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop'
 */
    const index7403e87bfb6d6db58085ad9668b739d2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index7403e87bfb6d6db58085ad9668b739d2.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop'
 */
        index7403e87bfb6d6db58085ad9668b739d2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7403e87bfb6d6db58085ad9668b739d2.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop'
 */
        index7403e87bfb6d6db58085ad9668b739d2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7403e87bfb6d6db58085ad9668b739d2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index7403e87bfb6d6db58085ad9668b739d2.form = index7403e87bfb6d6db58085ad9668b739d2Form
    /**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
const indexce9b8502817842f2349def3a20138074 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexce9b8502817842f2349def3a20138074.url(options),
    method: 'get',
})

indexce9b8502817842f2349def3a20138074.definition = {
    methods: ["get","head"],
    url: '/sop/buatsop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
indexce9b8502817842f2349def3a20138074.url = (options?: RouteQueryOptions) => {
    return indexce9b8502817842f2349def3a20138074.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
indexce9b8502817842f2349def3a20138074.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexce9b8502817842f2349def3a20138074.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
indexce9b8502817842f2349def3a20138074.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexce9b8502817842f2349def3a20138074.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
    const indexce9b8502817842f2349def3a20138074Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexce9b8502817842f2349def3a20138074.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
        indexce9b8502817842f2349def3a20138074Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexce9b8502817842f2349def3a20138074.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Sop\SopController::index
 * @see app/Http/Controllers/Sop/SopController.php:13
 * @route '/sop/buatsop'
 */
        indexce9b8502817842f2349def3a20138074Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexce9b8502817842f2349def3a20138074.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexce9b8502817842f2349def3a20138074.form = indexce9b8502817842f2349def3a20138074Form

/**
* Multiple routes resolve to \App\Http\Controllers\Sop\SopController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/sop': index7403e87bfb6d6db58085ad9668b739d2,
    '/sop/buatsop': indexce9b8502817842f2349def3a20138074,
}

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
* @see \App\Http\Controllers\Sop\SopController::isiSop
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
export const isiSop = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: isiSop.url(args, options),
    method: 'get',
})

isiSop.definition = {
    methods: ["get","head"],
    url: '/sop/{sop}/isisop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Sop\SopController::isiSop
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
isiSop.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return isiSop.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::isiSop
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
isiSop.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: isiSop.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Sop\SopController::isiSop
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
isiSop.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: isiSop.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::isiSop
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
    const isiSopForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: isiSop.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::isiSop
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
        isiSopForm.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: isiSop.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Sop\SopController::isiSop
 * @see app/Http/Controllers/Sop/SopController.php:135
 * @route '/sop/{sop}/isisop'
 */
        isiSopForm.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: isiSop.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    isiSop.form = isiSopForm
/**
* @see \App\Http\Controllers\Sop\SopController::storeIsi
 * @see app/Http/Controllers/Sop/SopController.php:60
 * @route '/sop/{sop}/isisop'
 */
export const storeIsi = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: storeIsi.url(args, options),
    method: 'put',
})

storeIsi.definition = {
    methods: ["put"],
    url: '/sop/{sop}/isisop',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Sop\SopController::storeIsi
 * @see app/Http/Controllers/Sop/SopController.php:60
 * @route '/sop/{sop}/isisop'
 */
storeIsi.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return storeIsi.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::storeIsi
 * @see app/Http/Controllers/Sop/SopController.php:60
 * @route '/sop/{sop}/isisop'
 */
storeIsi.put = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: storeIsi.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::storeIsi
 * @see app/Http/Controllers/Sop/SopController.php:60
 * @route '/sop/{sop}/isisop'
 */
    const storeIsiForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: storeIsi.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::storeIsi
 * @see app/Http/Controllers/Sop/SopController.php:60
 * @route '/sop/{sop}/isisop'
 */
        storeIsiForm.put = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: storeIsi.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    storeIsi.form = storeIsiForm
/**
* @see \App\Http\Controllers\Sop\SopController::cetakSop
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
export const cetakSop = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetakSop.url(args, options),
    method: 'get',
})

cetakSop.definition = {
    methods: ["get","head"],
    url: '/sop/{sop}/cetak',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Sop\SopController::cetakSop
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
cetakSop.url = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return cetakSop.definition.url
            .replace('{sop}', parsedArgs.sop.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Sop\SopController::cetakSop
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
cetakSop.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetakSop.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Sop\SopController::cetakSop
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
cetakSop.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cetakSop.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Sop\SopController::cetakSop
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
    const cetakSopForm = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cetakSop.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Sop\SopController::cetakSop
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
        cetakSopForm.get = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cetakSop.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Sop\SopController::cetakSop
 * @see app/Http/Controllers/Sop/SopController.php:141
 * @route '/sop/{sop}/cetak'
 */
        cetakSopForm.head = (args: { sop: number | { id: number } } | [sop: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cetakSop.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cetakSop.form = cetakSopForm
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
const SopController = { index, store, isiSop, storeIsi, cetakSop, update, destroy, approve, reject }

export default SopController