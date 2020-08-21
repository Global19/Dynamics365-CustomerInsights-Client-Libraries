/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import java.util.UUID;
import java.util.List;
import org.joda.time.DateTime;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The IEntityMetadata model.
 */
public class IEntityMetadata {
    /**
     * Gets the name of the entity. eg: Contact.
     */
    @JsonProperty(value = "name", access = JsonProperty.Access.WRITE_ONLY)
    private String name;

    /**
     * Gets the unqiue logical name for the entity
     * If entity is from a datasource, QualifiedEntityName =
     * datasourceId_EntityName eg:
     * d8d3b26a-a8ad-42f7-901e-f7f745003a84_Contact.
     * If entity is generated by C360, QualifiedEntityName = EntityName eg:
     * Contact.
     */
    @JsonProperty(value = "qualifiedEntityName", access = JsonProperty.Access.WRITE_ONLY)
    private String qualifiedEntityName;

    /**
     * Gets the datasource name of this entity, if no data source, return null
     * or emptyString.
     */
    @JsonProperty(value = "dataSourceName", access = JsonProperty.Access.WRITE_ONLY)
    private String dataSourceName;

    /**
     * Possible values include: 'dynamics365', 'salesforce',
     * 'conflationSortAndRefine', 'conflationDeduplication',
     * 'conflationMatchPairs', 'conflationResolveConflicts', 'enriched', 'kpi',
     * 'powerQuery', 'dataPreparation', 'intelligence', 'unifiedActivity',
     * 'segmentation', 'ingestion', 'attachCdm', 'genericPrediction',
     * 'attachCds', 'unknown', 'powerPlatform', 'datahub', 'insights',
     * 'derivedEntity'.
     */
    @JsonProperty(value = "dataflowType")
    private String dataflowType;

    /**
     * Gets the original datasourceid of this entity, if no data source, return
     * null or emptyString.
     */
    @JsonProperty(value = "datasourceId", access = JsonProperty.Access.WRITE_ONLY)
    private UUID datasourceId;

    /**
     * Possible values include: 'unspecified', 'profile', 'conflationMap',
     * 'activity', 'aggregateKpi', 'profileKpi', 'unifiedActivity', 'segment',
     * 'intelligence', 'genericPrediction', 'enrichment', 'insights',
     * 'derivedEntity', 'quarantine'.
     */
    @JsonProperty(value = "entityType")
    private String entityType;

    /**
     * Gets entity attributes.
     */
    @JsonProperty(value = "attributes", access = JsonProperty.Access.WRITE_ONLY)
    private List<IAttributeMetadata> attributes;

    /**
     * Gets the keys of the entity.
     */
    @JsonProperty(value = "keys", access = JsonProperty.Access.WRITE_ONLY)
    private List<List<IAttributeMetadata>> keys;

    /**
     * Gets entity relationships.
     */
    @JsonProperty(value = "relationships", access = JsonProperty.Access.WRITE_ONLY)
    private List<IRelationshipMetadata> relationships;

    /**
     * The timestampAttribute property.
     */
    @JsonProperty(value = "timestampAttribute")
    private IAttributeMetadata timestampAttribute;

    /**
     * Possible values include: 'Account', 'AccountLeads', 'ActivityParty',
     * 'ActivityPointer', 'Annotation', 'Appointment', 'BusinessUnit',
     * 'Campaign', 'CampaignActivity', 'CampaignItem', 'CampaignResponse',
     * 'Characteristic', 'Competitor', 'CompetitorAddress',
     * 'CompetitorProduct', 'Connection', 'ConnectionRole', 'Contact',
     * 'Contract', 'ContractDetail', 'Customer', 'CustomerAddress',
     * 'CustomerRelationship', 'Discount', 'DiscountType', 'Email',
     * 'Entitlement', 'Equipment', 'Fax', 'Feedback', 'Goal', 'Incident',
     * 'Invoice', 'InvoiceDetail', 'KbArticle', 'KnowledgeArticle', 'Lead',
     * 'LeadAddress', 'Letter', 'Metric', 'Opportunity', 'Organization',
     * 'Owner', 'PhoneCall', 'Position', 'PriceLevel', 'Product', 'Quote',
     * 'RatingModel', 'Resource', 'ResourceGroup', 'SalesLiterature',
     * 'SalesOrder', 'Service', 'ServiceAppointment', 'Site', 'SLA',
     * 'SocialActivity', 'SocialProfile', 'SystemUser', 'Task', 'Team',
     * 'Territory', 'UoM'.
     */
    @JsonProperty(value = "semanticType")
    private String semanticType;

