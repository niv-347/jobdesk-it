import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ProfileController::activityLog
 * @see app/Http/Controllers/ProfileController.php:58
 * @route '/profile/activity'
 */
export const activityLog = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityLog.url(options),
    method: 'get',
})

activityLog.definition = {
    methods: ["get","head"],
    url: '/profile/activity',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProfileController::activityLog
 * @see app/Http/Controllers/ProfileController.php:58
 * @route '/profile/activity'
 */
activityLog.url = (options?: RouteQueryOptions) => {
    return activityLog.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProfileController::activityLog
 * @see app/Http/Controllers/ProfileController.php:58
 * @route '/profile/activity'
 */
activityLog.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activityLog.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProfileController::activityLog
 * @see app/Http/Controllers/ProfileController.php:58
 * @route '/profile/activity'
 */
activityLog.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activityLog.url(options),
    method: 'head',
})
const ProfileController = { activityLog }

export default ProfileController