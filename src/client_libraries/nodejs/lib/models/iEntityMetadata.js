/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a IEntityMetadata.
 */
class IEntityMetadata {
  /**
   * Create a IEntityMetadata.
   * @property {string} [name] Gets the name of the entity. eg: Contact.
   * @property {string} [qualifiedEntityName] Gets the unqiue logical name for
   * the entity
   * If entity is from a datasource, QualifiedEntityName =
   * datasourceId_EntityName eg: d8d3b26a-a8ad-42f7-901e-f7f745003a84_Contact.
   * If entity is generated by C360, QualifiedEntityName = EntityName eg:
   * Contact.
   * @property {string} [dataSourceName] Gets the datasource name of this
   * entity, if no data source, return null or emptyString
   * @property {string} [dataflowType] Possible values include: 'dynamics365',
   * 'salesforce', 'conflationSortAndRefine', 'conflationDeduplication',
   * 'conflationMatchPairs', 'conflationResolveConflicts', 'enriched', 'kpi',
   * 'powerQuery', 'dataPreparation', 'intelligence', 'unifiedActivity',
   * 'segmentation', 'ingestion', 'attachCdm', 'genericPrediction',
   * 'attachCds', 'unknown', 'powerPlatform', 'datahub', 'insights',
   * 'derivedEntity', 'powerPlatformSource'
   * @property {uuid} [datasourceId] Gets the original datasourceid of this
   * entity, if no data source, return null or emptyString
   * @property {string} [entityType] Possible values include: 'unspecified',
   * 'profile', 'conflationMap', 'activity', 'aggregateKpi', 'profileKpi',
   * 'unifiedActivity', 'segment', 'intelligence', 'genericPrediction',
   * 'enrichment', 'insights', 'derivedEntity', 'quarantine'
   * @property {array} [attributes] Gets entity attributes.
   * @property {array} [keys] Gets the keys of the entity.
   * @property {array} [relationships] Gets entity relationships.
   * @property {object} [timestampAttribute]
   * @property {string} [timestampAttribute.name]
   * @property {string} [timestampAttribute.friendlyName]
   * @property {string} [timestampAttribute.baseName]
   * @property {string} [timestampAttribute.dataType] Gets data type for
   * property.
   * @property {string} [timestampAttribute.semanticType] Gets semantic type
   * for property. Possible values include: 'CalendarDate',
   * 'CalendarDayOfMonth', 'CalendarDayOfWeek', 'CalendarDayOfYear',
   * 'CalendarHalfYear', 'CalendarMonthOfYear', 'CalendarMonth',
   * 'CalendarWeek', 'CalendarYear', 'CalendarFiscalDate',
   * 'CalendarFiscalDayOfMonth', 'CalendarFiscalDayOfWeek',
   * 'CalendarFiscalDayOfYear', 'CalendarFiscalHalfYear',
   * 'CalendarFiscalMonthOfYear', 'CalendarFiscalMonth',
   * 'CalendarFiscalQuarter', 'CalendarFiscalWeekOfMonth',
   * 'CalendarFiscalWeekOfYear', 'CalendarFiscalWeek', 'CalendarFiscalYear',
   * 'Account', 'Channel', 'Contact', 'Customer', 'Language', 'Organization',
   * 'OrganizationUnit', 'Person', 'Product', 'ProductGroup',
   * 'LocationAddress', 'LocationAddressStreet', 'LocationCity',
   * 'LocationContinent', 'LocationCountry', 'LocationCounty',
   * 'LocationLatitude', 'LocationLongitude', 'LocationPoint',
   * 'LocationPostalCode', 'LocationProvince', 'LocationRegion',
   * 'LocationState', 'LocationTimezone', 'MeasurementDateCreation',
   * 'MeasurementDateModify', 'MeasurementStatus', 'MeasurementVersion',
   * 'BarCode', 'Brand', 'IdentityGovernmentID', 'PersonFirstName',
   * 'PersonFullName', 'PersonLastName', 'PersonMiddleName',
   * 'IdentityServiceEmail', 'IdentityServiceFacebook', 'IdentityServicePhone',
   * 'IdentityServiceTwitter', 'Image', 'Place', 'ReferenceDescription',
   * 'ReferenceImageURL', 'ReferencePhonetic', 'ReferenceURL'
   * @property {object} [timestampAttribute.searchProperties]
   * @property {boolean} [timestampAttribute.searchProperties.isSearchable]
   * Gets a value indicating whether the attribute supports full text search.
   * @property {boolean} [timestampAttribute.searchProperties.isFilterable]
   * Gets a value indicating whether the attribute supports filtering.
   * @property {boolean} [timestampAttribute.searchProperties.isFacetable] Gets
   * a value indicating whether the attribute can be included as facet results.
   * @property {boolean} [timestampAttribute.searchProperties.isSortable] Gets
   * a value indicating whether the attribute can be included in orderby
   * directives.
   * @property {string}
   * [timestampAttribute.searchProperties.facetSpecification] Gets an optional
   * specification for search faceting used at query time (advanced).
   * this is the part behind the comma in the examples below.
   * bucket facet: "price,interval:10"
   * other type: "listPrice,values:10|25|100|500|1000|2500"
   * value facet: city,count:5
   * @property {object} [incrementalAttribute]
   * @property {string} [incrementalAttribute.name]
   * @property {string} [incrementalAttribute.friendlyName]
   * @property {string} [incrementalAttribute.baseName]
   * @property {string} [incrementalAttribute.dataType] Gets data type for
   * property.
   * @property {string} [incrementalAttribute.semanticType] Gets semantic type
   * for property. Possible values include: 'CalendarDate',
   * 'CalendarDayOfMonth', 'CalendarDayOfWeek', 'CalendarDayOfYear',
   * 'CalendarHalfYear', 'CalendarMonthOfYear', 'CalendarMonth',
   * 'CalendarWeek', 'CalendarYear', 'CalendarFiscalDate',
   * 'CalendarFiscalDayOfMonth', 'CalendarFiscalDayOfWeek',
   * 'CalendarFiscalDayOfYear', 'CalendarFiscalHalfYear',
   * 'CalendarFiscalMonthOfYear', 'CalendarFiscalMonth',
   * 'CalendarFiscalQuarter', 'CalendarFiscalWeekOfMonth',
   * 'CalendarFiscalWeekOfYear', 'CalendarFiscalWeek', 'CalendarFiscalYear',
   * 'Account', 'Channel', 'Contact', 'Customer', 'Language', 'Organization',
   * 'OrganizationUnit', 'Person', 'Product', 'ProductGroup',
   * 'LocationAddress', 'LocationAddressStreet', 'LocationCity',
   * 'LocationContinent', 'LocationCountry', 'LocationCounty',
   * 'LocationLatitude', 'LocationLongitude', 'LocationPoint',
   * 'LocationPostalCode', 'LocationProvince', 'LocationRegion',
   * 'LocationState', 'LocationTimezone', 'MeasurementDateCreation',
   * 'MeasurementDateModify', 'MeasurementStatus', 'MeasurementVersion',
   * 'BarCode', 'Brand', 'IdentityGovernmentID', 'PersonFirstName',
   * 'PersonFullName', 'PersonLastName', 'PersonMiddleName',
   * 'IdentityServiceEmail', 'IdentityServiceFacebook', 'IdentityServicePhone',
   * 'IdentityServiceTwitter', 'Image', 'Place', 'ReferenceDescription',
   * 'ReferenceImageURL', 'ReferencePhonetic', 'ReferenceURL'
   * @property {object} [incrementalAttribute.searchProperties]
   * @property {boolean} [incrementalAttribute.searchProperties.isSearchable]
   * Gets a value indicating whether the attribute supports full text search.
   * @property {boolean} [incrementalAttribute.searchProperties.isFilterable]
   * Gets a value indicating whether the attribute supports filtering.
   * @property {boolean} [incrementalAttribute.searchProperties.isFacetable]
   * Gets a value indicating whether the attribute can be included as facet
   * results.
   * @property {boolean} [incrementalAttribute.searchProperties.isSortable]
   * Gets a value indicating whether the attribute can be included in orderby
   * directives.
   * @property {string}
   * [incrementalAttribute.searchProperties.facetSpecification] Gets an
   * optional specification for search faceting used at query time (advanced).
   * this is the part behind the comma in the examples below.
   * bucket facet: "price,interval:10"
   * other type: "listPrice,values:10|25|100|500|1000|2500"
   * value facet: city,count:5
   * @property {string} [semanticType] Possible values include: 'Account',
   * 'AccountLeads', 'ActivityParty', 'ActivityPointer', 'Annotation',
   * 'Appointment', 'BusinessUnit', 'Campaign', 'CampaignActivity',
   * 'CampaignItem', 'CampaignResponse', 'Characteristic', 'Competitor',
   * 'CompetitorAddress', 'CompetitorProduct', 'Connection', 'ConnectionRole',
   * 'Contact', 'Contract', 'ContractDetail', 'Customer', 'CustomerAddress',
   * 'CustomerRelationship', 'Discount', 'DiscountType', 'Email',
   * 'Entitlement', 'Equipment', 'Fax', 'Feedback', 'Goal', 'Incident',
   * 'Invoice', 'InvoiceDetail', 'KbArticle', 'KnowledgeArticle', 'Lead',
   * 'LeadAddress', 'Letter', 'Metric', 'Opportunity', 'Organization', 'Owner',
   * 'PhoneCall', 'Position', 'PriceLevel', 'Product', 'Quote', 'RatingModel',
   * 'Resource', 'ResourceGroup', 'SalesLiterature', 'SalesOrder', 'Service',
   * 'ServiceAppointment', 'Site', 'SLA', 'SocialActivity', 'SocialProfile',
   * 'SystemUser', 'Task', 'Team', 'Territory', 'UoM'
   * @property {date} [refreshTime] Gets last refresh time for entity.
   * @property {array} [partitions] Gets entity data partitions.
   * @property {array} [incrementalUpsertPartitions] Gets entity incremental
   * upsert data partitions.
   * @property {array} [incrementalDeletePartitions] Gets entity incremental
   * delete data partitions.
   * @property {array} [fullPartitionsParquet] Gets entity data parquet
   * partitions.
   * @property {array} [incrementalUpsertPartitionsParquet] Gets entity
   * incremental upsert data parquet partitions.
   * @property {array} [incrementalDeletePartitionsParquet] Gets entity
   * incremental delete data parquet partitions.
   * @property {array} [annotations] Gets base entity name
   */
  constructor() {
  }