    /**
     * Gets last refresh time for entity.
     */
    @JsonProperty(value = "refreshTime", access = JsonProperty.Access.WRITE_ONLY)
    private DateTime refreshTime;

    /**
     * Gets entity data partitions.
     */
    @JsonProperty(value = "partitions", access = JsonProperty.Access.WRITE_ONLY)
    private List<PartitionMetadata> partitions;

    /**
     * Gets entity incremental upsert data partitions.
     */
    @JsonProperty(value = "incrementalUpsertPartitions", access = JsonProperty.Access.WRITE_ONLY)
    private List<PartitionMetadata> incrementalUpsertPartitions;

    /**
     * Gets entity incremental delete data partitions.
     */
    @JsonProperty(value = "incrementalDeletePartitions", access = JsonProperty.Access.WRITE_ONLY)
    private List<PartitionMetadata> incrementalDeletePartitions;

    /**
     * Gets base entity name.
     */
    @JsonProperty(value = "annotations", access = JsonProperty.Access.WRITE_ONLY)
    private List<Annotation> annotations;

    /**
     * Get gets the name of the entity. eg: Contact.
     *
     * @return the name value
     */
    public String name() {
        return this.name;
    }

    /**
     * Get gets the unqiue logical name for the entity
     If entity is from a datasource, QualifiedEntityName = datasourceId_EntityName eg: d8d3b26a-a8ad-42f7-901e-f7f745003a84_Contact.
     If entity is generated by C360, QualifiedEntityName = EntityName eg: Contact.
     *
     * @return the qualifiedEntityName value
     */
    public String qualifiedEntityName() {
        return this.qualifiedEntityName;
    }

    /**
     * Get gets the datasource name of this entity, if no data source, return null or emptyString.
     *
     * @return the dataSourceName value
     */
    public String dataSourceName() {
        return this.dataSourceName;
    }

    /**
     * Get possible values include: 'dynamics365', 'salesforce', 'conflationSortAndRefine', 'conflationDeduplication', 'conflationMatchPairs', 'conflationResolveConflicts', 'enriched', 'kpi', 'powerQuery', 'dataPreparation', 'intelligence', 'unifiedActivity', 'segmentation', 'ingestion', 'attachCdm', 'genericPrediction', 'attachCds', 'unknown', 'powerPlatform', 'datahub', 'insights', 'derivedEntity'.
     *
     * @return the dataflowType value
     */
    public String dataflowType() {
        return this.dataflowType;
    }

    /**
     * Set possible values include: 'dynamics365', 'salesforce', 'conflationSortAndRefine', 'conflationDeduplication', 'conflationMatchPairs', 'conflationResolveConflicts', 'enriched', 'kpi', 'powerQuery', 'dataPreparation', 'intelligence', 'unifiedActivity', 'segmentation', 'ingestion', 'attachCdm', 'genericPrediction', 'attachCds', 'unknown', 'powerPlatform', 'datahub', 'insights', 'derivedEntity'.
     *
     * @param dataflowType the dataflowType value to set
     * @return the IEntityMetadata object itself.
     */
    public IEntityMetadata withDataflowType(String dataflowType) {
        this.dataflowType = dataflowType;
        return this;
    }

    /**
     * Get gets the original datasourceid of this entity, if no data source, return null or emptyString.
     *
     * @return the datasourceId value
     */
    public UUID datasourceId() {
        return this.datasourceId;
    }

    /**
     * Get possible values include: 'unspecified', 'profile', 'conflationMap', 'activity', 'aggregateKpi', 'profileKpi', 'unifiedActivity', 'segment', 'intelligence', 'genericPrediction', 'enrichment', 'insights', 'derivedEntity', 'quarantine'.
     *
     * @return the entityType value
     */
    public String entityType() {
        return this.entityType;
    }

