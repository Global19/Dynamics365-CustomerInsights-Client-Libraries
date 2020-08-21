/**
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.dynamics.customerinsights.apiclient.models;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents the base linked entity.
 */
public class MeasureLinkedEntity {
    /**
     * Possible values include: 'base', 'join'.
     */
    @JsonProperty(value = "kind")
    private String kind;

    /**
     * Gets the name of the entity.
     */
    @JsonProperty(value = "entity", access = JsonProperty.Access.WRITE_ONLY)
    private String entity;

    /**
     * Gets the alias of the entity.
     */
    @JsonProperty(value = "alias", access = JsonProperty.Access.WRITE_ONLY)
    private String alias;

    /**
     * Get possible values include: 'base', 'join'.
     *
     * @return the kind value
     */
    public String kind() {
        return this.kind;
    }

    /**
     * Set possible values include: 'base', 'join'.
     *
     * @param kind the kind value to set
     * @return the MeasureLinkedEntity object itself.
     */
    public MeasureLinkedEntity withKind(String kind) {
        this.kind = kind;
        return this;
    }

    /**
     * Get gets the name of the entity.
     *
     * @return the entity value
     */
    public String entity() {
        return this.entity;
    }

    /**
     * Get gets the alias of the entity.
     *
     * @return the alias value
     */
    public String alias() {
        return this.alias;
    }

}