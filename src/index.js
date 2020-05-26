const { APIClient } = require('@api-forge/api-client');

class MonitoringAPI {
    constructor(options = {}) {
        const hostname = options.staging ? 'staging-p44ghy63p3pm.apiforge.it' : 'p44ghy63p3pm.apiforge.it';
        this.caller = new APIClient({ ...options, hostname });
    }

    /**
     * Lists the points in a timeSeries.
     *
     * @method listTimeSeries
     * @param {Object} options
     *   @param {string} [options.bucket]
     *   @param {string} [options.metric]
     *   @param {string} [options.alignmentPeriods]
     *   @param {string} [options.crossSeriesReducers]
     *   @param {boolean} [options.last]
     *   @param {Object} [options.labels]
     *   @param {Object} [options.interval]
     *      @param {Date} [options.interval.startTIme]
     *      @param {Date} [options.interval.endTime]
     *   @param {string | Array} [options.groupBy]
     */
    listTimeSeries(options = {}) {
        return this.caller.list({
            resource: 'timeseries',
            where: {
                ...options.labels,
                bucket: options.bucket,
                metric: options.metric,
                alignmentPeriods: options.alignmentPeriods,
                crossSeriesReducers: options.crossSeriesReducers,
                last: options.last,
                startTime: options.interval ? options.interval.startTime : undefined,
                endTime: options.interval ? options.interval.endTime : undefined,
                groupBy: options.groupBy,
            },
        });
    }

    /**
     * Creates new points on a timeSeries.
     *
     * @method createTimeSeries
     * @param {Object} options
     *   @param {string} [options.bucket]
     *   @param {Object[]} [options.timeSeries]
     *      @param {string} [options.timeSeries.metric]
     *      @param {Object} [options.timeSeries.labels]
     *      @param {Object[]} [options.timeSeries.points]
     *          @param {Date} [options.timeSeries.points.time]
     *          @param {string | number} [options.timeSeries.points.value]
     */
    createTimeSeries(options = {}) {
        return this.caller.create({
            resource: 'timeseries',
            data: {
                timeseries: options.timeSeries,
            },
            where: {
                bucket: options.bucket,
            },
        });
    }

    /**
     * Deletes points in a timeSeries.
     *
     * @method deleteTimeSeries
     * @param {Object} options
     *   @param {string} [options.bucket]
     *   @param {string} [options.metric]
     *   @param {Object} [options.labels]
     *   @param {Object} [options.interval]
     *      @param {Date} [options.interval.startTIme]
     *      @param {Date} [options.interval.endTime]
     */
    deleteTimeSeries(options = {}) {
        return this.caller.delete({
            resource: 'timeseries',
            where: {
                ...options.labels,
                bucket: options.bucket,
                metric: options.metric,
                startTime: options.interval ? options.interval.startTime : undefined,
                endTime: options.interval ? options.interval.endTime : undefined,
            },
        });
    }
}

module.exports = { MonitoringAPI };
