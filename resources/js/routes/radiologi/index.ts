import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import ekpertise9dba7b from './ekpertise'
import verify8ef1b2 from './verify'
import hasil from './hasil'
/**
* @see \App\Http\Controllers\RadiologiController::ekpertise
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
export const ekpertise = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ekpertise.url(options),
    method: 'get',
})

ekpertise.definition = {
    methods: ["get","head"],
    url: '/radiologi/ekpertise',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiController::ekpertise
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
ekpertise.url = (options?: RouteQueryOptions) => {
    return ekpertise.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiController::ekpertise
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
ekpertise.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ekpertise.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiController::ekpertise
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
ekpertise.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ekpertise.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RadiologiController::ekpertise
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
    const ekpertiseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ekpertise.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RadiologiController::ekpertise
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
        ekpertiseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ekpertise.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RadiologiController::ekpertise
 * @see app/Http/Controllers/RadiologiController.php:14
 * @route '/radiologi/ekpertise'
 */
        ekpertiseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ekpertise.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ekpertise.form = ekpertiseForm
/**
* @see \App\Http\Controllers\RadiologiShareController::share
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
export const share = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: share.url(options),
    method: 'get',
})

share.definition = {
    methods: ["get","head"],
    url: '/radiologi/share',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::share
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
share.url = (options?: RouteQueryOptions) => {
    return share.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::share
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
share.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: share.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiShareController::share
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
share.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: share.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RadiologiShareController::share
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
    const shareForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: share.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RadiologiShareController::share
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
        shareForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: share.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RadiologiShareController::share
 * @see app/Http/Controllers/RadiologiShareController.php:19
 * @route '/radiologi/share'
 */
        shareForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: share.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    share.form = shareForm
/**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
export const verify = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(options),
    method: 'get',
})

verify.definition = {
    methods: ["get","head"],
    url: '/radiologi/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
verify.url = (options?: RouteQueryOptions) => {
    return verify.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
verify.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: verify.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
verify.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: verify.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
    const verifyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: verify.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
        verifyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: verify.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RadiologiShareController::verify
 * @see app/Http/Controllers/RadiologiShareController.php:44
 * @route '/radiologi/verify'
 */
        verifyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: verify.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    verify.form = verifyForm
const radiologi = {
    ekpertise: Object.assign(ekpertise, ekpertise9dba7b),
share: Object.assign(share, share),
verify: Object.assign(verify, verify8ef1b2),
hasil: Object.assign(hasil, hasil),
}

export default radiologi