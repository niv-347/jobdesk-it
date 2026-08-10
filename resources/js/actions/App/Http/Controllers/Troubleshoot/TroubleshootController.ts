import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
const index1d86c46f603e65fede786d04001fc545 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1d86c46f603e65fede786d04001fc545.url(options),
    method: 'get',
})

index1d86c46f603e65fede786d04001fc545.definition = {
    methods: ["get","head"],
    url: '/troubleshoot',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
index1d86c46f603e65fede786d04001fc545.url = (options?: RouteQueryOptions) => {
    return index1d86c46f603e65fede786d04001fc545.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
index1d86c46f603e65fede786d04001fc545.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1d86c46f603e65fede786d04001fc545.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
index1d86c46f603e65fede786d04001fc545.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1d86c46f603e65fede786d04001fc545.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
    const index1d86c46f603e65fede786d04001fc545Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index1d86c46f603e65fede786d04001fc545.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
        index1d86c46f603e65fede786d04001fc545Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1d86c46f603e65fede786d04001fc545.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
        index1d86c46f603e65fede786d04001fc545Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index1d86c46f603e65fede786d04001fc545.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index1d86c46f603e65fede786d04001fc545.form = index1d86c46f603e65fede786d04001fc545Form
    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
const indexf57c6846d23b1787465914d0ca343ae7 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf57c6846d23b1787465914d0ca343ae7.url(options),
    method: 'get',
})

