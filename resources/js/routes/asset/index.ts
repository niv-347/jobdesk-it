import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import dataasset0e9557 from './dataasset'
/**
* @see \App\Http\Controllers\AssetController::dataasset
 * @see app/Http/Controllers/AssetController.php:14
 * @route '/asset/dataasset'
 */
export const dataasset = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dataasset.url(options),
    method: 'get',
})

dataasset.definition = {
    methods: ["get","head"],
    url: '/asset/dataasset',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetController::dataasset
 * @see app/Http/Controllers/AssetController.php:14
 * @route '/asset/dataasset'
 */
dataasset.url = (options?: RouteQueryOptions) => {
    return dataasset.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::dataasset
 * @see app/Http/Controllers/AssetController.php:14
 * @route '/asset/dataasset'
 */
dataasset.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dataasset.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetController::dataasset
 * @see app/Http/Controllers/AssetController.php:14
 * @route '/asset/dataasset'
 */
dataasset.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dataasset.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetController::dataasset
 * @see app/Http/Controllers/AssetController.php:14
 * @route '/asset/dataasset'
 */
    const dataassetForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dataasset.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetController::dataasset
 * @see app/Http/Controllers/AssetController.php:14
 * @route '/asset/dataasset'
 */
        dataassetForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dataasset.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetController::dataasset
 * @see app/Http/Controllers/AssetController.php:14
 * @route '/asset/dataasset'
 */
        dataassetForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dataasset.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dataasset.form = dataassetForm
/**
* @see \App\Http\Controllers\AssetController::laporan
 * @see app/Http/Controllers/AssetController.php:127
 * @route '/asset/laporan'
 */
export const laporan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: laporan.url(options),
    method: 'get',
})

laporan.definition = {
    methods: ["get","head"],
    url: '/asset/laporan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AssetController::laporan
 * @see app/Http/Controllers/AssetController.php:127
 * @route '/asset/laporan'
 */
laporan.url = (options?: RouteQueryOptions) => {
    return laporan.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AssetController::laporan
 * @see app/Http/Controllers/AssetController.php:127
 * @route '/asset/laporan'
 */
laporan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: laporan.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AssetController::laporan
 * @see app/Http/Controllers/AssetController.php:127
 * @route '/asset/laporan'
 */
laporan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: laporan.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AssetController::laporan
 * @see app/Http/Controllers/AssetController.php:127
 * @route '/asset/laporan'
 */
    const laporanForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: laporan.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AssetController::laporan
 * @see app/Http/Controllers/AssetController.php:127
 * @route '/asset/laporan'
 */
        laporanForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: laporan.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AssetController::laporan
 * @see app/Http/Controllers/AssetController.php:127
 * @route '/asset/laporan'
 */
        laporanForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: laporan.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    laporan.form = laporanForm
const asset = {
    dataasset: Object.assign(dataasset, dataasset0e9557),
laporan: Object.assign(laporan, laporan),
}

export default asset