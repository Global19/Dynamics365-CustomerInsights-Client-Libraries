/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a AttributeDataProfile.
 */
class AttributeDataProfile {
  /**
   * Create a AttributeDataProfile.
   * @property {array} [valueCounts] Gets or sets the distribution of the top
   * 100 values
   * @property {array} [histogram] Gets or sets the histogram information.
   * Ordered from smallest to largest bin.
   * @property {array} [stringLengthCounts] Gets or sets the string lengths and
   * the count of string values with those lengths.
   * @property {string} [qualifiedEntityName] Gets or sets the qualified entity
   * name
   * @property {string} [attributeName] Gets or sets the attribute name.
   * @property {object} [min] Gets or sets the minimum value.
   * @property {object} [max] Gets or sets the maximum value.
   * @property {number} [count] Gets or sets the total row count.
   * @property {number} [missingCount] Gets or sets the row count of missing
   * values.
   * @property {number} [errorCount] Gets or sets the number of error values.
   * @property {object} [quantiles]
   * @property {number} [quantiles.p0D1] Gets or sets the 1% quantile.
   * @property {number} [quantiles.p1] Gets or sets the 1% quantile.
   * @property {number} [quantiles.p5] Gets or sets the 5% quantile.
   * @property {number} [quantiles.p25] Gets or sets the 25% quantile.
   * @property {number} [quantiles.p50] Gets or sets the 50% quantile.
   * @property {number} [quantiles.p75] Gets or sets the 75% quantile.
   * @property {number} [quantiles.p95] Gets or sets the 95% quantile.
   * @property {number} [quantiles.p99] Gets or sets the 99% quantile.
   * @property {number} [quantiles.p99D9] Gets or sets the 9% quantile.
   * @property {object} [moments]
   * @property {number} [moments.mean] Gets or sets the mean.
   * @property {number} [moments.standardDeviation] Gets or sets the standard
   * deviation.
   * @property {number} [moments.variance] Gets or sets the variance.
   * @property {number} [moments.skewness] Gets or sets the skewness.
   * @property {number} [moments.kurtosis] Gets or sets the kurtosis.
   * @property {number} [uniqueValueCount] Gets or sets the number of unique
   * values.
   * @property {date} [profilingDate] Gets or sets the profiling date
   * @property {boolean} [isSuggestedPrimaryKey] Gets a value indicating
   * whether this attribute can be used as a primary key of the entity
   */
  constructor() {
  }

  /**
   * Defines the metadata of AttributeDataProfile
   *
   * @returns {object} metadata of AttributeDataProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AttributeDataProfile',
      type: {
        name: 'Composite',
        className: 'AttributeDataProfile',
        modelProperties: {
          valueCounts: {
            required: false,
            serializedName: 'valueCounts',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ValueCountElementType',
                  type: {
                    name: 'Composite',
                    className: 'ValueCount'
                  }
              }
            }
          },
          histogram: {
            required: false,
            serializedName: 'histogram',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HistogramBinElementType',
                  type: {
                    name: 'Composite',
                    className: 'HistogramBin'
                  }
              }
            }
          },
          stringLengthCounts: {
            required: false,
            serializedName: 'stringLengthCounts',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringLengthCountElementType',
                  type: {
                    name: 'Composite',
                    className: 'StringLengthCount'
                  }
              }
            }
          },
          qualifiedEntityName: {
            required: false,
            serializedName: 'qualifiedEntityName',
            type: {
              name: 'String'
            }
          },
          attributeName: {
            required: false,
            serializedName: 'attributeName',
            type: {
              name: 'String'
            }
          },
          min: {
            required: false,
            serializedName: 'min',
            type: {
              name: 'Object'
            }
          },
          max: {
            required: false,
            serializedName: 'max',
            type: {
              name: 'Object'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          missingCount: {
            required: false,
            serializedName: 'missingCount',
            type: {
              name: 'Number'
            }
          },
          errorCount: {
            required: false,
            serializedName: 'errorCount',
            type: {
              name: 'Number'
            }
          },
          quantiles: {
            required: false,
            serializedName: 'quantiles',
            type: {
              name: 'Composite',
              className: 'Quantiles'
            }
          },
          moments: {
            required: false,
            serializedName: 'moments',
            type: {
              name: 'Composite',
              className: 'Moments'
            }
          },
          uniqueValueCount: {
            required: false,
            serializedName: 'uniqueValueCount',
            type: {
              name: 'Number'
            }
          },
          profilingDate: {
            required: false,
            serializedName: 'profilingDate',
            type: {
              name: 'DateTime'
            }
          },
          isSuggestedPrimaryKey: {
            required: false,
            readOnly: true,
            serializedName: 'isSuggestedPrimaryKey',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = AttributeDataProfile;
