import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
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
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::edit
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:70
 * @route '/troubleshoot/{troubleshoot}/edit'
 */
export const edit = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
edit.url = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
edit.get = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::edit
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:70
 * @route '/troubleshoot/{troubleshoot}/edit'
 */
edit.head = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::cetak
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:113
 * @route '/troubleshoot/{troubleshoot}/cetak'
 */
export const cetak = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
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
cetak.url = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
cetak.get = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cetak.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::cetak
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:113
 * @route '/troubleshoot/{troubleshoot}/cetak'
 */
cetak.head = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cetak.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::update
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:80
 * @route '/troubleshoot/{troubleshoot}'
 */
export const update = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
update.put = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::destroy
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:103
 * @route '/troubleshoot/{troubleshoot}'
 */
export const destroy = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
destroy.url = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
destroy.delete = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Troubleshoot\TroubleshootController::timeline
 * @see app/Http/Controllers/Troubleshoot/TroubleshootController.php:120
 * @route '/troubleshoot/{troubleshoot}/timeline'
 */
export const timeline = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
timeline.url = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
timeline.post = (args: { troubleshoot: string | number | { id: string | number } } | [troubleshoot: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: timeline.url(args, options),
    method: 'post',
})
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