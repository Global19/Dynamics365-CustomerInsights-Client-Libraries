/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import org.joda.time.DateTime;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents measure evaluation stats.
 */
public class EvaluationStats {
    /**
     * Gets the last successful evaluation.
     */
    @JsonProperty(value = "lastSuccessful")
    private DateTime lastSuccessful;

    /**
     * Gets the number of consecutive failures.
     */
    @JsonProperty(value = "consecutiveFailureCount")
    private Integer consecutiveFailureCount;

    /**
     * Get gets the last successful evaluation.
     *
     * @return the lastSuccessful value
     */
    public DateTime lastSuccessful() {
        return this.lastSuccessful;
    }

    /**
     * Set gets the last successful evaluation.
     *
     * @param lastSuccessful the lastSuccessful value to set
     * @return the EvaluationStats object itself.
     */
    public EvaluationStats withLastSuccessful(DateTime lastSuccessful) {
        this.lastSuccessful = lastSuccessful;
        return this;
    }

    /**
     * Get gets the number of consecutive failures.
     *
     * @return the consecutiveFailureCount value
     */
    public Integer consecutiveFailureCount() {
        return this.consecutiveFailureCount;
    }

    /**
     * Set gets the number of consecutive failures.
     *
     * @param consecutiveFailureCount the consecutiveFailureCount value to set
     * @return the EvaluationStats object itself.
     */
    public EvaluationStats withConsecutiveFailureCount(Integer consecutiveFailureCount) {
        this.consecutiveFailureCount = consecutiveFailureCount;
        return this;
    }

}