/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a IAttributeMetadata.
 */
class IAttributeMetadata {
  /**
   * Create a IAttributeMetadata.
   * @property {string} [name]
   * @property {string} [friendlyName]
   * @property {string} [baseName]
   * @property {string} [dataType] Gets data type for property.
   * @property {string} [semanticType] Gets semantic type for property.
   * Possible values include: 'CalendarDate', 'CalendarDayOfMonth',
   * 'CalendarDayOfWeek', 'CalendarDayOfYear', 'CalendarHalfYear',
   * 'CalendarMonthOfYear', 'CalendarMonth', 'CalendarWeek', 'CalendarYear',
   * 'CalendarFiscalDate', 'CalendarFiscalDayOfMonth',
   * 'CalendarFiscalDayOfWeek', 'CalendarFiscalDayOfYear',
   * 'CalendarFiscalHalfYear', 'CalendarFiscalMonthOfYear',
   * 'CalendarFiscalMonth', 'CalendarFiscalQuarter',
   * 'CalendarFiscalWeekOfMonth', 'CalendarFiscalWeekOfYear',
   * 'CalendarFiscalWeek', 'CalendarFiscalYear', 'Account', 'Channel',
   * 'Contact', 'Customer', 'Language', 'Organization', 'OrganizationUnit',
   * 'Person', 'Product', 'ProductGroup', 'LocationAddress',
   * 'LocationAddressStreet', 'LocationCity', 'LocationContinent',
   * 'LocationCountry', 'LocationCounty', 'LocationLatitude',
   * 'LocationLongitude', 'LocationPoint', 'LocationPostalCode',
   * 'LocationProvince', 'LocationRegion', 'LocationState', 'LocationTimezone',
   * 'MeasurementDateCreation', 'MeasurementDateModify', 'MeasurementStatus',
   * 'MeasurementVersion', 'BarCode', 'Brand', 'IdentityGovernmentID',
   * 'PersonFirstName', 'PersonFullName', 'PersonLastName', 'PersonMiddleName',
   * 'IdentityServiceEmail', 'IdentityServiceFacebook', 'IdentityServicePhone',
   * 'IdentityServiceTwitter', 'Image', 'Place', 'ReferenceDescription',
   * 'ReferenceImageURL', 'ReferencePhonetic', 'ReferenceURL'
   * @property {object} [searchProperties]
   * @property {boolean} [searchProperties.isSearchable] Gets a value
   * indicating whether the attribute supports full text search.
   * @property {boolean} [searchProperties.isFilterable] Gets a value
   * indicating whether the attribute supports filtering.
   * @property {boolean} [searchProperties.isFacetable] Gets a value indicating
   * whether the attribute can be included as facet results.
   * @property {boolean} [searchProperties.isSortable] Gets a value indicating
   * whether the attribute can be included in orderby directives.
   * @property {string} [searchProperties.facetSpecification] Gets an optional
   * specification for search faceting used at query time (advanced).
   * this is the part behind the comma in the examples below.
   * bucket facet: "price,interval:10"
   * other type: "listPrice,values:10|25|100|500|1000|2500"
   * value facet: city,count:5
   */
  constructor() {
  }

  /**
   * Defines the metadata of IAttributeMetadata
   *
   * @returns {object} metadata of IAttributeMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IAttributeMetadata',
      type: {
        name: 'Composite',
        className: 'IAttributeMetadata',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          friendlyName: {
            required: false,
            readOnly: true,
            serializedName: 'friendlyName',
            type: {
              name: 'String'
            }
          },
          baseName: {
            required: false,
            readOnly: true,
            serializedName: 'baseName',
            type: {
              name: 'String'
            }
          },
          dataType: {
            required: false,
            serializedName: 'dataType',
            type: {
              name: 'String'
            }
          },
          semanticType: {
            required: false,
            serializedName: 'semanticType',
            type: {
              name: 'String'
            }
          },
          searchProperties: {
            required: false,
            serializedName: 'searchProperties',
            type: {
              name: 'Composite',
              className: 'IAttributeSearchProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = IAttributeMetadata;
