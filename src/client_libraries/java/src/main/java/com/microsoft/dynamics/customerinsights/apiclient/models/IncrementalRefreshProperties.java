/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a Incremental Refresh Property.
 */
public class IncrementalRefreshProperties {
    /**
     * Gets the name of the entity.
     */
    @JsonProperty(value = "entityName")
    private String entityName;

    /**
     * Gets the column to detect changes.
     */
    @JsonProperty(value = "detectChangesAttributeName")
    private String detectChangesAttributeName;

    /**
     * Gets the column to get incremental data.
     */
    @JsonProperty(value = "filterByAttributeName")
    private String filterByAttributeName;

    /**
     * Gets the granularity of the incremental refresh.
     */
    @JsonProperty(value = "incrementalGranularity")
    private String incrementalGranularity;

    /**
     * Gets the incremental period.
     */
    @JsonProperty(value = "incrementalPeriods")
    private Integer incrementalPeriods;

    /**
     * Gets a value indicating whether to refresh completed periods or not.
     */
    @JsonProperty(value = "refreshCompletePeriods")
    private Boolean refreshCompletePeriods;

    /**
     * Gets the off set period.
     */
    @JsonProperty(value = "incrementalPeriodsOffset")
    private Integer incrementalPeriodsOffset;

    /**
     * Gets the primary key of the entity.
     */
    @JsonProperty(value = "primaryKeyAttributeName")
    private String primaryKeyAttributeName;

    /**
     * Gets the rolling window granularity.
     */
    @JsonProperty(value = "rollingWindowGranularity")
    private String rollingWindowGranularity;

    /**
     * Gets the Rolling window period.
     */
    @JsonProperty(value = "rollingWindowPeriods")
    private Integer rollingWindowPeriods;

    /**
     * Get gets the name of the entity.
     *
     * @return the entityName value
     */
    public String entityName() {
        return this.entityName;
    }

    /**
     * Set gets the name of the entity.
     *
     * @param entityName the entityName value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withEntityName(String entityName) {
        this.entityName = entityName;
        return this;
    }

    /**
     * Get gets the column to detect changes.
     *
     * @return the detectChangesAttributeName value
     */
    public String detectChangesAttributeName() {
        return this.detectChangesAttributeName;
    }

    /**
     * Set gets the column to detect changes.
     *
     * @param detectChangesAttributeName the detectChangesAttributeName value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withDetectChangesAttributeName(String detectChangesAttributeName) {
        this.detectChangesAttributeName = detectChangesAttributeName;
        return this;
    }

    /**
     * Get gets the column to get incremental data.
     *
     * @return the filterByAttributeName value
     */
    public String filterByAttributeName() {
        return this.filterByAttributeName;
    }

    /**
     * Set gets the column to get incremental data.
     *
     * @param filterByAttributeName the filterByAttributeName value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withFilterByAttributeName(String filterByAttributeName) {
        this.filterByAttributeName = filterByAttributeName;
        return this;
    }

    /**
     * Get gets the granularity of the incremental refresh.
     *
     * @return the incrementalGranularity value
     */
    public String incrementalGranularity() {
        return this.incrementalGranularity;
    }

    /**
     * Set gets the granularity of the incremental refresh.
     *
     * @param incrementalGranularity the incrementalGranularity value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withIncrementalGranularity(String incrementalGranularity) {
        this.incrementalGranularity = incrementalGranularity;
        return this;
    }

    /**
     * Get gets the incremental period.
     *
     * @return the incrementalPeriods value
     */
    public Integer incrementalPeriods() {
        return this.incrementalPeriods;
    }

    /**
     * Set gets the incremental period.
     *
     * @param incrementalPeriods the incrementalPeriods value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withIncrementalPeriods(Integer incrementalPeriods) {
        this.incrementalPeriods = incrementalPeriods;
        return this;
    }

    /**
     * Get gets a value indicating whether to refresh completed periods or not.
     *
     * @return the refreshCompletePeriods value
     */
    public Boolean refreshCompletePeriods() {
        return this.refreshCompletePeriods;
    }

    /**
     * Set gets a value indicating whether to refresh completed periods or not.
     *
     * @param refreshCompletePeriods the refreshCompletePeriods value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withRefreshCompletePeriods(Boolean refreshCompletePeriods) {
        this.refreshCompletePeriods = refreshCompletePeriods;
        return this;
    }

    /**
     * Get gets the off set period.
     *
     * @return the incrementalPeriodsOffset value
     */
    public Integer incrementalPeriodsOffset() {
        return this.incrementalPeriodsOffset;
    }

    /**
     * Set gets the off set period.
     *
     * @param incrementalPeriodsOffset the incrementalPeriodsOffset value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withIncrementalPeriodsOffset(Integer incrementalPeriodsOffset) {
        this.incrementalPeriodsOffset = incrementalPeriodsOffset;
        return this;
    }

    /**
     * Get gets the primary key of the entity.
     *
     * @return the primaryKeyAttributeName value
     */
    public String primaryKeyAttributeName() {
        return this.primaryKeyAttributeName;
    }

    /**
     * Set gets the primary key of the entity.
     *
     * @param primaryKeyAttributeName the primaryKeyAttributeName value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withPrimaryKeyAttributeName(String primaryKeyAttributeName) {
        this.primaryKeyAttributeName = primaryKeyAttributeName;
        return this;
    }

    /**
     * Get gets the rolling window granularity.
     *
     * @return the rollingWindowGranularity value
     */
    public String rollingWindowGranularity() {
        return this.rollingWindowGranularity;
    }

    /**
     * Set gets the rolling window granularity.
     *
     * @param rollingWindowGranularity the rollingWindowGranularity value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withRollingWindowGranularity(String rollingWindowGranularity) {
        this.rollingWindowGranularity = rollingWindowGranularity;
        return this;
    }

    /**
     * Get gets the Rolling window period.
     *
     * @return the rollingWindowPeriods value
     */
    public Integer rollingWindowPeriods() {
        return this.rollingWindowPeriods;
    }

    /**
     * Set gets the Rolling window period.
     *
     * @param rollingWindowPeriods the rollingWindowPeriods value to set
     * @return the IncrementalRefreshProperties object itself.
     */
    public IncrementalRefreshProperties withRollingWindowPeriods(Integer rollingWindowPeriods) {
        this.rollingWindowPeriods = rollingWindowPeriods;
        return this;
    }

}
