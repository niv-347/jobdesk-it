import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\RadiologiShareController::submit
 * @see app/Http/Controllers/RadiologiShareController.php:49
 * @route '/radiologi/verify'
 */
export const submit = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})

submit.definition = {
    methods: ["post"],
    url: '/radiologi/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RadiologiShareController::submit
 * @see app/Http/Controllers/RadiologiShareController.php:49
 * @route '/radiologi/verify'
 */
submit.url = (options?: RouteQueryOptions) => {
    return submit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RadiologiShareController::submit
 * @see app/Http/Controllers/RadiologiShareController.php:49
 * @route '/radiologi/verify'
 */
submit.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submit.url(options),
    method: 'post',
})
const verify = {
    submit: Object.assign(submit, submit),
}

export default verify