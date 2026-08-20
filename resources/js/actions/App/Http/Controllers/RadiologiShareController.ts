import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RadiologiShareController::index
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/radiologi/share',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::index
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::index
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiShareController::index
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RadiologiShareController::showVerify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
export const showVerify = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showVerify.url(options),
    method: 'get',
})

showVerify.definition = {
    methods: ["get","head"],
    url: '/radiologi/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::showVerify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
showVerify.url = (options?: RouteQueryOptions) => {
    return showVerify.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::showVerify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
showVerify.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showVerify.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiShareController::showVerify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
showVerify.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showVerify.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:49
 * @route '/radiologi/verify'
 */
export const verify = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

verify.definition = {
    methods: ["post"],
    url: '/radiologi/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:49
 * @route '/radiologi/verify'
 */
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:49
 * @route '/radiologi/verify'
 */
verify.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: verify.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\RadiologiShareController::downloadPdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
export const downloadPdf = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadPdf.url(args, options),
    method: 'get',
})

downloadPdf.definition = {
    methods: ["get","head"],
    url: '/radiologi/hasil/{radiologi}/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::downloadPdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
downloadPdf.url = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { radiologi: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    radiologi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        radiologi: args.radiologi,
                }

    return downloadPdf.definition.url
            .replace('{radiologi}', parsedArgs.radiologi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::downloadPdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
downloadPdf.get = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadPdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiShareController::downloadPdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
downloadPdf.head = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadPdf.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RadiologiShareController::downloadFoto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
export const downloadFoto = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadFoto.url(args, options),
    method: 'get',
})

downloadFoto.definition = {
    methods: ["get","head"],
    url: '/radiologi/hasil/{radiologi}/foto',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::downloadFoto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
downloadFoto.url = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { radiologi: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    radiologi: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        radiologi: args.radiologi,
                }

    return downloadFoto.definition.url
            .replace('{radiologi}', parsedArgs.radiologi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::downloadFoto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
downloadFoto.get = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: downloadFoto.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiShareController::downloadFoto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
downloadFoto.head = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: downloadFoto.url(args, options),
    method: 'head',
})
const RadiologiShareController = { index, showVerify, verify, downloadPdf, downloadFoto }

export default RadiologiShareController