import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\RadiologiShareController::pdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
export const pdf = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(args, options),
    method: 'get',
})

pdf.definition = {
    methods: ["get","head"],
    url: '/radiologi/hasil/{radiologi}/pdf',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::pdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
pdf.url = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return pdf.definition.url
            .replace('{radiologi}', parsedArgs.radiologi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::pdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
pdf.get = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: pdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiShareController::pdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
pdf.head = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: pdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RadiologiShareController::pdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
    const pdfForm = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: pdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RadiologiShareController::pdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
        pdfForm.get = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RadiologiShareController::pdf
 * @see app/Http/Controllers/RadiologiShareController.php:79
 * @route '/radiologi/hasil/{radiologi}/pdf'
 */
        pdfForm.head = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: pdf.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    pdf.form = pdfForm
/**
* @see \App\Http\Controllers\RadiologiShareController::foto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
export const foto = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: foto.url(args, options),
    method: 'get',
})

foto.definition = {
    methods: ["get","head"],
    url: '/radiologi/hasil/{radiologi}/foto',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::foto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
foto.url = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return foto.definition.url
            .replace('{radiologi}', parsedArgs.radiologi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::foto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
foto.get = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: foto.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiShareController::foto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
foto.head = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: foto.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RadiologiShareController::foto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
    const fotoForm = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: foto.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RadiologiShareController::foto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
        fotoForm.get = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: foto.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RadiologiShareController::foto
 * @see app/Http/Controllers/RadiologiShareController.php:93
 * @route '/radiologi/hasil/{radiologi}/foto'
 */
        fotoForm.head = (args: { radiologi: string | number } | [radiologi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: foto.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    foto.form = fotoForm
const hasil = {
    pdf: Object.assign(pdf, pdf),
foto: Object.assign(foto, foto),
}

export default hasil