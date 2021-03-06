/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The SourceLocation model.
 */
public class SourceLocation {
    /**
     * The line property.
     */
    @JsonProperty(value = "line")
    private Integer line;

    /**
     * The column property.
     */
    @JsonProperty(value = "column")
    private Integer column;

    /**
     * Get the line value.
     *
     * @return the line value
     */
    public Integer line() {
        return this.line;
    }

    /**
     * Set the line value.
     *
     * @param line the line value to set
     * @return the SourceLocation object itself.
     */
    public SourceLocation withLine(Integer line) {
        this.line = line;
        return this;
    }

    /**
     * Get the column value.
     *
     * @return the column value
     */
    public Integer column() {
        return this.column;
    }

    /**
     * Set the column value.
     *
     * @param column the column value to set
     * @return the SourceLocation object itself.
     */
    public SourceLocation withColumn(Integer column) {
        this.column = column;
        return this;
    }

}
