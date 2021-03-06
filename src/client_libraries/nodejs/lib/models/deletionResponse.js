/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DeletionResponse.
 */
class DeletionResponse {
  /**
   * Create a DeletionResponse.
   * @property {boolean} [isDeleted]
   * @property {array} [issues]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeletionResponse
   *
   * @returns {object} metadata of DeletionResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeletionResponse',
      type: {
        name: 'Composite',
        className: 'DeletionResponse',
        modelProperties: {
          isDeleted: {
            required: false,
            serializedName: 'isDeleted',
            type: {
              name: 'Boolean'
            }
          },
          issues: {
            required: false,
            serializedName: 'issues',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DependencyValidationIssueElementType',
                  type: {
                    name: 'Composite',
                    className: 'DependencyValidationIssue'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DeletionResponse;
