import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::index
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/konfigurasi/pengguna',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::index
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::index
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::index
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::index
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::index
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::index
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:18
 * @route '/konfigurasi/pengguna'
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
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:39
 * @route '/konfigurasi/pengguna'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/konfigurasi/pengguna',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:39
 * @route '/konfigurasi/pengguna'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:39
 * @route '/konfigurasi/pengguna'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:39
 * @route '/konfigurasi/pengguna'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::store
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:39
 * @route '/konfigurasi/pengguna'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::update
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:60
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
export const update = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/konfigurasi/pengguna/{pengguna}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::update
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:60
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
update.url = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengguna: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { pengguna: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pengguna: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengguna: typeof args.pengguna === 'object'
                ? args.pengguna.id
                : args.pengguna,
                }

    return update.definition.url
            .replace('{pengguna}', parsedArgs.pengguna.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::update
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:60
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
update.put = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::update
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:60
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
    const updateForm = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::update
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:60
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
        updateForm.put = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::destroy
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:84
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
export const destroy = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/konfigurasi/pengguna/{pengguna}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::destroy
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:84
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
destroy.url = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pengguna: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { pengguna: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pengguna: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pengguna: typeof args.pengguna === 'object'
                ? args.pengguna.id
                : args.pengguna,
                }

    return destroy.definition.url
            .replace('{pengguna}', parsedArgs.pengguna.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::destroy
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:84
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
destroy.delete = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::destroy
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:84
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
    const destroyForm = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::destroy
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:84
 * @route '/konfigurasi/pengguna/{pengguna}'
 */
        destroyForm.delete = (args: { pengguna: number | { id: number } } | [pengguna: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::roleIndex
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
export const roleIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: roleIndex.url(options),
    method: 'get',
})

roleIndex.definition = {
    methods: ["get","head"],
    url: '/konfigurasi/role',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::roleIndex
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
roleIndex.url = (options?: RouteQueryOptions) => {
    return roleIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::roleIndex
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
roleIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: roleIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::roleIndex
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
roleIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: roleIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::roleIndex
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
    const roleIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: roleIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::roleIndex
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
        roleIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: roleIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::roleIndex
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:91
 * @route '/konfigurasi/role'
 */
        roleIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: roleIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    roleIndex.form = roleIndexForm
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::getUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
export const getUserPermissions = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUserPermissions.url(args, options),
    method: 'get',
})

getUserPermissions.definition = {
    methods: ["get","head"],
    url: '/konfigurasi/role/permissions/{user}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::getUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
getUserPermissions.url = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user: args.user,
                }

    return getUserPermissions.definition.url
            .replace('{user}', parsedArgs.user.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::getUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
getUserPermissions.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getUserPermissions.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::getUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
getUserPermissions.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getUserPermissions.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::getUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
    const getUserPermissionsForm = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getUserPermissions.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::getUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
        getUserPermissionsForm.get = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getUserPermissions.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::getUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:114
 * @route '/konfigurasi/role/permissions/{user}'
 */
        getUserPermissionsForm.head = (args: { user: string | number } | [user: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getUserPermissions.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getUserPermissions.form = getUserPermissionsForm
/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::saveUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:122
 * @route '/konfigurasi/role/permissions'
 */
export const saveUserPermissions = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveUserPermissions.url(options),
    method: 'post',
})

saveUserPermissions.definition = {
    methods: ["post"],
    url: '/konfigurasi/role/permissions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::saveUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:122
 * @route '/konfigurasi/role/permissions'
 */
saveUserPermissions.url = (options?: RouteQueryOptions) => {
    return saveUserPermissions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::saveUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:122
 * @route '/konfigurasi/role/permissions'
 */
saveUserPermissions.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: saveUserPermissions.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::saveUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:122
 * @route '/konfigurasi/role/permissions'
 */
    const saveUserPermissionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: saveUserPermissions.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Konfigurasi\PenggunaController::saveUserPermissions
 * @see app/Http/Controllers/Konfigurasi/PenggunaController.php:122
 * @route '/konfigurasi/role/permissions'
 */
        saveUserPermissionsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: saveUserPermissions.url(options),
            method: 'post',
        })
    
    saveUserPermissions.form = saveUserPermissionsForm
const PenggunaController = { index, store, update, destroy, roleIndex, getUserPermissions, saveUserPermissions }

export default PenggunaController