  /**
   * Defines the metadata of IEntityMetadata
   *
   * @returns {object} metadata of IEntityMetadata
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IEntityMetadata',
      type: {
        name: 'Composite',
        className: 'IEntityMetadata',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          qualifiedEntityName: {
            required: false,
            readOnly: true,
            serializedName: 'qualifiedEntityName',
            type: {
              name: 'String'
            }
          },
          dataSourceName: {
            required: false,
            readOnly: true,
            serializedName: 'dataSourceName',
            type: {
              name: 'String'
            }
          },
          dataflowType: {
            required: false,
            serializedName: 'dataflowType',
            type: {
              name: 'String'
            }
          },
          datasourceId: {
            required: false,
            readOnly: true,
            serializedName: 'datasourceId',
            type: {
              name: 'String'
            }
          },
          entityType: {
            required: false,
            serializedName: 'entityType',
            type: {
              name: 'String'
            }
          },
          attributes: {
            required: false,
            readOnly: true,
            serializedName: 'attributes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IAttributeMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'IAttributeMetadata'
                  }
              }
            }
          },
          keys: {
            required: false,
            readOnly: true,
            serializedName: 'keys',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ArrayElementType',
                  type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'IAttributeMetadataElementType',
                        type: {
                          name: 'Composite',
                          className: 'IAttributeMetadata'
                        }
                    }
                  }
              }
            }
          },
          relationships: {
            required: false,
            readOnly: true,
            serializedName: 'relationships',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IRelationshipMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'IRelationshipMetadata'
                  }
              }
            }
          },
          timestampAttribute: {
            required: false,
            serializedName: 'timestampAttribute',
            type: {
              name: 'Composite',
              className: 'IAttributeMetadata'
            }
          },
          incrementalAttribute: {
            required: false,
            serializedName: 'incrementalAttribute',
            type: {
              name: 'Composite',
              className: 'IAttributeMetadata'
            }
          },
          semanticType: {
            required: false,
            serializedName: 'semanticType',
            type: {
              name: 'String'
            }
          },
          refreshTime: {
            required: false,
            readOnly: true,
            serializedName: 'refreshTime',
            type: {
              name: 'DateTime'
            }
          },
          partitions: {
            required: false,
            readOnly: true,
            serializedName: 'partitions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PartitionMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'PartitionMetadata'
                  }
              }
            }
          },
          incrementalUpsertPartitions: {
            required: false,
            readOnly: true,
            serializedName: 'incrementalUpsertPartitions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PartitionMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'PartitionMetadata'
                  }
              }
            }
          },
          incrementalDeletePartitions: {
            required: false,
            readOnly: true,
            serializedName: 'incrementalDeletePartitions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PartitionMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'PartitionMetadata'
                  }
              }
            }
          },
          fullPartitionsParquet: {
            required: false,
            readOnly: true,
            serializedName: 'fullPartitionsParquet',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PartitionMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'PartitionMetadata'
                  }
              }
            }
          },
          incrementalUpsertPartitionsParquet: {
            required: false,
            readOnly: true,
            serializedName: 'incrementalUpsertPartitionsParquet',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PartitionMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'PartitionMetadata'
                  }
              }
            }
          },
          incrementalDeletePartitionsParquet: {
            required: false,
            readOnly: true,
            serializedName: 'incrementalDeletePartitionsParquet',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PartitionMetadataElementType',
                  type: {
                    name: 'Composite',
                    className: 'PartitionMetadata'
                  }
              }
            }
          },
          annotations: {
            required: false,
            readOnly: true,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AnnotationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Annotation'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = IEntityMetadata;