    /**
     * Set possible values include: 'unspecified', 'profile', 'conflationMap', 'activity', 'aggregateKpi', 'profileKpi', 'unifiedActivity', 'segment', 'intelligence', 'genericPrediction', 'enrichment', 'insights', 'derivedEntity', 'quarantine'.
     *
     * @param entityType the entityType value to set
     * @return the IEntityMetadata object itself.
     */
    public IEntityMetadata withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }

    /**
     * Get gets entity attributes.
     *
     * @return the attributes value
     */
    public List<IAttributeMetadata> attributes() {
        return this.attributes;
    }

    /**
     * Get gets the keys of the entity.
     *
     * @return the keys value
     */
    public List<List<IAttributeMetadata>> keys() {
        return this.keys;
    }

    /**
     * Get gets entity relationships.
     *
     * @return the relationships value
     */
    public List<IRelationshipMetadata> relationships() {
        return this.relationships;
    }

    /**
     * Get the timestampAttribute value.
     *
     * @return the timestampAttribute value
     */
    public IAttributeMetadata timestampAttribute() {
        return this.timestampAttribute;
    }

    /**
     * Set the timestampAttribute value.
     *
     * @param timestampAttribute the timestampAttribute value to set
     * @return the IEntityMetadata object itself.
     */
    public IEntityMetadata withTimestampAttribute(IAttributeMetadata timestampAttribute) {
        this.timestampAttribute = timestampAttribute;
        return this;
    }

    /**
     * Get possible values include: 'Account', 'AccountLeads', 'ActivityParty', 'ActivityPointer', 'Annotation', 'Appointment', 'BusinessUnit', 'Campaign', 'CampaignActivity', 'CampaignItem', 'CampaignResponse', 'Characteristic', 'Competitor', 'CompetitorAddress', 'CompetitorProduct', 'Connection', 'ConnectionRole', 'Contact', 'Contract', 'ContractDetail', 'Customer', 'CustomerAddress', 'CustomerRelationship', 'Discount', 'DiscountType', 'Email', 'Entitlement', 'Equipment', 'Fax', 'Feedback', 'Goal', 'Incident', 'Invoice', 'InvoiceDetail', 'KbArticle', 'KnowledgeArticle', 'Lead', 'LeadAddress', 'Letter', 'Metric', 'Opportunity', 'Organization', 'Owner', 'PhoneCall', 'Position', 'PriceLevel', 'Product', 'Quote', 'RatingModel', 'Resource', 'ResourceGroup', 'SalesLiterature', 'SalesOrder', 'Service', 'ServiceAppointment', 'Site', 'SLA', 'SocialActivity', 'SocialProfile', 'SystemUser', 'Task', 'Team', 'Territory', 'UoM'.
     *
     * @return the semanticType value
     */
    public String semanticType() {
        return this.semanticType;
    }

    /**
     * Set possible values include: 'Account', 'AccountLeads', 'ActivityParty', 'ActivityPointer', 'Annotation', 'Appointment', 'BusinessUnit', 'Campaign', 'CampaignActivity', 'CampaignItem', 'CampaignResponse', 'Characteristic', 'Competitor', 'CompetitorAddress', 'CompetitorProduct', 'Connection', 'ConnectionRole', 'Contact', 'Contract', 'ContractDetail', 'Customer', 'CustomerAddress', 'CustomerRelationship', 'Discount', 'DiscountType', 'Email', 'Entitlement', 'Equipment', 'Fax', 'Feedback', 'Goal', 'Incident', 'Invoice', 'InvoiceDetail', 'KbArticle', 'KnowledgeArticle', 'Lead', 'LeadAddress', 'Letter', 'Metric', 'Opportunity', 'Organization', 'Owner', 'PhoneCall', 'Position', 'PriceLevel', 'Product', 'Quote', 'RatingModel', 'Resource', 'ResourceGroup', 'SalesLiterature', 'SalesOrder', 'Service', 'ServiceAppointment', 'Site', 'SLA', 'SocialActivity', 'SocialProfile', 'SystemUser', 'Task', 'Team', 'Territory', 'UoM'.
     *
     * @param semanticType the semanticType value to set
     * @return the IEntityMetadata object itself.
     */
    public IEntityMetadata withSemanticType(String semanticType) {
        this.semanticType = semanticType;
        return this;
    }

    /**
     * Get gets last refresh time for entity.
     *
     * @return the refreshTime value
     */
    public DateTime refreshTime() {
        return this.refreshTime;
    }

    /**
     * Get gets entity data partitions.
     *
     * @return the partitions value
     */
    public List<PartitionMetadata> partitions() {
        return this.partitions;
    }

    /**
     * Get gets entity incremental upsert data partitions.
     *
     * @return the incrementalUpsertPartitions value
     */
    public List<PartitionMetadata> incrementalUpsertPartitions() {
        return this.incrementalUpsertPartitions;
    }

    /**
     * Get gets entity incremental delete data partitions.
     *
     * @return the incrementalDeletePartitions value
     */
    public List<PartitionMetadata> incrementalDeletePartitions() {
        return this.incrementalDeletePartitions;
    }

    /**
     * Get gets base entity name.
     *
     * @return the annotations value
     */
    public List<Annotation> annotations() {
        return this.annotations;
    }

}