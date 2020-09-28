// <auto-generated>
// Code generated by Microsoft (R) AutoRest Code Generator.
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Dynamics.CustomerInsights.Api.Models
{
    using Newtonsoft.Json;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    public partial class IEntityMetadata
    {
        /// <summary>
        /// Initializes a new instance of the IEntityMetadata class.
        /// </summary>
        public IEntityMetadata()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the IEntityMetadata class.
        /// </summary>
        /// <param name="name">Gets the name of the entity. eg:
        /// Contact.</param>
        /// <param name="qualifiedEntityName">Gets the unqiue logical name for
        /// the entity
        /// If entity is from a datasource, QualifiedEntityName =
        /// datasourceId_EntityName eg:
        /// d8d3b26a-a8ad-42f7-901e-f7f745003a84_Contact.
        /// If entity is generated by C360, QualifiedEntityName = EntityName
        /// eg: Contact.</param>
        /// <param name="dataSourceName">Gets the datasource name of this
        /// entity, if no data source, return null or emptyString</param>
        /// <param name="dataflowType">Possible values include: 'dynamics365',
        /// 'salesforce', 'conflationSortAndRefine', 'conflationDeduplication',
        /// 'conflationMatchPairs', 'conflationResolveConflicts', 'enriched',
        /// 'kpi', 'powerQuery', 'dataPreparation', 'intelligence',
        /// 'unifiedActivity', 'segmentation', 'ingestion', 'attachCdm',
        /// 'genericPrediction', 'attachCds', 'unknown', 'powerPlatform',
        /// 'datahub', 'insights', 'derivedEntity',
        /// 'powerPlatformSource'</param>
        /// <param name="datasourceId">Gets the original datasourceid of this
        /// entity, if no data source, return null or emptyString</param>
        /// <param name="entityType">Possible values include: 'unspecified',
        /// 'profile', 'conflationMap', 'activity', 'aggregateKpi',
        /// 'profileKpi', 'unifiedActivity', 'segment', 'intelligence',
        /// 'genericPrediction', 'enrichment', 'insights', 'derivedEntity',
        /// 'quarantine'</param>
        /// <param name="attributes">Gets entity attributes.</param>
        /// <param name="keys">Gets the keys of the entity.</param>
        /// <param name="relationships">Gets entity relationships.</param>
        /// <param name="semanticType">Possible values include: 'Account',
        /// 'AccountLeads', 'ActivityParty', 'ActivityPointer', 'Annotation',
        /// 'Appointment', 'BusinessUnit', 'Campaign', 'CampaignActivity',
        /// 'CampaignItem', 'CampaignResponse', 'Characteristic', 'Competitor',
        /// 'CompetitorAddress', 'CompetitorProduct', 'Connection',
        /// 'ConnectionRole', 'Contact', 'Contract', 'ContractDetail',
        /// 'Customer', 'CustomerAddress', 'CustomerRelationship', 'Discount',
        /// 'DiscountType', 'Email', 'Entitlement', 'Equipment', 'Fax',
        /// 'Feedback', 'Goal', 'Incident', 'Invoice', 'InvoiceDetail',
        /// 'KbArticle', 'KnowledgeArticle', 'Lead', 'LeadAddress', 'Letter',
        /// 'Metric', 'Opportunity', 'Organization', 'Owner', 'PhoneCall',
        /// 'Position', 'PriceLevel', 'Product', 'Quote', 'RatingModel',
        /// 'Resource', 'ResourceGroup', 'SalesLiterature', 'SalesOrder',
        /// 'Service', 'ServiceAppointment', 'Site', 'SLA', 'SocialActivity',
        /// 'SocialProfile', 'SystemUser', 'Task', 'Team', 'Territory',
        /// 'UoM'</param>
        /// <param name="refreshTime">Gets last refresh time for
        /// entity.</param>
        /// <param name="partitions">Gets entity data partitions.</param>
        /// <param name="incrementalUpsertPartitions">Gets entity incremental
        /// upsert data partitions.</param>
        /// <param name="incrementalDeletePartitions">Gets entity incremental
        /// delete data partitions.</param>
        /// <param name="fullPartitionsParquet">Gets entity data parquet
        /// partitions.</param>
        /// <param name="incrementalUpsertPartitionsParquet">Gets entity
        /// incremental upsert data parquet partitions.</param>
        /// <param name="incrementalDeletePartitionsParquet">Gets entity
        /// incremental delete data parquet partitions.</param>
        /// <param name="annotations">Gets base entity name</param>
        public IEntityMetadata(string name = default(string), string qualifiedEntityName = default(string), string dataSourceName = default(string), string dataflowType = default(string), System.Guid? datasourceId = default(System.Guid?), string entityType = default(string), IList<IAttributeMetadata> attributes = default(IList<IAttributeMetadata>), IList<IList<IAttributeMetadata>> keys = default(IList<IList<IAttributeMetadata>>), IList<IRelationshipMetadata> relationships = default(IList<IRelationshipMetadata>), IAttributeMetadata timestampAttribute = default(IAttributeMetadata), IAttributeMetadata incrementalAttribute = default(IAttributeMetadata), string semanticType = default(string), System.DateTime? refreshTime = default(System.DateTime?), IList<PartitionMetadata> partitions = default(IList<PartitionMetadata>), IList<PartitionMetadata> incrementalUpsertPartitions = default(IList<PartitionMetadata>), IList<PartitionMetadata> incrementalDeletePartitions = default(IList<PartitionMetadata>), IList<PartitionMetadata> fullPartitionsParquet = default(IList<PartitionMetadata>), IList<PartitionMetadata> incrementalUpsertPartitionsParquet = default(IList<PartitionMetadata>), IList<PartitionMetadata> incrementalDeletePartitionsParquet = default(IList<PartitionMetadata>), IList<Annotation> annotations = default(IList<Annotation>))
        {
            Name = name;
            QualifiedEntityName = qualifiedEntityName;
            DataSourceName = dataSourceName;
            DataflowType = dataflowType;
            DatasourceId = datasourceId;
            EntityType = entityType;
            Attributes = attributes;
            Keys = keys;
            Relationships = relationships;
            TimestampAttribute = timestampAttribute;
            IncrementalAttribute = incrementalAttribute;
            SemanticType = semanticType;
            RefreshTime = refreshTime;
            Partitions = partitions;
            IncrementalUpsertPartitions = incrementalUpsertPartitions;
            IncrementalDeletePartitions = incrementalDeletePartitions;
            FullPartitionsParquet = fullPartitionsParquet;
            IncrementalUpsertPartitionsParquet = incrementalUpsertPartitionsParquet;
            IncrementalDeletePartitionsParquet = incrementalDeletePartitionsParquet;
            Annotations = annotations;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets the name of the entity. eg: Contact.
        /// </summary>
        [JsonProperty(PropertyName = "name")]
        public string Name { get; private set; }

        /// <summary>
        /// Gets the unqiue logical name for the entity
        /// If entity is from a datasource, QualifiedEntityName =
        /// datasourceId_EntityName eg:
        /// d8d3b26a-a8ad-42f7-901e-f7f745003a84_Contact.
        /// If entity is generated by C360, QualifiedEntityName = EntityName
        /// eg: Contact.
        /// </summary>
        [JsonProperty(PropertyName = "qualifiedEntityName")]
        public string QualifiedEntityName { get; private set; }

        /// <summary>
        /// Gets the datasource name of this entity, if no data source, return
        /// null or emptyString
        /// </summary>
        [JsonProperty(PropertyName = "dataSourceName")]
        public string DataSourceName { get; private set; }

        /// <summary>
        /// Gets or sets possible values include: 'dynamics365', 'salesforce',
        /// 'conflationSortAndRefine', 'conflationDeduplication',
        /// 'conflationMatchPairs', 'conflationResolveConflicts', 'enriched',
        /// 'kpi', 'powerQuery', 'dataPreparation', 'intelligence',
        /// 'unifiedActivity', 'segmentation', 'ingestion', 'attachCdm',
        /// 'genericPrediction', 'attachCds', 'unknown', 'powerPlatform',
        /// 'datahub', 'insights', 'derivedEntity', 'powerPlatformSource'
        /// </summary>
        [JsonProperty(PropertyName = "dataflowType")]
        public string DataflowType { get; set; }

        /// <summary>
        /// Gets the original datasourceid of this entity, if no data source,
        /// return null or emptyString
        /// </summary>
        [JsonProperty(PropertyName = "datasourceId")]
        public System.Guid? DatasourceId { get; private set; }

        /// <summary>
        /// Gets or sets possible values include: 'unspecified', 'profile',
        /// 'conflationMap', 'activity', 'aggregateKpi', 'profileKpi',
        /// 'unifiedActivity', 'segment', 'intelligence', 'genericPrediction',
        /// 'enrichment', 'insights', 'derivedEntity', 'quarantine'
        /// </summary>
        [JsonProperty(PropertyName = "entityType")]
        public string EntityType { get; set; }

        /// <summary>
        /// Gets entity attributes.
        /// </summary>
        [JsonProperty(PropertyName = "attributes")]
        public IList<IAttributeMetadata> Attributes { get; private set; }

        /// <summary>
        /// Gets the keys of the entity.
        /// </summary>
        [JsonProperty(PropertyName = "keys")]
        public IList<IList<IAttributeMetadata>> Keys { get; private set; }

        /// <summary>
        /// Gets entity relationships.
        /// </summary>
        [JsonProperty(PropertyName = "relationships")]
        public IList<IRelationshipMetadata> Relationships { get; private set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "timestampAttribute")]
        public IAttributeMetadata TimestampAttribute { get; set; }

        /// <summary>
        /// </summary>
        [JsonProperty(PropertyName = "incrementalAttribute")]
        public IAttributeMetadata IncrementalAttribute { get; set; }

        /// <summary>
        /// Gets or sets possible values include: 'Account', 'AccountLeads',
        /// 'ActivityParty', 'ActivityPointer', 'Annotation', 'Appointment',
        /// 'BusinessUnit', 'Campaign', 'CampaignActivity', 'CampaignItem',
        /// 'CampaignResponse', 'Characteristic', 'Competitor',
        /// 'CompetitorAddress', 'CompetitorProduct', 'Connection',
        /// 'ConnectionRole', 'Contact', 'Contract', 'ContractDetail',
        /// 'Customer', 'CustomerAddress', 'CustomerRelationship', 'Discount',
        /// 'DiscountType', 'Email', 'Entitlement', 'Equipment', 'Fax',
        /// 'Feedback', 'Goal', 'Incident', 'Invoice', 'InvoiceDetail',
        /// 'KbArticle', 'KnowledgeArticle', 'Lead', 'LeadAddress', 'Letter',
        /// 'Metric', 'Opportunity', 'Organization', 'Owner', 'PhoneCall',
        /// 'Position', 'PriceLevel', 'Product', 'Quote', 'RatingModel',
        /// 'Resource', 'ResourceGroup', 'SalesLiterature', 'SalesOrder',
        /// 'Service', 'ServiceAppointment', 'Site', 'SLA', 'SocialActivity',
        /// 'SocialProfile', 'SystemUser', 'Task', 'Team', 'Territory', 'UoM'
        /// </summary>
        [JsonProperty(PropertyName = "semanticType")]
        public string SemanticType { get; set; }

        /// <summary>
        /// Gets last refresh time for entity.
        /// </summary>
        [JsonProperty(PropertyName = "refreshTime")]
        public System.DateTime? RefreshTime { get; private set; }

        /// <summary>
        /// Gets entity data partitions.
        /// </summary>
        [JsonProperty(PropertyName = "partitions")]
        public IList<PartitionMetadata> Partitions { get; private set; }

        /// <summary>
        /// Gets entity incremental upsert data partitions.
        /// </summary>
        [JsonProperty(PropertyName = "incrementalUpsertPartitions")]
        public IList<PartitionMetadata> IncrementalUpsertPartitions { get; private set; }

        /// <summary>
        /// Gets entity incremental delete data partitions.
        /// </summary>
        [JsonProperty(PropertyName = "incrementalDeletePartitions")]
        public IList<PartitionMetadata> IncrementalDeletePartitions { get; private set; }

        /// <summary>
        /// Gets entity data parquet partitions.
        /// </summary>
        [JsonProperty(PropertyName = "fullPartitionsParquet")]
        public IList<PartitionMetadata> FullPartitionsParquet { get; private set; }

        /// <summary>
        /// Gets entity incremental upsert data parquet partitions.
        /// </summary>
        [JsonProperty(PropertyName = "incrementalUpsertPartitionsParquet")]
        public IList<PartitionMetadata> IncrementalUpsertPartitionsParquet { get; private set; }

        /// <summary>
        /// Gets entity incremental delete data parquet partitions.
        /// </summary>
        [JsonProperty(PropertyName = "incrementalDeletePartitionsParquet")]
        public IList<PartitionMetadata> IncrementalDeletePartitionsParquet { get; private set; }

        /// <summary>
        /// Gets base entity name
        /// </summary>
        [JsonProperty(PropertyName = "annotations")]
        public IList<Annotation> Annotations { get; private set; }

    }
}