indexf57c6846d23b1787465914d0ca343ae7.definition = {
    methods: ["get","head"],
    url: '/troubleshoot/kejadian',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
indexf57c6846d23b1787465914d0ca343ae7.url = (options?: RouteQueryOptions) => {
    return indexf57c6846d23b1787465914d0ca343ae7.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
indexf57c6846d23b1787465914d0ca343ae7.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexf57c6846d23b1787465914d0ca343ae7.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
indexf57c6846d23b1787465914d0ca343ae7.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexf57c6846d23b1787465914d0ca343ae7.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
    const indexf57c6846d23b1787465914d0ca343ae7Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexf57c6846d23b1787465914d0ca343ae7.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
        indexf57c6846d23b1787465914d0ca343ae7Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexf57c6846d23b1787465914d0ca343ae7.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
        indexf57c6846d23b1787465914d0ca343ae7Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexf57c6846d23b1787465914d0ca343ae7.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexf57c6846d23b1787465914d0ca343ae7.form = indexf57c6846d23b1787465914d0ca343ae7Form

/**
* Multiple routes resolve to \App\Http\Controllers\Troubleshoot\TroubleshootController::index, so this export is a
* dictionary keyed by URI rather than a callable. Call a specific route with `index['<uri>'](...)`,
* or import the route by name from your generated `routes/` directory.
*/
export const index = {
    '/troubleshoot': index1d86c46f603e65fede786d04001fc545,
    '/troubleshoot/kejadian': indexf57c6846d23b1787465914d0ca343ae7,
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::create
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:39
 * @route '/troubleshoot/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/troubleshoot/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::create
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:39
 * @route '/troubleshoot/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::create
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:39
 * @route '/troubleshoot/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::create
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:39
 * @route '/troubleshoot/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::create
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:39
 * @route '/troubleshoot/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::create
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:39
 * @route '/troubleshoot/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::create
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:39
 * @route '/troubleshoot/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::store
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:47
 * @route '/troubleshoot'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/troubleshoot',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::store
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:47
 * @route '/troubleshoot'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::store
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:47
 * @route '/troubleshoot'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::store
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:47
 * @route '/troubleshoot'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::store
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:47
 * @route '/troubleshoot'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::edit
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:70
 * @route '/troubleshoot/{troubleshoot}/edit'
 */
export const edit = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/troubleshoot/{troubleshoot}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::edit
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:70
 * @route '/troubleshoot/{troubleshoot}/edit'
 */
edit.url = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { troubleshoot: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { troubleshoot: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    troubleshoot: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        troubleshoot: typeof args.troubleshoot === 'object'
                ? args.troubleshoot.id
                : args.troubleshoot,
                }

    return edit.definition.url
            .replace('{troubleshoot}', parsedArgs.troubleshoot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::edit
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:70
 * @route '/troubleshoot/{troubleshoot}/edit'
 */
edit.get = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::edit
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:70
 * @route '/troubleshoot/{troubleshoot}/edit'
 */
edit.head = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::edit
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:70
 * @route '/troubleshoot/{troubleshoot}/edit'
 */
    const editForm = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::edit
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:70
 * @route '/troubleshoot/{troubleshoot}/edit'
 */
        editForm.get = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::edit
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:70
 * @route '/troubleshoot/{troubleshoot}/edit'
 */
        editForm.head = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::cetak
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:113
 * @route '/troubleshoot/{troubleshoot}/cetak'
 */
export const cetak = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetak.url(args, options),
    method: 'get',
})

cetak.definition = {
    methods: ["get","head"],
    url: '/troubleshoot/{troubleshoot}/cetak',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::cetak
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:113
 * @route '/troubleshoot/{troubleshoot}/cetak'
 */
cetak.url = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { troubleshoot: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { troubleshoot: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    troubleshoot: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        troubleshoot: typeof args.troubleshoot === 'object'
                ? args.troubleshoot.id
                : args.troubleshoot,
                }

    return cetak.definition.url
            .replace('{troubleshoot}', parsedArgs.troubleshoot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::cetak
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:113
 * @route '/troubleshoot/{troubleshoot}/cetak'
 */
cetak.get = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetak.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::cetak
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:113
 * @route '/troubleshoot/{troubleshoot}/cetak'
 */
cetak.head = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cetak.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::cetak
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:113
 * @route '/troubleshoot/{troubleshoot}/cetak'
 */
    const cetakForm = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cetak.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::cetak
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:113
 * @route '/troubleshoot/{troubleshoot}/cetak'
 */
        cetakForm.get = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cetak.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::cetak
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:113
 * @route '/troubleshoot/{troubleshoot}/cetak'
 */
        cetakForm.head = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::update
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:80
 * @route '/troubleshoot/{troubleshoot}'
 */
export const update = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/troubleshoot/{troubleshoot}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::update
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:80
 * @route '/troubleshoot/{troubleshoot}'
 */
update.url = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { troubleshoot: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { troubleshoot: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    troubleshoot: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        troubleshoot: typeof args.troubleshoot === 'object'
                ? args.troubleshoot.id
                : args.troubleshoot,
                }

    return update.definition.url
            .replace('{troubleshoot}', parsedArgs.troubleshoot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::update
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:80
 * @route '/troubleshoot/{troubleshoot}'
 */
update.put = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::update
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:80
 * @route '/troubleshoot/{troubleshoot}'
 */
    const updateForm = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::update
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:80
 * @route '/troubleshoot/{troubleshoot}'
 */
        updateForm.put = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::destroy
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:103
 * @route '/troubleshoot/{troubleshoot}'
 */
export const destroy = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/troubleshoot/{troubleshoot}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::destroy
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:103
 * @route '/troubleshoot/{troubleshoot}'
 */
destroy.url = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { troubleshoot: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { troubleshoot: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    troubleshoot: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        troubleshoot: typeof args.troubleshoot === 'object'
                ? args.troubleshoot.id
                : args.troubleshoot,
                }

    return destroy.definition.url
            .replace('{troubleshoot}', parsedArgs.troubleshoot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::destroy
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:103
 * @route '/troubleshoot/{troubleshoot}'
 */
destroy.delete = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::destroy
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:103
 * @route '/troubleshoot/{troubleshoot}'
 */
    const destroyForm = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::destroy
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:103
 * @route '/troubleshoot/{troubleshoot}'
 */
        destroyForm.delete = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::addTimeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
export const addTimeline = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addTimeline.url(args, options),
    method: 'post',
})

addTimeline.definition = {
    methods: ["post"],
    url: '/troubleshoot/{troubleshoot}/timeline',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::addTimeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
addTimeline.url = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { troubleshoot: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { troubleshoot: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    troubleshoot: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        troubleshoot: typeof args.troubleshoot === 'object'
                ? args.troubleshoot.id
                : args.troubleshoot,
                }

    return addTimeline.definition.url
            .replace('{troubleshoot}', parsedArgs.troubleshoot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::addTimeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
addTimeline.post = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: addTimeline.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::addTimeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
    const addTimelineForm = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: addTimeline.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::addTimeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
        addTimelineForm.post = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: addTimeline.url(args, options),
            method: 'post',
        })
    
    addTimeline.form = addTimelineForm
const TroubleshootController = { index, create, store, edit, cetak, update, destroy, addTimeline }

export default TroubleshootController