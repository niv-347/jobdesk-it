import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/troubleshoot',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::index
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
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
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::kejadian
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
export const kejadian = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kejadian.url(options),
    method: 'get',
})

kejadian.definition = {
    methods: ["get","head"],
    url: '/troubleshoot/kejadian',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::kejadian
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
kejadian.url = (options?: RouteQueryOptions) => {
    return kejadian.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::kejadian
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
kejadian.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: kejadian.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::kejadian
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
kejadian.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: kejadian.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::kejadian
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
    const kejadianForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: kejadian.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::kejadian
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
        kejadianForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kejadian.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::kejadian
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:15
 * @route '/troubleshoot/kejadian'
 */
        kejadianForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: kejadian.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    kejadian.form = kejadianForm
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
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::timeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
export const timeline = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: timeline.url(args, options),
    method: 'post',
})

timeline.definition = {
    methods: ["post"],
    url: '/troubleshoot/{troubleshoot}/timeline',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::timeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
timeline.url = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return timeline.definition.url
            .replace('{troubleshoot}', parsedArgs.troubleshoot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::timeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
timeline.post = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: timeline.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::timeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
    const timelineForm = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: timeline.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::timeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
        timelineForm.post = (args: { troubleshoot: number | { id: number } } | [troubleshoot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: timeline.url(args, options),
            method: 'post',
        })
    
    timeline.form = timelineForm
const troubleshoot = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
kejadian: Object.assign(kejadian, kejadian),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
cetak: Object.assign(cetak, cetak),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
timeline: Object.assign(timeline, timeline),
}

export default troubleshoot